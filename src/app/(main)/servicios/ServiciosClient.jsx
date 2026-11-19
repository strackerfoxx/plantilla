"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import ServiceCard from "@/components/ReUsableComponents/ServiceCard";
import { useServices } from "@/hooks/useServices";
import { Skeleton } from "@/components/ui/skeleton";

export function ServiciosClient() {
  const { services, loading } = useServices();

  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Nuestros servicios"
          title="Cuidado para cada mascota"
          description="Consulta los servicios disponibles y elige el horario que mejor se adapte a ti y a tu compañero."
          centered
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                <div className="grow p-6">
                  <Skeleton className="mb-2 h-8 w-3/4" />
                  <Skeleton className="mb-2 h-4 w-full" />
                  <Skeleton className="mb-6 h-4 w-5/6" />
                  <div className="mb-6 flex flex-col gap-3">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-5 w-40" />
                  </div>
                </div>
                <div className="mt-auto px-6 pb-6">
                  <Skeleton className="h-12 w-full rounded-xl" />
                </div>
              </div>
            ))
          ) : services.length > 0 ? (
            services.map((service) => <ServiceCard key={service.id} service={service} />)
          ) : (
            <p className="col-span-full rounded-2xl bg-white p-8 text-center text-muted-foreground">
              Por el momento no hay servicios disponibles. Vuelve a consultar más tarde.
            </p>
          )}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link href="/agendar">Agendar un servicio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
