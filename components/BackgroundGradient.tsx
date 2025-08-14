"use client"

import { useEffect, useRef } from "react"

/**
 * Fixed, full-viewport gradient backdrop that subtly drifts as you scroll.
 *
 * - Uses requestAnimationFrame + passive scroll listener for perf
 * - Respects prefers-reduced-motion
 * - Translates a slightly oversized layer so edges never show
 * - Ultra-low alpha colors to keep it tasteful on dark backgrounds
 */
export default function BackgroundGradient() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReduced) {
      // Keep static if user prefers reduced motion
      el.style.transform = "translate3d(0,0,0) scale(1.05)"
      return
    }

    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY || 0
        // Create a slow, subtle drift that feels responsive to scroll
        const tx = Math.sin(y / 1200) * 40 // px
        const ty = Math.cos(y / 1000) * 60 // px
        el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0) scale(1.05)`
        ticking = false
      })
    }

    // Initialize position once
    onScroll()

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        // Slightly oversize to avoid showing edges during transform
        top: "-10%",
        left: "-10%",
        width: "120%",
        height: "120%",
        willChange: "transform",
        backgroundImage: [
          // Emerald glow
          "radial-gradient(600px 400px at 12% 18%, rgba(16,185,129,0.15), rgba(16,185,129,0) 60%)",
          // Cyan glow
          "radial-gradient(520px 520px at 85% 28%, rgba(6,182,212,0.14), rgba(6,182,212,0) 65%)",
          // Indigo base depth
          "radial-gradient(700px 520px at 30% 85%, rgba(99,102,241,0.10), rgba(99,102,241,0) 60%)",
          // Soft vertical sheen
          "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.00) 30%)",
        ].join(","),
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover, cover, cover, cover",
        filter: "saturate(1.1)",
      }}
    />
  )
}

