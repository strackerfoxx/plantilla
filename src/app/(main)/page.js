"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Scissors, Star, Droplets, Medal, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';
import BusinessContact from '@/components/ReUsableComponents/BusinessContact';
import { useServices } from '@/hooks/useServices';
import Reviews from '@/components/ReUsableComponents/Reviews';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop',
    alt: 'Barbero cortando el cabello con precisión'
  },
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1074&auto=format&fit=crop',
    alt: 'Herramientas de barbería profesional'
  },
  {
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=900&auto=format&fit=crop',
    alt: 'Hombre con barba recién arreglada'
  }
];

export default function HomePage() {
  const { services } = useServices();
  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.1),_transparent_40%),linear-gradient(135deg,_#050505_0%,_#111_50%,_#000_100%)]" />
        <div className="container grid min-h-[680px] items-center gap-12 py-14 md:grid-cols-[1fr_0.9fr] md:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-black/50 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
              <Star className="h-4 w-4 fill-primary" aria-hidden="true" /> Calificación 4.1 en Google
            </div>
            <h1 className="text-balance text-5xl font-black tracking-tight text-white md:text-7xl">
              Tu estilo en manos expertas
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              La mejor barbería en Coapa, CDMX. Nos enfocamos en tu imagen, brindando cortes de alta calidad, arreglo de barba y un trato inigualable para que luzcas impecable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90"><Link href="/agendar">Agendar Cita</Link></Button>
              <Button asChild size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"><Link href="/servicios">Ver Servicios</Link></Button>
            </div>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-slate-300">Estilo Único</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-slate-300">Alta Calidad</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-slate-300">Toalla Caliente</span>
                </div>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 h-80 overflow-hidden rounded-[2.5rem] shadow-glow md:h-96 border border-primary/10">
              <Image src={galleryImages[0].src} alt={galleryImages[0].alt} fill priority sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
            </div>
            {galleryImages.slice(1).map((image) => (
              <div key={image.src} className="relative h-48 overflow-hidden rounded-[2rem] shadow-sm border border-primary/10">
                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 22vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-black" id="servicios-destacados">
        <div className="container">
          <SectionHeading eyebrow="Nuestros Servicios" title="Cortes de Primer Nivel" description="Ofrecemos lo más indicado para cada estilo individualizando tu servicio para garantizar los mejores resultados en tu imagen." centered />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Card key={service.name} className="border border-primary/20 bg-secondary/30 shadow-sm transition-transform hover:-translate-y-1 hover:border-primary/50">
                <CardContent className="p-7">
                  <Scissors className="mb-6 h-9 w-9 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-black text-white">{service.name}</h3>
                  <p className="mt-3 min-h-24 text-sm leading-7 text-muted-foreground">{service.description}</p>
                  <div className="mt-5 flex items-center justify-between text-sm font-bold text-primary">
                    <span>{service.duration || service.durationMin + ' mins'}</span>
                    <span>${typeof service.price === 'number' ? service.price.toFixed(2) : service.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-background">
        <Reviews/>
      </div>

      <section className="p-5 bg-black" id="ubicacion">
        <BusinessContact />
      </section>
    </>
  );
}
