"use client";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Arya Jacobs",
    date: "Hace un mes",
    text: "Ojalá pudiera dar más estrellas. Llevamos años llevando a nuestras mascotas con el doctor Enrique, quien es, sin lugar a duda, el más extraordinario médico veterinario que hemos conocido. Su dedicación es inigualable.",
    rating: 5,
  },
  {
    name: "leyla mariana",
    date: "Hace 3 meses",
    text: "Mi experiencia ha sido solo con vacunas desde que rescaté a mis dos gatitas. El trato y la atención siempre es buena. Recomiendo ir con disponibilidad de tiempo ya que puede ser algo tardado porque no hay citas. Al día de hoy mis gatitas están sanas :)",
    rating: 5,
  },
  {
    name: "Claudia Solis",
    date: "Hace un año",
    text: "El doctor Enrique es el mejor. Salvó a mi perrita salchicha que fue atacada por otro perro y quedó muy mal herida en la parte de la cabeza, tenía fracturada la mandíbula y un ojito a punto de salirse. También le extirpó un tumor a otra de mis perritas.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="opiniones" className="p-4 md:p-8 max-w-7xl mx-auto w-full relative overflow-hidden mt-8 mb-8">
      <div className="bg-[#1e293b] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm text-blue-400 font-black tracking-widest uppercase mb-3">Opiniones de Pacientes</h2>
              <p className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                Lo que dicen de nosotros
              </p>
              <p className="text-lg text-slate-300">
                La salud de tus mascotas y tu tranquilidad son nuestra mejor carta de presentación.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-5xl font-black text-white">4.7</span>
                <div className="flex flex-col gap-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-slate-300">Basado en 621 opiniones</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 transition-colors relative flex flex-col h-full"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-200 leading-relaxed mb-8 relative z-10 flex-grow text-sm md:text-base">
                  &quot;{review.text}&quot;
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-200 font-black text-xl border border-blue-400/30">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-xs text-slate-400 font-medium">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
