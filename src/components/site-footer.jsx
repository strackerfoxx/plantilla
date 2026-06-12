import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t bg-[#1d293d] text-primary-foreground">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black">Dental Plaza</p>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/75">
            Excelencia y tecnología en el cuidado de tu sonrisa. Brindamos atención odontológica de la más alta calidad, con especialidad en ortodoncia invisible en la Ciudad de México.
          </p>
        </div>
        <div>
          <p className="font-semibold">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li>55 2971 1036</li>
            <li>Calzada del Hueso, Fuentes Plaza 160-Local 5b, Ex-Hacienda Coapa, Coyoacán</li>
            <li>Lun - Vie: Abierto hasta las 8 p.m.</li>
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
