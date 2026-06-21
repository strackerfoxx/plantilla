"use client"
import { createContext, useState, useEffect, useRef } from "react"
import api, { setAccessToken, onTokenChange } from "@/lib/api";

const ClientContext = createContext()

const ClientProvider = ({children}) => {
    const [client, setClient] = useState({})
    const [token, setToken] = useState(null)
    const [isTokenLoaded, setIsTokenLoaded] = useState(false)
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [appointments, setAppointments] = useState([])
    const [isLogin, setIsLogin] = useState(false)
    const initRef = useRef(false);

    useEffect(() => {
        onTokenChange((newToken) => {
            setToken(newToken ? `Bearer ${newToken}` : null);
        });

        const storedClient = localStorage.getItem("client");
        let parsedClient = null;
        if (storedClient) {
            try {
                parsedClient = JSON.parse(storedClient);
            } catch (error) {
                console.error("Error parsing stored client", error);
            }
        }

        const initializeAuth = async () => {
            if (parsedClient) {
                try {
                    const response = await api.post('/client/refresh');
                    const newAccessToken = response.data.token;
                    setAccessToken(newAccessToken);
                    setClient(parsedClient);
                } catch (error) {
                    localStorage.removeItem("client");
                    setClient({});
                    setAccessToken(null);
                }
            } else {
                setClient({});
                setAccessToken(null);
            }
            setIsTokenLoaded(true);
        };

        if (!isTokenLoaded && !initRef.current) {
            initRef.current = true;
            initializeAuth();
        }
    }, [isTokenLoaded])

    function login(clientData, newToken) {
        setClient(clientData);
        setAccessToken(newToken);
        localStorage.setItem("client", JSON.stringify(clientData));
    }
    
    async function logout() {
        try {
            await api.post('/client/logout');
        } catch (e) {
            console.error(e);
        } finally {
            localStorage.removeItem("client");
            setAccessToken(null);
            setClient({});
            window.location.href = '/iniciar-sesion';
        }
    }

    return (
        <ClientContext.Provider value={{ 
            client, 
            setClient, 
            token, 
            setToken, 
            isTokenLoaded,
            appointments, 
            setAppointments, 
            login, 
            logout, 
            confirmationResult, 
            setConfirmationResult,
            isLogin, 
            setIsLogin
        }}>
            {children}
        </ClientContext.Provider>
    )
}

export default ClientContext
export { ClientProvider }