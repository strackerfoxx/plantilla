import AuthGuard from "@/components/AuthGuard";
import { AuthForm } from "@/components/ReUsableComponents/create-user-form";

export const metadata = {
  title: "Crear cuenta",
  description: "Crea una cuenta para reservar servicios y administrar las citas de tu mascota.",
};

export default function CrearCuentaPage() {
  return (
    <AuthGuard guestOnly>
      <AuthForm />
    </AuthGuard>
  );
}
