import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { NEXT_PUBLIC_CALENDLY_LINK } from "@/lib/env"

export const metadata: Metadata = {
  title: "AI Training & Workshops",
  description:
    "Hands-on AI training for teams. From prompt engineering to building production agents — custom workshops tailored to your stack.",
  openGraph: {
    title: "AI Training & Workshops | Young & AI",
    description:
      "Hands-on AI training for teams. From prompt engineering to building production agents — custom workshops tailored to your stack.",
    url: "https://youngandai.com/services/training",
  },
}

const formats = [
  {
    title: "Half-Day Workshop",
    duration: "4 hours",
    description:
      "Focused session on a specific topic — prompt engineering, AI tools for developers, or building your first agent. Great for kickoffs.",
    price: "From $1,500",
  },
  {
    title: "Full-Day Intensive",
    duration: "8 hours",
    description:
      "Deep dive with hands-on exercises. Your team builds a working AI feature by end of day using your own codebase and data.",
    price: "From $3,000",
  },
  {
    title: "Multi-Day Program",
    duration: "2–5 days",
    description:
      "Comprehensive upskilling program. Covers fundamentals through advanced topics, with each day building on the last. Includes follow-up support.",
    price: "Custom pricing",
  },
]

const topics = [
  "Prompt engineering & LLM fundamentals",
  "Building AI agents with tool use",
  "RAG (Retrieval-Augmented Generation) systems",
  "AI-assisted coding workflows",
  "Deploying AI to production safely",
  "Evaluating & testing AI systems",
]

const whoItsFor = [
  "Engineering teams adopting AI tools for the first time",
  "Product teams wanting to understand AI capabilities",
  "Companies running internal AI upskilling programs",
  "Teams building AI features into existing products",
]

export default function TrainingPage() {
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
          AI Training &amp;{" "}
          <span className="text-primary">Workshops</span>
        </h1>
        <p className="mt-6 text-xl text-foreground/60 leading-relaxed max-w-2xl">
          Hands-on sessions that get your team building with AI. Not slides and
          theory — real tools, real exercises, real output by end of day.
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
            We&apos;ll scope a program for your team
          </p>
        </div>
      </section>

      {/* Formats */}
      <section className="pb-24">
        <h2 className="text-2xl font-bold mb-8">Workshop formats</h2>
        <div className="space-y-6">
          {formats.map((format) => (
            <div
              key={format.title}
              className="rounded-2xl border border-primary/10 p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">{format.title}</h3>
                  <p className="mt-1 text-sm text-primary/60 font-medium">
                    {format.duration}
                  </p>
                </div>
                <span className="shrink-0 text-sm font-semibold text-foreground/50">
                  {format.price}
                </span>
              </div>
              <p className="mt-3 text-lg text-foreground/60 leading-relaxed">
                {format.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="pb-24">
        <h2 className="text-2xl font-bold mb-8">Topics we cover</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {topics.map((topic) => (
            <li
              key={topic}
              className="flex items-start gap-3 text-lg text-foreground/70"
            >
              <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
              {topic}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-base text-foreground/40">
          All workshops are customized to your team&apos;s stack and goals.
        </p>
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

      {/* CTA */}
      <section className="pb-24 text-center">
        <h2 className="text-3xl font-bold">Ready to upskill your team?</h2>
        <p className="mt-4 text-lg text-foreground/50 max-w-md mx-auto">
          Book a free call and we&apos;ll design a workshop tailored to your
          team&apos;s needs and experience level.
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
