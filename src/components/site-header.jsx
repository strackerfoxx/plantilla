"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowLeft, Search, MoreVertical } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent pointer-events-none">
      <div className="flex h-14 items-center justify-between px-4 mt-2">
        {/* Back Button */}
        <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow flex items-center justify-center pointer-events-auto text-slate-700">
           <ArrowLeft className="w-6 h-6" />
        </div>

        {/* Right Actions */}
        <div className="flex gap-2 pointer-events-auto">
          <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow flex items-center justify-center text-slate-700">
             <Search className="w-5 h-5" />
          </div>

          <button
            onClick={toggleMobileMenu}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur shadow flex items-center justify-center text-slate-700 focus:outline-none"
            aria-label="Abrir menú"
          >
             {isMobileMenuOpen ? <X className="h-5 h-5" /> : <MoreVertical className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Hidden Mobile Menu that overlays when MoreVertical is clicked */}
      {isMobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 right-4 w-48 bg-white rounded-lg shadow-xl py-2 border border-slate-100 z-50">
          <nav className="flex flex-col">
            {token ? (
              <>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                  className="px-4 py-2 text-sm text-left text-red-600 hover:bg-slate-50 font-medium border-t border-slate-100 mt-1"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <>
                <Link href="/servicios" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-medium">Servicios</Link>
                <Link href="/agendar" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-medium">Agendar</Link>
                <Link href="/iniciar-sesion" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 font-medium border-t border-slate-100 mt-1">Ingresar</Link>
                <Link href="/crear-cuenta" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 text-sm text-blue-600 hover:bg-slate-50 font-medium">Crear cuenta</Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
