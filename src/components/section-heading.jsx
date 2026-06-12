export function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-black tracking-tight md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
