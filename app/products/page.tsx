import { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import BookingCTA from "@/components/BookingCTA"

export const metadata: Metadata = {
  title: "Products | Young & AI",
  description:
    "AI products built by Young & AI — from autonomous coding agents to AI customer personas.",
}

const featured = [
  {
    name: "Issue to PR",
    tagline: "Autonomous coding agent",
    description:
      "Turns GitHub issues into ready-to-review pull requests. The agent reads the issue, analyzes the codebase, writes the code, and opens a PR — cutting issue-to-merge time by 96%.",
    url: "https://issuetopr.dev",
    builtIn: "2 weeks",
  },
  {
    name: "Refolk",
    tagline: "AI customer personas",
    description:
      "Synthesizes real customer data into living personas you can interview, debate with, and pressure-test product ideas against. Replaces guesswork with data-driven user research.",
    url: "https://refolk.ai",
    builtIn: "3 weeks",
  },
]

const projects = [
  {
    name: "Agent Form Filler",
    tagline: "AI-powered form automation",
    description:
      "Fills out long government applications, insurance forms, and compliance paperwork using voice or text input. Cuts form completion from 45 minutes to under 5.",
    builtIn: "1 week",
  },
  {
    name: "File Renamer",
    tagline: "Vision AI desktop tool",
    description:
      "Uses GPT-4 Vision to look at images and documents, then renames them descriptively. Turns folders of IMG_4382.jpg into a searchable, organized archive.",
    builtIn: "2 days",
  },
  {
    name: "AI Breakfast",
    tagline: "Community",
    description:
      "Weekly Shanghai meetup for founders, engineers, and operators working with AI. Practical, open, and focused on shipping.",
    url: "https://ai-breakfast.youngandai.com",
  },
]

export default function ProductsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Hero */}
      <section className="pt-24 pb-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          What we&apos;ve <span className="text-primary">built</span>
        </h1>
        <p className="mt-6 text-xl text-foreground/60 leading-relaxed">
          AI products and tools we&apos;ve shipped — from autonomous coding
          agents to AI-powered research tools. Every project started as a
          conversation.
        </p>
      </section>

      {/* Featured Products */}
      <section className="pb-24">
        <h2 className="text-xl uppercase tracking-widest text-primary/70 mb-10">
          Featured
        </h2>
        <div className="space-y-6">
          {featured.map((product) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-primary/10 p-8 hover:border-primary/25 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                    {product.name}
                  </h2>
                  <p className="mt-1 text-base text-primary/60 font-medium">
                    {product.tagline}
                  </p>
                </div>
                <ArrowUpRight className="w-6 h-6 mt-2 shrink-0 text-foreground/30 group-hover:text-primary transition-colors" />
              </div>
              <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
                {product.description}
              </p>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-sm text-foreground/30">
                  Built in {product.builtIn}
                </span>
                <span className="text-sm text-primary/70 group-hover:text-primary transition-colors">
                  {product.url.replace("https://", "")}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* More Projects */}
      <section className="pb-24">
        <h2 className="text-xl uppercase tracking-widest text-primary/70 mb-10">
          More projects
        </h2>
        <div className="divide-y divide-primary/15">
          {projects.map((project) => {
            const inner = (
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-foreground/70 transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-base text-primary/60 font-medium">
                    {project.tagline}
                  </p>
                  <p className="mt-3 text-lg text-foreground/60 leading-relaxed">
                    {project.description}
                  </p>
                  {project.builtIn && (
                    <span className="mt-2 inline-block text-sm text-foreground/30">
                      Built in {project.builtIn}
                    </span>
                  )}
                </div>
                {project.url && (
                  <ArrowUpRight className="w-6 h-6 mt-2 shrink-0 text-foreground/30 group-hover:text-primary transition-colors" />
                )}
              </div>
            )

            return project.url ? (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 first:pt-0"
              >
                {inner}
              </a>
            ) : (
              <div key={project.name} className="py-8 first:pt-0">
                {inner}
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="rounded-2xl border border-primary/10 p-8 text-center">
          <h2 className="text-2xl font-bold">Want us to build something?</h2>
          <p className="mt-3 text-lg text-foreground/60 max-w-md mx-auto">
            Every product above started as a conversation. Tell us what you need
            and we&apos;ll scope it out.
          </p>
          <div className="mt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-lg font-bold text-white hover:opacity-90 transition-opacity"
            >
              View our services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <BookingCTA />
    </div>
  )
}
