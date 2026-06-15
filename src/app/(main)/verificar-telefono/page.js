import AuthGuard from '@/components/AuthGuard'
import VerifyPhone from '@/components/ReUsableComponents/VerifyPhone';

export const metadata = {
  title: 'Verificación de teléfono',
  description: 'Verifica tu número de teléfono para acceder a tus citas en Gut Klinik Fisioterapia.'
};

export default async function VerificarTelefonoPage({ searchParams }) {
  const { phone } = await searchParams;
  return (
    <AuthGuard guestOnly>
      <VerifyPhone phone={phone} />
    </AuthGuard>
  );
}
