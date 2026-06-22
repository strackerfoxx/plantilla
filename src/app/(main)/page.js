"use client";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Activity, Bone, Hand, Monitor, Zap, Move } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BusinessContact from '@/components/ReUsableComponents/BusinessContact';
import { useServices } from '@/hooks/useServices';
import Reviews from '@/components/ReUsableComponents/Reviews';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    alt: 'Clínica de fisioterapia moderna',
    title: 'Nuestras Instalaciones',
    subtitle: 'Equipamiento de Última Generación'
  },
  {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop',
    alt: 'Fisioterapeuta tratando a un paciente',
    title: 'Nuestro Equipo',
    subtitle: 'Especialistas Certificados'
  }
];

export default function HomePage() {
  const { services } = useServices();

  const getIconForService = (name) => {
    switch(name) {
        case 'Fisioterapia Deportiva': return Activity;
        case 'Rehabilitación Post-op': return Bone;
        case 'Terapia Manual': return Hand;
        case 'Ecografía Diagnóstica': return Monitor;
        case 'Neuromodulación': return Zap;
        case 'Readaptación Funcional': return Move;
        default: return Activity;
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop"
            alt="Clínica de fisioterapia"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
              EXCELENCIA EN FISIOTERAPIA
            </div>
            <h1 className="text-balance text-5xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl mb-4 leading-tight">
              Recupera tu movimiento. <br />
              <span className="text-primary">Redescubre tu potencial.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Fisioterapia de vanguardia que combina precisión clínica con tecnología de recuperación avanzada para atletas y personas activas.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-base shadow-lg shadow-primary/25">
                <Link href="/agendar">
                  Agendar Cita <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 h-12 text-base bg-white/50 backdrop-blur-md border-slate-200 hover:bg-white">
                <Link href="/servicios">Conoce más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Cards Section */}
      <section className="relative z-20 -mt-24 pb-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative h-64 md:h-80 overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <p className="text-xs font-bold tracking-widest text-white/80 uppercase mb-1">{image.title}</p>
                  <h3 className="text-2xl font-bold text-white">{image.subtitle}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Servicios Especializados</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Ofrecemos soluciones personalizadas basadas en evidencia científica para cada etapa de tu recuperación.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, idx) => {
              const Icon = getIconForService(service.name);
              return (
                <Card key={idx} className="border-none bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link href="/servicios" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                      Saber más <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                  alt="Doctora especialista"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20">
                <div className="text-center">
                  <span className="block text-4xl font-bold text-primary">15+</span>
                  <span className="text-sm font-medium text-slate-600">Años de experiencia</span>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="mb-4 inline-flex items-center text-xs font-bold tracking-widest text-primary uppercase">
                NUESTRA MISIÓN
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Expertise que inspira confianza.
              </h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  En Gut Klinik Fisioterapia, no solo tratamos síntomas. Buscamos el origen de cada disfunción para ofrecer una solución integral y duradera. Nuestro enfoque se basa en la excelencia clínica y la cercanía humana.
                </p>
                <p>
                  Creemos que cada paciente merece una atención excepcional, utilizando las herramientas tecnológicas más avanzadas del mercado en un entorno diseñado para la calma y la recuperación.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4 bg-slate-50 p-4 rounded-2xl inline-flex">
                <div className="flex -space-x-3">
                  <Image src="https://i.pravatar.cc/100?img=1" width={40} height={40} alt="Patient" className="rounded-full border-2 border-white" />
                  <Image src="https://i.pravatar.cc/100?img=2" width={40} height={40} alt="Patient" className="rounded-full border-2 border-white" />
                  <Image src="https://i.pravatar.cc/100?img=3" width={40} height={40} alt="Patient" className="rounded-full border-2 border-white" />
                </div>
                <div className="text-sm font-bold text-slate-900">
                  +2,500 Pacientes satisfechos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <div className="bg-slate-50">
         <Reviews />
      </div>

      {/* Contact Section */}
      <section className="section-padding bg-white" id="ubicacion">
        <div className="container max-w-6xl">
            <BusinessContact />
        </div>
      </section>
    </>
  );
}
