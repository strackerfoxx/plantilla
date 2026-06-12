import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LoginPrompt() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-[2rem] border border-border/40 shadow-sm max-w-2xl mx-auto my-12 py-16">
      <Calendar className="w-16 h-16 text-[#0f172a] mb-6" />
      <h2 className="text-2xl font-bold text-foreground mb-4">Ingresa para Agendar</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Para poder agendar una cita y ver tu historial, necesitas crear una cuenta o iniciar sesión.
      </p>
      <div className="flex gap-4">
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
          <Link href="/crear-cuenta">Crear Cuenta</Link>
        </Button>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full px-8">
          <Link href="/iniciar-sesion">Iniciar Sesión</Link>
        </Button>
      </div>
    </div>
  );
}
