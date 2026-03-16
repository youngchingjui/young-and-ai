import { Mail } from "lucide-react"

export default function Intro() {
  return (
    <section className="relative py-24 md:py-32 px-4">
      {/* Warm section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl">
          {/* Personal greeting */}
          <p className="text-lg md:text-xl text-foreground/50 mb-4 tracking-wide uppercase font-medium">
            Hello, I&apos;m Ching Jui Young
          </p>
          <p className="text-3xl md:text-5xl leading-tight">
            <span className="font-semibold text-foreground">I build AI Agents</span>{" "}
            <span className="text-foreground/60">and help companies adopt AI workflows.</span>
          </p>

          {/* Company value prop */}
          <div className="mt-16 pt-16 border-t border-foreground/8">
            <p className="text-2xl md:text-4xl leading-tight text-foreground/90">
              <span className="font-semibold">Young & AI</span> builds AI products and solutions for enterprises and startups alike.
            </p>
            <p className="mt-6 text-xl leading-relaxed md:text-2xl text-foreground/55">
              From rapid prototypes to production systems, we partner with teams to design, implement, and ship applied AI that solves real business problems.
            </p>
            <p className="mt-3 text-xl leading-relaxed md:text-2xl text-foreground/55">
              Our work spans automation, integrations, and data platforms—bringing measurable impact with pragmatic, reliable engineering.
            </p>
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="mailto:contact@youngandai.com"
              aria-label="Email contact@youngandai.com"
              className="inline-flex items-center gap-3 rounded-full border border-foreground/15 bg-white/30 backdrop-blur-sm px-6 py-3 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500/50 transition"
            >
              <Mail className="w-5 h-5" />
              <span className="text-base md:text-lg">Get in touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
