import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Zap, Lock, Keyboard, HardDrive, Rocket } from "lucide-react"
import {
  NEXT_PUBLIC_STRIPE_1DAY_LINK,
  NEXT_PUBLIC_CALENDLY_LINK,
} from "@/lib/env"

export const metadata: Metadata = {
  title: "1-Day Mac App Builds",
  description:
    "Get a custom native Mac app built in a single day. Hyper-personalized to you, runs on your desktop, and your data stays on your machine. $950 flat.",
  openGraph: {
    title: "1-Day Mac App Builds | Young & AI",
    description:
      "Get a custom native Mac app built in a single day. Hyper-personalized to you, runs on your desktop, and your data stays on your machine. $950 flat.",
    url: "https://youngandai.com/services/1-day-app",
  },
  twitter: {
    card: "summary",
    title: "1-Day Mac App Builds | Young & AI",
    description:
      "Get a custom native Mac app built in a single day. Hyper-personalized to you, runs on your desktop, and your data stays on your machine. $950 flat.",
  },
}

const dayTimeline = [
  {
    time: "8:00 AM",
    title: "Kickoff call",
    description:
      "We hop on a call to nail down exactly what you need. We scope the app, confirm the approach, and get to work.",
  },
  {
    time: "10:00 AM",
    title: "First preview build",
    description:
      "A working app is on your Mac. You can open it, see the structure, and start giving feedback on the direction.",
  },
  {
    time: "2:00 PM",
    title: "Second preview build",
    description:
      "Core features are wired up and functional. You can use it for real workflows and tell us what to adjust.",
  },
  {
    time: "5:00 PM",
    title: "Final preview build",
    description:
      "Everything polished — UI, keyboard shortcuts, edge cases. Last round of tweaks based on your feedback.",
  },
  {
    time: "6:00 PM",
    title: "Delivery",
    description:
      "Your finished app is on your Mac, source code is handed off, and we do a 30-minute walkthrough together.",
  },
]

const whyNative = [
  {
    icon: Rocket,
    title: "Instant launch",
    description:
      "Open it with Cmd+Space or Raycast — it's right there. No navigating to a URL, no logging in, no waiting for a page to load. Your app opens in under a second.",
  },
  {
    icon: Zap,
    title: "Blazing fast on Apple Silicon",
    description:
      "Built natively for your Mac's chip, so it's the fastest version of that app that's possible. Way faster than your current workaround — whether that's a Notion database, an Excel spreadsheet, or a web app that takes seconds to load.",
  },
  {
    icon: Keyboard,
    title: "Your shortcuts, your way",
    description:
      "Every action in the app can have a keyboard shortcut that makes sense to you. Native macOS shortcuts are built in from day one — navigate, create, search, all without touching the mouse.",
  },
  {
    icon: HardDrive,
    title: "Instant data, cached locally",
    description:
      "No waiting for a server to respond. Your data is cached on your Mac, so the app opens with everything ready. Updates happen optimistically in the background — you never wait for a loading spinner.",
  },
  {
    icon: Lock,
    title: "Truly private and secure",
    description:
      "Sensitive info like API keys, financial data, or client records stays on your Mac — not on a third-party server, not even on a server you own. Your data is backed by Apple's device security: biometrics, encrypted storage, the works.",
  },
]

const whatYouGet = [
  "A native Mac app built just for you",
  "Connects to any service with an API — reimagine how you interact with your tools in a UI built for you",
  "Combine data from multiple services into one view that matches your actual workflow",
  "Log in once and stay logged in — no re-authentication every week",
  "Your data stays on your machine — private and secure",
  "Full source code handoff",
  "30-minute walkthrough call",
  "3 preview builds throughout the day so you can steer the outcome",
]

