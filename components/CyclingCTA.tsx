"use client"

import { useState, useEffect } from "react"

const phrases = [
  "to set up your own OpenClaw",
  "to help your team adopt AI",
  "to build a Mac app in 1 day",
  "to automate document processing",
  "to train your team on AI tools",
  "to build a multi-agent RAG system",
]

export default function CyclingCTA({ calendlyLink }: { calendlyLink: string }) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length)
        setVisible(true)
      }, 300)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-10 flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-4">
        <a
          href={calendlyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-primary px-8 py-4 text-xl font-bold text-white hover:opacity-90 transition-opacity shrink-0"
        >
          Book a call
        </a>
        <span
          className={`text-xl text-foreground/50 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          {phrases[index]}
        </span>
      </div>
    </div>
  )
}
