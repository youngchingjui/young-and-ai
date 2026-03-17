import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import BookingCTA from "@/components/BookingCTA"
import { NEXT_PUBLIC_CALENDLY_LINK } from "@/lib/env"

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
            href={NEXT_PUBLIC_CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-xl font-bold text-white hover:opacity-90 transition-opacity"
          >
            Book a discovery call
          </a>
          <a
            href="mailto:contact@youngandai.com"
            className="text-xl text-foreground/50 underline underline-offset-4 decoration-foreground/20 hover:text-foreground/70 hover:decoration-foreground/40 transition-colors"
          >
            or email us
          </a>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="pb-24">
        <h2 className="text-xl uppercase tracking-widest text-primary/70 mb-10">
          What we&apos;ve built
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
                <p className="mt-1 text-base text-primary/60 font-medium">
                  Autonomous coding agent
                </p>
                <p className="mt-3 text-xl text-foreground/60 leading-relaxed">
                  Turns GitHub issues into ready-to-review pull requests.
                  Engineering teams cut issue-to-merge time by 96% — the agent
                  reads the issue, analyzes the codebase, writes the code, and
                  opens a PR.
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 mt-2 shrink-0 text-foreground/30 group-hover:text-primary transition-colors" />
            </div>
          </Link>

          <Link
            href="https://refolk.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-foreground/70 transition-colors">
                  Refolk
                </h3>
                <p className="mt-1 text-base text-primary/60 font-medium">
                  AI customer personas
                </p>
                <p className="mt-3 text-xl text-foreground/60 leading-relaxed">
                  Synthesizes real customer data into living personas you can
                  interview, debate with, and pressure-test product ideas
                  against. Replaces guesswork with data-driven user research.
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 mt-2 shrink-0 text-foreground/30 group-hover:text-primary transition-colors" />
            </div>
          </Link>

          <div className="py-8">
            <h3 className="text-2xl md:text-3xl font-bold">
              Agent Form Filler
            </h3>
            <p className="mt-1 text-base text-primary/60 font-medium">
              AI-powered form automation
            </p>
            <p className="mt-3 text-xl text-foreground/60 leading-relaxed">
              Fills out long government applications, insurance forms, and
              compliance paperwork using voice or text input. Cuts form
              completion from 45 minutes to under 5.
            </p>
          </div>

          <div className="py-8">
            <h3 className="text-2xl md:text-3xl font-bold">File Renamer</h3>
            <p className="mt-1 text-base text-primary/60 font-medium">
              Vision AI desktop tool
            </p>
            <p className="mt-3 text-xl text-foreground/60 leading-relaxed">
              Uses GPT-4 Vision to look at images and documents, then renames
              them descriptively. Turns folders of IMG_4382.jpg into a
              searchable, organized archive.
            </p>
          </div>

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
                <p className="mt-1 text-base text-primary/60 font-medium">
                  Community
                </p>
                <p className="mt-3 text-xl text-foreground/60 leading-relaxed">
                  Weekly Shanghai meetup for founders, engineers, and operators
                  working with AI. Practical, open, and focused on shipping.
                </p>
              </div>
              <ArrowUpRight className="w-6 h-6 mt-2 shrink-0 text-foreground/30 group-hover:text-primary transition-colors" />
            </div>
          </Link>
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-lg text-primary/70 hover:text-primary font-medium transition-colors"
          >
            See how we can build yours
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCTA />
    </div>
  )
}
