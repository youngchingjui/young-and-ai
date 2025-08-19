import { Mail } from "lucide-react"

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
          <div className="mt-20 flex justify-center">
            <a
              href="mailto:contact@youngandai.com"
              aria-label="Email contact@youngandai.com"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/50 p-3 hover:bg-primary-foreground/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-foreground/50 transition"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

