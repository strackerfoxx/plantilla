export function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`mb-8 ${centered ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}`}>
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-100 shadow-sm inline-block w-full">
        {eyebrow ? <p className="mb-3 text-sm font-black uppercase tracking-widest text-orange-500">{eyebrow}</p> : null}
        <h2 className="text-balance text-4xl font-black tracking-tight text-slate-800 md:text-5xl">{title}</h2>
        {description ? <p className="mt-5 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto font-medium">{description}</p> : null}
      </div>
    </div>
  );
}
