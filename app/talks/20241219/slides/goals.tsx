import { Card } from "@/components/ui/card"
import CompanyWatermark from "../components/company-watermark"

export default function Goals() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8 bg-gradient-to-r from-green-100 to-teal-100">
      <Card className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col min-h-[70vh]">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Goals for Today
          </h1>
          <div className="flex-grow flex items-center justify-center">
            <ul className="space-y-6 text-xl md:text-2xl text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Demonstrate power of Structured Outputs with LLMs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>
                  Demonstrate speed of prototyping with latest software
                  development AI tools
                </span>
              </li>
            </ul>
          </div>
        </div>
        <CompanyWatermark />
      </Card>
    </div>
  )
}
