import { Clock, DollarSign } from "lucide-react";
import Link from "next/link";

export default function ServiceCard({service}) {
  return (
    <div
        key={service.id}
        className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow"
        >
        <div className="p-6 grow">
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">
            {service.name}
            </h3>
            <p className="text-slate-600 mb-6 line-clamp-3">
            {service.description}
            </p>

            <div className="flex flex-col gap-3 mb-6">
            <div className="flex items-center text-slate-500">
                <Clock className="w-5 h-5 mr-2 text-primary-500" />
                <span>{service.durationMin} minutos</span>
            </div>
            <div className="flex items-center text-slate-500">
                <DollarSign className="w-5 h-5 mr-2 text-emerald-500" />
                <span className="font-semibold text-slate-700">${service.price} MXN</span>
            </div>
            </div>
        </div>

        <div className="px-6 pb-6 mt-auto">
            <Link
            href={`/agendar?serviceId=${service.id}`}
            className="block w-full py-3 px-4 bg-primary text-primary-foreground font-semibold text-center rounded-xl hover:bg-primary-600 hover:text-white transition-colors"
            >
            Agendar Cita
            </Link>
        </div>
    </div>
  )
}
