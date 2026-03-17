import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-24 pb-20">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
          We build AI products and solutions.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/60 leading-relaxed">
          From rapid prototypes to production systems, we partner with teams to
          design, implement, and ship applied AI that solves real business
          problems.
        </p>
        <p className="mt-6">
          <a
            href="mailto:contact@youngandai.com"
            className="text-foreground/60 underline underline-offset-4 decoration-foreground/20 hover:text-foreground hover:decoration-foreground/40 transition-colors"
          >
            contact@youngandai.com
          </a>
        </p>
      </section>

      {/* Work */}
      <section className="pb-20">
        <h2 className="text-xs uppercase tracking-widest text-foreground/40 mb-8">
          Work
        </h2>

        <div className="divide-y divide-foreground/8">
          <Link
            href="https://issuetopr.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-6 first:pt-0"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold group-hover:text-foreground/70 transition-colors">
                  Issue to PR
                </h3>
                <p className="mt-1 text-foreground/60">
                  Automated code generation from GitHub issues to pull requests.
                  Describe the problem once, and let it draft focused changes
                  you can review and ship.
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 mt-1.5 shrink-0 text-foreground/30 group-hover:text-foreground/60 transition-colors" />
            </div>
          </Link>

          <Link
            href="https://ai-breakfast.youngandai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold group-hover:text-foreground/70 transition-colors">
                  AI Breakfast
                </h3>
                <p className="mt-1 text-foreground/60">
                  Weekly Shanghai meetup for founders, engineers, and operators
                  working with AI. Practical, open, and focused on shipping.
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 mt-1.5 shrink-0 text-foreground/30 group-hover:text-foreground/60 transition-colors" />
            </div>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="pb-20">
        <h2 className="text-xs uppercase tracking-widest text-foreground/40 mb-8">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold">AI Strategy</h3>
            <p className="mt-1 text-foreground/60 text-sm">
              We help teams identify where AI fits and build a roadmap to get
              there.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Rapid Prototyping</h3>
            <p className="mt-1 text-foreground/60 text-sm">
              From idea to working prototype in weeks, not months.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Production AI</h3>
            <p className="mt-1 text-foreground/60 text-sm">
              Scalable systems built to last. We ship AI that works reliably at
              scale.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Data & Integrations</h3>
            <p className="mt-1 text-foreground/60 text-sm">
              Connect your existing tools and data sources with AI-powered
              workflows.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
