"use client";
import { MapPin, Phone, Clock } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness"

export default function BusinessContact({horario}) {
    const { business } = useBusiness();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
        {/* Contact Info */}
        <div className="space-y-8 bg-slate-50 p-8 rounded-2xl border border-slate-100">
        <h3 className="text-2xl font-bold text-secondary-900 mb-6">Información de Contacto</h3>
        
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 text-primary-600">
            <MapPin className="w-6 h-6" />
            </div>
            <div>
            <h4 className="text-lg font-semibold text-secondary-900">Ubicación</h4>
            <p className="mt-1 text-slate-600 leading-relaxed">
                {business?.address}
            </p>
            </div>
        </div>

        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 text-primary-600">
            <Phone className="w-6 h-6" />
            </div>
            <div>
            <h4 className="text-lg font-semibold text-secondary-900">Teléfono</h4>
            <p className="mt-1 text-slate-600">
                <a href="tel:+525565503655" className="hover:text-primary-600 transition-colors font-medium">+52 55 6550 3655</a>
            </p>
            </div>
        </div>

        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 text-primary-600">
            <Clock className="w-6 h-6" />
            </div>
            <div>
            <h4 className="text-lg font-semibold text-secondary-900">Horario</h4>
            <div className="mt-1 text-slate-600 space-y-1">
                <p className="flex justify-between w-48"><span>Mar - Dom:</span> <span>10:00 - 19:00</span></p>
                <p className="flex justify-between w-48 text-slate-400"><span>Lunes:</span> <span>Cerrado</span></p>
            </div>
            </div>
        </div>
        
        <div className="pt-6">
            <a 
            href="https://maps.google.com/?q=Centro+Veterinario+PAWS+Coapa"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-neutral-800 hover:bg-secondary-800 transition-colors shadow-md"
            >
            <MapPin className="w-5 h-5" />
            Abrir en Google Maps
            </a>
        </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-[500px] bg-slate-200 rounded-2xl overflow-hidden shadow-inner relative border border-slate-200">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.5503893663673!2d-99.1235198!3d19.3009572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0204bf23508f%3A0xa926c4897f26fdb7!2sCentro%20Veterinario%20PAWS!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Centro Veterinario PAWS en Coyoacán"
        ></iframe>
        </div>
    </div>
  )
}
