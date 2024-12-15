import { sectionData, SectionData } from "@/data/mockData"
import Section from "@/components/Section"

const fetchData = async (): Promise<SectionData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sectionData)
    }, 1000)
  })
}

export default async function PortfolioPage() {
  const data = await fetchData()

  console.log("saving some new code")

  return (
    <div className="min-h-screen text-primary-foreground bg-gradient-to-br from-teal-800 via-teal-500 to-blue-300">
      <header className="container mx-auto pt-52 pb-6 px-4 bg-opacity-80 backdrop-blur-sm">
        <h1 className="text-5xl font-bold font-rokkitt">Young & AI</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        {data.map((section, index) => (
          <Section key={index} data={section} />
        ))}
      </main>
    </div>
  )
}