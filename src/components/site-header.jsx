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
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Ir al inicio de Barbershop Martina">
          <span>
            <span className="block text-lg font-black tracking-tight text-white">Barbershop Martina</span>
            <span className="hidden text-xs text-muted-foreground sm:block">Barbería en CDMX</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        {token ? (
          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
                {item.label}
              </Link>
            ))}
            <Button variant="ghost" onClick={logout} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
              Cerrar sesión
            </Button>
          </nav>
        ) : (
          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="ghost" className="hidden sm:inline-flex text-muted-foreground hover:text-primary hover:bg-primary/10">
              <Link href="/servicios">Servicios</Link>
            </Button>
            <Button asChild variant="ghost" className="hidden sm:inline-flex text-muted-foreground hover:text-primary hover:bg-primary/10">
              <Link href="/agendar">Agendar</Link>
            </Button>
            <Button asChild variant="ghost" className="hidden sm:inline-flex text-muted-foreground hover:text-primary hover:bg-primary/10">
              <Link href="/iniciar-sesion">Ingresar</Link>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/crear-cuenta">Crear cuenta</Link>
            </Button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-muted-foreground hover:text-white focus:outline-none"
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
                    className="text-lg font-semibold text-white hover:text-primary py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button variant="ghost" onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="justify-start text-lg h-auto py-2 text-white hover:text-primary">
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <div className="flex flex-col gap-3 mt-2">
                <Button asChild variant="ghost" className="justify-start text-lg h-auto py-2 text-white hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/servicios">Servicios</Link>
                </Button>
                <Button asChild variant="ghost" className="justify-start text-lg h-auto py-2 text-white hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/agendar">Agendar</Link>
                </Button>
                <Button asChild variant="ghost" className="justify-start text-lg h-auto py-2 text-white hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                  <Link href="/iniciar-sesion">Ingresar</Link>
                </Button>
                <Button asChild className="justify-start text-lg h-auto py-2 bg-primary text-primary-foreground" onClick={() => setIsMobileMenuOpen(false)}>
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
