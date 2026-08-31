import AuthGuard from '@/components/AuthGuard'
import { AuthForm } from '@/components/ReUsableComponents/create-user-form';

export const metadata = {
  title: 'Crear cuenta',
  description: 'Crea tu cuenta en Barbería y salón Alex para reservar citas, ver servicios y agendar tu próximo corte o tratamiento.'
};

export default function CrearCuentaPage() {
  return (
    <AuthGuard guestOnly>
      <AuthForm />
    </AuthGuard>
  );
}
