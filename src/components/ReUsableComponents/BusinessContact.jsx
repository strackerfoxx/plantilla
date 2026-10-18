"use client";
import { MapPin, Phone, Clock } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";

export default function BusinessContact({ horario }) {
  const { business } = useBusiness();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-stretch max-w-7xl mx-auto w-full">
      {/* Contact Info Bento */}
      <div className="bg-[#FFE4B5] p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-center border-none shadow-sm h-full">
        <div className="absolute -right-12 -top-12 bg-orange-300/40 w-64 h-64 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-black text-orange-950 mb-8 tracking-tight">Estamos aquí para ayudarte</h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm text-orange-600 backdrop-blur-sm">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="pt-1">
                <h4 className="text-lg font-black text-orange-950">Ubicación</h4>
                <p className="mt-1 text-orange-900/80 leading-relaxed font-medium">
                  {business?.address || "Calz. del Hueso 160-local 5 A, Coapa, Coyoacán, 04980 CDMX"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm text-orange-600 backdrop-blur-sm">
                <Phone className="w-7 h-7" />
              </div>
              <div className="pt-1">
                <h4 className="text-lg font-black text-orange-950">Teléfono</h4>
                <p className="mt-1 text-orange-900/80">
                  <a href={`tel:${business?.phone || "+525565503655"}`} className="hover:text-orange-700 transition-colors font-bold text-lg">
                    {business?.phone || "55 6550 3655"}
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-white/60 rounded-2xl flex items-center justify-center shadow-sm text-orange-600 backdrop-blur-sm">
                <Clock className="w-7 h-7" />
              </div>
              <div className="pt-1">
                <h4 className="text-lg font-black text-orange-950">Horario</h4>
                <div className="mt-1 text-orange-900/80 space-y-1 font-medium">
                  <p className="flex justify-between w-48"><span>Lun - Dom:</span> <span>10:00 - 18:00</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <a 
              href="https://maps.google.com/?q=Centro+Veterinario+PAWS+Calz+del+Hueso+160"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-none text-base font-black rounded-2xl text-white bg-orange-600 hover:bg-orange-700 transition-colors shadow-xl shadow-orange-600/20"
            >
              <MapPin className="w-5 h-5" />
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Map Bento */}
      <div className="w-full min-h-[400px] lg:min-h-full bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm relative border-none">
        {/* Usando las coordenadas del veterinario */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.5503893663673!2d-99.1362705!3d19.2923583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce000000000000%3A0x0000000000000000!2sCentro%20Veterinario%20PAWS!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '100%' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de Centro Veterinario PAWS en Coyoacán"
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
