import AuthGuard from '@/components/AuthGuard'
import AgendarClient from './AgendarClient';
import LoginPrompt from '@/components/ReUsableComponents/LoginPrompt';

export const metadata = {
  title: 'Agendar cita',
  description: 'Agenda tu próxima cita en Gut Klinik Fisioterapia para rehabilitación, entrenamiento funcional o tratamiento de lesiones.'
};

export default async function AgendarPage({ searchParams }) {
  const { id } = await searchParams;
  return (
    <AuthGuard requireAuth fallback={<LoginPrompt />}>
      <AgendarClient id={id} />
    </AuthGuard>
  );
}
