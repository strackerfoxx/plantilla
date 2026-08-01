"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Diana Cecilia Serralde Vallarta",
    date: "Hace 2 meses",
    rating: 5,
    text: "Me encantó el servicio, la atención del personal es excelente y muy servicial. Los resultados de depilación se empezaron a ver desde las primeras sesiones y estoy encantada."
  },
  {
    name: "Mirel Maya",
    date: "Hace 8 meses",
    rating: 5,
    text: "Excelente lugar para hacerse tratamientos estéticos. El personal es muy amable y muy atento, lo recomiendo mucho."
  },
  {
    name: "Axel Martínez Ramírez",
    date: "Hace 4 años",
    rating: 5,
    text: "Gran servicio y de calidad. La atención del personal es excelente; son muy serviciales. Los resultados se empiezan a ver en las primeras sesiones."
  },
  {
    name: "Fernanda M.",
    date: "Hace 3 años",
    rating: 5,
    text: "Una clínica donde puedes recibir una excelente atención desde el momento en que entras. Se adaptan a tus necesidades y los tratamientos de depilación con luz pulsada ofrecen excelentes resultados."
  },
  {
    name: "Shirley Sotelo Mata",
    date: "Hace 4 años",
    rating: 5,
    text: "El servicio es excelente, todas súper amables y atentas. Me han ayudado mucho con mis tratamientos y he visto resultados visibles muy pronto."
  },
  {
    name: "Itzel Magali M. Rivas",
    date: "Hace un año",
    rating: 5,
    text: "Excelente atención y seguimiento por parte del equipo. Aquí sí se ven los resultados."
  },
  {
    name: "Ivette Gómez",
    date: "Hace 5 años",
    rating: 5,
    text: "Soy clienta desde hace más de un año, siempre puntual y muy amable. Con los tratamientos he logrado los resultados que esperaba."
  },
  {
    name: "Ximena Ochoa",
    date: "Hace 3 años",
    rating: 5,
    text: "Llevo tiempo cuidándome en esta clínica, el servicio y la atención son excelentes y los postoperatorios me han ayudado mucho en mis recuperaciones."
  },
  {
    name: "Monserrat Olivo",
    date: "Hace 2 años",
    rating: 5,
    text: "Súper recomendado. Desde la primera sesión vi cambios y a la tercera ya casi no tenía vello. El trato fue súper amable."
  },
  {
    name: "César Valverde",
    date: "Hace 4 años",
    rating: 4,
    text: "Excelente trato, siempre te reciben con una sonrisa. Muchas promociones y los faciales son muy buenos y relajantes."
  },
  {
    name: "Ana Barradas",
    date: "Hace 2 años",
    rating: 5,
    text: "Recomiendo ampliamente la clínica. El equipo de cosmetólogas tiene la experiencia necesaria para realizar los postoperatorios y la atención fue fantástica."
  },
  {
    name: "Claudia Ivonne Jiménez Medina",
    date: "Hace 3 años",
    rating: 5,
    text: "Excelente servicio del personal, muy profesional. Quedé muy satisfecha con los resultados del tratamiento sugerido."
  }
];

