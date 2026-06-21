import api from '@/lib/api'
import { DateTime } from "luxon"

export async function getAvailableSlots({ date, selectedServices = [], business, token, userId, excludeAppointmentId = undefined }) {
  if (!date || selectedServices.length === 0 || !business || !token) return []
    const headers = {
        "Authorization": token
    }

    const services = selectedServices.map(service => {
      if (service.userId) return service
      if (userId) return { ...service, userId }
      return service
    })

    const data = {
      businessId: business.id,
      services,
      date: DateTime.fromJSDate(new Date(date)).toISODate(),
      excludeAppointmentId,
      currentTime: DateTime.now().toISO(),
      timezone: DateTime.local().zoneName
    }

    try {
      const response = await api.post(`/appointment/availability/slots`, data, { headers })
      return response.data ?? []
    } catch (error) {
      console.error("Error al obtener los slots disponibles:", error)
      return []
    }
}
