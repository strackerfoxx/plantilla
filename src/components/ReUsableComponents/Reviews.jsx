import { Star, Quote } from "lucide-react";
import { testimonials as reviews } from '@/lib/content';

export default function Reviews() {
  return (
    <section id="opiniones" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container max-w-6xl relative z-10">
        <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-lg text-slate-600">
              Experiencias reales de personas que han recuperado su calidad de vida.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => {
            let initials = 'U';
            if (review.name === 'Bella') initials = 'B';
            else if (review.name === 'Christian Hernandez') initials = 'CH';
            else if (review.name === 'Vázquez Amaya Andrea') initials = 'VA';

            return (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                  <div className="flex text-yellow-400 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current mr-1" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-8 leading-relaxed line-clamp-6">
                    &quot;{review.text}&quot;
                  </p>
              </div>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white ${
                    index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-blue-200 text-blue-800' : 'bg-teal-700'
                }`}>
                  {initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{review.name}</h4>
                  <p className="text-xs text-slate-500">Paciente</p>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
