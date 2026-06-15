"use client";
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Star, WandSparkles, Sparkles, HeartHandshake, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';
import { testimonials } from '@/lib/content';
import BusinessContact from '@/components/ReUsableComponents/BusinessContact';
import { useServices } from '@/hooks/useServices';
import Reviews from '@/components/ReUsableComponents/Reviews';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    alt: 'Mujer relajándose con tratamiento de spa'
  },
  {
    src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1074&auto=format&fit=crop',
    alt: 'Ambiente tranquilo de spa'
  },
  {
    src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=900&auto=format&fit=crop',
    alt: 'Masaje relajante en spa'
  }
];

export default function HomePage() {
  const { services } = useServices();
  return (
    <>
      <section className="relative overflow-hidden">
        {/* Soft Spa Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/40 via-background to-background" />
        <div className="container grid min-h-[680px] items-center gap-12 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur-md">
              <Star className="h-4 w-4 fill-primary" aria-hidden="true" /> Calificación 4.6 en Google
            </div>

            <p className="uppercase tracking-widest text-sm font-bold text-muted-foreground mb-4">PURE BEAUTY, REAL RESULTS</p>
            <h1 className="text-balance text-5xl font-black tracking-tight font-serif text-foreground md:text-7xl leading-[1.1]">
              Natural Beauty, <br/>
              Expert Care
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Relajación total y atención personalizada en CDMX. Un oasis de paz para cuidar tu cuerpo y mente, en un espacio incluyente y guiado por mujeres.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white font-semibold">
                <Link href="/agendar">Agendar Cita</Link>
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 pt-6 border-t border-border/50">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Experiencia 10/10</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">LGBTQ+ Amigable</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">Mujer Empresaria</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 relative">
            <div className="relative col-span-2 h-80 overflow-hidden rounded-[2.5rem] shadow-glow md:h-96">
              <Image src={galleryImages[0].src} alt={galleryImages[0].alt} fill priority sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
              {/* Floating Offer Badge inspired by reference */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white max-w-[200px]">
                <p className="font-bold text-lg text-foreground">40% offer</p>
                <p className="text-xs text-muted-foreground mt-1">Selected Beauty Services</p>
                <p className="text-[10px] text-muted-foreground mt-2 border-t pt-2">Trusted with 4.6 rating from happy clients</p>
              </div>
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
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black font-serif tracking-tight text-foreground mb-4">Our Beauty Services</h2>
              <p className="text-muted-foreground">From skincare to relaxation, explore a wide range of treatments tailored to your needs.</p>
            </div>
            <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/servicios">Ver todos los servicios</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <Card key={service.name} className="border border-border/50 bg-secondary/10 shadow-sm hover:shadow-md transition-all rounded-3xl overflow-hidden group">
                <CardContent className="p-0 flex items-center">
                  <div className="flex-1 p-6 sm:p-8">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold font-serif text-foreground group-hover:text-primary transition-colors">{service.name}</h3>
                      <span className="text-sm font-bold text-foreground bg-white px-3 py-1 rounded-full shadow-sm">{typeof service.price === 'number' ? `$${service.price.toFixed(2)}` : service.price}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground mb-6 max-w-[280px] line-clamp-2">{service.description}</p>
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold">
                      <span>{service.durationMin || service.duration}</span>
                    </div>
                  </div>
                  {/* Visual placeholder to mimic reference image cards */}
                  <div className="hidden sm:block w-32 h-full bg-secondary/30 relative shrink-0">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400&auto=format&fit=crop')` }}></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Care Feature Section */}
      <section className="section-padding relative overflow-hidden bg-muted/50">
        <div className="container flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-serif tracking-tight text-foreground leading-tight">
              Expert care with premium<br/> personalized beauty
            </h2>
          </div>

          <div className="relative w-full max-w-5xl aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden">
             <Image src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200&auto=format&fit=crop" alt="Spa ingredients and setup" fill className="object-cover" />

             {/* Floating Info Cards */}
             <div className="absolute top-1/4 left-[5%] md:left-[10%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-[220px]">
               <div className="flex items-start gap-3">
                 <BadgeCheck className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                 <div>
                   <p className="font-bold text-sm text-foreground">Experienced Professionals</p>
                   <p className="text-xs text-muted-foreground mt-1">Experienced professionals deliver trusted premium care.</p>
                 </div>
               </div>
             </div>

             <div className="absolute bottom-1/4 right-[5%] md:right-[10%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-[220px]">
               <div className="flex items-start gap-3">
                 <Sparkles className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                 <div>
                   <p className="font-bold text-sm text-foreground">Hygienic Environment</p>
                   <p className="text-xs text-muted-foreground mt-1">Clean, hygienic environment ensuring safety and comfort.</p>
                 </div>
               </div>
             </div>
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
