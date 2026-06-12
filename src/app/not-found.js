import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Página no encontrada</p>
      <h1 className="mt-6 text-5xl font-black tracking-tight text-foreground sm:text-6xl">404</h1>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
        Lo sentimos, no pudimos encontrar la página que buscas. Revisa la URL o regresa al inicio.
      </p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90">
        Volver al inicio
      </Link>
    </section>
  );
}
