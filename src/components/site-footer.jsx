import Link from 'next/link';

export function SiteFooter() {
  return (
          <footer className="-mt-20 bg-[#1f4d36] pt-32 pb-8 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-4 text-sm">
          {[
            ["About & Services", ["Pet Grooming", "Products", "Our Story", "Blog"]],
            ["Products", ["Kits", "Collars", "Leashes", "Accessories"]],
            ["Company", ["About Us", "Careers", "Privacy Policy", "Terms"]],
            ["Information", ["hello@pawbliss.com", "+1 (555) 123-4567", "New York, USA"]],
          ].map(([h, l]) => (
            <div key={h}>
              <h4 className="mb-3 font-bold text-[#f5a800]">{h}</h4>
              <ul className="space-y-2 text-white/70">{l.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">© 2026 Paw Bliss. All rights reserved.</p>
      </footer>
  );
}
