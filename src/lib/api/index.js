import axios from 'axios';

let accessToken = null;
let tokenChangeCallback = null;

export const setAccessToken = (token) => {
    accessToken = token;
    if (tokenChangeCallback) {
        tokenChangeCallback(token);
    }
};

export const getAccessToken = () => accessToken;

export const onTokenChange = (callback) => {
    tokenChangeCallback = callback;
};

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true // MUY IMPORTANTE: Permite que se envíen y reciban las cookies
});

// 1. Agregar el access token a todas las peticiones
api.interceptors.request.use((config) => {
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}, (error) => Promise.reject(error));

// 2. Interceptar errores para hacer el refresh
api.interceptors.response.use(
    (response) => {
        return response; // Todo bien
    },
    async (error) => {
        const originalRequest = error.config;

        // Si el servidor nos devuelve 401 intentamos hacer refresh.
        // Nos aseguramos de no hacer un bucle infinito validando !originalRequest._retry
        // y de no interceptar las peticiones de refresh o login.
        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry &&
            originalRequest.url &&
            !originalRequest.url.includes('/client/refresh') &&
            !originalRequest.url.includes('/client/login')
        ) {
            originalRequest._retry = true;

            try {
                // Hacemos un request POST al nuevo endpoint de refresh
                // llama a '/client/refresh'

                const response = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}/client/refresh`,
                    {},
                    { withCredentials: true } // MUY IMPORTANTE enviar cookies
                );

                // Guardamos el nuevo access token
                const newAccessToken = response.data.token;
                setAccessToken(newAccessToken);

                // Actualizamos el header de la petición que falló y la reintentamos
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return api(originalRequest);

            } catch (refreshError) {
                // Si falla el refresh token, la sesión expiró de verdad o es inválido.
                // Aca rediriges al usuario al login
                setAccessToken(null);
                if (typeof window !== 'undefined') {
                    localStorage.removeItem("client");
                    window.location.href = '/iniciar-sesion';
                }
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default api;
