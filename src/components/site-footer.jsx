import Link from 'next/link';

export function SiteFooter() {
  return (
      <footer className="bg-neutral-900 text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <Link href="/" className="text-4xl font-black tracking-tighter uppercase mb-6 inline-block">
                Salon
              </Link>
              <p className="text-neutral-400 text-sm leading-relaxed pr-4">
                Tu refugio para encontrar equilibrio y bienestar. Dedicados a ofrecerte la mejor experiencia posible.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Explorar</h3>
              <ul className="space-y-4 text-neutral-400 text-sm">
                <li><Link href="#nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
                <li><Link href="#servicios" className="hover:text-white transition-colors">Servicios</Link></li>
                <li><Link href="#filosofia" className="hover:text-white transition-colors">Nuestra Filosofía</Link></li>
                <li><Link href="/agendar" className="hover:text-white transition-colors">Agendar Cita</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Contacto</h3>
              <ul className="space-y-4 text-neutral-400 text-sm">
                <li>contacto@Salonbienestar.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Av. Principal 123, Ciudad</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Mantente Informado</h3>
              <p className="text-neutral-400 text-sm mb-4">Suscríbete para recibir noticias y ofertas especiales.</p>
              <form className="flex" aria-label="Formulario de suscripción">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="bg-neutral-800 text-white px-4 py-3 w-full text-sm focus:outline-none focus:ring-2 focus:ring-neutral-500"
                  required
                  aria-label="Correo electrónico para newsletter"
                />
                <button type="submit" className="bg-white text-neutral-900 px-4 py-3 text-sm font-bold uppercase hover:bg-neutral-200 transition-colors" aria-label="Suscribirse">
                  OK
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
            <p>&copy; {new Date().getFullYear()} Salon Bienestar. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
              <Link href="#" className="hover:text-white transition-colors">Términos</Link>
            </div>
          </div>
        </div>
      </footer>
  );
}