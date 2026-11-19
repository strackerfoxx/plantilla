import { Clock, DollarSign } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="grow p-6">
        <h3 className="mb-2 text-2xl font-bold text-foreground">{service.name}</h3>
        <p className="mb-6 line-clamp-3 text-muted-foreground">{service.description}</p>

        <div className="mb-6 flex flex-col gap-3">
          <div className="flex items-center text-muted-foreground">
            <Clock className="mr-2 h-5 w-5 text-primary" />
            <span>{service.durationMin} minutos</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <DollarSign className="mr-2 h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">{service.price} MXN</span>
          </div>
        </div>
      </div>

      <div className="mt-auto px-6 pb-6">
        <Link
          href={`/agendar?serviceId=${service.id}`}
          className="block w-full rounded-xl bg-primary px-4 py-3 text-center font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Agendar servicio
        </Link>
      </div>
    </article>
  );
}
