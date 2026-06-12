"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { getServicesDurationLabel } from '@/lib/formatDuration';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Schedule from '@/components/ReUsableComponents/Schedule';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isSameDay,
  addDays,
} from 'date-fns';
import { es } from 'date-fns/locale';

import { useBusiness } from '@/hooks/useBusiness';
import { useServices } from '@/hooks/useServices';
import { useClient } from '@/hooks/useClient';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'sonner';
import { DateTime } from 'luxon';
import axios from 'axios';

import { getAvailableUsers } from '@/lib/getAvailableUsers';

export default function AgendarClient({ id }) {
  const [selectedServices, setSelectedServices] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [availableUsers, setAvailableUsers] = useState({});
  const [selectedStatus, setSelectedStatus] = useState('SCHEDULED');
  const [originalStatus, setOriginalStatus] = useState(null);
  const isCanceledFromDb = originalStatus === 'CANCELLED' || originalStatus === 'CANCELED';
  const isCanceledSelected = selectedStatus === 'CANCELLED' || selectedStatus === 'CANCELED';
  
  const { business, loading: loadingBusiness } = useBusiness();
  const { services, getServices, loading: loadingServices } = useServices();
  const { token, client } = useClient();

  useEffect(() => {
    // Fetch existing appointment details using the ID and populate state
    // Example: fetch(`/api/appointments/${id}`).then(...).then(data => { ... });
    
    async function fetchAppointment() {
      if (id && token) {
        try {
          const { data } = await axios(`${process.env.NEXT_PUBLIC_API_URL}/appointment/get-appointments-by-id?id=${id}`, {
            headers: {
              Authorization: token
            }
          })
          const appointmentDate = DateTime
            .fromISO(data.appointment.date, { zone: 'utc' })
            .toISODate();
          const calendarDate = DateTime
            .fromISO(appointmentDate)
            .startOf('day')
            .toJSDate();

          setSelectedDate(calendarDate);
          setCurrentDate(calendarDate);
          setSelectedTime(data.appointment.startTime);
          const status = data.appointment.status || 'SCHEDULED';
          setSelectedStatus(status);
          setOriginalStatus(status);
          setSelectedServices(data.appointment.services.map(service => {
            const selectedService = {
              serviceId: service.service.id,
            };

            if (service.user?.id) {
              selectedService.userId = service.user.id;
            }

            return selectedService;
          }));
        } catch (error) {
          if(error.response.status === 404){ 
            router.push("/404")
          }
          
        }
      }
    }
    fetchAppointment()

  }, [id, token]);

  const toggleService = (service) => {
    setSelectedServices(prev => {
      const isSelected = prev.some(selectedService => selectedService.serviceId === service.id);
      if (isSelected) {
        return prev.filter(selectedService => selectedService.serviceId !== service.id);
      }
      return [...prev, { serviceId: service.id }];
    });
  };

  const updateServiceUser = (serviceId, userId) => {
    setSelectedServices(prev =>
      prev.map(service =>
        service.serviceId === serviceId
          ? { ...service, userId }
          : service
      )
    );
  };

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const onDateClick = (day) => {
    setSelectedDate(day);
    setSelectedTime(null); // Reset time when date changes
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-6 px-2">
        <h3 className="text-xl  font-bold text-foreground capitalize">
          {format(currentDate, 'MMMM yyyy', { locale: es })}
        </h3>
        <div className="flex space-x-2">
          <button type="button" onClick={prevMonth} className="p-1 hover:bg-muted rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button type="button" onClick={nextMonth} className="p-1 hover:bg-muted rounded-full transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentDate, { weekStartsOn: 1 });

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center text-xs font-bold text-muted-foreground uppercase py-2">
          {format(addDays(startDate, i), 'EE', { locale: es }).substring(0, 2)}
        </div>
      );
    }
    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;

        const isCurrentMonth = isSameMonth(day, monthStart);
        const isSelectedDay = selectedDate && isSameDay(day, selectedDate);
        const isToday = isSameDay(day, new Date());

        days.push(
          <div key={day} className="p-1 flex justify-center items-center h-12">
            <button
              type="button"
              onClick={() => onDateClick(cloneDay)}
              disabled={isCanceledFromDb || !isCurrentMonth}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-xl text-sm transition-all",
                !isCurrentMonth || isCanceledFromDb ? "text-muted-foreground/30 cursor-not-allowed" : "text-foreground hover:bg-secondary/50",
                isSelectedDay ? "bg-primary text-primary-foreground font-bold hover:bg-primary" : "",
                isToday && !isSelectedDay ? "border border-primary/50 text-primary font-bold" : ""
              )}
            >
              <span>{formattedDate}</span>
            </button>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  const selectedServiceDetails = services.filter(service =>
    selectedServices.some(selectedService => selectedService.serviceId === service.id)
  );
  const totalDurationLabel = getServicesDurationLabel(selectedServiceDetails);
  const totalPrice = selectedServiceDetails.reduce((acc, curr) => acc + curr.price, 0);
  const canSubmit = selectedServices.length > 0 && selectedDate && selectedTime && (!isCanceledSelected || Boolean(id));

  const router = useRouter();

  useEffect(() => {
    async function fetchAvailableUsers() {
      if (isCanceledFromDb || selectedServices.length === 0 || !selectedTime || !selectedDate || !business?.id) {
        return;
      }

      const usersByService = await getAvailableUsers(
        selectedServices,
        selectedTime,
        selectedDate,
        business,
        token,
        setAvailableUsers
      );

      setSelectedServices(prev => {
        let hasChanges = false;

        const nextServices = prev.map(service => {
          const availableUser = usersByService?.[service.serviceId]?.[0];
          const userId = availableUser?.id ?? availableUser?.userId;

          if (!userId || service.userId) return service;

          hasChanges = true;
          return { ...service, userId };
        });

        return hasChanges ? nextServices : prev;
      });
    }

    fetchAvailableUsers();
  }, [selectedServices, selectedDate, selectedTime, business]);

  async function handleSubmit() {
    if (!canSubmit) return;
    if (!selectedDate || selectedServices.length === 0 || !selectedTime || !business?.id) {
      toast.error("Por favor completa todos los campos.");
      return;
    }

    const payload = {
      businessId: business.id,
      date: DateTime.fromJSDate(new Date(selectedDate)).toISODate(), 
      startTime: selectedTime,
      services: selectedServices,
      businessClientId: client?.businessClient,
      timezone: DateTime.local().zoneName,
      ...(id ? { appointmentId: id } : {}),
      ...(id ? { status: selectedStatus } : {}),
    };

    const endpoint = id ? `${process.env.NEXT_PUBLIC_API_URL}/appointment/update` : `${process.env.NEXT_PUBLIC_API_URL}/appointment/create`;

    try {
      const response = await axios({
        method: id ? 'put' : 'post',
        url: endpoint,
        data: payload,
        headers: {
          Authorization: token,
        },
      });

      if (response.status < 200 || response.status >= 300) {
        throw new Error("Error al agendar la cita.");
      }

      toast.success(`Cita agendada con exito para ${client?.name ?? "cliente"}.\n\nFecha: ${DateTime.fromJSDate(new Date(selectedDate)).toISODate()} a las ${selectedTime}`);
      setTimeout(() => {
        router.push("/mis-citas");
        // Reset form after successful submit
        setSelectedServices([]);
        setSelectedDate(null);
        setSelectedTime(null);
      }, 1000);
      
      
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al intentar agendar tu cita. Por favor intenta de nuevo.");
    }
  }

  return (
    <section className="bg-background pt-12 pb-24">
      <Toaster position="top-center" richColors />
      <div className="container max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black  text-primary tracking-tight mb-3">
            Agendar Cita
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Completa el formulario y asegura tu espacio con nosotros en Dental Lanz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Information & Summary */}
          
          <div className="order-1 lg:order-2 lg:col-span-8 bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-border/50">
            {isCanceledFromDb && (
              <div className="mb-8 rounded-3xl border border-red-200 bg-red-50 p-5 text-sm text-red-900">
                Esta cita está cancelada y no se puede modificar, solo puedes verla en modo lectura.
              </div>
            )}

            {/* Step 1: Selection Steps */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold  text-foreground mb-6">Selecciona el Servicio</h2>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Tratamientos Disponibles *</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto max-h-[300px] overflow-y-auto pr-2 mb-6">
                {loadingServices ? (
                  Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="text-left p-5 rounded-2xl border border-border">
                      <div className="flex justify-between items-start mb-2">
                        <Skeleton className="h-5 w-32" />
                      </div>
                      <div className="flex justify-between items-end">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                    </div>
                  ))
                ) : (
                  services.map(service => {
                    const isSelected = selectedServices.some(selectedService => selectedService.serviceId === service.id);
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service)}
                        disabled={isCanceledFromDb}
                        className={cn(
                          "text-left p-5 rounded-2xl border transition-all",
                          isSelected
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-border hover:border-primary/50",
                          isCanceledFromDb ? "cursor-not-allowed opacity-80" : ""
                        )}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-bold text-foreground">{service.name}</span>
                        </div>
                        <div className="flex justify-between items-end">
                           <span className="text-sm text-muted-foreground">{service.durationMin} min</span>
                           <span className="font-bold text-primary">${service.price}</span>
                        </div>
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            {/* Step 2: Date Selection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold  text-foreground mb-6">Elige Fecha</h2>
              <div className="bg-[#fcf8f6] rounded-[2rem] p-6 border border-border/40">
                {renderHeader()}
                {renderDays()}
                {renderCells()}
              </div>
            </div>

             {/* Step 3: Time Selection */}
             <div>
              <h2 className="text-2xl font-bold  text-foreground mb-6">Selecciona una Hora</h2>
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Horarios Disponibles *</p>
              {!selectedDate || selectedServices.length === 0 ? (
                <p className="text-muted-foreground">Selecciona una fecha y servicios para ver los horarios disponibles</p>
              ) : isCanceledFromDb ? (
                <div className="text-sm text-muted-foreground">
                  {selectedTime ? `Hora seleccionada: ${selectedTime}` : 'No hay hora disponible para esta cita cancelada.'}
                </div>
              ) : (
                <Schedule date={selectedDate} selectedServices={selectedServices} hour={selectedTime} setHour={setSelectedTime} excludeAppointmentId={id} />
              )}
            </div>

            {/* Step 4: Professional Selection */}
            {selectedServices.length > 0 && selectedTime && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Selecciona el Profesional</h2>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Profesional para cada Tratamiento *</p>
                <div className="space-y-4">
                  {selectedServiceDetails.map(service => (
                    <div key={service.id} className="bg-muted/30 rounded-xl p-4 border border-border">
                      <label className="text-sm font-semibold text-foreground mb-3 block">
                        {service.name}
                      </label>
                      <select
                        value={selectedServices.find(s => s.serviceId === service.id)?.userId || ''}
                        onChange={(e) => updateServiceUser(service.id, e.target.value)}
                        disabled={isCanceledFromDb}
                        className={cn(
                          "w-full px-4 py-2 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50",
                          isCanceledFromDb ? "border-border/40 bg-muted/10 text-muted-foreground cursor-not-allowed" : "border-border"
                        )}
                      >
                        <option value="">-- Selecciona un profesional --</option>
                        {availableUsers[service.id]?.map(user => (
                          <option key={user.id || user.userId} value={user.id || user.userId}>
                            {user.name || user.fullName}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {id && (
              <div className="mt-10 bg-[#fcf8f6] rounded-[2rem] p-6 border border-border/40 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-4">Estado de la Cita</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Cambia el estado de la cita si necesitas cancelarla o mantenerla agendada.
                </p>
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">
                    Estado
                  </label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    disabled={isCanceledFromDb}
                    className={cn(
                      "w-full px-4 py-3 rounded-2xl border bg-white text-foreground outline-none transition duration-200 focus:ring-2 focus:ring-primary/50",
                      isCanceledFromDb
                        ? "border-red-200 bg-red-50 text-red-900 cursor-not-allowed"
                        : "border-border hover:border-primary"
                    )}
                  >
                    <option value="SCHEDULED">Agendada</option>
                    <option value="CANCELED">Cancelada</option>
                  </select>
                  {isCanceledFromDb && (
                    <p className="text-sm text-red-600">
                      Esta cita está cancelada y no puede modificarse.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Select Service */}
          <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col gap-6">

            {/* Information Card */}
            <div className="bg-[#fcf8f6] rounded-[2rem] p-6 border border-border/40">
              <h3 className=" font-bold text-xl mb-6">Información</h3>
              <div className="space-y-6 text-sm text-foreground">
                {loadingBusiness ? (
                  <>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-1/2 mb-4" />
                    <Skeleton className="h-4 w-2/3 mb-4" />
                    <div className="pt-4 space-y-3">
                      <Skeleton className="h-4 w-32 mb-4" />
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      calz acoxpa 566-int 2, coapa, prado coapa,<br/>
                      tlalpan, 14357 ciudad de méxico, cdmx.
                    </p>
                    <p>5558019251</p>
                    <p>contacto@dentallanz.com</p>

                    <div className="pt-4">
                       <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Horario de atención</p>
                       <div className="space-y-3">
                         <div className="flex justify-between">
                           <span>Lunes - Viernes</span>
                           <span className="font-bold">10:00 - 19:00</span>
                         </div>
                         <div className="flex justify-between">
                           <span>Sábado</span>
                           <span className="font-bold">10:00 - 15:00</span>
                         </div>
                         <div className="flex justify-between">
                           <span>Domingo</span>
                           <span className="font-bold text-primary">Cerrado</span>
                         </div>
                       </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Summary Card */}
            <div className="bg-primary text-white rounded-[2rem] p-6 shadow-glow">
              <h3 className=" font-bold text-xl mb-6">Resumen de Reserva</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-1">Servicio</p>
                  {selectedServices.length > 0 ? (
                    <>
                      {selectedServiceDetails.map(s => <p key={s.id} className="font-bold text-lg leading-tight">{s.name}</p>)}
                      <p className="text-sm text-white/80 mt-1">{totalDurationLabel}</p>
                    </>
                  ) : (
                    <>
                      <p className="font-bold text-lg">No seleccionado</p>
                      <p className="text-sm text-white/80">-- min</p>
                    </>
                  )}
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-1">Fecha</p>
                  <p className="font-bold text-lg capitalize">
                    {selectedDate ? format(selectedDate, 'dd \'de\' MMMM', { locale: es }) : '-- de --'}
                  </p>
                </div>

                <div>
                   <p className="text-xs font-bold uppercase tracking-wider text-white/60 mb-1">Hora</p>
                   <p className="font-bold text-lg">
                     {selectedTime || '-- : --'}
                   </p>
                </div>

                <div className="flex justify-between items-end pt-4 pb-2 border-t border-white/20 mt-4">
                  <span className="text-lg">Total</span>
                  <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
                </div>

                <button
                  type="button"
                  disabled={!canSubmit}
                  onClick={() => handleSubmit()}
                  className={cn(
                    "w-full py-4 rounded-full font-bold text-sm transition-all",
                    canSubmit
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-white/30 text-white/50 cursor-not-allowed"
                  )}
                >
                  {isCanceledFromDb ? 'Cita cancelada' : id ? 'Actualizar cita' : 'Confirmar Reserva'}
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
