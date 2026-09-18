import AuthGuard from '@/components/AuthGuard'
import AppointmentList from '@/components/ReUsableComponents/AppointmentList';
import LoginPrompt from '@/components/ReUsableComponents/LoginPrompt';

export const metadata = {
  title: 'Mis citas',
  description: 'Consulta tus citas agendadas en Barbería y salón Alex y gestiona tu próxima visita en Tlalpan, CDMX.'
};

export default function MisCitasPage() {
  return (
    <AuthGuard requireAuth fallback={<LoginPrompt />}>
      <AppointmentList />
    </AuthGuard>
  );
}
