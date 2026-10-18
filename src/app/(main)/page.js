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
    src: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?q=80&w=1200&auto=format&fit=crop',
    alt: 'Veterinario examinando a un perro feliz'
  },
  {
    src: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1074&auto=format&fit=crop',
    alt: 'Cuidado y atención a gatos'
  },
  {
    src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=900&auto=format&fit=crop',
    alt: 'Mascotas felices en la clínica'
  }
];

export default function HomePage() {
  const { services } = useServices();
  return (
    <>
      <section className="p-4 md:p-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Main Hero Card */}
          <div className="md:col-span-2 bg-[#F1E0D6] rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden h-[400px] md:h-[500px]">
            <div className="relative z-10 max-w-lg">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-3 py-1.5 text-xs font-bold text-orange-800 shadow-sm">
                <Star className="h-3 w-3 fill-orange-500 text-orange-500" aria-hidden="true" /> 4.7 (621 opiniones)
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-800 leading-tight tracking-tight mb-4">
                Amor y cuidado <br/>para tus mascotas
              </h1>
              <p className="text-slate-700 text-lg mb-8 max-w-md">
                Atención veterinaria experta en CDMX. Nos dedicamos al bienestar integral de tus amigos de cuatro patas.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 shadow-lg shadow-orange-500/30">
                  <Link href="/agendar">Agendar Cita</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl bg-white/50 border-white hover:bg-white text-slate-800 font-bold px-6">
                  <Link href="/servicios">Servicios</Link>
                </Button>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute right-[-10%] bottom-[-10%] w-64 h-64 bg-orange-200/50 rounded-full blur-3xl" />
          </div>

          {/* Side Cards Column */}
          <div className="grid grid-rows-2 gap-4 md:gap-6 h-[400px] md:h-[500px]">
            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden group">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-lg leading-tight">Expertos en salud animal</p>
              </div>
            </div>

            {/* Info Bento Card */}
            <div className="bg-[#BCE3C6] rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden">
              <ShieldCheck className="h-10 w-10 text-emerald-800 mb-4" />
              <h3 className="text-2xl font-black text-emerald-950 mb-2">Trato 100% compasivo</h3>
              <p className="text-emerald-800 text-sm font-medium">Urgencias, bienestar y cirugía para perros y gatos.</p>
              <div className="absolute -right-4 -top-4 bg-emerald-400/30 w-24 h-24 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="p-4 md:p-8 max-w-7xl mx-auto w-full" id="servicios-destacados">
        <SectionHeading
          eyebrow="Nuestros Servicios"
          title="Cuidado Veterinario Integral"
          description="Ofrecemos lo más indicado para tu mascota, individualizando su tratamiento para garantizar los mejores resultados en su salud y bienestar."
          centered
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.slice(0, 4).map((service, index) => {
            const colors = [
              "bg-[#FFF0F5] text-pink-900 border-pink-100",
              "bg-[#F0F8FF] text-blue-900 border-blue-100",
              "bg-[#F0FFF0] text-green-900 border-green-100",
              "bg-[#FFFACD] text-yellow-900 border-yellow-100"
            ];
            const iconColors = [
              "text-pink-500", "text-blue-500", "text-green-500", "text-yellow-600"
            ];
            const colorClass = colors[index % colors.length];
            const iconColor = iconColors[index % iconColors.length];

            return (
              <Card key={service.name} className={`border-none rounded-3xl ${colorClass} shadow-sm transition-transform hover:-translate-y-1 overflow-hidden relative`}>
                <CardContent className="p-6 md:p-8 flex flex-col h-full z-10 relative">
                  <WandSparkles className={`mb-6 h-8 w-8 ${iconColor}`} aria-hidden="true" />
                  <h3 className="text-xl font-black mb-3">{service.name}</h3>
                  <p className="text-sm leading-relaxed opacity-80 flex-grow">{service.description}</p>
                  <div className="mt-6 flex items-center justify-between text-sm font-black pt-4 border-t border-black/5">
                    <span>{service.durationMin} mins</span>
                    <span>${service.price.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <Reviews/>

      <section className="p-5 bg-white" id="ubicacion">
        <BusinessContact />
      </section>
    </>
  );
}
