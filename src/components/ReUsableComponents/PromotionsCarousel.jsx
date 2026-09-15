"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const images = [
  '/promo1.jpeg',
  '/promo2.jpeg',
  '/promo3.jpeg',
  '/promo4.jpeg',
];

export default function PromotionsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (!isModalOpen) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isModalOpen]);

  return (
    <>
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-xl group">
        <div
          className="flex transition-transform duration-500 ease-in-out h-[400px] sm:h-[500px] md:h-[600px]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 relative cursor-pointer"
              onClick={() => {
                setCurrentIndex(index);
                setIsModalOpen(true);
              }}
            >
              <Image
                src={src}
                alt={`Promoción ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/75 z-10"
          aria-label="Anterior promoción"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/75 z-10"
          aria-label="Siguiente promoción"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir a la promoción ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevSlide}
            className="absolute left-4 p-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Anterior promoción"
          >
            <ChevronLeft size={48} />
          </button>

          <div className="relative w-full max-w-6xl h-[80vh] mx-12">
            <Image
              src={images[currentIndex]}
              alt={`Promoción ${currentIndex + 1} ampliada`}
              fill
              className="object-contain"
              priority
            />
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-4 p-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Siguiente promoción"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </>
  );
}
