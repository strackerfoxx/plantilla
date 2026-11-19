"use client";

import { CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const statusLabel = {
  SCHEDULED: "Agendada",
  CONFIRMED: "Confirmada",
  COMPLETED: "Completada",
  CANCELLED: "Cancelada",
  CANCELED: "Cancelada",
};

const statusStyles = {
  SCHEDULED: "bg-amber-100 text-amber-800",
  CONFIRMED: "bg-emerald-100 text-emerald-800",
  COMPLETED: "bg-sky-100 text-sky-800",
  CANCELLED: "bg-red-100 text-red-800",
  CANCELED: "bg-red-100 text-red-800",
};

export default function AppointmentComponent({ appointments = [] }) {
  const router = useRouter();

  return (
    <>
      {appointments.map((appointment) => (
        <article key={appointment.id} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
          <div className="mb-4 flex flex-col justify-between gap-4 border-b border-slate-100 pb-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-primary p-3 text-primary-foreground">
                <CalendarIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">
                  {new Date(appointment.date?.split("T")[0] + "T00:00:00").toLocaleDateString("es-MX", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <div className="mt-1 flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{appointment.startTime} - {appointment.endTime}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3 sm:flex-row sm:items-center">
              <span className={cn("inline-flex rounded-full px-3 py-1 text-sm font-medium", statusStyles[appointment.status] ?? "bg-muted text-muted-foreground")}>
                {statusLabel[appointment.status] ?? "Estado pendiente"}
              </span>
              <button
                onClick={() => router.push(`/agendar?id=${appointment.id}`)}
                className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
              >
                Ver o editar
              </button>
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-medium text-foreground">Servicios reservados:</h4>
            <ul className="space-y-2">
              {appointment.services?.map((svc) => (
                <li key={svc.id} className="flex items-center justify-between gap-4 text-muted-foreground">
                  <span>{svc.service?.name}</span>
                  <span className="font-medium text-foreground">${svc.service?.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="font-semibold text-foreground">Total</span>
              <span className="text-lg font-bold text-primary">${appointment.amount}</span>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
