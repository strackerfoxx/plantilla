import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/20 bg-black text-white">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black text-primary">Barbershop Martina</p>
          <p className="mt-3 max-w-md text-sm text-slate-400">
            Tu estilo y confianza son nuestra prioridad. Brindamos cortes de cabello y arreglo de barba de la más alta calidad con el mejor trato en la Ciudad de México.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>+52 55 1741 6569</li>
            <li>Calz. del Hueso 503, Coapa, Girasoles III, Plaza Fiesta Coapa, CDMX</li>
            <li>Lun - Dom: 10:00 - 20:00</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Accesos</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><Link href="/servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
            <li><Link href="/agendar" className="hover:text-primary transition-colors">Agendar cita</Link></li>
            <li><Link href="/mis-citas" className="hover:text-primary transition-colors">Mis citas</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
