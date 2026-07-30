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
import PromotionsCarousel from '@/components/ReUsableComponents/PromotionsCarousel';


export default function Page() {
    const { services } = useServices();
  return (
    <div className="min-h-screen bg-[#f5f3f0] text-neutral-900 font-sans selection:bg-primary selection:text-white">
      {/* Navigation */}

      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[90vh] min-h-[600px] flex flex-col md:flex-row bg-[#f5f3f0]">
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10 relative">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
              Descubre<br/>Tu<br/>Energía
            </h1>
            <p className="max-w-md text-lg text-neutral-600 mb-10 leading-relaxed font-medium">
              Un espacio dedicado a tu bienestar y equilibrio. Conoce nuestros servicios personalizados y transforma tu día.
            </p>
            <div>
              <Link href="/agendar" className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-800 transition-all hover:scale-105" aria-label="Agendar una cita ahora">
                Agendar Cita
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1702312721918-62235a0b77d2?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Ambiente relajante del negocio Salon" 
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        </section>

        {/* Marquee */}
        <div className="bg-primary py-4 overflow-hidden flex whitespace-nowrap" aria-hidden="true">
          <div className="animate-marquee flex space-x-8 text-white/90 text-sm font-bold tracking-widest uppercase">
            <span>• AGENDA TU CITA HOY</span>
            <span>• DESCUBRE NUESTRO ESPACIO</span>
            <span>• ATENCIÓN PERSONALIZADA</span>
            <span>• EXPERIENCIA ÚNICA</span>
            <span>• AGENDA TU CITA HOY</span>
            <span>• DESCUBRE NUESTRO ESPACIO</span>
            <span>• ATENCIÓN PERSONALIZADA</span>
            <span>• EXPERIENCIA ÚNICA</span>
            <span>• AGENDA TU CITA HOY</span>
            <span>• DESCUBRE NUESTRO ESPACIO</span>
            <span>• ATENCIÓN PERSONALIZADA</span>
            <span>• EXPERIENCIA ÚNICA</span>
          </div>
        </div>

        {/* Promociones */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Promociones del Mes</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto font-medium">Aprovecha nuestras ofertas especiales y regálate un momento de relajación.</p>
          </div>
          <PromotionsCarousel />
        </section>

        {/* Values / Features Grid */}
        <section 
          id="servicios" 
          className="py-28 md:py-40 px-4 sm:px-6 lg:px-8  mx-auto" 
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1633423411797-9a7317784d2b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
        <div className="text-center mb-16 md:mb-24">
            <h2 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">La Experiencia Salon</h2>
            <p className="text-white max-w-2xl mx-auto font-medium">Diseñamos cada detalle para ofrecerte un servicio excepcional y resultados que superen tus expectativas.</p>
          </div>
          
          <div className="my-12 grid gap-5 md:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Card
                key={service.name}
                className="
                  group
                  relative
                  overflow-hidden
                  border-0
                  bg-white
                  shadow-none
                "
              >
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-1
                    w-0
                    bg-black
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />

              <CardContent className="p-8">
                <h3 className="tracking-tighter text-2xl font-black ">{service.name}</h3>
                  <p className="mt-3 min-h-24 text-md leading-7 text-muted-foreground">{service.description}</p>
                  <div className="mt-5 flex items-center justify-between text-sm font-bold text-white bg-neutral-800">
                    <span className='text-lg'>{service.durationMin} mins</span>
                    <span className='text-lg'>${service.price.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>

                  
            ))}
          </div>

          <div className='w-full flex justify-center align-middle'>
            <Link href="/agendar" className="mt-12 bg-primary text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors shadow-lg" aria-label="Comienza ahora, agendar cita">
              Comienza Ahora
            </Link>
          </div>

        </section>

        {/* Split Info Section (Dark) */}
        <section id="nosotros" className="flex flex-col md:flex-row w-full bg-primary text-white">
          <div className="w-full md:w-1/2 h-[500px] md:h-auto overflow-hidden">
             <img src="https://images.unsplash.com/photo-1684014286330-ddbeb4a40c92?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Instalaciones de Salon" className="w-full h-full object-cover object-center" loading="lazy" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center p-12 md:p-20 lg:p-32">
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none">
               Dedicados a tu<br/>Bienestar
             </h2>
             <p className="text-neutral-400 mb-10 text-lg leading-relaxed">
               En beauty Salon, creemos que el tiempo que inviertes en ti mismo es el más valioso. Nuestro propósito es brindarte un refugio donde puedas renovarte física y mentalmente. 
             </p>
             <div>
               <Link href="/agendar" className="inline-block border-2 border-white px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-neutral-900 transition-colors" aria-label="Reserva tu experiencia">
                 Reserva tu experiencia
               </Link>
             </div>
          </div>
        </section>

        {/* Two Column Info Blocks */}
        <section id="filosofia" className="flex flex-col md:flex-row w-full">
           <div className="w-full md:w-1/2 bg-[#e6e2db] p-12 md:p-24 flex flex-col justify-center">
             <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">Nuestra Filosofía</h2>
             <p className="text-neutral-700 leading-relaxed mb-8">
               Buscamos el equilibrio perfecto entre la técnica experta y un trato profundamente humano. Cada visita es una oportunidad para conectar contigo mismo.
             </p>
             <div>
               <Link href="/agendar" className="text-sm font-bold tracking-widest uppercase border-b-2 border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors">
                 Conoce Más
               </Link>
             </div>
           </div>
           <div className="w-full md:w-1/2 bg-secondary p-12 md:p-24 flex flex-col justify-center text-white">
             <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">Servicios Especiales</h2>
             <p className="text-neutral-400 leading-relaxed mb-8">
               Desde consultas de valoración hasta sesiones completas de renovación. Estamos preparados para guiarte en cada paso de tu proceso.
             </p>
             <div>
               <Link href="/agendar" className="text-sm font-bold tracking-widest uppercase border-b-2 border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors">
                 Ver Catálogo de Servicios
               </Link>
             </div>
           </div>
        </section>

        {/* Large Typography Section */}
        <section className="relative py-32 overflow-hidden bg-[#f5f3f0] flex items-center justify-center min-h-[800px]">
          {/* Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
            <span className="text-[20rem] md:text-[30rem] lg:text-[40rem] font-black text-neutral-200/50 uppercase tracking-tighter leading-none select-none">
              SALON
            </span>
          </div>
          
          {/* Overlapping Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6">
            <div className="w-64 h-80 md:w-80 md:h-[28rem] mb-10 overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1498842812179-c81beecf902c?auto=format&fit=crop&w=800&q=80" alt="Momentos en Salon" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Encuentra Tu Centro</h2>
            <p className="text-neutral-600 text-lg mb-10 font-medium">
              Agenda tu cita hoy mismo y comienza tu viaje hacia una mejor versión de ti.
            </p>
            <Link href="/agendar" className="bg-primary text-white px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors shadow-lg" aria-label="Comienza ahora, agendar cita">
              Comienza Ahora
            </Link>
          </div>
        </section>

              {/* <Reviews/> */}

      <section className="p-5 my-20 bg-[#f5f3f0]" id="ubicacion">
        <BusinessContact />
      </section>

      </main>

      {/* Marquee Animation Styles */}
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