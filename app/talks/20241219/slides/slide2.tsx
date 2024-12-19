import Image from "next/image"
import { Card } from "@/components/ui/card"
import CompanyWatermark from "../components/company-watermark"

export default function Slide2() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8 bg-gradient-to-r from-green-100 to-teal-100">
      <Card className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center md:space-x-8">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              LLMs can also output computer-friendly instructions that interact
              directly with functions and APIs.
            </h1>
          </div>
          <div className="md:w-1/2 flex flex-col space-y-4">
            <div className="relative h-[70vh] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={`/talks/20241219/Screenshot 2024-12-19 at 12.41.26.png`}
                alt={`JSON Output`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <CompanyWatermark />
      </Card>
    </div>
  )
}
