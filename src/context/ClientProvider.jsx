"use client"
import { createContext, useState, useEffect } from "react"
import api from "@/lib/api";

const ClientContext = createContext()

const ClientProvider = ({children}) => {
    const [client, setClient] = useState({})
    const [token, setToken] = useState(null)
    const [isTokenLoaded, setIsTokenLoaded] = useState(false)
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [appointments, setAppointments] = useState([])
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if (isTokenLoaded) return

        const storedToken = JSON.parse(localStorage.getItem("token"));
        const storedClient = localStorage.getItem("client");

        let parsedClient = null;
        if (storedClient) {
            try {
                parsedClient = JSON.parse(storedClient);
            } catch (error) {
                console.error("Error parsing stored client", error);
            }
        }

        setToken(storedToken ? `Bearer ${storedToken}` : null);
        setClient(parsedClient || {})
        setIsTokenLoaded(true)
    }, [isTokenLoaded])

    function login(clientData, token) {
        setClient(clientData);
        setToken(`Bearer ${token}`);
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("client", JSON.stringify(clientData));
    }
    
    async function logout() {
        try {
            await api.post('/client/logout');
        } catch (e) {
            console.error(e);
        } finally {
            localStorage.removeItem("token");
            localStorage.removeItem("client");
            setToken(null);
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