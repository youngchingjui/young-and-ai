"use client"

import { useEffect, useRef } from "react"
import mermaid from "mermaid"

interface MermaidProps {
  chart: string
}

export default async function Mermaid({ chart }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({ startOnLoad: true })
      mermaid.run({ nodes: [ref.current] })
    }
  }, [chart])

  return (
    <div ref={ref} className="mermaid">
      {chart}
    </div>
  )
}
