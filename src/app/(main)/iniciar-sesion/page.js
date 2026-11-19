import AuthGuard from "@/components/AuthGuard";
import { LoginForm } from "@/components/ReUsableComponents/login-form";

export const metadata = {
  title: "Iniciar sesión",
  description: "Inicia sesión para consultar y administrar tus reservas en Paw Bliss.",
};

export default function IniciarSesionPage() {
  return (
    <AuthGuard guestOnly>
      <LoginForm />
    </AuthGuard>
  );
}
