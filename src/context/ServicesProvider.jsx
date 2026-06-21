"use client"
import api from '@/lib/api'
import { createContext, useState, useEffect } from "react"
const ServicesContext = createContext()

const ServicesProvider = ({ children }) => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)

    const getServices = async () => {
        setLoading(true)
        try {
            const { data } = await api(`/service/get-services-client?businessId=${process.env.NEXT_PUBLIC_BUSINESS_ID}`)
            setServices(data?.services || [])
        } catch (error) {
            console.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getServices()
    }, [])

    return (
        <ServicesContext.Provider value={{ services, setServices, getServices, loading }}>
            {children}
        </ServicesContext.Provider>
    )
}

export default ServicesContext
export { ServicesProvider }