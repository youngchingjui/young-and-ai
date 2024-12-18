import Image from "next/image"
import { Card } from "@/components/ui/card"
import CompanyWatermark from "../components/company-watermark"

const tools = [
  {
    name: "Structured outputs",
    image: "/placeholder.svg?height=200&width=300&text=Structured+Outputs",
  },
  {
    name: "v0 for quick prototyping",
    image: "/placeholder.svg?height=200&width=300&text=v0",
  },
  {
    name: "Cursor to continue chatting with codebase",
    image: "/placeholder.svg?height=200&width=300&text=Cursor",
  },
  {
    name: "NextJS framework (React, Javascript)",
    image: "/placeholder.svg?height=200&width=300&text=NextJS",
  },
]

export default function Slide5() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8 bg-gradient-to-r from-blue-100 to-cyan-100">
      <Card className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="p-6 md:p-8 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Tools we'll use:
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="relative w-full h-40 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={tool.image}
                    alt={`Screenshot of ${tool.name}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-lg font-semibold text-center">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
        <CompanyWatermark />
      </Card>
    </div>
  )
}
