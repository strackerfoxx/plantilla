import { ServiciosClient } from "./ServiciosClient";

export const metadata = {
  title: "Servicios",
  description: "Consulta los servicios de Gut Klinik Fisioterapia: rehabilitación, tratamiento de lesiones y entrenamiento funcional."
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
