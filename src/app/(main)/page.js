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
import Gallery from '@/components/ReUsableComponents/Gallery';


export default function Page() {
    const { services } = useServices();
  return (
    <div className="min-h-screen bg-[#f5f3f0] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      <main>
        <section className="relative w-full h-[90vh] min-h-[600px] flex flex-col md:flex-row bg-[#f5f3f0]">
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10 relative">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-neutral-600">Barbería y salón Alex</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              Estilo corte y atención.
            </h1>
            <p className="max-w-xl text-lg text-neutral-600 mb-8 leading-relaxed font-medium">
              En Tlalpan, CDMX, cuidamos tu imagen con cortes modernos, estética y servicio personalizado. Reserva tu cita y vive la experiencia de un salón de confianza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/agendar" className="inline-flex items-center justify-center bg-neutral-900 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-800 transition-all hover:scale-[1.02]" aria-label="Agendar una cita en Barbería y salón Alex">
                Agendar cita
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-neutral-700">
              <span className="inline-flex items-center gap-1 font-semibold">★ 4.0</span>
              <span>•</span>
              <span>4 opiniones</span>
              <span>•</span>
              <span>Abierto hoy hasta las 8:00 p.m.</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1647462742033-f4e39fa481b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Barbería y salón Alex en Tlalpan, CDMX" 
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        </section>

        <div className="bg-neutral-900 py-4 overflow-hidden flex whitespace-nowrap" aria-hidden="true">
          <div className="animate-marquee flex space-x-8 text-white/90 text-sm font-bold tracking-widest uppercase">
            <span>• BARBERÍA Y SALÓN ALEX</span>
            <span>• CORTE MODERNO</span>
            <span>• ESTÉTICA PROFESIONAL</span>
            <span>• CITA RÁPIDA</span>
            <span>• BARBERÍA Y SALÓN ALEX</span>
            <span>• CORTE MODERNO</span>
            <span>• ESTÉTICA PROFESIONAL</span>
            <span>• CITA RÁPIDA</span>
          </div>
        </div>

        <section 
          id="servicios" 
          className="py-28 md:py-40 px-4 sm:px-6 lg:px-8 mx-auto" 
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1706629503586-2731f65587ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center mb-16 md:mb-24">
            <p className="text-white/80 text-sm font-bold uppercase tracking-[0.2em] mb-4">Centro de estética</p>
            <h2 className="text-neutral-700 text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">Servicios para verte y sentirte mejor</h2>
            <p className="text-white max-w-2xl mx-auto font-medium">Desde cortes clásicos y modernos hasta detalles de estética, te ayudamos a mantener una imagen impecable con atención experta.</p>
          </div>

          <div className="my-12 grid gap-5 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Card key={service.name} className="group relative overflow-hidden border-0 bg-white shadow-none">
                <div className="absolute top-0 left-0 h-1 w-0 bg-black transition-all duration-300 group-hover:w-full" />
                <CardContent className="p-8">
                  <h3 className="tracking-tighter text-2xl font-black">{service.name}</h3>
                  <p className="mt-3 min-h-24 text-md leading-7 text-muted-foreground">{service.description}</p>
                  <div className="mt-5 flex items-center justify-between text-sm font-bold text-white bg-neutral-800">
                    <span className="text-lg">{service.durationMin} min</span>
                    <span className="text-lg">${service.price.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="w-full flex justify-center align-middle">
            <Link href="/agendar" className="mt-12 bg-neutral-900 text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors shadow-lg" aria-label="Reserva tu cita en Barbería y salón Alex">
              Reserva tu cita
            </Link>
          </div>
        </section>

        <section id="nosotros" className="flex flex-col md:flex-row w-full bg-neutral-900 text-white">
          <div className="w-full md:w-1/2 h-[500px] md:h-auto overflow-hidden">
             <img src="https://images.unsplash.com/photo-1672968831840-ab691ce8f263?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Interior de Barbería y salón Alex" className="w-full h-full object-cover object-center" loading="lazy" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center p-12 md:p-20 lg:p-32">
             <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-neutral-300">Sobre nosotros</p>
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
               Tu estilo, en manos de expertos.
             </h2>
             <p className="text-neutral-400 mb-10 text-lg leading-relaxed">
               En Barbería y salón Alex combinamos cortes, cuidado personal y atención cercana para ayudarte a verte impecable en cada momento. Nuestro enfoque es claro: servicio profesional, resultados confiables y una experiencia agradable en cada visita.
             </p>
             <div>
               <Link href="/agendar" className="inline-block border-2 border-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-neutral-900 transition-colors" aria-label="Reserva tu próxima cita en Barbería y salón Alex">
                 Reserva tu cita
               </Link>
             </div>
          </div>
        </section>

        <section id="filosofia" className="flex flex-col md:flex-row w-full">
           <div className="w-full md:w-1/2 bg-[#e6e2db] p-12 md:p-24 flex flex-col justify-center">
             <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">Atención personalizada</h2>
             <p className="text-neutral-700 leading-relaxed mb-8">
               Entendemos que cada cliente busca una imagen distinta. Por eso te escuchamos, te asesoramos y te recomendamos opciones que se adapten a tu estilo, rutina y presupuesto.
             </p>
             <div>
               <Link href="/agendar" className="text-sm font-bold tracking-widest uppercase border-b-2 border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors">
                 Agenda ahora
               </Link>
             </div>
           </div>
           <div className="w-full md:w-1/2 bg-neutral-900 p-12 md:p-24 flex flex-col justify-center text-white">
             <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">Servicio premium en La Fama</h2>
             <p className="text-neutral-400 leading-relaxed mb-8">
               Estamos a pocos minutos de tu zona en Av. Insurgentes Sur 3807. Si buscas un corte con buena atención y un ambiente confiable, te esperamos en Barbería y salón Alex.
             </p>
             <div>
               <Link href="/servicios" className="text-sm font-bold tracking-widest uppercase border-b-2 border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors">
                 Ver servicios
               </Link>
             </div>
           </div>
        </section>

        <section className="relative py-32 overflow-hidden bg-[#f5f3f0] flex items-center justify-center min-h-[800px]">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
            <span className="text-[20rem] md:text-[30rem] lg:text-[40rem] font-black text-neutral-200/50 uppercase tracking-tighter leading-none select-none">
              ALEX
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6">
            <div className="w-64 h-80 md:w-80 md:h-[28rem] mb-10 overflow-hidden shadow-2xl">
              <img src="https://plus.unsplash.com/premium_photo-1680859126913-b298dd47a4b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Corte de cabello en Barbería y salón Alex" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Sientete mejor</h2>
            <p className="text-neutral-600 text-lg mb-10 font-medium">
              Agenda tu cita hoy y disfruta de un servicio cuidado, moderno y pensado para tu imagen.
            </p>
            <Link href="/agendar" className="bg-neutral-900 text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors shadow-lg" aria-label="Agendar una cita en Barbería y salón Alex">
              Agendar cita
            </Link>
          </div>
        </section>

        <Gallery />

        <Reviews/>

      <section className="p-5 my-20 bg-[#f5f3f0]" id="ubicacion">
        <BusinessContact />
      </section>

      </main>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </div>
  );
}