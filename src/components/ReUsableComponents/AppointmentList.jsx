"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import AppointmentComponent from "./AppointmentComponent";
import { CalendarIcon } from "lucide-react";
import { useAppointments } from "@/hooks/useAppointments";
import { Skeleton } from "@/components/ui/skeleton";

export default function AppointmentList() {
  const { appointments, loading } = useAppointments();
  const router = useRouter();


  return (
    <section className="section-padding">
      <div className="container max-w-4xl">
        <SectionHeading
          eyebrow="Tu agenda"
          title="Tus reservas"
          description={loading ? "Cargando tus reservas..." : "Consulta tus próximas citas y revisa los servicios que has reservado."}
        />

        <div className="mt-10 space-y-5">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-start justify-between">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-6 w-24 rounded-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-4 w-56" />
                </div>
              </div>
            ))
          ) : appointments.length === 0 ? (
            <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm">
              <CalendarIcon className="mx-auto mb-4 h-12 w-12 text-slate-300" />
              <h3 className="text-lg font-medium text-slate-900">Todavía no tienes reservas</h3>
              <p className="mt-2 text-slate-500">Agenda un servicio de cuidado para tu mascota y aparecerá aquí.</p>
              <Button asChild className="mt-6">
                <Link href="/agendar">Agendar un servicio</Link>
              </Button>
            </div>
          ) : (
            <AppointmentComponent appointments={appointments} />
          )}
        </div>

        {!loading && appointments.length > 0 && (
          <div className="mt-10 rounded-[2rem] border bg-white p-6 text-center">
            <p className="font-bold">¿Necesitas otra sesión?</p>
            <p className="mt-2 text-sm text-muted-foreground">Elige otro servicio o encuentra un nuevo horario para tu mascota.</p>
            <Button asChild className="mt-5">
              <Link href="/agendar">Nueva reserva</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
