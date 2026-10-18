import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t bg-[#1d293d] text-primary-foreground">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black">Centro Veterinario PAWS</p>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/75">
            La salud de tu mascota es nuestra prioridad. Brindamos atención veterinaria de la más alta calidad con el mejor trato humano en la Ciudad de México.
          </p>
        </div>
        <div>
          <p className="font-semibold">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li>55 6550 3655</li>
            <li>Calz. del Hueso 160-local 5 A, Coapa, Ex-Hacienda Coapa</li>
            <li>Abierto: 10:00 - 18:00 (Aproximado)</li>
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
