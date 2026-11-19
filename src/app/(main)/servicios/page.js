import { ServiciosClient } from "./ServiciosClient";

export const metadata = {
  title: "Servicios",
  description: "Conoce los servicios de cuidado y estética disponibles para tu mascota.",
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
