"use client";
import { MapPin, Phone, Clock } from "lucide-react";

export default function BusinessContact({horario}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start mt-20 mb-10 container">
        {/* Contact Info */}
        <div className="space-y-8 bg-secondary/10 p-8 rounded-3xl border border-border/50 shadow-sm">
        <h3 className="text-3xl font-black font-serif text-foreground mb-6">Ubicación y Contacto</h3>
        
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-border/50 text-primary">
            <MapPin className="w-6 h-6" />
            </div>
            <div>
            <h4 className="text-lg font-bold text-foreground">Dirección</h4>
            <p className="mt-1 text-muted-foreground leading-relaxed max-w-sm">
                Fuentes Plaza, Calz. del Hueso 160-Local 3-C, Coapa, Ex-Hacienda Coapa, Coyoacán, CDMX
            </p>
            </div>
        </div>

        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-border/50 text-primary">
            <Phone className="w-6 h-6" />
            </div>
            <div>
            <h4 className="text-lg font-bold text-foreground">Teléfono</h4>
            <p className="mt-1 text-muted-foreground">
                <a href="tel:+525545426063" className="hover:text-primary transition-colors font-medium">55 4542 6063</a>
            </p>
            </div>
        </div>

        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-border/50 text-primary">
            <Clock className="w-6 h-6" />
            </div>
            <div>
            <h4 className="text-lg font-bold text-foreground">Horario de Atención</h4>
            <div className="mt-1 text-muted-foreground space-y-1">
                <p className="flex justify-between w-48"><span>Lun - Sáb:</span> <span>09:00 - 20:00</span></p>
                <p className="flex justify-between w-48 text-muted-foreground/60"><span>Domingo:</span> <span>Cerrado</span></p>
            </div>
            </div>
        </div>
        
        <div className="pt-6">
            <a 
            href="https://maps.app.goo.gl/uXf3m73D8uQvY82n9"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 border border-transparent text-base font-bold rounded-full text-white bg-primary hover:bg-primary/90 transition-colors shadow-md"
            >
            <MapPin className="w-5 h-5" />
            Cómo llegar (Google Maps)
            </a>
        </div>
        </div>

        {/* Map Placeholder */}
        <div className="w-full h-[500px] bg-secondary/20 rounded-3xl overflow-hidden shadow-sm relative border border-border/50">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.5503893663673!2d-99.1362705!3d19.2923583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0234a9b0c797%3A0x6b6d510e137837db!2sAMM-arte%20Spa!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de AMM-arte Spa en Coapa"
        ></iframe>
        </div>
    </div>
  )
}
