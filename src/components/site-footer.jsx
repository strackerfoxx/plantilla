import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t bg-[#35433a] text-primary-foreground">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black">AMM-arte Spa</p>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/75">
            Tu bienestar y relajación son nuestra prioridad. Brindamos masajes, faciales y terapias en un ambiente de calma en la Ciudad de México.
          </p>
        </div>
        <div>
          <p className="font-semibold">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li>55 4542 6063</li>
            <li>Fuentes Plaza, Calz. del Hueso 160-Local 3-C, Coapa, Ex-Hacienda Coapa</li>
            <li>Lun - Dom: 6:00 - 20:00</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Accesos</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li><Link href="/servicios" className="hover:text-white">Servicios</Link></li>
            <li><Link href="/agendar" className="hover:text-white">Agendar cita</Link></li>
            <li><Link href="/mis-citas" className="hover:text-white">Mis citas</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
