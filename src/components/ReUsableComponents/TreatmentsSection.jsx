"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const treatments = [
  {
    title: "Medicina Estética",
    description: "Tratamientos médicos personalizados, basados en diagnóstico profesional y orientados a resultados armónicos y naturales.",
    imgUrl: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=800&auto=format&fit=crop",
    offset: "md:mt-0"
  },
  {
    title: "Tratamientos Faciales",
    description: "Limpiezas, hidrataciones y tratamientos antiedad para una piel radiante, sana y visiblemente más joven.",
    imgUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    offset: "md:mt-12"
  },
  {
    title: "Corporales",
    description: "Masajes reductivos, moldeadores y de relajación profunda para el bienestar físico y mental.",
    imgUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    offset: "md:mt-24"
  },
  {
    title: "Tecnología",
    description: "Equipos de vanguardia para resultados más rápidos, efectivos y seguros en todos nuestros procedimientos.",
    imgUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    offset: "md:mt-8"
  },
  {
    title: "Mantenimiento en casa",
    description: "Productos dermocosméticos recomendados por expertos para prolongar los resultados en casa.",
    imgUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
    offset: "md:mt-16"
  }
];

export default function TreatmentsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === treatments.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? treatments.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f3f0] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase mb-3">Atención Personalizada</p>
            <h2 className="text-4xl md:text-5xl text-[#0d3b36] font-serif tracking-tight">Nuestros tratamientos</h2>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              className="p-3 border border-neutral-300 hover:border-neutral-500 transition-colors bg-transparent"
              aria-label="Anterior tratamiento"
            >
              <ChevronLeft size={20} className="text-neutral-500" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 border border-neutral-300 hover:border-neutral-500 transition-colors bg-transparent"
              aria-label="Siguiente tratamiento"
            >
              <ChevronRight size={20} className="text-neutral-500" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-4 md:h-[600px] items-start">
          {treatments.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={cn(
                  "relative cursor-pointer transition-all duration-700 ease-in-out flex flex-col group",
                  isActive ? "w-full md:w-[450px] h-[400px] md:h-[500px]" : "w-full md:w-[200px] h-[300px] md:h-[400px]",
                  !isActive && item.offset,
                  isActive && "md:mt-0"
                )}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative w-full h-full rounded-md overflow-hidden bg-neutral-200">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay for active item */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-[#0d3b36]/90 via-[#0d3b36]/40 to-transparent flex flex-col justify-end p-8 text-white transition-opacity duration-700",
                      isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                  >
                    <h3 className="text-3xl font-serif italic mb-3 transform transition-transform duration-500 delay-100 translate-y-0 opacity-100">{item.title}</h3>
                    <p className="text-sm text-neutral-200 mb-6 max-w-xs leading-relaxed transform transition-transform duration-500 delay-200 translate-y-0 opacity-100">
                      {item.description}
                    </p>
                    <div className="transform transition-transform duration-500 delay-300 translate-y-0 opacity-100">
                      <Link
                        href="/servicios"
                        className="inline-flex items-center text-xs font-bold tracking-widest uppercase hover:text-neutral-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Ver Tratamientos <ArrowRight size={14} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Title for inactive item (desktop only since on mobile it stacks differently, but let's show it anyway) */}
                <div
                  className={cn(
                    "mt-4 text-center transition-opacity duration-500",
                    isActive ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
                  )}
                >
                  <h3 className="text-[#0d3b36] font-serif text-lg leading-tight w-4/5 mx-auto">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
