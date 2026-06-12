import { CalendarIcon, CheckCircle2, Clock, Clock3 } from "lucide-react";
import { cn } from '@/lib/utils';
import { useRouter } from "next/navigation";

  const statusLabel = {
    SCHEDULED: 'Agendada',
    CONFIRMED: 'Confirmada',
    COMPLETED: 'Completada',
    CANCELLED: 'Cancelada',
  };

  const statusStyles = {
    SCHEDULED: 'bg-yellow-100 text-yellow-800',
    CONFIRMED: 'bg-emerald-100 text-emerald-800',
    COMPLETED: 'bg-blue-100 text-blue-800',
    CANCELLED: 'bg-red-100 text-red-800',
  };

export default function AppointmentComponent({ appointments }) {
  const router = useRouter();
  return (
    <>
        {appointments.map((appointment) => (
            <div key={appointment.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 mb-4 gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-primary p-3 rounded-full text-primary-600">
                    <CalendarIcon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                        <p className="text-lg font-semibold text-slate-900">
                            {new Date(
                            appointment.date?.split("T")[0] + "T00:00:00"
                            ).toLocaleDateString("es-MX", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            })}
                        </p>
                        <div className="flex items-center text-slate-500 mt-1 gap-1">
                            <Clock className="w-4 h-4" />
                            <span>
                            {appointment.startTime} - {appointment.endTime}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3">
                    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-sm font gap 1', statusStyles[appointment.status] ?? 'bg-rose-100 text-rose-900')}>
                        {statusLabel[appointment.status] ?? 'Cancelada'}
                    </span>
                    <button
                        onClick={() => router.push(`/agendar?id=${appointment.id}`)}
                        className="text-sm font-medium text-primary-600 hover:text-primary-700 bg-primary-50 hover:bg-primary-100 px-3 py-1.5 rounded-lg transition-colors border border-primary-100"
                    >
                    Editar
                    </button>
                </div>
                </div>

                <div>
                <h4 className="text-sm font-medium text-slate-700 mb-2">Tratamientos:</h4>
                <ul className="space-y-2">
                    {appointment.services.map((svc) => (
                    <li key={svc.id} className="flex justify-between items-center text-slate-600">
                        <span>{svc.service.name}</span>
                        <span className="font-medium">${svc.service.price}</span>
                    </li>
                    ))}
                </ul>
                <div className="flex justify-between items-center pt-4 mt-4 border-t border-slate-100">
                    <span className="font-semibold text-slate-900">Total</span>
                    <span className="font-bold text-lg text-primary-600">${appointment.amount}</span>
                </div>
                </div>
            </div>
        ))}
    </>
  )
}
