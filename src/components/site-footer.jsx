import Link from 'next/link';

export function SiteFooter() {
  return (
      <footer className="bg-neutral-900 text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <Link href="/" className="text-4xl font-black tracking-tighter uppercase mb-6 inline-block">
                Alex
              </Link>
              <p className="text-neutral-400 text-sm leading-relaxed pr-4">
                Barbería y salón Alex en La Fama, Tlalpan. Estilo moderno, atención cercana y servicio de estética pensado para verte bien en cada detalle.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Explorar</h3>
              <ul className="space-y-4 text-neutral-400 text-sm">
                <li><Link href="#nosotros" className="hover:text-white transition-colors">Sobre nosotros</Link></li>
                <li><Link href="#servicios" className="hover:text-white transition-colors">Servicios</Link></li>
                <li><Link href="#filosofia" className="hover:text-white transition-colors">Atención</Link></li>
                <li><Link href="/agendar" className="hover:text-white transition-colors">Agendar cita</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Contacto</h3>
              <ul className="space-y-4 text-neutral-400 text-sm">
                <li><a href="tel:+525630002292" className="hover:text-white transition-colors">56 3000 2292</a></li>
                <li><a href="https://maps.google.com/?q=Av.+Insurgentes+Sur+3807+La+Fama+Tlalpan+Ciudad+de+Mexico" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Av. Insurgentes Sur 3807, La Fama</a></li>
                <li>Ciudad de México, CDMX</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Reserva rápida</h3>
              <p className="text-neutral-400 text-sm mb-4">Agenda tu cita para corte, estética o cuidado personal.</p>
              <Link href="/agendar" className="inline-flex items-center justify-center w-full bg-white text-neutral-900 px-4 py-3 text-sm font-bold uppercase hover:bg-neutral-200 transition-colors" aria-label="Reservar cita en Barbería y salón Alex">
                Reserva ahora
              </Link>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
            <p>&copy; {new Date().getFullYear()} Barbería y salón Alex. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
              <Link href="#" className="hover:text-white transition-colors">Términos</Link>
            </div>
          </div>
        </div>
      </footer>
  );
}