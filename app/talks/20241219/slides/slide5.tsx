import Image from "next/image"
import { Card } from "@/components/ui/card"
import CompanyWatermark from "../components/company-watermark"

const tools = [
  {
    name: "Structured outputs",
    image: "/talks/20241219/Screenshot 2024-12-19 at 12.41.26.png",
  },
  {
    name: "v0 for quick prototyping",
    image: "/talks/20241219/v0 screenshot.png",
  },
  {
    name: "Cursor to continue chatting with codebase",
    image: "/talks/20241219/Cursor screenshot.png",
  },
  {
    name: "NextJS framework (React, Javascript)",
    image: "/talks/20241219/NextJS screenshot.png",
  },
]

export default function Slide5() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8 bg-gradient-to-r from-blue-100 to-cyan-100">
      <Card className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="p-6 md:p-8 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Tools we&apos;ll use:
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
