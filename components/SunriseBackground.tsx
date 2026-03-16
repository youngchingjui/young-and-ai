"use client"

import { useEffect, useRef } from "react"

export default function SunriseBackground() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollY / docHeight : 0

      // Shift the gradient position based on scroll progress
      bgRef.current.style.setProperty("--scroll-progress", String(progress))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={bgRef}
      className="sunrise-bg"
      style={{ ["--scroll-progress" as string]: "0" }}
      aria-hidden="true"
    />
  )
}
