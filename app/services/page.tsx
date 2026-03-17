import { Metadata } from "next"
import { Check, ArrowRight, Zap, Rocket, Building2 } from "lucide-react"
import {
  NEXT_PUBLIC_STRIPE_1DAY_LINK,
  NEXT_PUBLIC_STRIPE_1WEEK_LINK,
  NEXT_PUBLIC_STRIPE_1MONTH_LINK,
  NEXT_PUBLIC_CALENDLY_LINK,
} from "@/lib/env"

export const metadata: Metadata = {
  title: "Services",
  description:
    "See what we've built, then let us build yours — from a 1-day prototype to a full product.",
}

const showcase = [
  {
    name: "Issue to PR",
    oneLiner: "Turns GitHub issues into ready-to-review pull requests",
    businessValue:
      "Engineering teams spend hours writing boilerplate code for well-defined tickets. This agent reads the issue, analyzes the repo, writes the code, and opens a PR — cutting issue-to-merge time by 96%.",
    builtIn: "2 weeks",
    url: "https://issuetopr.dev",
  },
  {
    name: "Refolk",
    oneLiner: "AI-generated customer personas from real data",
    businessValue:
      "Product teams make decisions based on guesswork about their users. Refolk synthesizes real customer data into living personas you can interview, debate with, and pressure-test ideas against.",
    builtIn: "3 weeks",
    url: "https://refolk.ai",
  },
  {
    name: "Agent Form Filler",
    oneLiner: "Fills out long, complicated forms using AI",
    businessValue:
      "Government applications, insurance forms, compliance paperwork — people waste hours on data entry. This agent takes voice or text input and fills multi-step forms automatically, reducing completion time from 45 minutes to under 5.",
    builtIn: "1 week",
  },
  {
    name: "File Renamer",
    oneLiner: "Renames files based on what's actually in them",
    businessValue:
      "Teams drown in folders of IMG_4382.jpg and scan_final_v2.pdf. This desktop app uses GPT-4 Vision to look at each image or document and rename it descriptively — turning chaos into a searchable archive.",
    builtIn: "2 days",
  },
]

const tiers = [
  {
    name: "1-Day Build",
    price: "$950",
    perDay: "$950/day",
    icon: Zap,
    tagline: "Validate an idea in a day",
    deliverables: [
      "Working AI-powered prototype",
      "Deployed to a live URL",
      "Source code handoff",
      "30-min walkthrough",
    ],
    stripeEnv: "NEXT_PUBLIC_STRIPE_1DAY_LINK",
    highlight: false,
  },
  {
    name: "1-Week Build",
    price: "$5,000",
    perDay: "$1,000/day",
    savings: "Save ~$1,650",
    icon: Rocket,
    tagline: "Ship a polished product",
    deliverables: [
      "Full-stack AI application",
      "Multiple features & integrations",
      "Auth, UI, deployment & CI/CD",
      "Documentation & handoff",
    ],
    stripeEnv: "NEXT_PUBLIC_STRIPE_1WEEK_LINK",
    highlight: true,
  },
  {
    name: "1-Month Build",
    price: "$20,000",
    perDay: "$1,000/day",
    savings: "Save ~$3,950",
    icon: Building2,
    tagline: "Build at enterprise scale",
    deliverables: [
      "Enterprise-grade AI system",
      "Multi-agent architecture & data pipelines",
      "Admin dashboard & analytics",
      "2 weeks post-launch support",
    ],
    stripeEnv: "NEXT_PUBLIC_STRIPE_1MONTH_LINK",
    highlight: false,
  },
]

const stripeLinks: Record<string, string> = {
  NEXT_PUBLIC_STRIPE_1DAY_LINK,
  NEXT_PUBLIC_STRIPE_1WEEK_LINK,
  NEXT_PUBLIC_STRIPE_1MONTH_LINK,
}

export default function ServicesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-24 pb-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          We built these.{" "}
          <span className="text-primary">Let us build yours.</span>
        </h1>
        <p className="mt-6 text-xl text-foreground/60 leading-relaxed">
          Every project below started as a conversation. Browse what
          we&apos;ve shipped, then tell us what you need automated,
          simplified, or built from scratch.
        </p>
      </section>

      {/* Showcase */}
      <section className="pb-24">
        <div className="divide-y divide-primary/15">
          {showcase.map((project) => (
            <div key={project.name} className="py-10 first:pt-0 last:pb-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {project.name}
                  </h2>
                  <p className="mt-1 text-lg text-primary/70 font-medium">
                    {project.oneLiner}
                  </p>
                </div>
                <span className="shrink-0 text-sm text-foreground/30 mt-2">
                  Built in {project.builtIn}
                </span>
              </div>
              <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
                {project.businessValue}
              </p>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary/70 hover:text-primary transition-colors"
                >
                  Visit {project.url.replace("https://", "")}
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Transition */}
      <section className="pb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Have something in mind?
        </h2>
        <p className="mt-4 text-xl text-foreground/60 leading-relaxed">
          Pick a timeline. You get a working product deployed to production —
          not a proposal deck. Start small with a 1-day build, or go all in.
        </p>
      </section>

      {/* Tiers */}
      <section className="pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const Icon = tier.icon
            const stripeLink = stripeLinks[tier.stripeEnv]
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-6 flex flex-col ${
                  tier.highlight
                    ? "border-primary/30 ring-1 ring-primary/20 bg-primary/[0.03]"
                    : "border-primary/10"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-white">
                    Most popular
                  </span>
                )}

                <div className="flex items-center gap-2.5 mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold">{tier.name}</h3>
                </div>

                <span className="text-3xl font-bold tracking-tight">
                  {tier.price}
                </span>
                <p className="text-sm text-foreground/40 mt-0.5">
                  {tier.perDay}
                </p>
                {tier.savings && (
                  <p className="text-sm font-medium text-primary mt-0.5">
                    {tier.savings}
                  </p>
                )}

                <p className="mt-4 text-sm text-foreground/60 font-medium">
                  {tier.tagline}
                </p>

                <ul className="mt-4 space-y-2 flex-1">
                  {tier.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/60"
                    >
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={stripeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-opacity ${
                    tier.highlight
                      ? "bg-primary text-white hover:opacity-90"
                      : "border border-primary/15 text-foreground hover:bg-primary/5"
                  }`}
                >
                  Get started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* Discovery CTA */}
      <section className="pb-24 text-center">
        <p className="text-lg text-foreground/50">
          Not sure what you need? Start with a free call.
        </p>
        <a
          href={NEXT_PUBLIC_CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-lg bg-primary px-8 py-4 text-xl font-bold text-white hover:opacity-90 transition-opacity"
        >
          Book a free discovery call
        </a>
        <p className="mt-3 text-sm text-foreground/30">
          30 minutes &middot; No commitment
        </p>
      </section>
    </div>
  )
}
