"use client";
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Star, WandSparkles, MapPin, Phone, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';
import { testimonials } from '@/lib/content';
import BusinessContact from '@/components/ReUsableComponents/BusinessContact';
import { useServices } from '@/hooks/useServices';
import Reviews from '@/components/ReUsableComponents/Reviews';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
    alt: 'Mujer en salón de belleza'
  },
  {
    src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1074&auto=format&fit=crop',
    alt: 'Productos y herramientas de salón de belleza'
  },
  {
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=900&auto=format&fit=crop',
    alt: 'Manicura y pedicura profesional'
  }
];

export default function HomePage() {
  const { services } = useServices();
  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,20,147,0.05),_transparent_40%),linear-gradient(135deg,_#ffffff_0%,_#fff0f5_48%,_#ffffff_100%)]" />
        <div className="container grid min-h-[680px] items-center gap-12 py-14 md:grid-cols-[1fr_0.9fr] md:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
              <Star className="h-4 w-4 fill-primary" aria-hidden="true" /> Calificación 5.0 en Google
            </div>
            <h1 className="text-balance text-5xl font-black tracking-tight md:text-7xl">
              Tu belleza en manos expertas
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Centro de estética integral y especializado en Coapa. Nos enfocamos en resaltar tu belleza natural, brindando servicios de alta calidad con un trato profesional y vanguardista.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><Link href="/agendar">Agendar Cita</Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/servicios">Ver Servicios</Link></Button>
            </div>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-slate-600">Atención Premium</span>
                </div>
                <div className="flex items-center gap-2">
                  <WandSparkles className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-slate-600">Estilistas Expertas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-slate-600">Alta Calidad</span>
                </div>
              </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 h-80 overflow-hidden rounded-[2.5rem] shadow-glow md:h-96">
              <Image src={galleryImages[0].src} alt={galleryImages[0].alt} fill priority sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
            </div>
            {galleryImages.slice(1).map((image) => (
              <div key={image.src} className="relative h-48 overflow-hidden rounded-[2rem] shadow-sm">
                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 22vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" id="servicios-destacados">
        <div className="container">
          <SectionHeading eyebrow="Nuestros Servicios" title="Servicios de Primer Nivel" description="Ofrecemos la mejor asesoría y servicios para resaltar tu belleza, utilizando técnicas modernas e innovadoras." centered />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Card key={service.name} className="border-none bg-background/80 shadow-sm transition-transform hover:-translate-y-1">
                <CardContent className="p-7">
                  <WandSparkles className="mb-6 h-9 w-9 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-black">{service.name}</h3>
                  <p className="mt-3 min-h-24 text-sm leading-7 text-muted-foreground">{service.description}</p>
                  <div className="mt-5 flex items-center justify-between text-sm font-bold text-primary">
                    <span>{service.durationMin} mins</span>
                    <span>${service.price.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Reviews/>

      <section className="p-5 bg-white" id="ubicacion">
        <BusinessContact />
      </section>
    </>
  );
}
