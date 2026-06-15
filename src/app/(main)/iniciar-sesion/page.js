import AuthGuard from '@/components/AuthGuard'
import { LoginForm } from '@/components/ReUsableComponents/login-form';

export const metadata = {
  title: 'Iniciar sesión',
  description: 'Inicia sesión en Centro Veterinario PAWS usando solo tu número de teléfono.'
};

export default function IniciarSesionPage() {
  return (
    <AuthGuard guestOnly>
      <LoginForm />
    </AuthGuard>
  );
}
