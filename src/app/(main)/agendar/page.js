import AuthGuard from "@/components/AuthGuard";
import AgendarClient from "./AgendarClient";
import LoginPrompt from "@/components/ReUsableComponents/LoginPrompt";

export const metadata = {
  title: "Agendar servicio",
  description: "Reserva una sesión de cuidado y estética para tu mascota.",
};

export default async function AgendarPage({ searchParams }) {
  const params = await searchParams;
  const id = params?.id;
  return (
    <AuthGuard requireAuth fallback={<LoginPrompt />}>
      <AgendarClient id={id} />
    </AuthGuard>
  );
}
