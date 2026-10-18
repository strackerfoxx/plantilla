"use client";

import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "CLASSIC POMADE",
    price: 22.00,
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=800&auto=format&fit=crop",
    description: "Pomada clásica de base agua que ofrece una fijación fuerte con un brillo medio. Ideal para estilos pulidos como pompadours y slick backs. Se lava fácilmente sin dejar residuos.",
  },
  {
    id: 2,
    name: "MATTE CLAY WAX",
    price: 24.00,
    image: "https://images.unsplash.com/photo-1602023427299-a44c1cfb4854?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Cera de arcilla con acabado mate y textura flexible. Aporta volumen y definición duradera, perfecta para looks naturales y texturizados que puedes remodelar durante el día.",
  },
  {
    id: 3,
    name: "PREMIUM BEARD OIL",
    price: 28.00,
    image: "https://images.unsplash.com/photo-1677511255825-78533743b356?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Aceite premium para barba enriquecido con aceites esenciales de argán y jojoba. Hidrata la piel, suaviza el vello facial y elimina la picazón, dejando un aroma varonil a madera y cítricos.",
  },
  {
    id: 4,
    name: "SOOTHING AFTERSHAVE",
    price: 30.00,
    image: "https://plus.unsplash.com/premium_photo-1661270415179-f7bcff006edb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Loción calmante para después del afeitado. Su fórmula sin alcohol con aloe vera y manzanilla alivia instantáneamente la irritación, cerrando los poros y refrescando la piel.",
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
        <div className=" text-center">
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter leading-[0.9] text-black flex space-between items-center justify-center gap-2 md:gap-4">
              PRODUCTOS DE ALEX
            </h2>
          </div>

        {/* Products Grid / Carousel */}
        <div className="relative group -mx-4 sm:-mx-6 lg:mx-0">
          {/* Lateral Left Control */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border border-neutral-200 rounded-full shadow-lg items-center justify-center hover:bg-neutral-50 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Previous product"
          >
            <ArrowLeft size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-8 px-4 sm:px-6 lg:px-0 snap-x snap-mandatory no-scrollbar scroll-smooth w-full"
          >
            {products.map((product) => (
              <div
                key={product.id}
              className="min-w-[85vw] sm:min-w-[60vw] md:min-w-[350px] lg:min-w-[400px] bg-white rounded-xl p-4 shadow-sm border border-neutral-100 flex flex-col snap-center shrink-0 cursor-pointer"
              onClick={() => openModal(product)}
            >
              <div className="relative w-full h-80 bg-neutral-100 rounded-lg overflow-hidden mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-neutral-700 text-white text-lg font-black px-3 py-1 shadow-md">
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
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-neutral-700 text-white border border-neutral-700 rounded-full shadow-lg items-center justify-center hover:bg-red-700 transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0"
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
              <p className="text-neutral-700 text-3xl font-black mb-8">${selectedProduct.price.toFixed(2)}</p>

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
