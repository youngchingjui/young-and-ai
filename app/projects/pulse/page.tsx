import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { NEXT_PUBLIC_CALENDLY_LINK } from "@/lib/env"

export const metadata: Metadata = {
  title: "Pulse — Business Metrics Dashboard for Mac",
  description:
    "A native Mac app that consolidates Stripe, GitHub, and YouTube metrics into a single dashboard. Built by Young & AI.",
  openGraph: {
    title: "Pulse — Business Metrics Dashboard for Mac | Young & AI",
    description:
      "A native Mac app that consolidates Stripe, GitHub, and YouTube metrics into a single dashboard. Built by Young & AI.",
    url: "https://youngandai.com/projects/pulse",
    images: [
      {
        url: "/portfolio/pulse/home.png",
        width: 1200,
        height: 750,
        alt: "Pulse dashboard showing Stripe, GitHub, and YouTube metrics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulse — Business Metrics Dashboard for Mac | Young & AI",
    description:
      "A native Mac app that consolidates Stripe, GitHub, and YouTube metrics into a single dashboard.",
    images: ["/portfolio/pulse/home.png"],
  },
}

export default function PulseProjectPage() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/40 hover:text-foreground/60 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>

      {/* Hero — text then full-width screenshot */}
      <section className="pt-12 pb-16">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-primary/70 mb-4">
            1-Day Build
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Pulse
          </h1>
          <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
            A founder was checking Stripe, GitHub, and YouTube several times a
            day — each one a separate browser tab, a separate login, a
            separate wait. We built a native Mac app that puts all of it in
            one place.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["SwiftUI", "API Integrations", "macOS"].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-10 rounded-xl overflow-hidden shadow-lg border border-foreground/5">
          <Image
            src="/portfolio/pulse/home.png"
            alt="Pulse dashboard showing Stripe, GitHub, and YouTube metrics"
            width={2400}
            height={1600}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* The story */}
      <section className="pb-16 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">The problem</h2>
        <p className="text-lg text-foreground/60 leading-relaxed">
          Checking business metrics in a browser is surprisingly annoying.
          Sessions expire, so you re-authenticate. Each service is a separate
          tab competing for memory. There&apos;s no shortcut to get there — you
          open a browser, find the bookmark or type the URL, wait for the page
          to load, and then maybe log in again. It&apos;s a small friction that
          adds up when you do it ten times a day.
        </p>
      </section>

      <section className="pb-16 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">What we built</h2>
        <p className="text-lg text-foreground/60 leading-relaxed">
          Pulse is a native macOS app that pulls metrics from multiple services
          into a single dashboard. It caches data locally, so the dashboard
          loads in about half a second. API keys are encrypted at rest rather
          than stored in plain config files. And because it&apos;s a native app,
          you can open it from Spotlight or Raycast the same way you&apos;d open
          any other app on your Mac. The client started with Stripe, GitHub, and
          YouTube, but the app is built to add more services over time.
        </p>
      </section>

      {/* Feature: App launcher — image left, text right */}
      <section className="pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/portfolio/pulse/launcher.png"
            alt="Searching 'Pulse' in Raycast launcher"
            width={1724}
            height={460}
            className="rounded-xl"
          />
          <div>
            <h2 className="text-xl font-bold mb-3">
              Open it like any other app
            </h2>
            <p className="text-foreground/60 leading-relaxed">
              Type &ldquo;Pulse&rdquo; in Spotlight or Raycast and it opens. No
              browser, no bookmarks, no URL bar. Compared to finding the right
              tab or typing in a URL, it&apos;s just less friction.
            </p>
          </div>
        </div>
      </section>

      {/* Feature: Keyboard shortcuts — image left, text right */}
      <section className="pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/portfolio/pulse/shortcuts.png"
            alt="Pulse dashboard showing keyboard shortcut hints on tabs"
            width={2422}
            height={1846}
            className="rounded-xl"
          />
          <div>
            <h2 className="text-xl font-bold mb-3">Keyboard shortcuts</h2>
            <p className="text-foreground/60 leading-relaxed">
              Switch tabs, refresh data, and manage issues without reaching for
              the mouse. Standard Mac shortcuts that work the way you&apos;d
              expect.
            </p>
          </div>
        </div>
      </section>

      {/* Feature: Issues view — text left, image right */}
      <section className="pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl font-bold mb-3">
              Issue tracking built in
            </h2>
            <p className="text-foreground/60 leading-relaxed">
              A kanban board that pulls from GitHub Issues. See today&apos;s
              focus, what&apos;s done, and what&apos;s outstanding — without
              opening GitHub.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-foreground/5">
            <Image
              src="/portfolio/pulse/issues.png"
              alt="Issues tab — kanban board with today's focus, completed tasks, and outstanding issues"
              width={1200}
              height={750}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Summary stats */}
      <section className="pb-16">
        <div className="rounded-2xl border border-primary/10 p-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">1 day</p>
              <p className="mt-1 text-sm text-foreground/50">to build</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">~0.5s</p>
              <p className="mt-1 text-sm text-foreground/50">dashboard load</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">0</p>
              <p className="mt-1 text-sm text-foreground/50">
                re-logins needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 text-center">
        <h2 className="text-3xl font-bold">Want something like this?</h2>
        <p className="mt-4 text-lg text-foreground/50 max-w-md mx-auto">
          We built Pulse in a day. Tell us what you need and we&apos;ll scope
          it out.
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
