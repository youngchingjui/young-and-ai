"use client"

import { useEffect, useRef } from "react"

/**
 * A fixed, full-screen gradient backdrop that subtly shifts with scroll
 * to create a gentle parallax/animated effect.
 */
export default function BackgroundGradient() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let raf = 0

    const handleScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        const y = window.scrollY || 0
        // Move a tiny amount against scroll for subtle parallax
        const offset = y * -0.05 // 5% of scroll speed
        if (ref.current) {
          ref.current.style.setProperty("--bg-offset-y", `${offset}px`)
        }
        raf = 0
      })
    }

    // initial position
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 will-change-transform"
      style={{
        transform: "translate3d(0, var(--bg-offset-y, 0px), 0)",
        // Two large, soft radial gradients anchored in opposing corners
        // Colors derive from the current theme via CSS variables.
        background:
          "radial-gradient(1200px 800px at 20% -10%, oklch(var(--accent) / 0.40) 0%, transparent 60%)," +
          "radial-gradient(1000px 700px at 80% 110%, oklch(var(--primary) / 0.28) 0%, transparent 60%)",
      }}
    />
  )
}

