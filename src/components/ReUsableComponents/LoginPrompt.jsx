import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LoginPrompt() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-[2rem] border border-border/40 shadow-sm max-w-2xl mx-auto my-12 py-16">
      <Calendar className="w-16 h-16 text-[#0f172a] mb-6" />
      <h2 className="text-2xl font-bold text-foreground mb-4">Crea tu cuenta para agendar</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Para poder agendar una cita y ver tu historial, primero crea tu cuenta. Si ya tienes una, podrás iniciar sesión desde allí.
      </p>
      <div className="flex">
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
          <Link href="/crear-cuenta">Crear Cuenta</Link>
        </Button>
      </div>
    </div>
  );
}
