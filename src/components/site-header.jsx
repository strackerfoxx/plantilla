"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useClient } from '@/hooks/useClient';

const navItems = [
  { href: '/#home', label: 'Home' },
  { href: '/#shop', label: 'Shop' },
  { href: '/#products', label: 'Products' },
  { href: '/#about', label: 'Our Story' },
  { href: '/#blog', label: 'Blog' }
];

export function SiteHeader() {
  const { token, logout } = useClient();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fdf8ec]/55 text-[#1f4d36] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5" aria-label="Navegación principal">
        <Link href="/" className="flex items-center gap-2 text-xl font-black" aria-label="Paw Bliss, inicio">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1f4d36] text-white" aria-hidden="true">🐾</span>
          Paw Bliss
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item, index) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors hover:text-[#f5a800] ${index === 0 ? 'text-[#f5a800]' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {token ? (
            <>
              <li><Link href="/mis-citas" className="transition-colors hover:text-[#f5a800]">Mis citas</Link></li>
              <li><Link href="/agendar" className="transition-colors hover:text-[#f5a800]">Agendar</Link></li>
              <li>
                <Button variant="ghost" onClick={logout} className="h-auto p-0 text-sm font-medium text-[#1f4d36] hover:bg-transparent hover:text-[#f5a800]">
                  Cerrar sesión
                </Button>
              </li>
            </>
          ) : (
            <>
              <li><Link href="/iniciar-sesion" className="transition-colors hover:text-[#f5a800]">Ingresar</Link></li>
              <li><Link href="/crear-cuenta" className="transition-colors hover:text-[#f5a800]">Crear cuenta</Link></li>
            </>
          )}
        </ul>

        <Button
          asChild
          className="hidden bg-[#f5a800] text-[#1f4d36] shadow transition-colors hover:bg-[#e09900] md:inline-flex"
        >
          <Link href="/#contact">Contact Us</Link>
        </Button>

        <button
          type="button"
          className="flex items-center justify-center p-2 text-[#1f4d36] hover:text-[#f5a800] focus:outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 border-b border-[#1f4d36]/10 bg-[#fdf8ec] p-6 shadow-lg md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Navegación móvil">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className={`py-1 text-lg font-semibold transition-colors hover:text-[#f5a800] ${index === 0 ? 'text-[#f5a800]' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            {token ? (
              <>
                <Link href="/mis-citas" onClick={closeMobileMenu} className="py-1 text-lg font-semibold hover:text-[#f5a800]">Mis citas</Link>
                <Link href="/agendar" onClick={closeMobileMenu} className="py-1 text-lg font-semibold hover:text-[#f5a800]">Agendar</Link>
                <Button
                  variant="ghost"
                  onClick={() => { logout(); closeMobileMenu(); }}
                  className="h-auto justify-start px-0 py-1 text-lg font-semibold text-[#1f4d36] hover:bg-transparent hover:text-[#f5a800]"
                >
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <>
                <Link href="/iniciar-sesion" onClick={closeMobileMenu} className="py-1 text-lg font-semibold hover:text-[#f5a800]">Ingresar</Link>
                <Link href="/crear-cuenta" onClick={closeMobileMenu} className="py-1 text-lg font-semibold hover:text-[#f5a800]">Crear cuenta</Link>
              </>
            )}
            <Button
              asChild
              onClick={closeMobileMenu}
              className="mt-2 bg-[#f5a800] text-[#1f4d36] hover:bg-[#e09900]"
            >
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
