import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t bg-[#0f172a] text-primary-foreground">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black">Centro Veterinario PAWS</p>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/75">
            El bienestar de tu mascota es nuestra vocación. Brindamos atención veterinaria integral de la más alta calidad y calidez en la Ciudad de México.
          </p>
        </div>
        <div>
          <p className="font-semibold">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li>+52 55 6550 3655</li>
            <li>veterinariopaws.com</li>
            <li>Dentro de fuentes plaza, Calz. del Hueso 160-local 5 A</li>
            <li>Mar - Dom: 10:00 - 19:00</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Enlaces Útiles</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/75">
            <li><Link href="/servicios" className="hover:text-white">Servicios Veterinarios</Link></li>
            <li><Link href="/agendar" className="hover:text-white">Agendar Cita</Link></li>
            <li><Link href="/mis-citas" className="hover:text-white">Mis Citas</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
