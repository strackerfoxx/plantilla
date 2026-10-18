import AuthGuard from '@/components/AuthGuard'
import { LoginForm } from '@/components/ReUsableComponents/login-form';

export const metadata = {
  title: 'Iniciar sesión',
  description: 'Inicia sesión en Barbería y salón Alex con tu teléfono para gestionar tus citas y servicios favoritos.'
};

export default function IniciarSesionPage() {
  return (
    <AuthGuard guestOnly>
      <LoginForm />
    </AuthGuard>
  );
}
