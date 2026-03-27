import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { NEXT_PUBLIC_CALENDLY_LINK } from "@/lib/env"

export const metadata: Metadata = {
  title: "AI Consulting",
  description:
    "Strategic AI consulting for teams adopting AI. Workflow audits, architecture guidance, and hands-on implementation support.",
  openGraph: {
    title: "AI Consulting | Young & AI",
    description:
      "Strategic AI consulting for teams adopting AI. Workflow audits, architecture guidance, and hands-on implementation support.",
    url: "https://youngandai.com/services/consulting",
  },
}

const whatWeDeliver = [
  {
    title: "Workflow Audit",
    description:
      "We map your current processes end-to-end, identifying where AI can save time, reduce errors, or unlock new capabilities.",
  },
  {
    title: "Tool & Architecture Selection",
    description:
      "We recommend the right models, frameworks, and infrastructure for your use case — no vendor lock-in, no unnecessary complexity.",
  },
  {
    title: "Implementation Support",
    description:
      "We work alongside your engineering team to build, test, and deploy. Not just a strategy deck — working software.",
  },
  {
    title: "Ongoing Advisory",
    description:
      "AI moves fast. We stay on as advisors to help you adapt, evaluate new tools, and scale what's working.",
  },
]

const whoItsFor = [
  "Engineering teams evaluating AI tools and workflows",
  "Founders figuring out where AI fits in their product",
  "Operations teams looking to automate repetitive processes",
  "Companies with AI projects that stalled or underperformed",
]

export default function ConsultingPage() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="pt-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/40 hover:text-foreground/60 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All services
        </Link>
      </div>

      {/* Hero */}
      <section className="pt-12 pb-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          AI <span className="text-primary">Consulting</span>
        </h1>
        <p className="mt-6 text-xl text-foreground/60 leading-relaxed max-w-2xl">
          We help teams adopt AI with clear strategy and hands-on
          implementation. No buzzwords — just practical guidance that gets you
          from idea to production.
        </p>
        <div className="mt-10">
          <a
            href={NEXT_PUBLIC_CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-xl font-bold text-white hover:opacity-90 transition-opacity"
          >
            Book a free consultation
          </a>
          <p className="mt-3 text-sm text-foreground/30">
            30 minutes &middot; No commitment
          </p>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="pb-24">
        <h2 className="text-2xl font-bold mb-8">What we deliver</h2>
        <div className="space-y-8">
          {whatWeDeliver.map((item) => (
            <div key={item.title}>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-lg text-foreground/60 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="pb-24">
        <h2 className="text-2xl font-bold mb-8">Who it&apos;s for</h2>
        <ul className="space-y-4">
          {whoItsFor.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-lg text-foreground/70"
            >
              <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="pb-24">
        <h2 className="text-2xl font-bold mb-4">Pricing</h2>
        <div className="rounded-2xl border border-primary/10 p-8">
          <p className="text-lg text-foreground/60 leading-relaxed">
            Consulting engagements are scoped per project. Most start with a
            2-week assessment, then move to ongoing advisory or implementation
            support as needed.
          </p>
          <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
            <span className="font-semibold text-foreground">
              Starting at $2,500
            </span>{" "}
            for an initial assessment. Custom pricing for ongoing engagements.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 text-center">
        <h2 className="text-3xl font-bold">Let&apos;s talk</h2>
        <p className="mt-4 text-lg text-foreground/50 max-w-md mx-auto">
          Book a free call and we&apos;ll discuss your goals, assess the
          opportunity, and recommend next steps.
        </p>
        <a
          href={NEXT_PUBLIC_CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-lg bg-primary px-8 py-4 text-xl font-bold text-white hover:opacity-90 transition-opacity"
        >
          Book a free consultation
        </a>
      </section>
    </div>
  )
}
