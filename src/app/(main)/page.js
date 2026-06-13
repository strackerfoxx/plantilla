"use client";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Scissors, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';
import BusinessContact from '@/components/ReUsableComponents/BusinessContact';
import { useServices } from '@/hooks/useServices';
import Reviews from '@/components/ReUsableComponents/Reviews';

export default function HomePage() {
  const { services } = useServices();

  // Mapping services from content.js to display in the hero section list
  const heroServicesList = [
    "HAIRCUTS",
    "BEARD TRIMS",
    "SHAVES",
    "LINE UPS",
    "STYLING"
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-background min-h-[90vh] flex items-center justify-center pt-10">
        {/* Massive Background Text */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-90 select-none">
          <h1 className="text-[25vw] font-anton text-[#ece7df] leading-none whitespace-nowrap">
            FADE
          </h1>
        </div>

        {/* Central Character Image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[800px] h-[800px] max-w-[100vw] pointer-events-none">
          {/* Using a placeholder image that fits the theme */}
          <div className="relative w-full h-full">
             <Image
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop"
                alt="Barber"
                fill
                className="object-cover object-top drop-shadow-2xl brightness-90 contrast-125 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
                priority
             />
          </div>
        </div>

        {/* Floating Text: STAY SHARP */}
        <div className="absolute top-1/3 left-10 md:left-32 z-20 transform -rotate-12">
            <span className="font-caveat text-7xl md:text-9xl text-primary font-bold drop-shadow-lg">Stay</span>
            <br />
            <span className="font-caveat text-8xl md:text-[10rem] text-primary font-bold ml-10 drop-shadow-lg leading-7">Sharp</span>
        </div>

        {/* Top left corner info */}
        <div className="absolute top-8 left-8 z-20 text-xs font-bold tracking-widest text-muted-foreground uppercase hidden md:block">
            <p>ESTD</p>
            <p>2020</p>
        </div>

        {/* Top right corner info */}
        <div className="absolute top-8 right-8 z-20 text-xs text-right font-bold tracking-widest text-muted-foreground uppercase hidden md:block">
            <p>CDMX</p>
            <p>MEX</p>
        </div>

        {/* Left column details */}
        <div className="absolute bottom-32 left-8 md:left-20 z-20 hidden lg:flex flex-col gap-8 max-w-[200px]">
            <div>
                <p className="font-bold text-sm tracking-widest uppercase">Real Cuts.</p>
                <p className="font-bold text-sm tracking-widest uppercase">Real People.</p>
            </div>

            <div className="border border-border p-4 rounded-full w-24 h-24 flex items-center justify-center text-center text-xs font-bold tracking-widest uppercase">
                Walk-ins<br/>Welcome
            </div>
        </div>

        {/* Right column details */}
        <div className="absolute bottom-32 right-8 md:right-20 z-20 hidden md:flex flex-col gap-16 items-end">
            <div className="text-right">
                <p className="text-primary font-bold text-sm tracking-widest mb-4 uppercase">Services</p>
                <ul className="flex flex-col gap-2 font-bold tracking-widest text-sm text-foreground/80">
                    {heroServicesList.map((srv, idx) => (
                        <li key={idx}>{srv}</li>
                    ))}
                </ul>
            </div>

            <Button asChild size="lg" className="rounded-none border border-primary bg-transparent hover:bg-primary text-foreground hover:text-primary-foreground font-bold tracking-widest h-14 px-8 uppercase group transition-all">
                <Link href="/agendar" className="flex items-center gap-4">
                    Book your cut <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>

            <div className="text-right mt-10">
                <p className="text-primary font-bold text-sm tracking-widest mb-2 uppercase">Open Daily</p>
                <p className="font-anton text-4xl mb-1">9AM - 9PM</p>
                <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Calz. del Hueso 503</p>
            </div>
        </div>
      </section>

      {/* Main Call to action for mobile */}
      <section className="md:hidden py-10 px-6 flex flex-col gap-6 items-center border-t border-border bg-secondary/30">
          <Button asChild size="lg" className="w-full rounded-none border border-primary bg-primary text-primary-foreground font-bold tracking-widest h-14 uppercase">
                <Link href="/agendar">Book your cut</Link>
          </Button>
          <div className="text-center w-full">
                <p className="text-primary font-bold text-sm tracking-widest mb-2 uppercase">Open Daily</p>
                <p className="font-anton text-3xl mb-1">9AM - 9PM</p>
                <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Calz. del Hueso 503</p>
            </div>
      </section>

      <section className="section-padding bg-background border-t border-border" id="servicios">
        <div className="container">
          <SectionHeading eyebrow="Servicios" title="Nuestros Servicios" description="Cortes clásicos, modernos y arreglo de barba con la mejor técnica y productos premium." centered />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.name} className="border border-border bg-secondary/50 transition-colors hover:border-primary/50">
                <CardContent className="p-7">
                  <Scissors className="mb-6 h-8 w-8 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-bold uppercase tracking-wide">{service.name}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-muted-foreground">{service.description}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm font-bold">
                    <span className="flex items-center gap-2 text-muted-foreground"><Clock className="w-4 h-4"/> {service.duration}</span>
                    <span className="text-primary text-lg">${service.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Reviews/>

      <section className="py-16 bg-background border-t border-border" id="ubicacion">
        <div className="container">
            <BusinessContact />
        </div>
      </section>
    </>
  );
}
