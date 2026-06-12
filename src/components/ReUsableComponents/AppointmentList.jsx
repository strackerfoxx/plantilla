"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/section-heading';
import AppointmentComponent from './AppointmentComponent';
import { CalendarIcon } from "lucide-react";
import { useEffect } from 'react';

import { useAppointments } from '@/hooks/useAppointments';
import { Skeleton } from '@/components/ui/skeleton';

export default function AppointmentList() {
  const { appointments, refetchAppointments, loading } = useAppointments();

  useEffect(() => {
    refetchAppointments();
  }, []);



  return (
    <section className="section-padding">
      <div className="container max-w-4xl">
        <SectionHeading eyebrow="Tu agenda" title="Citas agendadas" description={loading ? "Cargando tus citas..." : "Vista estática de ejemplo para que tus clientas consulten sus próximas reservas después de verificar su teléfono."} />

        <div className="mt-10 space-y-5">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border shadow-sm">
                <div className="flex justify-between items-start mb-4">
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
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
          <CalendarIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-900">No tienes citas</h3>
          <p className="text-slate-500 mt-2">Aún no has agendado ninguna cita con nosotros.</p>
          <button
          onClick={() => router.push('/agendar')}
          className="mt-6 px-6 py-2 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
        >
          Agendar ahora
        </button>
      </div>
          ) : (
            <AppointmentComponent appointments={appointments} />
          )}
        </div>
        {!loading && (
          <div className="mt-10 rounded-[2rem] border bg-white p-6 text-center">
            <p className="font-bold">¿Quieres otro servicio?</p>
            <p className="mt-2 text-sm text-muted-foreground">Agenda una nueva visita para uñas, corte, peinado o microblading.</p>
            <Button asChild className="mt-5"><Link href="/agendar">Nueva cita</Link></Button>
          </div>
        )}
      </div>
    </section>
  )
}
