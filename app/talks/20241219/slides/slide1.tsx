import Image from "next/image"
import { Card } from "@/components/ui/card"
import CompanyWatermark from "../components/company-watermark"

export default function Slide1() {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-4 md:p-8 bg-gradient-to-r from-blue-100 to-indigo-100">
      <Card className="w-full max-w-5xl max-h-[85vh] bg-white shadow-xl rounded-xl">
        <div className="h-full p-6 md:p-8 flex flex-col md:flex-row md:items-center md:space-x-8">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              We&apos;re most familiar with LLM&apos;s responding with
              full-length natural language sentences and paragraphs.
            </h1>
          </div>
          <div className="md:w-1/2 flex items-center">
            <div className="relative w-full">
              <Image
                src="/talks/20241219/Screenshot%202024-12-19%20at%2012.23.39.png"
                alt="LLM Output"
                width={800}
                height={600}
                className="w-full h-auto max-h-[60vh]"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <CompanyWatermark />
      </Card>
    </div>
  )
}
