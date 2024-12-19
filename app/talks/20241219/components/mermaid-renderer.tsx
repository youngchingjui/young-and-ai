"use client"

import { useEffect, useRef } from "react"
import mermaid from "mermaid"

interface MermaidProps {
  chart: string
}

let diagramCount = 0

mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  securityLevel: "loose",
})

export default function MermaidRenderer({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null)
  const id = useRef(`mermaid-diagram-${++diagramCount}`)

  useEffect(() => {
    const renderChart = async () => {
      if (ref.current) {
        try {
          const { svg } = await mermaid.render(id.current, chart)
          ref.current.innerHTML = svg
        } catch (error) {
          console.error("Mermaid rendering failed:", error)
        }
      }
    }

    renderChart()
  }, [chart])

  return <div ref={ref} className="mermaid" />
}
