import Image from "next/image"
import { Card } from "@/components/ui/card"
import CompanyWatermark from "../components/company-watermark"

export default function Slide2() {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-4 md:p-8 bg-gradient-to-r from-green-100 to-teal-100">
      <Card className="w-full max-w-5xl max-h-[85vh] bg-white shadow-xl rounded-xl">
        <div className="h-full p-6 md:p-8 flex flex-col md:flex-row md:items-center md:space-x-8">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              LLMs can also output computer-friendly instructions that interact
              directly with functions and APIs.
            </h1>
          </div>
          <div className="md:w-1/2 flex items-center">
            <div className="relative w-full">
              <Image
                src="/talks/20241219/Screenshot 2024-12-19 at 12.41.26.png"
                alt="JSON Output"
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
