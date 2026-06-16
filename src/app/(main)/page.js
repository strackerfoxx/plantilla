"use client";
import React from 'react';
import {
  Star,
  MapPin,
  Clock,
  Globe,
  Phone,
  Plus,
  BadgeCheck,
  History,
  Tag,
  Edit3,
  Image as ImageIcon,
  MoreVertical,
  ThumbsUp,
  Share2,
  Bookmark,
  Navigation,
  Send,
  Crosshair,
  Search,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-80px)] overflow-hidden bg-background">
      {/* Sidebar Content */}
      <div className="w-full md:w-[420px] lg:w-[480px] h-full overflow-y-auto border-r border-border bg-card custom-scrollbar pb-8">

        {/* Header Image */}
        <div className="h-48 relative overflow-hidden bg-muted">
           <Image
            src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?w=800&q=80"
            alt="Centro Veterinario PAWS"
            fill
            sizes="(max-width: 768px) 100vw, 480px"
            className="object-cover"
          />
        </div>

        {/* Title and Rating */}
        <div className="px-5 py-4 border-b border-border">
          <h1 className="text-2xl font-bold text-foreground">Centro Veterinario PAWS</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-base font-medium text-foreground">4.7</span>
            <div className="flex text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-sm text-muted-foreground">(621)</span>
          </div>
          <div className="text-sm text-muted-foreground mt-1">Veterinario</div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border px-2">
          <button className="px-4 py-3 text-sm font-medium text-primary border-b-2 border-primary">Descripción general</button>
          <button className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">Opiniones</button>
          <button className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">Acerca de</button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 px-5 py-4 overflow-x-auto no-scrollbar border-b border-border">
          {[
            { icon: Navigation, label: 'Indicaciones' },
            { icon: Bookmark, label: 'Guardar' },
            { icon: Crosshair, label: 'Cerca' },
            { icon: Send, label: 'Enviar al teléfono' },
            { icon: Share2, label: 'Compartir' }
          ].map((action, i) => (
            <button key={i} className="flex flex-col items-center gap-1.5 min-w-[70px]">
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary bg-primary/5 hover:bg-primary/10 transition-colors">
                <action.icon className="w-5 h-5" />
              </div>
              <span className="text-[11px] text-foreground font-medium text-center">{action.label}</span>
            </button>
          ))}
        </div>

        {/* Info List */}
        <div className="py-2 border-b border-border">
          <div className="flex items-start gap-4 px-5 py-3 hover:bg-muted/50 transition-colors">
            <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-foreground leading-snug">
              Dentro de fuentes plaza, Calz. del Hueso 160-local 5 A, Coapa, Ex-Hacienda Coapa, Coyoacán, 04980 Ciudad de México, CDMX
            </p>
          </div>
          <div className="flex items-start gap-4 px-5 py-3 hover:bg-muted/50 transition-colors">
            <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div className="text-sm">
              <span className="text-green-600 font-medium">Abierto</span>
              <span className="text-muted-foreground"> · Cierra a las 7 p.m.</span>
            </div>
          </div>
          <div className="flex items-start gap-4 px-5 py-3 hover:bg-muted/50 transition-colors">
            <Globe className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <a href="#" className="text-sm text-foreground hover:text-primary hover:underline">veterinariopaws.com</a>
          </div>
          <div className="flex items-start gap-4 px-5 py-3 hover:bg-muted/50 transition-colors">
            <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <a href="tel:5565503655" className="text-sm text-foreground hover:text-primary hover:underline">55 6550 3655</a>
          </div>
          <div className="flex items-start gap-4 px-5 py-3 hover:bg-muted/50 transition-colors">
            <Plus className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span className="text-sm text-foreground">8V57+GM Ciudad de México, Cd. de México</span>
          </div>
        </div>

        {/* Identifications */}
        <div className="py-2 border-b border-border">
          <div className="flex items-center gap-4 px-5 py-3 hover:bg-muted/50 transition-colors">
            <BadgeCheck className="w-5 h-5 text-muted-foreground shrink-0" />
            <span className="text-sm text-foreground">Se identifica como mujer empresaria</span>
          </div>
          <div className="flex items-center gap-4 px-5 py-3 hover:bg-muted/50 transition-colors cursor-pointer">
            <History className="w-5 h-5 text-muted-foreground shrink-0" />
            <span className="text-sm text-foreground">Tu historial de Google Maps</span>
          </div>
          <div className="flex items-center gap-4 px-5 py-3 hover:bg-muted/50 transition-colors cursor-pointer">
            <Tag className="w-5 h-5 text-muted-foreground shrink-0" />
            <span className="text-sm text-foreground">Agregar una etiqueta</span>
          </div>
        </div>

        <div className="py-2 border-b border-border">
          <div className="flex items-center gap-4 px-5 py-3 hover:bg-muted/50 transition-colors cursor-pointer">
            <Edit3 className="w-5 h-5 text-muted-foreground shrink-0" />
            <span className="text-sm text-foreground font-medium">Sugerir una edición</span>
          </div>
        </div>

        {/* Photos section */}
        <div className="py-4 border-b border-border">
          <h2 className="px-5 text-lg font-bold text-foreground mb-3">Fotos y videos</h2>
          <div className="flex gap-2 px-5 overflow-x-auto no-scrollbar pb-2">
             {['Todo', 'Perro', 'Videos', 'Gato', 'Del propietario', 'Street View y 360°'].map((chip, i) => (
                <div key={i} className="px-3 py-1.5 rounded-full border border-border text-sm font-medium whitespace-nowrap bg-background hover:bg-muted/50 cursor-pointer">
                  {chip}
                </div>
             ))}
          </div>
          <div className="px-5 mt-2">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <ImageIcon className="w-4 h-4" /> Agregar fotos y videos
            </Button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="py-4">
          <h2 className="px-5 text-lg font-bold text-foreground mb-4">Resumen de opiniones</h2>

          <div className="px-5 flex items-center gap-6 mb-6">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-normal text-foreground">4.7</span>
              <div className="flex text-yellow-400 mt-2">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
              </div>
              <span className="text-xs text-muted-foreground mt-1">621 opiniones</span>
            </div>
            <div className="flex-1 space-y-1">
              {[5,4,3,2,1].map((star) => (
                <div key={star} className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                  <span className="w-2">{star}</span>
                  <div className="flex-1 h-2.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{width: star === 5 ? '85%' : star === 4 ? '15%' : '0%'}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Snippets */}
          <div className="px-5 space-y-3 mb-6">
             <p className="text-sm text-foreground bg-muted/30 p-3 rounded-lg italic">
               &quot;Excelente servicio, muy buena atención y buenos precios&quot;
             </p>
             <p className="text-sm text-foreground bg-muted/30 p-3 rounded-lg italic">
               &quot;Atiende urgencias incluso en la madrugada.&quot;
             </p>
             <p className="text-sm text-foreground bg-muted/30 p-3 rounded-lg italic">
               &quot;Excelente atención!, Dedicación en revisión de tu mascota&quot;
             </p>
          </div>

          <div className="px-5 border-b border-border pb-4">
            <Button variant="outline" className="w-full text-primary border-border flex items-center justify-center gap-2">
               Escribir una opinión
            </Button>
          </div>

          <div className="pt-4">
            <div className="px-5 flex items-center justify-between mb-4">
               <h2 className="text-lg font-bold text-foreground">Opiniones</h2>
               <div className="flex gap-2">
                 <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full"><Search className="h-4 w-4 text-muted-foreground"/></Button>
                 <Button variant="ghost" size="sm" className="h-8 text-sm"><Filter className="h-4 w-4 mr-2"/> Ordenar</Button>
               </div>
            </div>

            <div className="flex gap-2 px-5 overflow-x-auto no-scrollbar pb-4 border-b border-border">
             {['Todas', 'perrita 26', 'trabajo 19', 'dr 14', 'confianza 14', '+6'].map((chip, i) => (
                <div key={i} className={`px-3 py-1.5 rounded-xl border border-border text-sm whitespace-nowrap cursor-pointer ${i === 0 ? 'bg-primary/10 text-primary font-medium' : 'bg-background hover:bg-muted/50'}`}>
                  {chip}
                </div>
             ))}
            </div>

            {/* Reviews list */}
            <div className="divide-y divide-border">
              {/* Review 1 */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">A</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm text-foreground">Arya Jacobs</h4>
                      <Button variant="ghost" size="icon" className="h-6 w-6"><MoreVertical className="w-4 h-4 text-muted-foreground"/></Button>
                    </div>
                    <div className="text-xs text-muted-foreground">5 opiniones · 4 fotos</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-xs text-muted-foreground">Hace un mes</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  Ojalá pudiera dar más estrellas.<br/>
                  Llevamos años llevando a nuestras mascotas con el doctor Enrique, quien es, sin lugar a duda, el más extraordinario médico veterinario que hemos conocido. Su amor y entrega por los animales no puede describirse, la manera dulce y cariñosa con la que los trata y los cuida es más que suficiente para recomendarlo ampliamente, pero además de su excelente trato, es un médico con muchísima experiencia. Ha atendido a todos mis perros y gatos (y hemos tenido muchos), tanto mascotas como rescatados, viejos y jóvenes, enfermos y sanos. Desde diarreas y resfriados, hasta epilepsia, cancer y cirugías. No solo sus diagnósticos han sido correctos y precisos, también ha detectado enfermedades a tiempo y ha ofrecido tratamiento que les ha curado o ayudado a tener una buena calidad de vida. Él diagnosticó a mi gatita Sarah con cirrosis y gracias a su tratamiento, vivió tres años más aún con fallo hepático. Diagnosticó y trata actualmente la epilepsia de mi gatita Olivia, y yo le confío su vida cada vez que tiene una crisis y necesita quedarse internada. Y jamás voy a olvidar el trato cálido y humano que tuvo conmigo en los meses terminales de la fibrosis pulmonar de mi Hanna. La paciencia, la medicina para su enfermedad y para el dolor, las nebulizaciones, las visitas casi diarias para inyectarla, y su exhaustivo acompañamiento cuando fue el momento de decirle adiós y dormirla, que es lo más difícil que he hecho. Les agradezco tanto al doctor Enrique y a Marilyn por ser extraordinarios profesionales de la salud y por velar por el bienestar de mis mascotas, que son como mis hijos, como si fueran suyos. No tengo manera de pagarles por todo lo que han hecho por nosotros.<br/><br/>
                  Jamás podré recomendar a Paws y al Doctor Enrique lo suficiente 💜🫶🏻✨
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Button variant="ghost" size="sm" className="text-muted-foreground h-8 px-2"><ThumbsUp className="w-4 h-4 mr-1.5"/> Me gusta</Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground h-8 px-2"><Share2 className="w-4 h-4 mr-1.5"/> Compartir</Button>
                </div>
              </div>

              {/* Review 2 */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold">L</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm text-foreground">leyla mariana</h4>
                      <Button variant="ghost" size="icon" className="h-6 w-6"><MoreVertical className="w-4 h-4 text-muted-foreground"/></Button>
                    </div>
                    <div className="text-xs text-muted-foreground">6 opiniones · 5 fotos</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-xs text-muted-foreground">Hace 3 meses</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  Mi experiencia ha sido solo con vacunas desde que rescaté a mis dos gatitas. El trato y la atención siempre es buena. Recomiendo ir con disponibilidad de tiempo ya que puede ser algo tardado porque no hay citas (nada exagerado tampoco). Al día de hoy mis gatitas están sanas :)
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Button variant="ghost" size="sm" className="text-muted-foreground h-8 px-2"><ThumbsUp className="w-4 h-4 mr-1.5"/> Me gusta</Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground h-8 px-2"><Share2 className="w-4 h-4 mr-1.5"/> Compartir</Button>
                </div>
              </div>

              {/* Review 3 */}
              <div className="p-5">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">C</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm text-foreground">Claudia Solis</h4>
                      <Button variant="ghost" size="icon" className="h-6 w-6"><MoreVertical className="w-4 h-4 text-muted-foreground"/></Button>
                    </div>
                    <div className="text-xs text-muted-foreground">Local Guide · 46 opiniones · 102 fotos</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-yellow-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <span className="text-xs text-muted-foreground">Hace un año</span>
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  El doctor Enrique es el mejor. Salvó a mi perrita salchicha que fue atacada por otro perro y quedó muy mal herida en la parte de la cabeza, tenía fracturada la mandíbula y un ojito a punto de salirse. También le extirpó un tumor a otra de mis perritas weimaraner de 16 años, no la operó hasta asegurarse de que pudiera resistir la anestesia, a otra perrita de 17 años le quitó unas muelas que se lastimó porque se puso mal con los truenos y los cuetes y empezó a morder de todo, y a mi cachorrito callejero de 2 meses lo salvó de moquillo, y así, una lista larga de perritos que me ha ayudado a curar. Trata muy bien a los animalitos. Me alegra tanto haber encontrado a este doctor.
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <Button variant="ghost" size="sm" className="text-muted-foreground h-8 px-2"><ThumbsUp className="w-4 h-4 mr-1.5"/> Me gusta</Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground h-8 px-2"><Share2 className="w-4 h-4 mr-1.5"/> Compartir</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Right Side */}
      <div className="flex-1 bg-muted relative hidden md:block h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.4192666616654!2d-99.13098528468744!3d19.30823358695507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01962df67469%3A0xc3f8eec6c391bbbc!2sPlaza%20Las%20Fuentes!5e0!3m2!1ses!2smx!4v1680000000000!5m2!1ses!2smx"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de Centro Veterinario PAWS"
          className="w-full h-full"
        ></iframe>

        {/* Search Bar Overlay */}
        <div className="absolute top-4 left-4 z-10 w-96 max-w-[calc(100%-32px)]">
           <div className="bg-background rounded-full shadow-md flex items-center px-4 py-2.5">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar en Google Maps"
                className="flex-1 bg-transparent border-none outline-none px-3 text-sm text-foreground"
                defaultValue="Centro Veterinario PAWS"
              />
              <div className="border-l border-border pl-3 flex items-center">
                 <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">U</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}