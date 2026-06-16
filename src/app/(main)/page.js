"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Phone, Globe, Clock, ChevronRight, Share, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeading } from '@/components/section-heading';
import BusinessContact from '@/components/ReUsableComponents/BusinessContact';
import { useServices } from '@/hooks/useServices';
import Reviews from '@/components/ReUsableComponents/Reviews';

export default function HomePage() {
  const { services } = useServices();
  return (
    <>
      <section className="bg-white">
        <div className="container py-8 max-w-5xl mx-auto">
          {/* Header Profile Info */}
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center border-b pb-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                Centro Veterinario PAWS
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <div className="flex items-center text-gray-900 font-bold">
                  <span className="text-lg mr-1">4.7</span>
                  <div className="flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current opacity-70" />
                  </div>
                </div>
                <a href="#opiniones" className="text-blue-600 hover:underline font-medium">
                  (621 opiniones)
                </a>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">Veterinario</span>
              </div>

              <div className="mt-4 space-y-2 text-gray-600">
                <p className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>Dentro de fuentes plaza, Calz. del Hueso 160-local 5 A, Coapa, Ex-Hacienda Coapa, Coyoacán, 04980 Ciudad de México, CDMX</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-5 h-5 shrink-0 text-green-600" />
                  <span className="font-medium text-green-600">Abierto</span>
                  <span>· Cierra a las 7 p.m.</span>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="rounded-full gap-2 px-6" size="lg" asChild>
                  <a href="tel:5565503655">
                    <Phone className="w-4 h-4" /> 55 6550 3655
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full gap-2 px-6" size="lg" asChild>
                  <a href="https://veterinariopaws.com" target="_blank" rel="noopener noreferrer">
                    <Globe className="w-4 h-4" /> Sitio Web
                  </a>
                </Button>
                <Button variant="secondary" className="rounded-full gap-2 px-6" size="lg" asChild>
                  <Link href="/agendar">
                    Reservar
                  </Link>
                </Button>
              </div>
            </div>

            {/* Action Buttons Row on Mobile / Right side on Desktop */}
            <div className="flex md:flex-col gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              <Button variant="ghost" className="flex-col gap-1 h-auto py-3 px-4 min-w-[80px]" asChild>
                <a href="https://maps.google.com/?q=Centro+Veterinario+PAWS+Calz+del+Hueso+160" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs">Indicaciones</span>
                </a>
              </Button>
              <Button variant="ghost" className="flex-col gap-1 h-auto py-3 px-4 min-w-[80px]">
                <div className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center mb-1">
                  <Bookmark className="w-5 h-5" />
                </div>
                <span className="text-xs">Guardar</span>
              </Button>
              <Button variant="ghost" className="flex-col gap-1 h-auto py-3 px-4 min-w-[80px]">
                <div className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center mb-1">
                  <Share className="w-5 h-5" />
                </div>
                <span className="text-xs">Compartir</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-t" id="servicios-destacados">
        <div className="container py-12 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Nuestros Servicios</h2>
            <Link href="/servicios" className="text-blue-600 hover:underline flex items-center text-sm font-medium">
              Ver todos <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Card key={service.name} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg">{service.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{service.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">${service.price.toFixed(2)}</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 h-8 px-3" asChild>
                      <Link href="/agendar">Agendar</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto w-full">
        <Reviews />
      </div>

      <section className="bg-white border-t" id="ubicacion">
        <div className="container py-12 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Ubicación</h2>
          <BusinessContact />
        </div>
      </section>
    </>
  );
}
