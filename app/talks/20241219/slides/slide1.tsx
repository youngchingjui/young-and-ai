import Image from "next/image"
import { Card } from "@/components/ui/card"
import CompanyWatermark from "../components/company-watermark"

export default function Slide1() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8 bg-gradient-to-r from-blue-100 to-indigo-100">
      <Card className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-start md:space-x-8">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              We&apos;re most familiar with LLM&apos;s responding with
              full-length natural language sentences and paragraphs.
            </h1>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="relative h-40 md:h-48 bg-gray-200 rounded-lg overflow-hidden"
              >
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=LLM+Output+${index}`}
                  alt={`LLM Output ${index}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
        <CompanyWatermark />
      </Card>
    </div>
  )
}
