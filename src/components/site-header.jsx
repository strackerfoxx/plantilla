"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useClient } from "@/hooks/useClient";

const navItems = [
  { href: "/#home", label: "Inicio" },
  { href: "/#shop", label: "Kits" },
  { href: "/#products", label: "Productos" },
  { href: "/#about", label: "Nosotros" },
  { href: "/#blog", label: "Consejos" },
];

export function SiteHeader() {
  const { token, logout } = useClient();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1f4d36]/10 bg-[#fdf8ec]/90 text-[#1f4d36] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4" aria-label="Navegación principal">
        <Link href="/" onClick={closeMenu} className="flex shrink-0 items-center gap-2 text-xl font-black tracking-tight" aria-label="Paw Bliss, inicio">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1f4d36] text-lg text-white" aria-hidden="true">🐾</span>
          Paw Bliss
        </Link>

        <ul className="hidden items-center gap-6 text-sm font-semibold lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-[#d58f00]">{item.label}</Link>
            </li>
          ))}
          {token ? (
            <>
              <li><Link href="/mis-citas" className="transition-colors hover:text-[#d58f00]">Mis citas</Link></li>
              <li><Button variant="ghost" onClick={logout} className="h-auto p-0 text-sm font-semibold text-[#1f4d36] hover:bg-transparent hover:text-[#d58f00]">Cerrar sesión</Button></li>
            </>
          ) : (
            <>
              <li><Link href="/iniciar-sesion" className="transition-colors hover:text-[#d58f00]">Iniciar sesión</Link></li>
              <li><Link href="/crear-cuenta" className="transition-colors hover:text-[#d58f00]">Crear cuenta</Link></li>
            </>
          )}
        </ul>

        <Button asChild className="hidden bg-[#f5a800] text-[#1f4d36] shadow-sm hover:bg-[#e09900] lg:inline-flex">
          <Link href="/agendar">Agendar cuidado</Link>
        </Button>

        <button
          type="button"
          className="flex items-center justify-center rounded-full p-2 text-[#1f4d36] transition-colors hover:bg-[#1f4d36]/10 lg:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 border-b border-[#1f4d36]/10 bg-[#fdf8ec] p-6 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu} className="py-1 text-base font-semibold transition-colors hover:text-[#d58f00]">
                {item.label}
              </Link>
            ))}
            {token ? (
              <>
                <Link href="/mis-citas" onClick={closeMenu} className="py-1 font-semibold hover:text-[#d58f00]">Mis citas</Link>
                <Button variant="ghost" onClick={() => { logout(); closeMenu(); }} className="h-auto justify-start px-0 py-1 text-base font-semibold text-[#1f4d36] hover:bg-transparent hover:text-[#d58f00]">Cerrar sesión</Button>
              </>
            ) : (
              <>
                <Link href="/iniciar-sesion" onClick={closeMenu} className="py-1 font-semibold hover:text-[#d58f00]">Iniciar sesión</Link>
                <Link href="/crear-cuenta" onClick={closeMenu} className="py-1 font-semibold hover:text-[#d58f00]">Crear cuenta</Link>
              </>
            )}
            <Button asChild onClick={closeMenu} className="mt-2 bg-[#f5a800] text-[#1f4d36] hover:bg-[#e09900]">
              <Link href="/agendar">Agendar cuidado</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
