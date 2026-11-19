import AuthGuard from "@/components/AuthGuard";
import AppointmentList from "@/components/ReUsableComponents/AppointmentList";
import LoginPrompt from "@/components/ReUsableComponents/LoginPrompt";

export const metadata = {
  title: "Mis reservas",
  description: "Consulta y administra las reservas de cuidado de tu mascota.",
};

export default function MisCitasPage() {
  return (
    <AuthGuard requireAuth fallback={<LoginPrompt />}>
      <AppointmentList />
    </AuthGuard>
  );
}
