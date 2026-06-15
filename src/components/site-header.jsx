"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useClient } from '@/hooks/useClient';

const navItems = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/mis-citas', label: 'Mis citas' },
  { href: '/agendar', label: 'Agendar' }
];

export function SiteHeader() {
  const { token, logout } = useClient();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        {/* Navigation - Left aligned as in reference image */}
        <div className="hidden md:flex flex-1 items-center gap-7">
          <Link href="/" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
            Inicio
          </Link>
          <Link href="/servicios" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
            Servicios
          </Link>
          <Link href="#ubicacion" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
            Contacto
          </Link>
        </div>

        {/* Brand/Logo - Center aligned */}
        <Link href="/" className="flex items-center justify-center flex-1 gap-2" aria-label="Ir al inicio de AMM-arte Spa">
          <span>
            <span className="block text-2xl font-black tracking-widest uppercase font-serif text-foreground">AMM-ARTE SPA</span>
          </span>
        </Link>

        {/* Actions - Right aligned */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-2">
          {token ? (
            <>
              <Button asChild variant="ghost" className="hidden sm:inline-flex">
                <Link href="/mis-citas">Mis citas</Link>
              </Button>
              <Button asChild variant="ghost" className="hidden sm:inline-flex">
                <Link href="/agendar">Agendar</Link>
              </Button>
              <Button variant="ghost" onClick={logout} className="hidden sm:inline-flex text-muted-foreground hover:text-primary">
                Cerrar sesión
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" className="hidden sm:inline-flex">
                <Link href="/iniciar-sesion">Ingresar</Link>
              </Button>
            </>
          )}
          <Button asChild className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/agendar">Agendar Cita</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-muted-foreground hover:text-foreground focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Abrir menú"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-lg p-4">
          <nav className="flex flex-col gap-4">
            {token ? (
              <>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-semibold text-foreground hover:text-primary py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button variant="ghost" onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="justify-start text-lg h-auto py-2">
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <div className="flex flex-col gap-3 mt-2">
                <Button asChild variant="ghost" className="justify-start text-lg h-auto py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/servicios">Servicios</Link>
                </Button>
                <Button asChild variant="ghost" className="justify-start text-lg h-auto py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/agendar">Agendar</Link>
                </Button>
                <Button asChild variant="ghost" className="justify-start text-lg h-auto py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/iniciar-sesion">Ingresar</Link>
                </Button>
                <Button asChild className="justify-start text-lg h-auto py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/crear-cuenta">Crear cuenta</Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
