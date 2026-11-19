"use client";
import { useState } from "react";
import Link from "next/link";

const img = (id, w = 600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const kits = [
  { t: "Kit de cepillado y cuidado", i: "photo-1516734212186-a967f81ad0d7" },
  { t: "Kit de estética para perros", i: "photo-1583337130417-3346a1be7dee" },
  { t: "Kit de limpieza para mascotas", i: "photo-1601758228041-f3b2795255f1" },
  { t: "Kit esencial para perros", i: "photo-1587300003388-59208cc962cb" },
];

const products = [
  { t: "Arnés ajustable", i: "photo-1598134493179-51332e56807f", category: "Collares" },
  { t: "Correa para paseo", i: "photo-1601758124510-52d02ddb7cbd", category: "Accesorios" },
  { t: "Moño estampado", i: "photo-1544568100-847a948585b9", category: "Accesorios" },
  { t: "Set de corte y estética", i: "photo-1583511655857-d19b40a7a54e", category: "Estética" },
  { t: "Aspiradora para pelo de mascota", i: "photo-1548199973-03cce0bbc87b", category: "Estética" },
  { t: "Fuente de agua para mascotas", i: "photo-1592194996308-7b43878e84a6", category: "Accesorios" },
];

const reviews = [
  { n: "Sarah M.", i: "photo-1517849845537-4d257902454a" },
  { n: "Daniel R.", i: "photo-1530281700549-e82e7bf110d6" },
  { n: "Lucía G.", i: "photo-1543466835-00a7907e9de1" },
  { n: "Mark T.", i: "photo-1477884213360-7e9d7dcc1e48" },
  { n: "Emma W.", i: "photo-1507146426996-ef05306b995a" },
];

const gallery = [
  "photo-1537151608828-ea2b11777ee8", "photo-1518717758536-85ae29035b6d",
  "photo-1583511655826-05700d52f4d9", "photo-1514888286974-6c03e2ca1dba",
  "photo-1561037404-61cd46aa615b", "photo-1576201836106-db1758fd1c97",
  "photo-1552053831-71594a27632d",
];

const articles = [
  { t: "10 pasos para bañar a tu perro en casa", i: "photo-1591946614720-90a587da4a36" },
  { t: "Cómo entender el lenguaje corporal de tu mascota", i: "photo-1588943211346-0908a1fb0b01" },
  { t: "Cómo elegir el cepillo ideal para tu perro", i: "photo-1612536057832-2ff7ead58194" },
];

const faqs = [
  "¿Qué servicios ofrecen para perros y gatos?",
  "¿Cada cuánto debo llevar a mi mascota a estética?",
  "¿Atienden mascotas de todas las razas y tamaños?",
  "¿Cuánto dura una sesión de estética completa?",
  "¿La estética es segura para mi mascota?",
  "¿Puedo acompañar a mi mascota durante la sesión?",
  "¿Qué sucede si mi mascota tiene piel sensible?",
  "¿Qué productos utilizan durante el cuidado?",
  "¿Cómo puedo agendar una cita?",
  "¿Qué debo llevar a la cita?",
];

const Btn = ({ children, className = "", href = "/agendar" }) => (
  <Link href={href} className={`inline-flex items-center justify-center rounded-full bg-[#f5a800] px-6 py-2.5 text-sm font-semibold text-[#1f4d36] shadow transition hover:bg-[#e09900] ${className}`}>
    {children}
  </Link>
);

const Title = ({ a, b, light }) => (
  <h2 className={`text-center text-3xl md:text-4xl font-black uppercase leading-tight ${light ? "text-white" : "text-[#1f4d36]"}`}>
    {a}<br /><span className="text-[#f5a800]">{b}</span>
  </h2>
);

const Stars = () => <div className="text-[#f5a800] text-sm">★★★★★</div>;

export default function Page() {
  const [open, setOpen] = useState(0);
  const [tab, setTab] = useState("Todos");
  const visibleProducts = tab === "Todos" ? products : products.filter((product) => product.category === tab);

  return (
    <main className="bg-[#fdf8ec] text-[#1f4d36] font-sans overflow-x-hidden">
      {/* NAV */}


      {/* HERO */}
      <section id="home" className="relative scroll-mt-24 text-center pt-10">
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
          Menos pelo suelto<br /><span className="text-[#f5a800]">más momentos felices</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[#1f4d36]/70">
          Soluciones prácticas para mantener a tu mascota limpia, cómoda y feliz, y tu hogar un poco más libre de pelos.
        </p>
        <Btn href="#products" className="mt-6">Ver productos</Btn>
        <div className="relative mt-10 flex items-end justify-center gap-4">
          <img src={img("photo-1583512603805-3cc6b41f3edb", 700)} alt="Perro" className="h-64 md:h-96 w-1/3 object-cover rounded-t-[3rem]" />
          <img src={img("photo-1585559700398-1385b3a8aeb6", 500)} alt="Kit de estética para mascotas" className="h-40 md:h-56 w-1/4 object-cover rounded-2xl" />
          <img src={img("photo-1574158622682-e40e69881006", 700)} alt="Gato" className="h-64 md:h-96 w-1/3 object-cover rounded-t-[3rem]" />
        </div>
        <div className="h-10 bg-[#1f4d36]" />
      </section>

      {/* KITS */}
      <section id="shop" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <Title a="Kits Paw Bliss" b="Colección" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {kits.map((k, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img src={img(k.i)} alt={k.t} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{k.t}</h3>
                <p className="mt-1 text-xs text-gray-500">Un conjunto de cuidado pensado para una rutina cómoda y práctica en casa.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center"><Btn href="/servicios">Conocer servicios</Btn></div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 py-10">
        <Title a="Conoce" b="Nuestra historia" />
        <div className="relative mt-10">
          <div className="absolute inset-x-0 top-1/3 bottom-0 bg-[#1f4d36]" />
          <div className="absolute inset-x-0 top-1/4 h-24 bg-[#f5a800]" />
          <div className="relative mx-auto max-w-3xl px-6">
            <img src={img("photo-1516734212186-a967f81ad0d7", 1000)} alt="Cuidado de mascotas" className="h-72 md:h-96 w-full rounded-3xl object-cover shadow-xl" />
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-white/80">
              En Paw Bliss nos apasiona el bienestar de las mascotas. Queremos hacer más sencilla su rutina de cuidado con productos y soluciones que ayuden a mantenerlas cómodas, saludables y felices.
            </p>
            <img src={img("photo-1548199973-03cce0bbc87b", 1000)} alt="Perros disfrutando al aire libre" className="mt-8 h-64 w-full rounded-3xl object-cover" />
            <div className="h-16" />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 items-center">
        <div className="rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-black uppercase">Por qué <span className="text-[#f5a800]">elegirnos?</span></h2>
          {["Kits para el cuidado", "Rutinas sencillas", "Calidad y comodidad", "Cuidado pensado en mascotas", "Consejos útiles"].map((t) => (
            <div key={t} className="mt-5 border-b border-gray-100 pb-3">
              <h4 className="font-bold text-sm">{t}</h4>
              <p className="text-xs text-gray-500">Opciones prácticas para cuidar a tu mascota con comodidad desde casa.</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <img src={img("photo-1537151625747-768eb6cf92b2", 600)} alt="Perro jugando" className="mx-auto h-56 w-56 rounded-full object-cover" />
          {[
            ["Cuidado con cariño", "bg-[#f5a800] text-[#1f4d36]"],
            ["Productos seleccionados", "bg-[#e0560b] text-white"],
            ["Mascotas felices", "bg-[#1f4d36] text-white"],
          ].map(([t, c]) => (
            <div key={t} className={`rounded-2xl p-5 ${c}`}>
              <h4 className="font-black uppercase">{t}</h4>
              <p className="text-xs opacity-80">Nos importa que cada mascota reciba atención amable y cuidadosa.</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="scroll-mt-24 bg-[#f1ead6] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black uppercase">Descubre nuestros<br /><span className="text-[#f5a800]">productos</span></h2>
              <p className="text-sm text-gray-500 mt-2">Encuentra accesorios y artículos para acompañar el cuidado diario de tu mascota.</p>
            </div>
            <div className="flex gap-2">
              {["Todos", "Collares", "Estética", "Accesorios"].map((t) => (
                <button key={t} onClick={() => setTab(t)} className={`rounded-full border border-[#1f4d36] px-4 py-1 text-xs ${tab === t ? "bg-[#1f4d36] text-white" : ""}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((p) => (
              <div key={p.t} className="rounded-2xl bg-white p-4 text-center shadow-sm">
                <img src={img(p.i)} alt={p.t} className="h-56 w-full rounded-xl object-cover" />
                <h3 className="mt-4 font-bold">{p.t}</h3>
                <p className="text-xs text-gray-500">Cómodo, práctico y pensado para acompañar cada aventura.</p>
                <p className="mt-2 text-sm font-semibold text-gray-500">Precio por consultar</p>
                <Btn href="#contact" className="mt-3 w-full">Consultar producto</Btn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <Title a="Paw Bliss" b="Consejos" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.t} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img src={img(article.i)} alt="" className="h-52 w-full object-cover" />
              <h3 className="p-5 font-bold">{article.t}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20">
        <Title a="Familias de mascotas" b="¡Comparten su cariño!" />
        <div className="mt-10 flex gap-5 overflow-x-auto px-6 pb-4">
          {reviews.map((r, i) => (
            <div key={r.n} className={`min-w-[260px] rounded-2xl p-4 ${i % 2 ? "bg-[#f5a800]" : "bg-[#1f4d36] text-white"}`}>
              <img src={img(r.i, 400)} alt={r.n} className="h-40 w-full rounded-xl object-cover" />
              <Stars />
              <h4 className="font-bold">{r.n}</h4>
              <p className="text-xs opacity-80">"A mi perro le encanta su kit de cuidado. Tenemos menos pelo en casa y está mucho más contento."</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative overflow-hidden bg-[#1f4d36] py-20">
        <div className="absolute inset-x-0 top-10 bottom-24 -skew-y-3 bg-[#f5a800]" />
        <div className="relative">
          <h2 className="text-center text-3xl md:text-4xl font-black uppercase">Descubre nuestros<br /><span className="text-white">Adorable</span></h2>
          <div className="mt-4 text-center"><a href="#contact" className="inline-block rounded-full bg-[#1f4d36] px-6 py-2 text-sm text-white">Ver más</a></div>
          <div className="mt-10 flex -rotate-3 gap-4 px-4">
            {gallery.map((g) => (
              <img key={g} src={img(g, 400)} alt="Mascota" className="h-44 w-40 shrink-0 rounded-2xl border-4 border-white object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Title a="Nuestro" b="proceso" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[["🚚", "Envíos y entregas"], ["🎧", "Atención al cliente"], ["✅", "Bienestar de tu mascota"]].map(([e, t], i) => (
            <div key={t} className={`rounded-2xl p-8 text-center shadow ${i === 1 ? "bg-[#1f4d36] text-white" : "bg-white"}`}>
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#f5a800]/20 text-xl">{e}</div>
              <h4 className="mt-4 font-bold">{t}</h4>
              <p className="mt-2 text-xs opacity-70">Atención cercana y soluciones pensadas para el bienestar de tu mascota.</p>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden bg-[#1f4d36] py-3 text-white">
        <div className="flex gap-10 whitespace-nowrap font-black uppercase tracking-wide animate-[marquee_20s_linear_infinite]">
          {Array(3).fill("✦ Quality ⚡ Care ✦ Innovation 🏆 Trust ✦ Satisfaction Guaranteed").map((t, i) => <span key={i}>{t}</span>)}
        </div>
        <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </div>

      {/* Preguntas frecuentes */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase text-[#f5a800]">Preguntas frecuentes</p>
          <h2 className="text-3xl font-black uppercase">Preguntas<br /><span className="text-[#f5a800]">frecuentes</span></h2>
          <p className="mt-3 text-sm text-gray-500">Resuelve tus dudas sobre nuestros productos y opciones de cuidado para mascotas.</p>
          <Btn href="/agendar" className="mt-5">Contáctanos</Btn>
        </div>
        <div className="space-y-3">
          {faqs.map((q, i) => (
            <div key={q} className="rounded-xl bg-white shadow-sm">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between px-5 py-3 text-left text-sm font-medium">
                {q}<span className="text-lg">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="px-5 pb-4 text-xs text-gray-500">Estamos para ayudarte. Agenda una cita o consulta las opciones disponibles para tu mascota.</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative scroll-mt-24 px-6">
        <div className="relative z-10 mx-auto max-w-4xl rounded-3xl bg-[#f5a800] p-10 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-black uppercase">Dale lo mejor a tu mascota –<br /><span className="text-white">¡estamos para ayudarte!</span></h2>
          <p className="mx-auto mt-3 max-w-lg text-sm">Agenda una sesión de cuidado o consulta tus dudas. Nos encantará atender a tu compañero.</p>
          <Link href="/agendar" className="mt-5 inline-block rounded-full bg-[#1f4d36] px-6 py-2.5 text-sm font-semibold text-white">Agendar cita</Link>
        </div>
      </section>

      {/* FOOTER */}

    </main>
  );
}