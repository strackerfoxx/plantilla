import AuthGuard from '@/components/AuthGuard'
import { AuthForm } from '@/components/ReUsableComponents/create-user-form';

export const metadata = {
  title: 'Crear cuenta',
  description: 'Crea tu cuenta en AMM-arte Spa con nombre, teléfono y email opcional.'
};

export default function CrearCuentaPage() {
  return (
    <AuthGuard guestOnly>
      <AuthForm />
    </AuthGuard>
  );
}
