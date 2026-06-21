"use client"
import api from '@/lib/api'
import { createContext, useState, useEffect } from "react"
const BusinessContext = createContext()

const BusinessProvider = ({ children }) => {
    const [business, setBusiness] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getBusiness = async () => {
            setLoading(true)
            try {
                const { data } = await api(`/business/get-business-by-id-client?businessId=${process.env.NEXT_PUBLIC_BUSINESS_ID}`)
                setBusiness(data)
            } catch (error) {
                console.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        getBusiness()
    }, [])

    return (
        <BusinessContext.Provider value={{ business, setBusiness, loading }}>
            {children}
        </BusinessContext.Provider>
    )
}

export default BusinessContext
export { BusinessProvider }