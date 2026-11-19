"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";

export default function BusinessContact() {
  const { business, loading } = useBusiness();
  const address = business?.address;
  const phone = business?.phone;
  const mapUrl = address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    : null;
  const mapEmbedUrl = address
    ? `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`
    : null;

  return (
    <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-8">
      <div className="space-y-8 rounded-2xl border border-slate-100 bg-white p-8">
        <h3 className="mb-6 text-2xl font-bold text-foreground">Información de contacto</h3>

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white text-primary shadow-sm">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground">Ubicación</h4>
            <p className="mt-1 leading-relaxed text-muted-foreground">
              {loading ? "Cargando ubicación..." : address || "Consulta la ubicación con nuestro equipo."}
            </p>
          </div>
        </div>

        {phone && (
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white text-primary shadow-sm">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground">Teléfono</h4>
              <a href={`tel:${phone}`} className="mt-1 font-medium text-muted-foreground transition-colors hover:text-primary">{phone}</a>
            </div>
          </div>
        )}

        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white text-primary shadow-sm">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground">Horarios</h4>
            <p className="mt-1 text-muted-foreground">Consulta los horarios disponibles en el calendario de reservas.</p>
          </div>
        </div>

        {mapUrl && (
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-md transition-colors hover:bg-primary/90">
            <MapPin className="h-5 w-5" />
            Abrir en Google Maps
          </a>
        )}
      </div>

      {mapEmbedUrl ? (
        <div className="relative h-[500px] w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-inner">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación del establecimiento"
          />
        </div>
      ) : (
        <div className="flex h-[500px] items-center justify-center rounded-2xl border border-border bg-muted p-8 text-center text-muted-foreground">
          La ubicación aparecerá aquí cuando el establecimiento tenga una dirección configurada.
        </div>
      )}
    </div>
  );
}
