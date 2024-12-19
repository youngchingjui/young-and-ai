import { Card } from "@/components/ui/card"
import CompanyWatermark from "../components/company-watermark"

export default function Slide0() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8 bg-gradient-to-r from-purple-100 to-pink-100">
      <Card className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col items-center justify-center min-h-[70vh]">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 text-center">
            Structured Outputs with LLMs
          </h1>
        </div>
        <CompanyWatermark />
      </Card>
    </div>
  )
}
