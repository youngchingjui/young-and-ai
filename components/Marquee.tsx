"use client"

import Link from "next/link"
import { useState } from "react"

interface MarqueeItem {
  label: string
  href: string
}

const items: MarqueeItem[] = [
  { label: "Autonomous Coding Agents", href: "https://issuetopr.dev" },
  { label: "Secure OpenClaw Installation", href: "/projects/openclaw" },
  { label: "AI Workshops", href: "/services/training" },
  { label: "Customer Personas", href: "/projects/refolk" },
  { label: "Anomaly Detection", href: "/projects/mingju" },
  { label: "Image Recognition", href: "/projects/residential" },
  { label: "Trend Detection", href: "/projects/fmcg-trends" },
  { label: "Form Automation", href: "/projects/form-filler" },
  { label: "Voice AI Chatbots", href: "/projects/talking-terry" },
  { label: "Multi-agent RAG", href: "/projects/reqaiure" },
  { label: "AI Consulting", href: "/services/consulting" },
  { label: "Enterprise Dashboards", href: "/projects/tableau-optimization" },
  { label: "Publication Websites", href: "/projects/luxury-society" },
  { label: "Health Scoring ML", href: "/projects/health-index" },
  { label: "Stock Trading Bots", href: "/projects/trading-bot" },
  { label: "AI-Generated Storytelling", href: "/projects/storycraft" },
  { label: "Calendar Analytics", href: "/projects/calendar-wrapped" },
  { label: "Stress-Test Modeling", href: "/projects/bank-stress-tests" },
  { label: "VAT Form Automation", href: "/projects/izivat" },
  { label: "Excel Automation", href: "/projects/excelparser" },
  { label: "Build a Mac App in 1 Day", href: "/services/1-day-app" },
  { label: "Agent Harnessing", href: "https://issuetopr.dev" },
]

// Split items into 3 rows for visual variety
const row1 = items.filter((_, i) => i % 3 === 0)
const row2 = items.filter((_, i) => i % 3 === 1)
const row3 = items.filter((_, i) => i % 3 === 2)

function MarqueeRow({
  items,
  direction = "left",
  speed = "normal",
  paused,
  onInteract,
}: {
  items: MarqueeItem[]
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
  paused: boolean
  onInteract: () => void
}) {
  const speedClass =
    speed === "slow"
      ? "animate-marquee-slow"
      : speed === "fast"
        ? "animate-marquee-fast"
        : "animate-marquee"

  const directionClass = direction === "right" ? "direction-reverse" : ""

  // Duplicate items for seamless loop
  const duped = [...items, ...items]

  return (
    <div
      className="flex overflow-hidden"
      onTouchStart={onInteract}
      onMouseDown={onInteract}
    >
      <div
        className={`flex shrink-0 gap-3 ${speedClass} ${directionClass}`}
        style={paused ? { animationPlayState: "paused" } : undefined}
      >
        {duped.map((item, i) => {
          const className =
            "shrink-0 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white/90 whitespace-nowrap hover:bg-white/10 hover:text-white transition-colors"
          const isExternal = item.href.startsWith("http")
          return isExternal ? (
            <a
              key={`${item.label}-${i}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={`${item.label}-${i}`}
              href={item.href}
              className={className}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default function Marquee() {
  const [paused, setPaused] = useState(false)

  const handleInteract = () => {
    setPaused(true)
  }

  return (
    <section className="relative overflow-hidden bg-primary py-10">
      <p className="text-center text-sm uppercase tracking-widest text-white/50 mb-6">
        Projects we&apos;ve shipped
      </p>
      <div className="space-y-3">
        <MarqueeRow items={row1} direction="left" speed="normal" paused={paused} onInteract={handleInteract} />
        <MarqueeRow items={row2} direction="right" speed="slow" paused={paused} onInteract={handleInteract} />
        <MarqueeRow items={row3} direction="left" speed="fast" paused={paused} onInteract={handleInteract} />
      </div>
    </section>
  )
}
