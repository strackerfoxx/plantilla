import axios from 'axios';

let accessToken = null;
let tokenChangeCallback = null;
let isRefreshing = false;
let refreshSubscribers = [];

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

const onRefreshed = (error, token) => {
    refreshSubscribers.forEach(cb => cb(error, token));
};

const subscribeTokenRefresh = (cb) => {
    refreshSubscribers.push(cb);
};

const api = axios.create({
    baseURL: '/api',
    withCredentials: true // Permite que se envíen y reciban las cookies
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
        // Evitar bucles infinitos validando !originalRequest._retry
        // No interceptar /client/refresh o /client/login
        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry &&
            originalRequest.url &&
            !originalRequest.url.includes('/client/refresh') &&
            !originalRequest.url.includes('/client/login')
        ) {
            if (isRefreshing) {
                // Si ya estamos refrescando, ponemos la petición en cola
                return new Promise((resolve, reject) => {
                    subscribeTokenRefresh((err, token) => {
                        if (err) {
                            reject(err);
                        } else {
                            // Cuando el token se refresque, reintentamos con el nuevo token
                            originalRequest.headers.Authorization = `Bearer ${token}`;
                            resolve(api(originalRequest));
                        }
                    });
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                // Hacemos un request POST al nuevo endpoint de refresh
                const response = await axios.post(
                    `/api/client/refresh`,
                    {},
                    { withCredentials: true } // Enviar cookies
                );

                const newAccessToken = response.data.token;
                setAccessToken(newAccessToken);

                // Reintentar la petición original con el nuevo token
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                // Notificamos a los pendientes
                onRefreshed(null, newAccessToken);
                refreshSubscribers = []; // Limpiamos la cola

                return api(originalRequest);

            } catch (refreshError) {
                // Si falla el refresh token, expiró o es inválido.
                onRefreshed(refreshError, null);
                refreshSubscribers = []; // Limpiamos la cola
                setAccessToken(null);
                if (typeof window !== 'undefined') {
                    localStorage.removeItem("client");
                    window.location.href = '/iniciar-sesion';
                }
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default api;
