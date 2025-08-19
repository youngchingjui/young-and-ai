export default function Intro() {
  return (
    <section className="border-t border-primary-foreground/20 bg-primary text-primary-foreground min-h-[90dvh] grid place-items-center px-4">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl ">
          <p className="text-3xl md:text-5xl leading-tight">
            <span className="font-semibold">Young & AI</span> builds AI products and solutions for enterprises and startups alike.
          </p>
          <p className="mt-6 text-xl leading-relaxed md:text-3xl">
            From rapid prototypes to production systems, we partner with teams to design, implement, and ship applied AI that solves real business problems.
          </p>
          <p className="mt-3 text-xl leading-relaxed md:text-3xl">
            Our work spans automation, integrations, and data platforms—bringing measurable impact with pragmatic, reliable engineering.
          </p>
          <p className="mt-8 text-xl leading-relaxed md:text-2xl">
            Contact: <a href="mailto:contact@youngandai.com" className="font-medium underline underline-offset-4">contact@youngandai.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}

