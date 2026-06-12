import { ServiciosClient } from "./ServiciosClient";

export const metadata = {
  title: "Servicios",
  description: "Consulta los servicios de Dental Lanz: cortes, unas, gelish, microblading, peinados y pedicura."
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
