"use client";
import { MapPin, Phone, Clock } from "lucide-react";

export default function BusinessContact({horario}) {
    // Hardcoded for this specific redesign (using local context instead of DB hook)
    const business = {
        address: "Calz. del Hueso 503, Coapa, Girasoles III, Coyoacán, 04920 Ciudad de México, CDMX, México (Plaza Fiesta Coapa)",
        phone: "+52 55 1741 6569"
    };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
        {/* Contact Info */}
        <div className="space-y-8 bg-secondary/30 p-8 rounded-2xl border border-primary/20">
        <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
        
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center shadow-sm border border-primary/20 text-primary">
            <MapPin className="w-6 h-6" />
            </div>
            <div>
            <h4 className="text-lg font-semibold text-white">Ubicación</h4>
            <p className="mt-1 text-muted-foreground leading-relaxed">
                {business?.address}
            </p>
            </div>
        </div>

        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center shadow-sm border border-primary/20 text-primary">
            <Phone className="w-6 h-6" />
            </div>
            <div>
            <h4 className="text-lg font-semibold text-white">Teléfono</h4>
            <p className="mt-1 text-muted-foreground">
                <a href="tel:+525517416569" className="hover:text-primary transition-colors font-medium">{business?.phone}</a>
            </p>
            </div>
        </div>

        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center shadow-sm border border-primary/20 text-primary">
            <Clock className="w-6 h-6" />
            </div>
            <div>
            <h4 className="text-lg font-semibold text-white">Horario</h4>
            <div className="mt-1 text-muted-foreground space-y-1">
                <p className="flex justify-between w-48"><span>Lun - Sab:</span> <span>10:00 a.m. - 8:00 p.m.</span></p>
                <p className="flex justify-between w-48 text-muted-foreground/50"><span>Domingo:</span> <span>Cerrado</span></p>
            </div>
            </div>
        </div>
        
        <div className="pt-6">
            <a 
            href="https://maps.google.com/?q=Barbershop+Martina+Calz.+del+Hueso+503"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-xl text-primary-foreground bg-primary hover:bg-primary/90 transition-colors shadow-md"
            >
            <MapPin className="w-5 h-5" />
            Abrir en Google Maps
            </a>
        </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-[500px] bg-secondary/20 rounded-2xl overflow-hidden shadow-inner relative border border-primary/20">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.264770289656!2d-99.124231!3d19.301322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce019623e10db3%3A0x6b2dfbe97e97f511!2sBarbershop%20Martina!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(1.2)' }}
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Barbershop Martina en Coyoacán"
        ></iframe>
        </div>
    </div>
  )
}
