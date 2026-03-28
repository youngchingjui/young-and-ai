import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import {
  NEXT_PUBLIC_STRIPE_1DAY_LINK,
  NEXT_PUBLIC_CALENDLY_LINK,
} from "@/lib/env"

export const metadata: Metadata = {
  title: "MarkdownReader — 1-Day App Build",
  description:
    "A clean, native Mac app for browsing and reading markdown files with a file tree sidebar. Built in a day by Young & AI.",
}

const highlights = [
  "File tree sidebar for quick navigation",
  "Clean, native markdown rendering",
  "Drag and drop file and folder support",
  "Fast search across documents",
]

const screenshots = [
  { src: "/portfolio/markdown-reader/main.png", alt: "Main view — file tree sidebar with markdown file browser and open file prompt" },
]

export default function MarkdownReaderPage() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="pt-8">
        <Link
          href="/services/1-day-app"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/40 hover:text-foreground/60 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          1-Day App Builds
        </Link>
      </div>

      {/* Hero */}
      <section className="pt-12 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          MarkdownReader
        </h1>
        <p className="mt-2 text-xl text-foreground/50">
          A clean, native markdown file viewer for Mac
        </p>
        <p className="mt-6 text-lg text-foreground/60 leading-relaxed max-w-2xl">
          A lightweight Mac app for browsing and reading markdown files. Drag
          and drop a folder or file and get beautifully rendered markdown with a
          file tree sidebar for quick navigation.
        </p>
      </section>

      {/* Key Features */}
      <section className="pb-16">
        <h2 className="text-2xl font-bold mb-6">Key features</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-base text-foreground/60"
            >
              <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Screenshots */}
      <section className="pb-16">
        <h2 className="text-2xl font-bold mb-8">Screenshots</h2>
        <div className="space-y-8">
          {screenshots.map((screenshot) => (
            <div key={screenshot.src} className="space-y-2">
              <div className="rounded-xl overflow-hidden shadow-lg border border-foreground/5">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-foreground/40 pl-1">
                {screenshot.alt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 text-center">
        <h2 className="text-3xl font-bold">Want something like this?</h2>
        <p className="mt-4 text-lg text-foreground/50 max-w-md mx-auto">
          We can build a custom Mac app for your business in a single day.
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
