import Image from "next/image"
import { Card } from "@/components/ui/card"
import CompanyWatermark from "../components/company-watermark"

export default function Slide4() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8 bg-gradient-to-r from-yellow-100 to-orange-100">
      <Card className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="p-6 md:p-8 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Today, we&apos;ll build a simple app using OpenAI&apos;s Structured
            Outputs (JSON) to demonstrate
          </h1>
          <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/talks/20241219/AI Form Filling Tool Screenshot.png"
              alt="Screenshot of the app we're building"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-center text-gray-600 italic">
            Screenshot of the app we&apos;ll be building in this workshop
          </p>
        </div>
        <CompanyWatermark />
      </Card>
    </div>
  )
}
