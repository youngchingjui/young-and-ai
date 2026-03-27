import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import {
  NEXT_PUBLIC_STRIPE_1DAY_LINK,
  NEXT_PUBLIC_CALENDLY_LINK,
} from "@/lib/env"

export const metadata: Metadata = {
  title: "1-Day App Builds",
  description:
    "Go from idea to working AI prototype in a single day. Deployed, functional, and ready to test with real users. Starting at $950.",
  openGraph: {
    title: "1-Day App Builds | Young & AI",
    description:
      "Go from idea to working AI prototype in a single day. Deployed, functional, and ready to test with real users. Starting at $950.",
    url: "https://youngandai.com/services/1-day-app",
    images: [
      {
        url: "/glootie.png",
        width: 512,
        height: 512,
        alt: "Glootie - Do you want to develop an app?",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "1-Day App Builds | Young & AI",
    description:
      "Go from idea to working AI prototype in a single day. Deployed, functional, and ready to test with real users. Starting at $950.",
    images: ["/glootie.png"],
  },
}

const howItWorks = [
  {
    step: "1",
    title: "Brief us",
    description:
      "Tell us what you want to build. We'll scope it to what's achievable in a day and confirm the approach.",
  },
  {
    step: "2",
    title: "We build",
    description:
      "Our team builds your AI-powered app end-to-end: UI, backend, AI integration, and deployment.",
  },
  {
    step: "3",
    title: "You ship",
    description:
      "By end of day you have a working app on a live URL, source code handoff, and a 30-minute walkthrough.",
  },
]

const whatYouGet = [
  "Working AI-powered prototype",
  "Deployed to a live URL",
  "Full source code handoff",
  "30-minute walkthrough call",
  "Built with production-grade tools (Next.js, TypeScript, etc.)",
]

const examples = [
  "Internal tool that summarizes support tickets",
  "AI chatbot trained on your documentation",
  "Automated report generator from raw data",
  "Customer feedback analyzer with sentiment scoring",
  "Document comparison and review tool",
]

const whoItsFor = [
  "Founders validating a product idea before committing",
  "Teams needing a quick internal tool",
  "Companies exploring AI before a larger engagement",
  "Anyone with an idea they want to see working today",
]

export default function OneDayAppPage() {
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

      {/* Glootie */}
      <section className="pt-12 pb-0">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/glootie.png"
            alt="Glootie from Rick and Morty"
            width={150}
            height={150}
            className="rounded-full border-2 border-primary/20"
          />
          <p className="mt-3 text-lg italic text-foreground/50">
            &ldquo;Do you want to develop an app?&rdquo;
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="pt-8 pb-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          1-Day App <span className="text-primary">Builds</span>
        </h1>
        <p className="mt-6 text-xl text-foreground/60 leading-relaxed max-w-2xl">
          Go from idea to working AI prototype in a single day. Not a mockup — a
          deployed, functional app you can test with real users.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={NEXT_PUBLIC_STRIPE_1DAY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-xl font-bold text-white hover:opacity-90 transition-opacity"
          >
            Get started — $950
          </a>
          <a
            href={NEXT_PUBLIC_CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-foreground/50 underline underline-offset-4 decoration-foreground/20 hover:text-foreground/70 hover:decoration-foreground/40 transition-colors"
          >
            or book a call first
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="pb-24">
        <h2 className="text-2xl font-bold mb-8">How it works</h2>
        <div className="space-y-8">
          {howItWorks.map((item) => (
            <div key={item.step} className="flex gap-6">
              <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                {item.step}
              </span>
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-1 text-lg text-foreground/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What You Get */}
      <section className="pb-24">
        <h2 className="text-2xl font-bold mb-8">What you get</h2>
        <ul className="space-y-4">
          {whatYouGet.map((item) => (
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

      {/* Example Builds */}
      <section className="pb-24">
        <h2 className="text-2xl font-bold mb-4">Example builds</h2>
        <p className="text-lg text-foreground/50 mb-6">
          Things we&apos;ve built (or could build) in a day:
        </p>
        <ul className="space-y-3">
          {examples.map((example) => (
            <li
              key={example}
              className="flex items-start gap-3 text-lg text-foreground/60"
            >
              <ArrowRight className="w-4 h-4 text-primary/50 shrink-0 mt-1.5" />
              {example}
            </li>
          ))}
        </ul>
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
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold">$950</span>
            <span className="text-lg text-foreground/40">per build</span>
          </div>
          <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
            One flat price. Includes everything: design, development,
            deployment, source code, and walkthrough. No hidden fees.
          </p>
          <p className="mt-4 text-base text-foreground/40">
            Need something bigger? Check out our{" "}
            <Link
              href="/services"
              className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary/60 transition-colors"
            >
              1-week and 1-month build packages
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 text-center">
        <h2 className="text-3xl font-bold">Ready to build?</h2>
        <p className="mt-4 text-lg text-foreground/50 max-w-md mx-auto">
          Pay now and we&apos;ll reach out to scope your project. Or book a call
          to discuss first.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          <a
            href={NEXT_PUBLIC_STRIPE_1DAY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-xl font-bold text-white hover:opacity-90 transition-opacity"
          >
            Get started — $950
          </a>
          <a
            href={NEXT_PUBLIC_CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-foreground/50 underline underline-offset-4 decoration-foreground/20 hover:text-foreground/70 hover:decoration-foreground/40 transition-colors"
          >
            Book a free call
          </a>
        </div>
      </section>
    </div>
  )
}
