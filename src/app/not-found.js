import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto w-full min-h-[calc(100vh-10rem)] flex items-center justify-center">
      <section className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-[2.5rem] w-full max-w-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-xl shadow-orange-500/20">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl" />

        <div className="relative z-10">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-white/80">Página no encontrada</p>
          <h1 className="mt-4 text-7xl md:text-9xl font-black tracking-tight text-white drop-shadow-sm">404</h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 font-medium max-w-md mx-auto">
            ¡Ups! Parece que te perdiste. Lo sentimos, no pudimos encontrar la página que buscas.
          </p>
          <Link href="/" className="mt-10 inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-black text-orange-600 shadow-lg transition hover:scale-105 hover:shadow-xl">
            Volver al inicio
          </Link>
        </div>
      </section>
    </div>
  );
}
