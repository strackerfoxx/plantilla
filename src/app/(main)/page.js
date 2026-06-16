"use client";
import Image from 'next/image';
import {
  Star,
  MapPin,
  Phone,
  Clock,
  Share,
  Navigation,
  Bookmark,
  Smartphone,
  Map,
  ChevronDown,
  Search,
  Check,
  ThumbsUp,
  MoreVertical,
  Plus,
  Image as ImageIcon,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans pb-20">
      {/* Header Image Area (placeholder for map/photo) */}
      <div className="relative h-60 w-full bg-slate-200">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
          alt="Hun-Hunahpú Spa"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
      </div>

      {/* Title & Basics */}
      <div className="px-4 py-4 bg-white rounded-t-3xl -mt-6 relative z-10">
        <h1 className="text-3xl font-normal text-slate-900">Hun-Hunahpú Spa</h1>
        <div className="flex items-center gap-2 mt-1 text-sm text-slate-600">
          <span className="font-medium text-slate-700">4.8</span>
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <div className="relative w-4 h-4">
               <Star className="w-4 h-4 absolute fill-current clip-half" />
            </div>
          </div>
          <span>(96)</span>
        </div>
        <div className="text-sm text-slate-600 mt-1">Spa de día</div>
      </div>

      {/* Tabs */}
      <div className="flex px-4 border-b border-slate-200 overflow-x-auto no-scrollbar gap-6 text-sm font-medium text-slate-600">
        <div className="py-3 border-b-2 border-blue-600 text-blue-600 whitespace-nowrap">Descripción general</div>
        <div className="py-3 whitespace-nowrap">Opiniones</div>
        <div className="py-3 whitespace-nowrap">Acerca de</div>
      </div>

      {/* Action Buttons */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 px-4 py-4 border-b border-slate-100">
        <button className="flex flex-col items-center justify-center gap-1 min-w-[72px]">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <Navigation className="w-5 h-5" />
          </div>
          <span className="text-xs text-blue-600 font-medium mt-1">Indicaciones</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 min-w-[72px]">
          <div className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-blue-600">
            <Bookmark className="w-5 h-5" />
          </div>
          <span className="text-xs text-blue-600 font-medium mt-1">Guardar</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 min-w-[72px]">
          <div className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-blue-600">
            <Map className="w-5 h-5" />
          </div>
          <span className="text-xs text-blue-600 font-medium mt-1">Cerca</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 min-w-[72px]">
          <div className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-blue-600">
            <Smartphone className="w-5 h-5" />
          </div>
          <span className="text-xs text-blue-600 font-medium mt-1">Enviar al teléfono</span>
        </button>
        <button className="flex flex-col items-center justify-center gap-1 min-w-[72px]">
          <div className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-blue-600">
            <Share className="w-5 h-5" />
          </div>
          <span className="text-xs text-blue-600 font-medium mt-1">Compartir</span>
        </button>
      </div>

      {/* Info List */}
      <div className="py-2 border-b border-slate-100">
        <div className="flex gap-4 px-4 py-3 items-start">
          <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="text-sm text-slate-700 leading-snug">
            Calz. del Hueso 365 col, Coapa, Floresta Coyoacán, Tlalpan, 14310 Ciudad de México, CDMX
          </div>
        </div>
        <div className="flex gap-4 px-4 py-3 items-center">
          <Clock className="w-5 h-5 text-blue-600 shrink-0" />
          <div className="text-sm">
            <span className="text-red-600 font-medium">Cerrado</span>
            <span className="text-slate-600"> · Abre a las 10 a.m.</span>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-500 ml-auto" />
        </div>
        <div className="flex gap-4 px-4 py-3 items-center">
          <Phone className="w-5 h-5 text-blue-600 shrink-0" />
          <div className="text-sm text-slate-700">55 2218 7650</div>
        </div>
        <div className="flex gap-4 px-4 py-3 items-center">
          <Map className="w-5 h-5 text-blue-600 shrink-0" />
          <div className="text-sm text-slate-700">8V4C+3P Ciudad de México, Cd. de México</div>
        </div>
      </div>

      {/* Attributes */}
      <div className="py-4 border-b border-slate-100 px-4">
        <div className="flex items-center gap-4 text-sm text-slate-700 mb-2">
          <Check className="w-5 h-5 text-slate-500 shrink-0" />
          <span>Amigable con LGBTQ+</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-700 mb-2">
          <Check className="w-5 h-5 text-slate-500 shrink-0" />
          <span>Se identifica como mujer empresaria</span>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <div className="flex items-center gap-4 text-sm text-blue-600 font-medium">
            <Clock className="w-5 h-5" />
            <span>Tu historial de Google Maps</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-blue-600 font-medium">
            <Bookmark className="w-5 h-5" />
            <span>Agregar una etiqueta</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-blue-600 font-medium">
            <Plus className="w-5 h-5" />
            <span>Sugerir una edición</span>
          </div>
          <div className="pl-9 text-xs text-slate-500">Agregar la información que falta</div>
          <div className="flex items-center gap-4 text-sm text-blue-600 font-medium mt-1">
            <Smartphone className="w-5 h-5" />
            <span>Agregar sitio web</span>
          </div>
        </div>
      </div>

      {/* Updates */}
      <div className="py-4 border-b border-slate-100 px-4">
        <h2 className="text-base font-medium text-slate-800 mb-4">Actualizaciones de los visitantes</h2>
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          <div className="w-48 h-32 rounded-xl bg-slate-100 relative shrink-0 overflow-hidden flex flex-col justify-end p-2 border border-slate-200">
            <div className="text-sm text-white font-medium bg-black/40 px-2 py-1 rounded w-fit text-xs">♥️♥️🙏🏽🙏🏽</div>
            <div className="text-xs text-white bg-black/40 px-2 py-0.5 rounded w-fit mt-1">Hace 2 años</div>
          </div>
        </div>
      </div>

      {/* Photos */}
      <div className="py-4 border-b border-slate-100 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-medium text-slate-800">Fotos y videos</h2>
          <ChevronRight className="w-5 h-5 text-slate-500" />
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4">
          <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100">Todo</span>
          <span className="px-3 py-1.5 bg-white text-slate-600 text-sm font-medium rounded-full border border-slate-300">Del propietario</span>
          <span className="px-3 py-1.5 bg-white text-slate-600 text-sm font-medium rounded-full border border-slate-300">Videos</span>
          <span className="px-3 py-1.5 bg-white text-slate-600 text-sm font-medium rounded-full border border-slate-300">Street View y 360°</span>
        </div>
        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
          <ImageIcon className="w-5 h-5" />
          <span>Agregar fotos y videos</span>
        </div>
      </div>

      {/* Reviews Summary */}
      <div className="py-4 border-b border-slate-100 px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-medium text-slate-800">Resumen de opiniones</h2>
        </div>

        <div className="flex gap-6 items-center">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-normal text-slate-800">4.8</div>
            <div className="flex text-yellow-500 mt-1">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
            </div>
            <div className="text-xs text-slate-500 mt-1">96 opiniones</div>
          </div>

          <div className="flex-1 flex flex-col gap-1">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="text-xs text-slate-600 w-2">{rating}</span>
                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 rounded-full"
                    style={{ width: rating === 5 ? '85%' : rating === 4 ? '10%' : rating === 3 ? '3%' : '1%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar">
          <div className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 italic min-w-[200px]">
            &quot;Buena ubicación y excelente servicio, me encantó&quot;
          </div>
          <div className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 italic min-w-[200px]">
            &quot;Todos los servicios son muy buenos, excelente trato...&quot;
          </div>
          <div className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 italic min-w-[200px]">
            &quot;Es agradable el lugar, buena atención y me encanto...&quot;
          </div>
        </div>

        <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mt-4">
          <Star className="w-5 h-5" />
          <span>Escribir una opinión</span>
        </div>
      </div>

      {/* Reviews Details */}
      <div className="py-4 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-medium text-slate-800">Opiniones</h2>
          <div className="flex gap-3 text-slate-500">
             <Search className="w-5 h-5" />
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar mb-6">
           <span className="px-3 py-1.5 bg-slate-100 text-slate-800 text-sm rounded-full flex items-center gap-1">
             <Check className="w-4 h-4" /> Todas
           </span>
           <span className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 text-sm rounded-full">
             trabajo 5
           </span>
           <span className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 text-sm rounded-full">
             tratamiento 4
           </span>
           <span className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 text-sm rounded-full">
             uñas 4
           </span>
           <span className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 text-sm rounded-full">
             sauna 3
           </span>
        </div>

        {/* Review 1 */}
        <div className="mb-6 border-b border-slate-100 pb-6">
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-medium">F</div>
              <div>
                <div className="text-sm font-medium text-slate-800">Fabiola</div>
                <div className="text-xs text-slate-500">2 opiniones · 4 fotos</div>
              </div>
            </div>
            <MoreVertical className="w-5 h-5 text-slate-400" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-yellow-500">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
            </div>
            <span className="text-xs text-slate-500">Hace 3 meses</span>
          </div>
          <p className="text-sm text-slate-700 mb-3">
            El lugar es bonito, la atención muy buena yo me hice un lifting coreano y me encantó como me quedo, me atendió diana que es super linda, lo hace todo con cuidado y muy profesional a mi me.encanto como me quedaron, definitivamente regresaré!!!!!
          </p>
          <div className="flex gap-4 text-slate-500 text-sm mb-4">
            <button className="flex items-center gap-1"><ThumbsUp className="w-4 h-4" /> Me gusta</button>
            <button className="flex items-center gap-1"><Share className="w-4 h-4" /> Compartir</button>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
            <div className="flex justify-between items-center mb-1">
               <span className="text-sm font-medium text-slate-800">Respuesta del propietario</span>
               <span className="text-xs text-slate-500">Hace 3 meses</span>
            </div>
            <p className="text-sm text-slate-600">Muchas gracias por tu visita, para nosotras es un placer atenderte 💕🙌🏻 te esperamos pronto…</p>
          </div>
        </div>

        {/* Review 2 */}
        <div className="mb-6 border-b border-slate-100 pb-6">
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-medium">A</div>
              <div>
                <div className="text-sm font-medium text-slate-800">Angélica Salas</div>
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  <Star className="w-3 h-3 text-orange-400 fill-current" /> Local Guide · 104 opiniones
                </div>
              </div>
            </div>
            <MoreVertical className="w-5 h-5 text-slate-400" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-yellow-500">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
            </div>
            <span className="text-xs text-slate-500">Hace un año</span>
          </div>
          <p className="text-sm text-slate-700 mb-3">
            Me encantó todo! El lugar tiene una hermosa decoración, la atención es muy profesional y muy amables. Tienen muchos servicios
          </p>
          <div className="flex gap-4 text-slate-500 text-sm mb-4">
            <button className="flex items-center gap-1"><ThumbsUp className="w-4 h-4" /> Me gusta</button>
            <button className="flex items-center gap-1"><Share className="w-4 h-4" /> Compartir</button>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
            <div className="flex justify-between items-center mb-1">
               <span className="text-sm font-medium text-slate-800">Respuesta del propietario</span>
               <span className="text-xs text-slate-500">Hace un año</span>
            </div>
            <p className="text-sm text-slate-600">Muchas gracias por tu visita Para nosotras es un placer atenderte Te esperamos pronto 🙌🏻…</p>
          </div>
        </div>

        {/* Review 3 */}
        <div className="mb-6 border-b border-slate-100 pb-6">
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-medium">A</div>
              <div>
                <div className="text-sm font-medium text-slate-800">Andrea Caballero Ricaño</div>
                <div className="text-xs text-slate-500">13 opiniones · 4 fotos</div>
              </div>
            </div>
            <MoreVertical className="w-5 h-5 text-slate-400" />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-yellow-500">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
            </div>
            <span className="text-xs text-slate-500">Hace un año</span>
          </div>
          <p className="text-sm text-slate-700 mb-3">
            Excelente servicio, y gran trato de todas las chicas, el lugar súper bonito, y las uñas que Lore me hizo están divinas, muchas gracias!
          </p>
        </div>

      </div>
    </div>
  );
}
