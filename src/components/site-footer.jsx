import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary-foreground text-primary-foreground">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black">el Salon</p>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/75">
            Tu belleza es nuestra prioridad. Brindamos servicios de estética de la más alta calidad con el mejor trato humano en Coapa, Ciudad de México.
          </p>
        </div>
        <div>
          <p className="font-semibold">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li>55 5801 9251</li>
            <li>Coapa, Ex-Hacienda Coapa, 04980 CDMX</li>
            <li>Lun - Vie: 10:00 - 19:00</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Accesos</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li><Link href="/servicios" className="hover:text-primary">Servicios</Link></li>
            <li><Link href="/agendar" className="hover:text-primary">Agendar cita</Link></li>
            <li><Link href="/mis-citas" className="hover:text-primary">Mis citas</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
