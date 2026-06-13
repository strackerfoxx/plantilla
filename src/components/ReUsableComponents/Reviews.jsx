import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Bethany Lerey",
    date: "Hace 4 meses",
    text: "Siempre que vamos nos atienden super bien. Mi hijo tiene el cabello super rebelde y Chino (uno de los barberos) es el único barbero que le deja su cabello increíble. Lo recomiendo muchísimo. Los costos no son exorbitantes Los chicos son buenísima onda y venden muchos productos especializados.",
    rating: 5,
  },
  {
    name: "Laloo Solis",
    text: "Excelente atención, e instalaciónes de primera. Corte de cabello rápido y muy bien. Miguel es quien siempre me lo corta. Es amigo",
    rating: 5,
    date: 'Hace 3 meses'
  },
  {
    name: "ゲリコシェイラ",
    text: "Llevo yendo poco más de un año y la verdad es que estoy muy contenta. Había tenido malas experiencias en otros lugares y desde que voy allí con Juanito salgo encantada. 10/10",
    rating: 5,
    date: 'Hace 7 meses'
  }
];

export default function Reviews() {
  return (
    <section id="opiniones" className="py-24 bg-background relative overflow-hidden border-t border-border">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm text-primary font-bold tracking-widest uppercase">Opiniones de Clientes</h2>
            <p className="mt-2 text-3xl leading-8 font-anton tracking-wide text-foreground sm:text-5xl uppercase">
              Lo que dicen de nosotros
            </p>
            <p className="mt-4 text-xl text-muted-foreground">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end bg-secondary/50 p-6 rounded-none border border-border shadow-sm">
            <div className="flex items-center gap-4">
              <span className="text-5xl font-anton text-foreground">4.1</span>
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-6 h-6 ${i < 4 ? 'fill-current text-primary' : 'text-muted-foreground'}`} />
                ))}
              </div>
            </div>
            <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground mt-2">Basado en 234 opiniones de Google</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-secondary/30 p-8 border border-border hover:border-primary/50 transition-colors relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
              <div className="flex text-primary mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-8 relative z-10 line-clamp-5">
                &quot;{review.text}&quot;
              </p>
              <div className="mt-auto flex items-center gap-4 border-t border-border/50 pt-4">
                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center text-foreground font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase tracking-wide">{review.name}</h4>
                  <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://maps.app.goo.gl/o1HVK5Yn8JdY1jYy5"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center text-primary font-bold tracking-widest uppercase hover:text-primary/80 transition-colors border-b-2 border-primary pb-1"
          >
            Ver todas las opiniones en Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
