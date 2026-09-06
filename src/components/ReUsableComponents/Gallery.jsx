"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const mediaItems = [
    { src: "/WhatsApp%20Video%202026-09-03%20at%2011.57.03%20AM.mp4", alt: 'Proceso y resultado de tratamientos', type: 'video' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.47.56%20AM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.47.56%20AM%20(1).jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.47.56%20AM%20(2).jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.47.56%20AM%20(3).jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.52.31%20AM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Video%202026-09-03%20at%2011.57.05%20AM.mp4", alt: 'Proceso y resultado de tratamientos', type: 'video' },
    { src: "/WhatsApp%20Video%202026-09-03%20at%2011.47.56%20AM.mp4", alt: 'Proceso y resultado de tratamientos', type: 'video' },
    { src: "/WhatsApp%20Video%202026-09-03%20at%2011.48.55%20AM.mp4", alt: 'Proceso y resultado de tratamientos', type: 'video' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.48.40%20AM%20(1).jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.48.40%20AM%20(2).jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.48.40%20AM%20(3).jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.48.40%20AM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Video%202026-09-03%20at%2011.57.04%20AM.mp4", alt: 'Proceso y resultado de tratamientos', type: 'video' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.50.20%20AM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.51.20%20AM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.52.21%20AM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.53.02%20AM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.53.35%20AM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.54.01%20AM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.54.20%20AM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.54.50%20AM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.55.02%20AM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.55.17%20AM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.56.24%20AM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.57.01%20AM%20(1).jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.57.01%20AM%20(2).jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Image%202026-09-03%20at%2011.57.01%20AM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Video%202026-09-03%20at%2011.57.04%20AM%20(1).mp4", alt: 'Proceso y resultado de tratamientos', type: 'video' },
    { src: "/WhatsApp%20Video%202026-09-03%20at%2011.47.56%20AM%20(1).mp4", alt: 'Proceso y resultado de tratamientos', type: 'video' },
    // { src: "/WhatsApp%20Image%202026-09-03%20at%2012.15.55%20PM.jpeg", alt: 'Proceso y resultado de tratamientos', type: 'image' },
    { src: "/WhatsApp%20Video%202026-09-03%20at%2011.49.47%20AM%20(1).mp4", alt: 'Proceso y resultado de tratamientos', type: 'video' },
    { src: "/WhatsApp%20Video%202026-09-03%20at%2011.49.47%20AM.mp4", alt: 'Proceso y resultado de tratamientos', type: 'video' },
    { src: "/WhatsApp%20Video%202026-09-03%20at%2011.49.36%20AM.mp4", alt: 'Proceso y resultado de tratamientos', type: 'video' },
  ];

  const images = mediaItems;

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const modalNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const modalPrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') modalNext();
      if (e.key === 'ArrowLeft') modalPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, modalNext, modalPrev]);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [modalOpen]);

  return (
    <section id="galeria" className="py-24 md:py-32 bg-white text-neutral-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-neutral-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">Nuestro Trabajo</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-neutral-900">
            Galería
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-medium">
            Descubre nuestras instalaciones, cortes, tratamientos y el ambiente de Barbería y salón Alex. Un vistazo a lo que ofrecemos.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-20 bg-white/90 hover:bg-neutral-900 hover:text-white text-neutral-900 p-2 md:p-3 rounded-full shadow-lg transition-colors border border-neutral-200 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-20 bg-white/90 hover:bg-neutral-900 hover:text-white text-neutral-900 p-2 md:p-3 rounded-full shadow-lg transition-colors border border-neutral-200 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Scroll Area */}
          <div
            ref={carouselRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 pt-2 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {images.map((media, index) => (
              <div
                key={`${media.src}-${index}`}
                onClick={() => openModal(index)}
                className="flex-none w-[380px] sm:w-[420px] md:w-[500px] h-[500px] md:h-[700px] relative overflow-hidden group snap-center cursor-pointer shadow-md rounded-sm"
              >
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-colors duration-300 z-10 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-neutral-900 px-4 py-2 uppercase text-xs font-bold tracking-widest rounded-sm">
                    Ver {media.type === 'video' ? 'Video' : 'Imagen'}
                  </div>
                </div>
                {media.type === 'video' ? (
                  <video
                    src={media.src}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={media.src}
                    alt={media.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/95 backdrop-blur-sm p-4 md:p-8" onClick={closeModal}>
          <button
            onClick={(e) => { e.stopPropagation(); closeModal(); }}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-neutral-400 hover:text-white transition-colors z-[110]"
            aria-label="Cerrar"
          >
            <X size={36} />
          </button>

          <button
            onClick={modalPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors z-[110]"
            aria-label="Anterior"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={modalNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors z-[110]"
            aria-label="Siguiente"
          >
            <ChevronRight size={48} />
          </button>

          <div
            className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {images[currentIndex].type === 'video' ? (
              <video
                src={images[currentIndex].src}
                className="max-w-full max-h-full object-contain"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
            )}
            <div className="absolute bottom-[-40px] text-neutral-400 text-sm tracking-widest uppercase font-bold">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
