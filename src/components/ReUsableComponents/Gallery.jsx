import React from 'react';

export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
      alt: "Herramientas de barbería",
      type: "image",
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
      alt: "Corte de cabello moderno",
      type: "image",
    },
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      alt: "Video de prueba",
      type: "video",
    },
    {
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
      alt: "Interior de la barbería",
      type: "image",
    },
    {
      src: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=800&auto=format&fit=crop",
      alt: "Lavado de cabello",
      type: "image",
    },
    {
      src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800&auto=format&fit=crop",
      alt: "Atención personalizada",
      type: "image",
    },
  ];

  return (
    <section id="galeria" className="py-24 md:py-32 bg-white text-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-neutral-500 text-sm font-bold uppercase tracking-[0.2em] mb-4">Nuestro Trabajo</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-neutral-900">
            Galería
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-medium">
            Descubre nuestras instalaciones, cortes y el ambiente de Barbería y salón Alex. Un vistazo a lo que ofrecemos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((media, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group ${
                index === 2 ? 'sm:col-span-2 lg:col-span-2 row-span-2' : ''
              } ${index === 0 ? 'row-span-2' : ''}`}
              style={{ minHeight: index === 2 ? '400px' : '250px' }}
            >
              <div className="absolute inset-0 bg-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
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
    </section>
  );
}
