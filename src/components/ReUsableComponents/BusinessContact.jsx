"use client";
import { MapPin, Phone, Clock } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness"

export default function BusinessContact({horario}) {
    const { business } = useBusiness();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
        <div className="space-y-8 bg-slate-50 p-8 rounded-2xl border border-slate-100">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-500 mb-3">Ubicación</p>
          <h3 className="text-2xl font-bold text-secondary-900 mb-6">Barbería y salón Alex</h3>
        </div>
        
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100 text-primary-600">
            <MapPin className="w-6 h-6" />
            </div>
            <div>
            <h4 className="text-lg font-semibold text-secondary-900">Dirección</h4>
            <p className="mt-1 text-slate-600 leading-relaxed">
                {business?.address || 'Av. Insurgentes Sur 3807, La Fama, Tlalpan, 14269 Ciudad de México, CDMX'}
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
                <a href="tel:+525630002292" className="hover:text-primary-600 transition-colors font-medium">+52 5630002292</a>
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
                <p className="flex justify-between w-56"><span>Lun - Sáb:</span> <span>10:00 - 20:00</span></p>
                <p className="flex justify-between w-56 text-slate-500"><span>Dom:</span> <span>Cerrado</span></p>
            </div>
            </div>
        </div>
        
        <div className="pt-6 flex flex-col sm:flex-row gap-3">
            <a 
            href="https://maps.google.com/?q=Av.+Insurgentes+Sur+3807+La+Fama+Tlalpan+Ciudad+de+Mexico" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-neutral-800 hover:bg-secondary-800 transition-colors shadow-md"
            >
            <MapPin className="w-5 h-5" />
            Abrir en Google Maps
            </a>
        </div>
        </div>

        <div className="w-full h-[500px] bg-slate-200 rounded-2xl overflow-hidden shadow-inner relative border border-slate-200">
        <iframe 
            src="https://www.google.com/maps?q=Av.%20Insurgentes%20Sur%203807%20La%20Fama%20Tlalpan%20CDMX&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Barbería y salón Alex en Tlalpan"
        ></iframe>
        </div>
    </div>
  )
}
