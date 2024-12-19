import dynamic from "next/dynamic"

const MermaidRenderer = dynamic(() => import("./mermaid-renderer"), {
  ssr: false,
})

interface MermaidProps {
  chart: string
}

export default function Mermaid({ chart }: MermaidProps) {
  return <MermaidRenderer chart={chart} />
}
