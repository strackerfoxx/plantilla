"use client";
import { MapPin, Phone, Clock, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBusiness } from "@/hooks/useBusiness";

export default function BusinessContact() {
  const { business } = useBusiness();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Contact Info */}
        <div className="bg-slate-50 p-10 rounded-[2.5rem] flex flex-col justify-between">
            <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-10">Contáctanos</h3>

                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1 text-blue-500">
                           <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                           <h4 className="text-base font-bold text-slate-900">Ubicación</h4>
                           <p className="mt-1 text-sm text-slate-500">
                               Calz. del Hueso 160, Coapa, Ex-Hacienda Coapa, Coyoacán, 04980 Ciudad de México, CDMX
                           </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1 text-blue-500">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-slate-900">Horario</h4>
                            <div className="mt-1 text-sm text-slate-500 space-y-1">
                                <p>Lunes a Viernes: 6:00am - 8:00pm</p>
                                <p>Sábados: 6:00am - 2:00pm</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1 text-blue-500">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-base font-bold text-slate-900">Teléfono</h4>
                            <p className="mt-1 text-base font-bold text-blue-600">
                                <a href="tel:+525574510690">+52 55 7451 0690</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <Button className="w-full rounded-full h-12 text-base font-semibold shadow-md">
                    Enviar un mensaje
                </Button>
            </div>
        </div>

        {/* Map Embed */}
        <div className="w-full h-full min-h-[400px] bg-slate-200 rounded-[2.5rem] overflow-hidden shadow-inner relative border border-slate-100">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.123!2d-99.123!3d19.299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalz.%20del%20Hueso%20160%2C%20Coapa%2C%20Ex-Hacienda%20Coapa%2C%20Coyoac%C3%A1n%2C%2004980%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Gut Klinik en Coyoacán"
            ></iframe>
        </div>
    </div>
  )
}
