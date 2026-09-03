"use client";

import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "CREAMY LATE",
    price: 25.00,
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop",
    description: "Un esmalte de uñas premium de larga duración con un acabado brillante. Perfecto para el cuidado de tus manos y darles un toque elegante en cualquier ocasión.",
  },
  {
    id: 2,
    name: "MINI SUGAR OIL",
    price: 15.00,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop",
    description: "Aceite hidratante de cutículas. Protege y revitaliza tus uñas de forma natural, manteniéndolas sanas y fuertes con su uso diario.",
  },
  {
    id: 3,
    name: "OIL FACEWASH",
    price: 30.00,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    description: "Limpiador facial en aceite que remueve impurezas y maquillaje sin resecar la piel. Deja tu rostro suave, limpio e hidratado.",
  },
  {
    id: 4,
    name: "LIPSTICK RED",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop",
    description: "Labial rojo intenso de acabado mate y fórmula intransferible. Realza tus labios con un color vibrante que dura todo el día.",
  }
];

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scrollContainerRef = useRef(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#faf8f6] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-10">
          <div className="lg:w-1/3 flex flex-col gap-8">
            <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
              Hairstylists, cosmetologists, and manicurists, along with receptionists, rank among the most common roles in the beauty salon industry.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 text-right">
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter leading-[0.9] text-black">
              START YOUR SHOPPING<br />
              <span className="flex items-center justify-end gap-2 md:gap-4">
                <svg className="w-10 h-10 md:w-16 md:h-16 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                </svg>
                WITH ALEX
              </span>
            </h2>
          </div>
        </div>

        {/* Products Grid / Carousel */}
        <div className="relative group">
          {/* Lateral Left Control */}
          <button
            onClick={scrollLeft}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-neutral-200 rounded-full shadow-lg flex items-center justify-center hover:bg-neutral-50 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Previous product"
          >
            <ArrowLeft size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {products.map((product) => (
              <div
                key={product.id}
              className="min-w-[280px] md:min-w-[350px] lg:min-w-[400px] w-full max-w-[85vw] bg-white rounded-xl p-4 shadow-sm border border-neutral-100 flex flex-col snap-center shrink-0 cursor-pointer"
              onClick={() => openModal(product)}
            >
              <div className="relative w-full h-80 bg-neutral-100 rounded-lg overflow-hidden mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#cc0000] text-white text-lg font-black px-3 py-1 shadow-md">
                  ${product.price.toFixed(2)}
                </div>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-center">{product.name}</h3>
              </div>
              ))}
          </div>

          {/* Lateral Right Control */}
          <button
            onClick={scrollRight}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#cc0000] text-white border border-[#cc0000] rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Next product"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm" onClick={closeModal}>
          <div
            className="bg-white rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors md:top-4 md:right-4"
              aria-label="Close modal"
            >
              <X size={18} className="text-black" />
            </button>

            <div className="w-full md:w-1/2 h-80 md:h-auto md:min-h-[400px] relative bg-neutral-100">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-block bg-neutral-100 text-neutral-800 text-xs font-bold px-2 py-1 rounded mb-4 w-fit uppercase tracking-wider">
                Detalle del Producto
              </div>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">{selectedProduct.name}</h3>
              <p className="text-[#cc0000] text-3xl font-black mb-8">${selectedProduct.price.toFixed(2)}</p>

              <p className="text-neutral-600 text-lg leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
