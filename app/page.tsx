import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-24 pb-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          We design, build and implement{" "}
          <span className="text-primary">AI products and solutions</span>{" "}
          for small and large enterprises alike.
        </h1>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href="https://buy.stripe.com/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-xl font-bold text-white hover:opacity-90 transition-opacity"
          >
            Book a consultation
          </a>
          <a
            href="mailto:contact@youngandai.com"
            className="text-xl text-foreground/50 underline underline-offset-4 decoration-foreground/20 hover:text-foreground/70 hover:decoration-foreground/40 transition-colors"
          >
            or email us
          </a>
        </div>
      </section>

      {/* Work */}
      <section className="pb-24">
        <h2 className="text-xl uppercase tracking-widest text-primary/70 mb-10">
          Work
        </h2>

        <div className="divide-y divide-primary/15">
          <Link
            href="https://issuetopr.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-8 first:pt-0"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-foreground/70 transition-colors">
                  Issue to PR
                </h3>
                <p className="mt-3 text-xl text-foreground/60 leading-relaxed">
                  Automated code generation from GitHub issues to pull requests.
                  Describe the problem once, and let it draft focused changes
                  you can review and ship.
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 mt-2 shrink-0 text-foreground/30 group-hover:text-primary transition-colors" />
            </div>
          </Link>

          <Link
            href="https://ai-breakfast.youngandai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-foreground/70 transition-colors">
                  AI Breakfast
                </h3>
                <p className="mt-3 text-xl text-foreground/60 leading-relaxed">
                  Weekly Shanghai meetup for founders, engineers, and operators
                  working with AI. Practical, open, and focused on shipping.
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 mt-2 shrink-0 text-foreground/30 group-hover:text-primary transition-colors" />
            </div>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24">
        <h2 className="text-xl uppercase tracking-widest text-primary/70 mb-10">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">AI Strategy</h3>
            <p className="mt-3 text-xl text-foreground/60 leading-relaxed">
              We help teams identify where AI fits and build a roadmap to get
              there.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Rapid Prototyping</h3>
            <p className="mt-3 text-xl text-foreground/60 leading-relaxed">
              From idea to working prototype in weeks, not months.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Production AI</h3>
            <p className="mt-3 text-xl text-foreground/60 leading-relaxed">
              Scalable systems built to last. We ship AI that works reliably at
              scale.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Data & Integrations</h3>
            <p className="mt-3 text-xl text-foreground/60 leading-relaxed">
              Connect your existing tools and data sources with AI-powered
              workflows.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
