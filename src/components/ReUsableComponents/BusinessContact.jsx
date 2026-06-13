"use client";
import { MapPin, Phone, Clock } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness"

export default function BusinessContact({horario}) {
    const { business } = useBusiness();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
        {/* Contact Info */}
        <div className="space-y-8 bg-secondary/30 p-8 border border-border">
        <h3 className="text-2xl font-bold text-foreground mb-6 uppercase tracking-wider">Información de Contacto</h3>
        
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-background border border-border flex items-center justify-center shadow-sm text-primary">
            <MapPin className="w-6 h-6" />
            </div>
            <div>
            <h4 className="text-lg font-semibold text-foreground uppercase tracking-wide">Ubicación</h4>
            <p className="mt-1 text-muted-foreground leading-relaxed">
                {business?.address || "Calz. del Hueso 503, Coapa, Girasoles III, Coyoacán, CDMX"}
            </p>
            </div>
        </div>

        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-background border border-border flex items-center justify-center shadow-sm text-primary">
            <Phone className="w-6 h-6" />
            </div>
            <div>
            <h4 className="text-lg font-semibold text-foreground uppercase tracking-wide">Teléfono</h4>
            <p className="mt-1 text-muted-foreground">
                <a href="tel:+525517416569" className="hover:text-primary transition-colors font-medium">{business?.phone || "55 1741 6569"}</a>
            </p>
            </div>
        </div>

        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-background border border-border flex items-center justify-center shadow-sm text-primary">
            <Clock className="w-6 h-6" />
            </div>
            <div>
            <h4 className="text-lg font-semibold text-foreground uppercase tracking-wide">Horario</h4>
            <div className="mt-1 text-muted-foreground space-y-1">
                <p className="flex justify-between w-48"><span>Lun - Sáb:</span> <span>09:00 - 21:00</span></p>
                <p className="flex justify-between w-48 text-muted/50"><span>Domingo:</span> <span>Cerrado</span></p>
            </div>
            </div>
        </div>
        
        <div className="pt-6">
            <a 
            href="https://maps.app.goo.gl/o1HVK5Yn8JdY1jYy5"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 border border-transparent text-base font-bold tracking-widest uppercase text-primary-foreground bg-primary hover:bg-primary/90 transition-colors shadow-md"
            >
            <MapPin className="w-5 h-5" />
            Abrir en Google Maps
            </a>
        </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-[500px] bg-secondary/50 overflow-hidden shadow-inner relative border border-border filter grayscale contrast-125">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.5503893663673!2d-99.1362705!3d19.2923583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01ab7b57bb99%3A0x6a0c5c3b9b4a44b!2sCalz%20Acoxpa%20566%2C%20Coapa%2C%20Prado%20Coapa%2C%20Tlalpan%2C%2014357%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Barbershop Martina"
        ></iframe>
        </div>
    </div>
  )
}
