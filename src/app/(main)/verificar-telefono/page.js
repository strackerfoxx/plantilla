import AuthGuard from '@/components/AuthGuard'
import VerifyPhone from '@/components/ReUsableComponents/VerifyPhone';

export const metadata = {
  title: 'Verificación de teléfono',
  description: 'Verifica tu número para acceder a Barbería y salón Alex, reservar citas y gestionar tu servicio preferido.'
};

export default async function VerificarTelefonoPage({ searchParams }) {
  const { phone } = await searchParams;
  return (
    <AuthGuard guestOnly>
      <VerifyPhone phone={phone} />
    </AuthGuard>
  );
}
