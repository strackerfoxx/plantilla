import { ServiciosClient } from "./ServiciosClient";

export const metadata = {
  title: "Servicios",
  description: "Consulta los servicios de AMM-arte Spa: masajes relajantes, faciales hidratantes, sauna y más tratamientos de bienestar."
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
