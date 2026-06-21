import api from '@/lib/api'
import { DateTime } from "luxon"
import { toast } from "sonner"

export async function getAvailableUsers(selectedServices, selectedTime, selectedDate, business, token, setAvailableUsers) {
    const headers = {
    Authorization: token,
    }
    const usersData = {
        services: selectedServices.map(service => ({ serviceId: service.serviceId })),
        startTime: selectedTime,
        date: selectedDate.toISOString().split('T')[0],
        businessId: business?.id,
        timezone: DateTime.local().zoneName
    }

    try {
        const { data } = await api.post(`/appointment/availability/users`, usersData, {
                headers,
            }
        )
        const usersByService = data.reduce((acc, item) => {
            if (item?.serviceId) {
                acc[item.serviceId] = item.availableUsers ?? []
            }
            return acc
        }, {})
        setAvailableUsers?.(usersByService)
        return usersByService
    } catch (error) {
    console.error(error)
    toast.error(error?.response?.data?.msg || ("Error al cargar los usuarios disponibles"))
    return {}
    }
}
