import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { SparklesIcon } from "@heroicons/react/24/solid"

export default function IntroductionSection() {
  return (
    <section
      className="w-full mb-12 p-0 md:p-0 flex flex-col items-center justify-center relative"
      aria-label="Introduction"
    >
      <div className="max-w-2xl w-full text-center py-12 px-4 rounded-2xl bg-gradient-to-br from-blue-200 via-violet-100 to-yellow-100 shadow-xl border-2 border-white/70 mt-2 mb-2 relative">
        <div className="absolute left-4 top-4"><span className="text-4xl">👋</span></div>
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl drop-shadow text-slate-900 mb-2 inline-flex items-center gap-2 justify-center">
          Hi, I'm Ching Jui Young
          <span className="inline-block animate-bounce"><SparklesIcon className="w-8 h-8 text-yellow-400" /></span>
        </h1>
        <p className="text-lg md:text-xl mt-3 mb-6 font-medium text-slate-800">
          Software developer focused on <span className="text-purple-700 font-bold">AI Agents</span>, <span className="text-blue-500 font-bold">NextJS</span>, and <span className="text-amber-600 font-bold">enterprise automation</span>.
        </p>
        <div className="flex flex-col gap-3 md:flex-row md:gap-5 justify-center items-center mt-5">
          {/* STAT CARDS */}
          <Card className="bg-white/90 backdrop-blur border-amber-300 border-2 shadow hover:shadow-lg transition-all duration-150 min-w-[220px]">
            <CardContent className="py-4 px-4">
              <CardTitle className="flex items-center gap-2 text-lg text-amber-800 font-semibold">
                🚀 50k+ Monthly Views
              </CardTitle>
              <CardDescription className="text-md leading-tight text-gray-700 mt-1">
                Launched a NextJS publication with 10,000+ pages and 50k+ monthly readers.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur border-cyan-400 border-2 shadow hover:shadow-lg transition-all duration-150 min-w-[220px]">
            <CardContent className="py-4 px-4">
              <CardTitle className="flex items-center gap-2 text-lg text-cyan-700 font-semibold">
                🤖 3x AI Superpower
              </CardTitle>
              <CardDescription className="text-md leading-tight text-gray-700 mt-1">
                Architected a multi-agent RAG system that tripled baseline GPT-4 results.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-white/90 backdrop-blur border-green-300 border-2 shadow hover:shadow-lg transition-all duration-150 min-w-[220px]">
            <CardContent className="py-4 px-4">
              <CardTitle className="flex items-center gap-2 text-lg text-green-800 font-semibold">
                🩺 Health ML Magic
              </CardTitle>
              <CardDescription className="text-md leading-tight text-gray-700 mt-1">
                MLOps in health tech: from deploying models to building data-driven tools.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="w-full text-center mt-8">
          <span className="text-md md:text-lg font-medium text-purple-600/90 rounded-full p-2 bg-purple-100 inline-block">
            I build cool things & tweet about AI mishaps, product wins, and bad puns 🚀 🤓
          </span>
        </div>
      </div>
    </section>
  )
}
