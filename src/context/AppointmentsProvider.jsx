"use client"
import axios from "axios"
import { createContext, useState, useEffect } from "react"
import { useClient } from "@/hooks/useClient";
const AppointmentsContext = createContext()

const AppointmentsProvider = ({ children }) => {
    const [appointments, setAppointments] = useState([])
    const [loading, setLoading] = useState(true)
    const { client, token, isTokenLoaded } = useClient();

    const refetchAppointments = async () => {
        if (!isTokenLoaded) return

        if (client?.businessClient && token) {
            setLoading(true)
            try {
                const { data } = await axios(`${process.env.NEXT_PUBLIC_API_URL}/appointment/get-appointments-by-client-id?clientId=${client?.businessClient}&page=1&limit=20`, {
                    headers: {
                        Authorization: token
                    }
                })
                setAppointments(data?.appointments || [])
            } catch (error) {
                console.error(error.message)
            } finally {
                setLoading(false)
            }
        } else {
            setAppointments([])
            setLoading(false)
        }
    }

    useEffect(() => {
        refetchAppointments()
    }, [client?.businessClient, token, isTokenLoaded])

    return (
        <AppointmentsContext.Provider value={{ appointments, setAppointments, refetchAppointments, loading }}>
            {children}
        </AppointmentsContext.Provider>
    )
}

export default AppointmentsContext
export { AppointmentsProvider }