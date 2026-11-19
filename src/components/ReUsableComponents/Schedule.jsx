"use client";

import { useState, useEffect } from "react";
import { useBusiness } from "@/hooks/useBusiness";
import { getAvailableSlots } from "@/lib/getAvailableSolts";
import { useClient } from "@/hooks/useClient";

export default function Schedule({ date, selectedServices = [], hour, setHour, userId, excludeAppointmentId = null }) {
  const { business } = useBusiness();
  const [slots, setSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useClient();

  useEffect(() => {
    if (!date || selectedServices.length === 0 || !token) {
      setSlots([]);
      return;
    }

    let cancelled = false;
    setIsLoading(true);

    async function fetchSlots() {
      try {
        const availableSlots = await getAvailableSlots({
          date,
          selectedServices,
          business,
          token,
          userId,
          excludeAppointmentId,
        });
        if (!cancelled) setSlots(availableSlots ?? []);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    fetchSlots();
    return () => { cancelled = true; };
  }, [selectedServices, date, userId, token, business, excludeAppointmentId]);

  if (!date || selectedServices.length === 0) {
    return <div className="text-sm text-muted-foreground">Selecciona al menos un servicio y una fecha.</div>;
  }

  if (isLoading) {
    return <div className="text-sm text-muted-foreground">Buscando horarios disponibles...</div>;
  }

  if (slots.length === 0) {
    return <div className="text-sm text-muted-foreground">No hay horarios disponibles para esta fecha.</div>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {slots.map((time) => (
        <button
          key={time}
          onClick={() => setHour(time)}
          type="button"
          aria-pressed={hour === time}
          className={`rounded-lg border px-3 py-2 text-sm font-bold transition-colors ${hour === time ? "border-primary bg-primary text-primary-foreground" : "border-border bg-white text-foreground hover:border-primary"}`}
        >
          {time}
        </button>
      ))}
    </div>
  );
}
