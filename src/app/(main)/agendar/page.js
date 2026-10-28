import AuthGuard from '@/components/AuthGuard'
import AgendarClient from './AgendarClient';
import LoginPrompt from '@/components/ReUsableComponents/LoginPrompt';

export const metadata = {
  title: 'Agendar cita',
  description: 'Reserva tu cita en Barbería y salón Alex en Tlalpan, CDMX. Corte de cabello, estética y atención personalizada con agenda rápida.'
};

export default async function AgendarPage({ searchParams }) {
  const { id } = await searchParams;
  return (
    <AuthGuard requireAuth fallback={<LoginPrompt />}>
      <AgendarClient id={id} />
    </AuthGuard>
  );
}
