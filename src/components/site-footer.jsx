import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t bg-[#1d293d] text-primary-foreground">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black">Centro Veterinario PAWS</p>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/75">
            Excelente servicio y atención médica para tus mascotas. Nos encontramos en Coyoacán, CDMX, dispuestos a ayudarte con urgencias y cuidados generales.
          </p>
        </div>
        <div>
          <p className="font-semibold">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li>55 6550 3655</li>
            <li>Dentro de fuentes plaza, Calz. del Hueso 160-local 5 A</li>
            <li>Lun - Dom: 09:00 - 19:00</li>
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
