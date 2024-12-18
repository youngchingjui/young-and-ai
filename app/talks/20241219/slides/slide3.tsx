import { Card } from "@/components/ui/card"
import CompanyWatermark from "../components/company-watermark"
import Mermaid from "../components/mermaid"

const traditionalDiagram = `
graph LR
    Developer([Developer])
    Code[Code]
    API[API / Functions]
    Developer <--> Code
    Code <--> API
    API --> Gmail[Gmail]
    API --> Instagram[Instagram]
    API --> Other[Other APIs...]
`

const llmDiagram = `
graph LR
    User([User])
    LLM[LLM]
    API[API / Functions]
    User <--> LLM
    LLM <--> |JSON| API
    API --> Gmail[Gmail]
    API --> Instagram[Instagram]
    API --> Other[Other APIs...]
`

export default function Slide3() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8 bg-gradient-to-r from-purple-100 to-pink-100">
      <Card className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="p-6 md:p-8 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Traditionally, we used code to interface with APIs. Now, LLMs can
            more dynamically interface with APIs, skipping the manual coding
            step.
          </h1>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-center">Traditional</h2>
              <Mermaid chart={traditionalDiagram} />
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-center">With LLMs</h2>
              <Mermaid chart={llmDiagram} />
            </div>
          </div>
        </div>
        <CompanyWatermark />
      </Card>
    </div>
  )
}