const portfolioApps = [
  {
    slug: "anna-expenses",
    name: "Anna Expenses",
    tagline: "Education business management for a tutoring studio",
    highlights: [
      "Dashboard with monthly income, expenses, and net overview",
      "Student and teacher management with package tracking",
      "Transaction ledger with CSV import support",
      "Expense tracking with category tagging",
    ],
    screenshots: [
      { src: "/portfolio/anna-expenses/dashboard.png", alt: "Dashboard overview" },
      { src: "/portfolio/anna-expenses/transactions.png", alt: "Transactions view" },
      { src: "/portfolio/anna-expenses/expenses.png", alt: "Expense tracking" },
    ],
  },
  {
    slug: "pulse",
    href: "/projects/pulse",
    name: "Pulse",
    tagline: "A personal command center for creators and founders",
    highlights: [
      "Unified dashboard with revenue, GitHub, and social metrics",
      "Kanban-style issue tracking with priority levels",
      "Social media analytics with YouTube and LinkedIn integration",
      "Top content performance tracking",
    ],
    screenshots: [
      { src: "/portfolio/pulse/home.png", alt: "Home dashboard" },
      { src: "/portfolio/pulse/issues.png", alt: "Issue tracking" },
    ],
  },
]

const faq = [
  {
    q: "What exactly can you build in a day?",
    a: "A fully functional native Mac app with a clean UI, multiple views, data management, and local storage. Think of it as 4-6 polished screens with real functionality — not a toy demo. The Anna Expenses app (dashboard, transactions, expense tracking, CSV import, and more) is a good benchmark for what's achievable.",
  },
  {
    q: "What if my idea is too big for one day?",
    a: "We'll tell you during the kickoff call — before any building starts. If the scope is too large, we'll either trim it to a strong v1 that fits in a day, or recommend our 1-week or 1-month packages instead. You'll never pay for something we can't deliver.",
  },
  {
    q: "What happens after delivery? Can I get changes later?",
    a: "You own the source code, so you (or any developer) can modify it anytime. If you want us to make changes, we offer follow-up build days at the same $950 rate. No lock-in.",
  },
  {
    q: "What tech stack do you use?",
    a: "We build natively in Swift for macOS. This gives you one of the smallest possible bundle sizes, the fastest performance on Apple Silicon, and seamless integration with the latest macOS UI features like the glass-style interface. It also means any Swift developer can maintain your app in the future.",
  },
  {
    q: "What about my data — is it secure?",
    a: "Your data lives entirely on your Mac. Nothing is sent to a server or shared with third parties. Sensitive information like API keys, financial data, or client records stays on your machine, backed by Apple's built-in device security — biometric authentication, encrypted storage, and more. This is one of the biggest advantages of a desktop app over a web service.",
  },
  {
    q: "Can it work on multiple Macs or with multiple users?",
    a: "The $950 one-day build is designed for a single user on one Mac. If you need multi-device sync or multi-user support, those are great fits for our 1-week or 1-month build packages, which give us time to build out that infrastructure.",
  },
  {
    q: "Who owns the intellectual property?",
    a: "You do. We hand off the full source code and you own everything we build. We don't retain any rights to your app or data.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "We want you to love what we build. You get three preview builds throughout the day (at 10am, 2pm, and 5pm) so you can steer the direction before final delivery. If the finished app doesn't meet the scope we agreed on during kickoff, we'll make it right — whether that means additional revisions or a refund.",
  },
  {
    q: "Can I see a demo before I buy?",
    a: "Book a free call and we'll walk you through the portfolio apps live. You can also browse the screenshots on each portfolio page to see the level of quality we deliver.",
  },
  {
    q: "What's the timeline if I pay today?",
    a: "We'll reach out within 24 hours to schedule your build day. On the day itself: 8am kickoff, preview builds at 10am, 2pm, and 5pm, and final delivery at 6pm.",
  },
]

