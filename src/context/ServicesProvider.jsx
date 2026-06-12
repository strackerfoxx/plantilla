"use client"
import axios from "axios"
import { createContext, useState, useEffect } from "react"
const ServicesContext = createContext()

const ServicesProvider = ({ children }) => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)

    const getServices = async () => {
        setLoading(true)
        try {
            const { data } = await axios(`${process.env.NEXT_PUBLIC_API_URL}/service/get-services-client?businessId=${process.env.NEXT_PUBLIC_BUSINESS_ID}`)
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