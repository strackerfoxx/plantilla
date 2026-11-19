"use client";
import { useState } from "react";

const img = (id, w = 600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const kits = [
  { t: "Upload Single Motor Style", i: "photo-1516734212186-a967f81ad0d7" },
  { t: "Dog Grooming Kit", i: "photo-1583337130417-3346a1be7dee" },
  { t: "Single Motor Kit Style", i: "photo-1601758228041-f3b2795255f1" },
  { t: "Dog Grooming Kit", i: "photo-1587300003388-59208cc962cb" },
];

const products = [
  { t: "Knitted Adjustable Harness", i: "photo-1598134493179-51332e56807f" },
  { t: "Eth Breakaway Dog Leash", i: "photo-1601758124510-52d02ddb7cbd" },
  { t: "Dinosaur Printed Bow Tie", i: "photo-1544568100-847a948585b9" },
  { t: "Trona Clipper Set", i: "photo-1583511655857-d19b40a7a54e" },
  { t: "Xpander Pet Hair Vacuum", i: "photo-1548199973-03cce0bbc87b" },
  { t: "Pet Water Fountain", i: "photo-1592194996308-7b43878e84a6" },
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
  { t: "10 Easy Steps to Bathe Your Dog at Home", i: "photo-1591946614720-90a587da4a36" },
  { t: "Decode Your Pet: Understanding Common Body Language", i: "photo-1588943211346-0908a1fb0b01" },
  { t: "Get Ready Dogs: Choosing the Best Brush", i: "photo-1612536057832-2ff7ead58194" },
];

const faqs = [
  "What services do you offer for dogs and cats?",
  "How often should I groom my pet?",
  "Do you groom all breeds and sizes of pets?",
  "How long does a full grooming session take?",
  "Is grooming safe for my pet?",
  "Can I stay with my pet during the grooming session?",
  "What if my pet has a sensitive skin condition?",
  "Do you offer mobile grooming services?",
  "What products do you use for grooming?",
  "How do I book an appointment?",
];

const Btn = ({ children, className = "" }) => (
  <button className={`rounded-full bg-[#f5a800] px-6 py-2.5 text-sm font-semibold text-[#1f4d36] shadow hover:bg-[#e09900] transition ${className}`}>
    {children}
  </button>
);

const Title = ({ a, b, light }) => (
  <h2 className={`text-center text-3xl md:text-4xl font-black uppercase leading-tight ${light ? "text-white" : "text-[#1f4d36]"}`}>
    {a}<br /><span className="text-[#f5a800]">{b}</span>
  </h2>
);

const Stars = () => <div className="text-[#f5a800] text-sm">★★★★★</div>;

export default function Page() {
  const [open, setOpen] = useState(0);
  const [tab, setTab] = useState("All");

  return (
    <main className="bg-[#fdf8ec] text-[#1f4d36] font-sans overflow-x-hidden">
      {/* NAV */}


      {/* HERO */}
      <section id="home" className="relative scroll-mt-24 text-center pt-10">
        <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
          No more trouble<br /><span className="text-[#f5a800]">with pet hairs</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-[#1f4d36]/70">
          Effortless pet grooming solutions for a cleaner space and a happier, healthier, cuddly companion.
        </p>
        <Btn className="mt-6">Shop Now</Btn>
        <div className="relative mt-10 flex items-end justify-center gap-4">
          <img src={img("photo-1583512603805-3cc6b41f3edb", 700)} alt="Dog" className="h-64 md:h-96 w-1/3 object-cover rounded-t-[3rem]" />
          <img src={img("photo-1585559700398-1385b3a8aeb6", 500)} alt="Grooming kit" className="h-40 md:h-56 w-1/4 object-cover rounded-2xl" />
          <img src={img("photo-1574158622682-e40e69881006", 700)} alt="Cat" className="h-64 md:h-96 w-1/3 object-cover rounded-t-[3rem]" />
        </div>
        <div className="h-10 bg-[#1f4d36]" />
      </section>

      {/* KITS */}
      <section id="shop" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <Title a="Paw Bliss Kits" b="Collection" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {kits.map((k, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img src={img(k.i)} alt={k.t} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold">{k.t}</h3>
                <p className="mt-1 text-xs text-gray-500">Complete grooming set designed for gentle, professional results at home.</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center"><Btn>Explore More</Btn></div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 py-10">
        <Title a="Know" b="About Us" />
        <div className="relative mt-10">
          <div className="absolute inset-x-0 top-1/3 bottom-0 bg-[#1f4d36]" />
          <div className="absolute inset-x-0 top-1/4 h-24 bg-[#f5a800]" />
          <div className="relative mx-auto max-w-3xl px-6">
            <img src={img("photo-1516734212186-a967f81ad0d7", 1000)} alt="Grooming" className="h-72 md:h-96 w-full rounded-3xl object-cover shadow-xl" />
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-white/80">
              At Paw Bliss, we are passionate about providing high-quality pet grooming solutions. Our mission is to make pet care effortless, ensuring your furry friends stay happy, healthy and stylish.
            </p>
            <img src={img("photo-1548199973-03cce0bbc87b", 1000)} alt="Dog at sunset" className="mt-8 h-64 w-full rounded-3xl object-cover" />
            <div className="h-16" />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2 items-center">
        <div className="rounded-3xl bg-white p-8 shadow">
          <h2 className="text-3xl font-black uppercase">Why <span className="text-[#f5a800]">Choose Us?</span></h2>
          {["Pet Grooming Kits", "Easy & Fun Clean", "Quality & Convenience", "Pet Friendly Innovation", "Expert Resources Included"].map((t) => (
            <div key={t} className="mt-5 border-b border-gray-100 pb-3">
              <h4 className="font-bold text-sm">{t}</h4>
              <p className="text-xs text-gray-500">Designed for comfort, safety and salon-quality results from home.</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <img src={img("photo-1537151625747-768eb6cf92b2", 600)} alt="Jumping dog" className="mx-auto h-56 w-56 rounded-full object-cover" />
          {[
            ["Since 1995", "bg-[#f5a800] text-[#1f4d36]"],
            ["5 Star Rated", "bg-[#e0560b] text-white"],
            ["2500+ Happy Pets", "bg-[#1f4d36] text-white"],
          ].map(([t, c]) => (
            <div key={t} className={`rounded-2xl p-5 ${c}`}>
              <h4 className="font-black uppercase">{t}</h4>
              <p className="text-xs opacity-80">Trusted by pet parents for decades of caring service.</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="scroll-mt-24 bg-[#f1ead6] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black uppercase">Explore Our<br /><span className="text-[#f5a800]">Product</span></h2>
              <p className="text-sm text-gray-500 mt-2">Explore a range of premium pet grooming essentials.</p>
            </div>
            <div className="flex gap-2">
              {["All", "Collars", "Grooming", "Accessories"].map((t) => (
                <button key={t} onClick={() => setTab(t)} className={`rounded-full border border-[#1f4d36] px-4 py-1 text-xs ${tab === t ? "bg-[#1f4d36] text-white" : ""}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.t} className="rounded-2xl bg-white p-4 text-center shadow-sm">
                <img src={img(p.i)} alt={p.t} className="h-56 w-full rounded-xl object-cover" />
                <h3 className="mt-4 font-bold">{p.t}</h3>
                <p className="text-xs text-gray-500">Comfortable, durable and made for everyday adventures.</p>
                <p className="mt-2 font-black">$199.99</p>
                <Btn className="mt-3 w-full">Buy Now</Btn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20">
        <Title a="Paw Bliss" b="Blog" />
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
        <Title a="Pet Parent" b="Share the Love!" />
        <div className="mt-10 flex gap-5 overflow-x-auto px-6 pb-4">
          {reviews.map((r, i) => (
            <div key={r.n} className={`min-w-[260px] rounded-2xl p-4 ${i % 2 ? "bg-[#f5a800]" : "bg-[#1f4d36] text-white"}`}>
              <img src={img(r.i, 400)} alt={r.n} className="h-40 w-full rounded-xl object-cover" />
              <Stars />
              <h4 className="font-bold">{r.n}</h4>
              <p className="text-xs opacity-80">"My dog loves the grooming kit! Less hair everywhere and a much happier pup."</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="relative overflow-hidden bg-[#1f4d36] py-20">
        <div className="absolute inset-x-0 top-10 bottom-24 -skew-y-3 bg-[#f5a800]" />
        <div className="relative">
          <h2 className="text-center text-3xl md:text-4xl font-black uppercase">Explore Our<br /><span className="text-white">Awwdorable</span></h2>
          <div className="mt-4 text-center"><button className="rounded-full bg-[#1f4d36] px-6 py-2 text-sm text-white">View Gallery</button></div>
          <div className="mt-10 flex -rotate-3 gap-4 px-4">
            {gallery.map((g) => (
              <img key={g} src={img(g, 400)} alt="Pet" className="h-44 w-40 shrink-0 rounded-2xl border-4 border-white object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <Title a="Our" b="Process" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[["🚚", "Free Shipping"], ["🎧", "Customer Service"], ["✅", "Pet Satisfaction"]].map(([e, t], i) => (
            <div key={t} className={`rounded-2xl p-8 text-center shadow ${i === 1 ? "bg-[#1f4d36] text-white" : "bg-white"}`}>
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#f5a800]/20 text-xl">{e}</div>
              <h4 className="mt-4 font-bold">{t}</h4>
              <p className="mt-2 text-xs opacity-70">Fast, friendly and reliable – every step designed around your pet.</p>
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

      {/* FAQ */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase text-[#f5a800]">FAQ</p>
          <h2 className="text-3xl font-black uppercase">Frequently Asked<br /><span className="text-[#f5a800]">Questions</span></h2>
          <p className="mt-3 text-sm text-gray-500">Find answers to common questions about our grooming services and products.</p>
          <Btn className="mt-5">Contact Us</Btn>
        </div>
        <div className="space-y-3">
          {faqs.map((q, i) => (
            <div key={q} className="rounded-xl bg-white shadow-sm">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between px-5 py-3 text-left text-sm font-medium">
                {q}<span className="text-lg">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="px-5 pb-4 text-xs text-gray-500">Our team is happy to help — reach out anytime for personalized advice for your pet.</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative scroll-mt-24 px-6">
        <div className="relative z-10 mx-auto max-w-4xl rounded-3xl bg-[#f5a800] p-10 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-black uppercase">Give your pet the best –<br /><span className="text-white">Contact us!</span></h2>
          <p className="mx-auto mt-3 max-w-lg text-sm">Book a session or ask us anything. We'd love to pamper your furry friend.</p>
          <button className="mt-5 rounded-full bg-[#1f4d36] px-6 py-2.5 text-sm font-semibold text-white">Book Now</button>
        </div>
      </section>

      {/* FOOTER */}

    </main>
  );
}