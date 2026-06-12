"use client"
import { useState, useEffect } from "react"
import { useBusiness } from "@/hooks/useBusiness"
import { getAvailableSlots } from "@/lib/getAvailableSolts"

import { useClient } from "@/hooks/useClient"

export default function Schedule({ date, selectedServices = [], hour, setHour, userId, excludeAppointmentId = null }) {
  const { business } = useBusiness()
  const [slots, setSlots] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { token } = useClient()
  
  useEffect(() => {
    if (!date || selectedServices.length === 0 || !token) return
    setIsLoading(true)
    async function fetchSlots() {
      const availableSlots = await getAvailableSlots({ date, selectedServices, business, token, userId, excludeAppointmentId })
      setSlots(availableSlots ?? [])
      setIsLoading(false)
    }
    fetchSlots()
  }, [selectedServices, date, userId, token, business, excludeAppointmentId])

  if (!date || selectedServices.length === 0) {
    return <div className="text-sm text-slate-500">Selecciona al menos un tratamiento y una fecha.</div>;
  }

  if (!isLoading && slots.length === 0) {
    return <div className="text-sm text-slate-500">No hay horarios disponibles para esta fecha.</div>;
  }

  return (
    <div>
      {slots.map(time => (
          <button
            key={time}
            onClick={() => setHour(time)}
            type="button"
            className={`m-2 p-2 border rounded font-bold cursor-pointer
              ${hour === time ? "bg-primary text-white" : "hover:bg-primary/40"}`}
          >
            {time}
          </button>
        ))
      }
    </div>
  )
}
