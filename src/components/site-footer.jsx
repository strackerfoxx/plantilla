import Link from "next/link";

const footerGroups = [
  {
    title: "Explora",
    links: [
      { label: "Inicio", href: "/#home" },
      { label: "Nuestra historia", href: "/#about" },
      { label: "Productos", href: "/#products" },
      { label: "Consejos", href: "/#blog" },
    ],
  },
  {
    title: "Cuidado",
    links: [
      { label: "Kits de estética", href: "/#shop" },
      { label: "Servicios", href: "/servicios" },
      { label: "Agendar una cita", href: "/agendar" },
      { label: "Preguntas frecuentes", href: "/#contact" },
    ],
  },
  {
    title: "Tu cuenta",
    links: [
      { label: "Iniciar sesión", href: "/iniciar-sesion" },
      { label: "Crear cuenta", href: "/crear-cuenta" },
      { label: "Mis citas", href: "/mis-citas" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="-mt-20 bg-[#1f4d36] pt-32 pb-8 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Link href="/" className="text-2xl font-black tracking-tight">Paw Bliss</Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
            Cuidado, comodidad y momentos felices para quienes hacen de tu hogar un lugar mejor.
          </p>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h4 className="mb-4 font-bold text-[#f5a800]">{group.title}</h4>
            <ul className="space-y-3 text-sm text-white/70">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-[#f5a800]">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Paw Bliss. Todos los derechos reservados.
      </p>
    </footer>
  );
}
