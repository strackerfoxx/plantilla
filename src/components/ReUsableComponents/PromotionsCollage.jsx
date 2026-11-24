"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  "/promo1.jpeg",
  "/promo2.jpeg",
  "/promo3.jpeg",
  "/promo4.jpeg",
  "/promo5.jpeg",
  "/promo6.jpeg",
  "/promo7.jpeg",
  "/promo8.jpeg",
  "/promo9.jpeg",
];

export default function PromotionsCollage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const changeImage = (direction) => {
    setSelectedImage((currentImage) => {
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + direction + images.length) % images.length;
      return images[nextIndex];
    });
  };

  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 flex justify-center sm:mb-8">
          <button
            type="button"
            className="group relative block w-full max-w-[320px] overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            onClick={() => setSelectedImage(images[0])}
            aria-label="Ampliar promoción 1"
          >
            <span className="relative block aspect-[3/4]">
              <Image
                src={images[0]}
                alt="Promoción 1"
                fill
                priority
                sizes="(max-width: 640px) 90vw, 320px"
                className="object-cover"
              />
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {images.slice(1).map((src, index) => {
            const promotionNumber = index + 2;

            return (
              <button
                key={src}
                type="button"
                className="group relative block w-full overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                onClick={() => setSelectedImage(src)}
                aria-label={`Ampliar promoción ${promotionNumber}`}
              >
                <span className="relative block aspect-[3/4]">
                  <Image
                    src={src}
                    alt={`Promoción ${promotionNumber}`}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                    className="object-cover"
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Promoción ${images.indexOf(selectedImage) + 1} ampliada`}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-10 rounded-full p-2 text-white transition-colors hover:bg-white/10"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar promoción ampliada"
          >
            <X size={28} />
          </button>

          <button
            type="button"
            className="absolute left-2 z-10 rounded-full p-2 text-white transition-colors hover:bg-white/10 sm:left-6"
            onClick={(event) => {
              event.stopPropagation();
              changeImage(-1);
            }}
            aria-label="Promoción anterior"
          >
            <ChevronLeft size={36} />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={`Promoción ${images.indexOf(selectedImage) + 1} ampliada`}
              fill
              sizes="(max-width: 768px) 90vw, 768px"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            className="absolute right-2 z-10 rounded-full p-2 text-white transition-colors hover:bg-white/10 sm:right-6"
            onClick={(event) => {
              event.stopPropagation();
              changeImage(1);
            }}
            aria-label="Siguiente promoción"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </>
  );
}
