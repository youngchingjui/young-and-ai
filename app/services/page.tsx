import { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  MessageSquare,
  GraduationCap,
  Zap,
  Bot,
  Check,
  Rocket,
  Building2,
} from "lucide-react"
import {
  NEXT_PUBLIC_STRIPE_1DAY_LINK,
  NEXT_PUBLIC_STRIPE_1WEEK_LINK,
  NEXT_PUBLIC_STRIPE_1MONTH_LINK,
  NEXT_PUBLIC_CALENDLY_LINK,
} from "@/lib/env"

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI consulting, training, and rapid product builds. See how Young & AI can help your team ship with AI.",
  openGraph: {
    title: "Services | Young & AI",
    description:
      "AI consulting, training, and rapid product builds. See how Young & AI can help your team ship with AI.",
    url: "https://youngandai.com/services",
  },
}

const services = [
  {
    title: "OpenClaw Setup",
    description:
      "Get a private, self-hosted AI assistant running across your messaging platforms. We handle infrastructure, integrations, and custom workflows.",
    icon: Bot,
    href: "/services/open-claw",
    features: [
      "Self-hosted on your infrastructure",
      "Multi-channel messaging integration",
      "Custom AI workflows & skills",
      "Security hardening & compliance",
    ],
  },
  {
    title: "1-Day App Builds",
    description:
      "Go from idea to working AI prototype in a single day. Deployed, functional, and ready to test with real users.",
    icon: Zap,
    href: "/services/1-day-app",
    features: [
      "Working prototype in 24 hours",
      "Deployed to a live URL",
      "Source code handoff",
      "30-min walkthrough call",
    ],
  },
  {
    title: "AI Consulting",
    description:
      "We assess your workflows, identify high-impact AI opportunities, and build a practical roadmap for adoption. From strategy to implementation.",
    icon: MessageSquare,
    href: "/services/consulting",
    features: [
      "Workflow audit & opportunity mapping",
      "Tool selection & architecture",
      "Implementation support",
      "Ongoing advisory",
    ],
  },
  {
    title: "AI Training & Workshops",
    description:
      "Hands-on sessions that get your team building with AI tools. From prompt engineering to deploying production agents.",
    icon: GraduationCap,
    href: "/services/training",
    features: [
      "Custom curriculum for your team",
      "Hands-on exercises with real tools",
      "From beginner to advanced",
      "Follow-up support included",
    ],
  },
]

const buildTiers = [
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
    stripeLink: NEXT_PUBLIC_STRIPE_1DAY_LINK,
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
    stripeLink: NEXT_PUBLIC_STRIPE_1WEEK_LINK,
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
    stripeLink: NEXT_PUBLIC_STRIPE_1MONTH_LINK,
    highlight: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-24 pb-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          How we can <span className="text-primary">help</span>
        </h1>
        <p className="mt-6 text-xl text-foreground/60 leading-relaxed">
          Whether you need strategic guidance, team upskilling, or a working
          product built fast — we have a service for that.
        </p>
      </section>

      {/* Service Cards */}
      <section className="pb-24">
        <div className="space-y-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group block rounded-2xl border border-primary/10 p-8 hover:border-primary/25 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <Icon className="w-7 h-7 text-primary shrink-0 mt-1" />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-lg text-foreground/60 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-foreground/50"
                        >
                          <Check className="w-4 h-4 text-primary/60 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary/70 group-hover:text-primary transition-colors">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Build Packages */}
      <section className="pb-24">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Build packages
        </h2>
        <p className="mt-4 text-xl text-foreground/60 leading-relaxed">
          Pick a timeline. You get a working product deployed to production —
          not a proposal deck.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {buildTiers.map((tier) => {
            const Icon = tier.icon
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
                  href={tier.stripeLink}
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
