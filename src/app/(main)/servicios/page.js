import { ServiciosClient } from "./ServiciosClient";

export const metadata = {
  title: "Servicios",
  description: "Consulta los servicios de Barbería y salón Alex: cortes modernos, alisados, estética y cuidado personal en Tlalpan, CDMX."
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