export default function OneDayAppPage() {
  return (
    <div>
      {/* Back link + Hero */}
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

        <section className="pt-12 pb-24">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            1-Day Mac App{" "}
            <span className="text-primary">Builds</span>
          </h1>
          <p className="mt-6 text-xl text-foreground/60 leading-relaxed max-w-2xl">
            Get a custom native Mac app built in a single day. Hyper-personalized
            to you, runs right on your desktop, and all your data stays on your
            machine.
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
      </div>

      {/* Why a Mac app */}
      <section className="bg-secondary">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-bold mb-8">
            Why a native Mac app?
          </h2>
          <div className="space-y-6">
            {whyNative.map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-base text-foreground/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the day looks like */}
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold mb-8">What the day looks like</h2>
        <div className="space-y-0">
          {dayTimeline.map((item, i) => (
            <div key={item.time} className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className="shrink-0 w-3 h-3 rounded-full bg-primary mt-2" />
                {i < dayTimeline.length - 1 && (
                  <div className="w-px flex-1 bg-primary/20" />
                )}
              </div>
              <div className="pb-8">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-mono text-primary/70">
                    {item.time}
                  </span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <p className="mt-1 text-base text-foreground/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What You Get */}
      <section className="bg-secondary">
        <div className="max-w-3xl mx-auto px-6 py-24">
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
          <div className="mt-6 rounded-xl bg-primary/5 border border-primary/10 p-5">
            <p className="text-base text-foreground/60 leading-relaxed">
              <span className="font-semibold text-foreground/80">
                Agencies charge $5,000–$20,000+
              </span>{" "}
              for custom app development and take weeks to deliver. We build and
              ship yours in a single day for a flat $950.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold mb-4">Apps we&apos;ve built</h2>
        <p className="text-lg text-foreground/50 mb-10">
          Real Mac apps we&apos;ve shipped. Each one started as an idea and
          became a fully functional native app in a day.
        </p>
        <div className="space-y-16">
          {portfolioApps.map((app) => (
            <Link
              key={app.slug}
              href={app.href ?? `/services/1-day-app/portfolio/${app.slug}`}
              className="block group"
            >
              <div className="rounded-2xl border border-foreground/5 bg-foreground/[0.02] p-6 transition-colors hover:border-primary/20 hover:bg-primary/[0.02]">
                <div className="mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-base text-foreground/50 mt-1">
                    {app.tagline}
                  </p>
                </div>

                {/* Screenshot gallery */}
                <div className="overflow-x-auto -mx-2 px-2 pb-2">
                  <div className="flex gap-4" style={{ minWidth: "min-content" }}>
                    {app.screenshots.map((screenshot) => (
                      <div
                        key={screenshot.src}
                        className="shrink-0 rounded-lg overflow-hidden shadow-lg border border-foreground/5"
                        style={{ width: app.screenshots.length === 1 ? "100%" : "320px" }}
                      >
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width={640}
                          height={400}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {app.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-foreground/50"
                    >
                      <Check className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary/70 group-hover:text-primary transition-colors">
                  View all screenshots
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <section className="bg-secondary">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <div className="rounded-2xl border border-primary/10 p-8">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold">$950</span>
              <span className="text-lg text-foreground/40">flat — no hidden fees</span>
            </div>
            <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
              One price, everything included: design, development, your finished
              app, full source code, and a 30-minute walkthrough. Built for one
              user on one Mac.
            </p>
            <p className="mt-4 text-base text-foreground/40">
              Need multi-device sync, multiple users, or a larger scope? Check
              out our{" "}
              <Link
                href="/services"
                className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary/60 transition-colors"
              >
                1-week and 1-month build packages
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold mb-8">Frequently asked questions</h2>
        <div className="divide-y divide-foreground/5">
          {faq.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer items-center justify-between py-5 text-lg font-bold list-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="ml-4 shrink-0 text-foreground/30 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-5 text-base text-foreground/50 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-secondary">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold">Ready to build?</h2>
          <p className="mt-4 text-lg text-foreground/50 max-w-md mx-auto">
            Pay now and we&apos;ll reach out within 24 hours to schedule your
            build day. Or book a call to discuss first.
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
        </div>
      </section>

      {/* Glootie */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center opacity-50 hover:opacity-80 transition-opacity">
          <Image
            src="/glootie.png"
            alt="Glootie from Rick and Morty"
            width={80}
            height={80}
            className="rounded-full border border-primary/10"
          />
          <p className="mt-2 text-sm italic text-foreground/30">
            &ldquo;Do you want to develop an app?&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}
