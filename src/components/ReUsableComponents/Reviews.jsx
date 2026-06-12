import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Berenice Sa An",
    date: "Hace 5 meses",
    text: "Aunque la experiencia fue increíblemente maravillosa con la terapeuta Chío y los resultados de los tratamientos se notan… El trato de la Srita. Danna al agendar las citas es francamente deplorable...",
    rating: 5,
  },
  {
    name: "Luz Areli Hernandez",
    date: "Hace 8 meses",
    text: "Llevo 6 sesiones y estoy muy feliz con el resultado, las chicas estan super capacitadas, me ha atendido Sam, Dana y Vane y excelentes sesiones. El lugar esta siempre limpio y siempre al pendiente...",
    rating: 5,
  },
  {
    name: "Andrea Tapia",
    date: "Hace 8 meses",
    text: "Me encanta el servicio que me dan, súper recomiendo. Todas las chavas que me han tratado son súper buenas y súper lindas. Además de que tienen excelentes precios y flexibilidad de horarios",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="opiniones" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Opiniones de Clientes</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-secondary-900 sm:text-4xl">
              Lo que dicen de nosotros
            </p>
            <p className="mt-4 text-xl text-slate-500">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-secondary-900">4.4</span>
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-500 mt-1">Basado en 137 opiniones de Google</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-100" />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 relative z-10 line-clamp-4">
                &quot;{review.text}&quot;
              </p>
              <div className="mt-auto flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://maps.google.com/?q=Tailor+Made+Beauty+SPA"
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 hover:underline"
          >
            Ver todas las opiniones en Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
