import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t bg-background text-foreground py-12">
      <div className="container grid gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Brand section */}
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2" aria-label="Ir al inicio de AMM-arte Spa">
            <span className="block text-xl font-black tracking-widest uppercase font-serif">AMM-ARTE SPA</span>
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
            Clean, modern spa representing trust, simplicity and timeless beauty and relaxation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-semibold mb-4 text-foreground">Quick Links</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link href="/" className="hover:text-primary transition-colors">Shop</Link></li>
            <li><Link href="/servicios" className="hover:text-primary transition-colors">Service</Link></li>
            <li><Link href="/" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link href="#ubicacion" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <p className="font-semibold mb-4 text-foreground">Social Media</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="font-semibold mb-4 text-foreground">Contact info</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Fuentes Plaza, Calz. del Hueso 160-Local 3-C, Coapa, Ex-Hacienda Coapa, CDMX</li>
            <li>+52 55 4542 6063</li>
            <li><a href="https://ammartespa.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ammartespa.com</a></li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>Copyright 2026 - All Rights Reserved</p>
      </div>
    </footer>
  );
}
