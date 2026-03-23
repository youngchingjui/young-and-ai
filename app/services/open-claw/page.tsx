import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { NEXT_PUBLIC_CALENDLY_LINK } from "@/lib/env"

export const metadata: Metadata = {
  title: "OpenClaw Setup | Young & AI",
  description:
    "Get OpenClaw — the open-source AI assistant — deployed, secured, and integrated with your messaging platforms and workflows.",
}

const whatYouGet = [
  {
    title: "Infrastructure & Deployment",
    description:
      "We deploy OpenClaw on your own server or cloud — Docker-containerized, secured, and production-ready. Your data never leaves your infrastructure.",
  },
  {
    title: "Channel Integration",
    description:
      "Connect OpenClaw to the platforms your team already uses: Slack, WhatsApp, Telegram, Discord, Teams, email, and more. All configured and tested.",
  },
  {
    title: "Custom Workflows & Skills",
    description:
      "We build the AI workflows that matter to your business — email triage, lead qualification, customer support, calendar management, data extraction, and beyond.",
  },
  {
    title: "Security Hardening",
    description:
      "API key management, credential storage, Docker sandboxing, approval policies, and audit logging. Configured to meet your compliance requirements.",
  },
  {
    title: "LLM Configuration",
    description:
      "We connect your preferred AI models — Claude, GPT-4, Gemini, DeepSeek, or others — and configure them for your specific use cases. No vendor lock-in.",
  },
  {
    title: "Training & Handoff",
    description:
      "Your team gets a walkthrough of the full setup, documentation for managing it day-to-day, and guidance on building new workflows independently.",
  },
]

const whoItsFor = [
  "Teams that want a private AI assistant without sending data to third parties",
  "Operations teams automating repetitive workflows across departments",
  "Founders and solopreneurs who want an always-on AI agent across all their messaging platforms",
  "Companies that tried setting up OpenClaw themselves but got stuck on infrastructure or integrations",
]

const packages = [
  {
    name: "Starter",
    price: "$1,500",
    description: "Single-channel setup with core workflows",
    features: [
      "Deployed on your VPS or cloud",
      "1 messaging channel integrated",
      "Up to 3 custom workflows",
      "Security hardening",
      "1-hour walkthrough & docs",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "$3,500",
    description: "Multi-channel with advanced workflows",
    features: [
      "Everything in Starter",
      "Up to 5 messaging channels",
      "Up to 10 custom workflows",
      "Multi-agent orchestration",
      "Team training session",
      "2 weeks post-launch support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale deployment with compliance",
    features: [
      "Everything in Professional",
      "Unlimited channels & workflows",
      "SSO & compliance configuration",
      "Custom skill development",
      "Dedicated support & SLA",
      "Ongoing managed services",
    ],
    highlight: false,
  },
]

export default function OpenClawPage() {
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
          OpenClaw <span className="text-primary">Setup</span>
        </h1>
        <p className="mt-6 text-xl text-foreground/60 leading-relaxed max-w-2xl">
          OpenClaw is the open-source AI assistant with 247K+ GitHub stars. It
          connects your messaging platforms to AI models and runs autonomous
          workflows — all self-hosted on your own infrastructure. We get it
          running for you.
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

      {/* What You Get */}
      <section className="pb-24">
        <h2 className="text-2xl font-bold mb-8">What you get</h2>
        <div className="space-y-8">
          {whatYouGet.map((item) => (
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
        <h2 className="text-2xl font-bold mb-4">Packages</h2>
        <p className="text-lg text-foreground/60 leading-relaxed mb-8">
          One-time setup fee. You own everything — no recurring platform costs
          from us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl border p-6 flex flex-col ${
                pkg.highlight
                  ? "border-primary/30 ring-1 ring-primary/20 bg-primary/[0.03]"
                  : "border-primary/10"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-bold">{pkg.name}</h3>
              <span className="mt-2 text-3xl font-bold tracking-tight">
                {pkg.price}
              </span>
              <p className="mt-2 text-sm text-foreground/60">{pkg.description}</p>
              <ul className="mt-4 space-y-2 flex-1">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground/60"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={NEXT_PUBLIC_CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-opacity ${
                  pkg.highlight
                    ? "bg-primary text-white hover:opacity-90"
                    : "border border-primary/15 text-foreground hover:bg-primary/5"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 text-center">
        <h2 className="text-3xl font-bold">Ready to get started?</h2>
        <p className="mt-4 text-lg text-foreground/50 max-w-md mx-auto">
          Book a free call and we&apos;ll scope out your setup — channels,
          workflows, and timeline.
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
