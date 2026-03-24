import Link from "next/link"
import {
  ArrowUpRight,
  ArrowRight,
  MessageSquare,
  GraduationCap,
  Zap,
  Bot,
  Mail,
} from "lucide-react"
import Marquee from "@/components/Marquee"
import { NEXT_PUBLIC_CALENDLY_LINK } from "@/lib/env"

const services = [
  {
    title: "OpenClaw Setup",
    description:
      "Get a private, self-hosted AI assistant running across your messaging platforms. We handle the infrastructure, integrations, and custom workflows.",
    icon: Bot,
    href: "/services/open-claw",
  },
  {
    title: "1-Day App Builds",
    description:
      "Go from idea to working AI prototype in a single day. Deployed, functional, and ready to test with real users.",
    icon: Zap,
    href: "/services/1-day-app",
  },
  {
    title: "AI Consulting",
    description:
      "Strategy and implementation guidance for teams adopting AI. We assess your workflows, identify high-impact opportunities, and build a practical roadmap.",
    icon: MessageSquare,
    href: "/services/consulting",
  },
  {
    title: "AI Training & Workshops",
    description:
      "Hands-on sessions that get your team building with AI tools — from prompt engineering to deploying production agents.",
    icon: GraduationCap,
    href: "/services/training",
  },
]

const products = [
  {
    name: "Issue to PR",
    tagline: "Autonomous coding agent",
    description:
      "Turns GitHub issues into ready-to-review pull requests. Engineering teams cut issue-to-merge time by 96%.",
    url: "https://issuetopr.dev",
  },
  {
    name: "Refolk",
    tagline: "AI customer personas",
    description:
      "Synthesizes real customer data into living personas you can interview, debate with, and pressure-test product ideas against.",
    url: "https://refolk.ai",
  },
  {
    name: "Agent Form Filler",
    tagline: "AI-powered form automation",
    description:
      "Fills out long government applications, insurance forms, and compliance paperwork using voice or text input. Cuts completion from 45 minutes to under 5.",
  },
  {
    name: "File Renamer",
    tagline: "Vision AI desktop tool",
    description:
      "Uses GPT-4 Vision to look at images and documents, then renames them descriptively. Turns folders of IMG_4382.jpg into a searchable archive.",
  },
  {
    name: "AI Breakfast",
    tagline: "Community",
    description:
      "Weekly Shanghai meetup for founders, engineers, and operators working with AI. Practical, open, and focused on shipping.",
    url: "https://ai-breakfast.youngandai.com",
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          We Build <span className="text-primary">AI</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-2xl">
          Young &amp; AI is an AI studio that builds products, offers consulting,
          and runs training for teams ready to ship with AI.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a
            href={NEXT_PUBLIC_CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-xl font-bold text-white hover:opacity-90 transition-opacity"
          >
            Book a discovery call
          </a>
          <Link
            href="/services"
            className="text-xl text-foreground/50 underline underline-offset-4 decoration-foreground/20 hover:text-foreground/70 hover:decoration-foreground/40 transition-colors"
          >
            View services
          </Link>
        </div>
      </section>

      {/* Scrolling Marquee — full-width purple band */}
      <Marquee />

      {/* Services — subtle secondary background for contrast */}
      <section id="services" className="bg-secondary">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h2 className="text-xl uppercase tracking-widest text-primary/70 mb-10">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-2xl border border-primary/10 bg-background p-6 hover:border-primary/25 transition-colors"
                >
                  <Icon className="w-6 h-6 text-primary mb-4" />
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary/70 group-hover:text-primary transition-colors">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-xl uppercase tracking-widest text-primary/70 mb-10">
          Products &amp; Projects
        </h2>
        <div className="divide-y divide-primary/15">
          {products.map((product) => {
            const inner = (
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-foreground/70 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-base text-primary/60 font-medium">
                    {product.tagline}
                  </p>
                  <p className="mt-3 text-lg text-foreground/60 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                {product.url && (
                  <ArrowUpRight className="w-6 h-6 mt-2 shrink-0 text-foreground/30 group-hover:text-primary transition-colors" />
                )}
              </div>
            )

            return product.url ? (
              <Link
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 first:pt-0"
              >
                {inner}
              </Link>
            ) : (
              <div key={product.name} className="py-8 first:pt-0">
                {inner}
              </div>
            )
          })}
        </div>
      </section>

      {/* About — secondary background */}
      <section id="about" className="bg-secondary">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h2 className="text-xl uppercase tracking-widest text-primary/70 mb-10">
            About
          </h2>
          <div className="space-y-6 text-foreground/80 text-xl leading-relaxed">
            <p>
              Young &amp; AI was founded by{" "}
              <span className="font-semibold text-foreground">
                Ching Jui Young
              </span>{" "}
              in Shanghai. With a background spanning enterprise software,
              automation, and data platforms, Ching has helped companies of every
              size adopt AI — from early prototypes to production systems running
              at scale.
            </p>
            <p>
              We also run{" "}
              <a
                href="https://ai-breakfast.youngandai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary/60 transition-colors"
              >
                AI Breakfast
              </a>
              , a weekly Shanghai meetup where founders, engineers, and operators
              trade notes on what&apos;s working in AI.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-lg text-primary/70 hover:text-primary font-medium transition-colors"
            >
              Read more about us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog / Newsletter */}
      <section id="blog" className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-xl uppercase tracking-widest text-primary/70 mb-10">
          Blog &amp; Newsletter
        </h2>
        <div className="rounded-2xl border border-primary/10 p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Stay in the loop</h3>
              <p className="mt-3 text-lg text-foreground/60 leading-relaxed max-w-md">
                We write about AI engineering, product building, and lessons
                from running an AI studio. Practical insights — no hype.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="https://ai-breakfast.youngandai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/15 px-5 py-2.5 text-sm font-bold text-foreground hover:bg-primary/5 transition-colors"
              >
                Visit AI Breakfast
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@youngandai.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/15 px-5 py-2.5 text-sm font-bold text-foreground hover:bg-primary/5 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Subscribe via email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA — deep purple band */}
      <section className="bg-primary text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to build?
          </h2>
          <p className="mt-4 text-xl text-white/70 max-w-lg mx-auto leading-relaxed">
            Book a free 30-minute discovery call. We&apos;ll scope your project and
            recommend the right package.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <a
              href={NEXT_PUBLIC_CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-white px-8 py-4 text-xl font-bold text-primary hover:opacity-90 transition-opacity"
            >
              Book a discovery call
            </a>
            <a
              href="mailto:contact@youngandai.com"
              className="text-xl text-white/60 underline underline-offset-4 decoration-white/30 hover:text-white/80 hover:decoration-white/50 transition-colors"
            >
              or email us
            </a>
          </div>
          <p className="mt-3 text-sm text-white/40">
            Free &middot; 30 minutes &middot; No commitment
          </p>
        </div>
      </section>
    </div>
  )
}
