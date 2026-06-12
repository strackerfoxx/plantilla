import Image from 'next/image';

export default function Promotions() {
  return (
    <section className="section-padding bg-slate-50" id="promociones">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-secondary-900 sm:text-4xl">Promociones Especiales</h2>
          <p className="mt-4 text-lg text-slate-500">Aprovecha nuestros descuentos de temporada y date un momento de relajación.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative h-64 overflow-hidden rounded-2xl group cursor-pointer shadow-md">
            <Image src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1170&auto=format&fit=crop" alt="Promoción Masaje en Pareja" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 768px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
              <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full w-max mb-3 uppercase tracking-wider">20% de Descuento</span>
              <h3 className="text-2xl font-bold text-white mb-2">Masaje Relajante en Pareja</h3>
              <p className="text-white/90">Disfruta de una hora de relajación total junto a tu persona favorita.</p>
            </div>
          </div>
          <div className="relative h-64 overflow-hidden rounded-2xl group cursor-pointer shadow-md">
             <Image src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1170&auto=format&fit=crop" alt="Promoción Facial Limpieza Profunda" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 768px) 50vw, 100vw" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
              <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full w-max mb-3 uppercase tracking-wider">Promoción del Mes</span>
              <h3 className="text-2xl font-bold text-white mb-2">Facial Hidratación Profunda</h3>
              <p className="text-white/90">Renueva tu piel con nuestro tratamiento estrella. Incluye mascarilla de oro.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
