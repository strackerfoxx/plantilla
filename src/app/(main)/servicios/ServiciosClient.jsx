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
          eyebrow="Menu de servicios"
          title="Servicios para cada ocasion"
          description="Precios orientativos. Para cambios de look, disenos especiales o microblading, te recomendamos agendar una valoracion."
          centered
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                <div className="p-6 grow">
                  <Skeleton className="h-8 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-6" />
                  <div className="flex flex-col gap-3 mb-6">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-5 w-40" />
                  </div>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <Skeleton className="h-12 w-full rounded-xl" />
                </div>
              </div>
            ))
          ) : (
            services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))
          )}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link href="/agendar">Agendar ahora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
