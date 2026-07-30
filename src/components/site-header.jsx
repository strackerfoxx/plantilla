"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { useClient } from '@/hooks/useClient';

const navItems = [
  { href: '/servicios', label: 'Servicios' },
];

export function SiteHeader() {
  const { token, logout } = useClient();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
<header className="sticky top-0 z-50 w-full bg-[#f5f3f0]/90 backdrop-blur-md border-b border-neutral-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="p-2 text-neutral-900 hover:text-neutral-600"
          aria-label="Abrir menú"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Logo */}
      <div className="flex-1 md:flex-none flex justify-center md:justify-start">
        <Link
          href="/"
          className="text-3xl font-black tracking-tighter uppercase"
          aria-label="Clinica Inicio"
        >
          Clinica
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav
        className="hidden md:flex space-x-8 items-center"
        aria-label="Navegación principal"
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm font-semibold tracking-wide hover:text-neutral-500 transition-colors uppercase"
          >
            {item.label}
          </Link>
        ))}

        {token ? (
          <>
            <Link
              href="/mis-citas"
              className="text-sm font-semibold tracking-wide hover:text-neutral-500 transition-colors uppercase"
            >
              Mis citas
            </Link>

            <button
              onClick={logout}
              className="text-sm font-semibold tracking-wide hover:text-neutral-500 transition-colors uppercase"
            >
              Cerrar sesión
            </button>

            <Link
              href="/agendar"
              className="bg-neutral-900 text-white px-6 py-2.5 text-sm font-semibold tracking-wide uppercase hover:bg-neutral-800 transition-colors"
            >
              Agendar
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/iniciar-sesion"
              className="text-sm font-semibold tracking-wide hover:text-neutral-500 transition-colors uppercase"
            >
              Ingresar
            </Link>

            <Link
              href="/crear-cuenta"
              className="bg-neutral-900 text-white px-6 py-2.5 text-sm font-semibold tracking-wide uppercase hover:bg-neutral-800 transition-colors"
            >
              Crear cuenta
            </Link>
          </>
        )}
      </nav>

      {/* Spacer para mantener el logo centrado en móvil */}
      <div className="w-10 md:hidden" />
    </div>
  </div>

  {/* Mobile Menu */}
  {isMobileMenuOpen && (
    <div className="md:hidden absolute top-20 left-0 right-0 bg-[#f5f3f0] border-b border-neutral-200 shadow-lg">
      <nav className="flex flex-col p-6">
  {navItems.map((item) => (
    <Link
      key={item.label}
      href={item.href}
      onClick={() => setIsMobileMenuOpen(false)}
      className="py-3 text-sm font-semibold tracking-wide uppercase"
    >
      {item.label}
    </Link>
  ))}

  {token ? (
    <>
      <Link
        href="/mis-citas"
        onClick={() => setIsMobileMenuOpen(false)}
        className="py-3 text-sm font-semibold tracking-wide uppercase"
      >
        Mis citas
      </Link>

      <Link
        href="/agendar"
        onClick={() => setIsMobileMenuOpen(false)}
        className="mt-4 bg-neutral-900 text-white px-6 py-3 text-center text-sm font-semibold tracking-wide uppercase hover:bg-neutral-800 transition-colors"
      >
        Agendar
      </Link>

      <button
        onClick={() => {
          logout();
          setIsMobileMenuOpen(false);
        }}
        className="mt-3 text-left py-3 text-sm font-semibold tracking-wide uppercase"
      >
        Cerrar sesión
      </button>
    </>
  ) : (
    <>
      <Link
        href="/iniciar-sesion"
        onClick={() => setIsMobileMenuOpen(false)}
        className="py-3 text-sm font-semibold tracking-wide uppercase"
      >
        Ingresar
      </Link>

      <Link
        href="/crear-cuenta"
        onClick={() => setIsMobileMenuOpen(false)}
        className="mt-4 bg-neutral-900 text-white px-6 py-3 text-center text-sm font-semibold tracking-wide uppercase hover:bg-neutral-800 transition-colors"
      >
        Crear cuenta
      </Link>
    </>
  )}
</nav>
    </div>
  )}
</header>
  );
}