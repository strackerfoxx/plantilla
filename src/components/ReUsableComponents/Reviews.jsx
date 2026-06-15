import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Lalin Pinguin",
    date: "Hace 4 meses",
    text: "El sauna es reducido, pero funciona correctamente y cumple con su propósito, que es brindar un momento de relajación... Las masajistas son muy amables, profesionales y atentas en todo momento.",
    rating: 5,
  },
  {
    name: "Isabel Torres",
    date: "Hace 10 meses",
    text: "Experiencia 10/10. El trato super amable de parte del personal, muy puntuales y te brindan toda la atención posible; en todo momento te tratan con respeto.",
    rating: 5,
  },
  {
    name: "Sara Del Villar",
    date: "Hace 6 meses",
    text: "Mi experiencia en este SPA, junto con mi esposo, fue verdaderamente maravillosa... El masaje nos encantó: fue relajante, delicado y justo lo que necesitábamos para desconectar.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="opiniones" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-serif tracking-tight text-foreground">
            Our Customers Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 hover:shadow-md transition-shadow relative"
            >
              <div className="flex text-yellow-400 mb-4 gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-8 relative z-10 text-sm leading-relaxed min-h-[100px]">
                {review.text}
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">Local Guide</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-secondary/40" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="text-4xl font-bold text-foreground">4.6</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={i < 4 ? "w-5 h-5 fill-current" : "w-5 h-5"} />
              ))}
            </div>
            <p className="text-sm font-medium text-muted-foreground mt-1">59 opiniones de Google</p>
          </div>
        </div>
      </div>
    </section>
  );
}