function Rating({ rating = 5 }) {
  return (
    <div className="flex gap-1 text-secondary" aria-label={`Calificación de ${rating} estrellas`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`size-4 ${index < rating ? "fill-current" : "fill-none stroke-current"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goToSlide = (index) => {
    const carousel = carouselRef.current;
    const card = carousel?.children[index];

    if (carousel && card) {
      carousel.scrollTo({ left: card.offsetLeft - carousel.offsetLeft, behavior: "smooth" });
      setCurrentSlide(index);
    }
  };

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const closestIndex = Array.from(carousel.children).reduce((closest, card, index) => (
      Math.abs(card.offsetLeft - carousel.offsetLeft - carousel.scrollLeft) < Math.abs(carousel.children[closest].offsetLeft - carousel.offsetLeft - carousel.scrollLeft)
        ? index
        : closest
    ), 0);
    setCurrentSlide(closestIndex);
  };

  useEffect(() => {
    if (isHovered) return undefined;

    const autoplay = window.setInterval(() => {
      setCurrentSlide((slide) => {
        const nextSlide = (slide + 1) % reviews.length;
        const carousel = carouselRef.current;
        const card = carousel?.children[nextSlide];

        if (carousel && card) {
          carousel.scrollTo({ left: card.offsetLeft - carousel.offsetLeft, behavior: "smooth" });
        }

        return nextSlide;
      });
    }, 5000);

    return () => window.clearInterval(autoplay);
  }, [isHovered]);

  return (
    <section id="opiniones" className="bg-[#f5f3f0] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 border-b border-neutral-300 pb-10 md:mb-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-secondary">Opiniones</p>
            <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter text-neutral-900 sm:text-5xl md:text-6xl">Su experiencia,<br />nuestra inspiración</h2>
          </div>
          <div className="flex items-center gap-4 md:justify-self-end">
            <span className="text-5xl font-black tracking-tighter text-neutral-900">4.6</span>
            <div><Rating /><p className="mt-2 text-xs font-bold uppercase tracking-wider text-neutral-500">Opiniones de clientes</p></div>
          </div>
        </div>

        <div
          className="relative md:px-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="grid snap-x snap-mandatory grid-flow-col auto-cols-[86%] gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:auto-cols-[calc((100%-1rem)/2)] lg:auto-cols-[calc((100%-2rem)/3)]"
            aria-label="Carrusel de reseñas"
          >
            {reviews.map((review) => (
              <article key={review.name} className="flex min-h-[320px] snap-start flex-col bg-white p-7 sm:p-8 md:p-10">
                <div className="flex items-start justify-between gap-4"><Rating rating={review.rating} /><Quote className="size-8 text-primary/25" aria-hidden="true" /></div>
                <p className="mt-8 text-lg leading-relaxed text-neutral-700">“{review.text}”</p>
                <footer className="mt-auto pt-8"><p className="font-black uppercase tracking-tight text-neutral-900">{review.name}</p><p className="mt-1 text-xs font-bold uppercase tracking-wider text-neutral-500">{review.date}</p></footer>
              </article>
            ))}
          </div>

          <button type="button" onClick={() => goToSlide((currentSlide - 1 + reviews.length) % reviews.length)} className="absolute left-0 top-[calc(50%-1.5rem)] hidden size-11 -translate-y-1/2 place-items-center border border-neutral-900 bg-[#f5f3f0] text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white md:grid" aria-label="Ver reseña anterior"><ChevronLeft className="size-5" /></button>
          <button type="button" onClick={() => goToSlide((currentSlide + 1) % reviews.length)} className="absolute right-0 top-[calc(50%-1.5rem)] hidden size-11 -translate-y-1/2 place-items-center bg-neutral-900 text-white transition-colors hover:bg-primary md:grid" aria-label="Ver siguiente reseña"><ChevronRight className="size-5" /></button>

          <div className="mt-6 flex items-center justify-between gap-4 md:justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500"><span className="text-neutral-900">{String(currentSlide + 1).padStart(2, "0")}</span> / {String(reviews.length).padStart(2, "0")}</p>
            <div className="flex gap-2 md:hidden">
              <button type="button" onClick={() => goToSlide((currentSlide - 1 + reviews.length) % reviews.length)} className="grid size-11 place-items-center border border-neutral-900 text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white" aria-label="Ver reseña anterior"><ChevronLeft className="size-5" /></button>
              <button type="button" onClick={() => goToSlide((currentSlide + 1) % reviews.length)} className="grid size-11 place-items-center bg-neutral-900 text-white transition-colors hover:bg-primary" aria-label="Ver siguiente reseña"><ChevronRight className="size-5" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
