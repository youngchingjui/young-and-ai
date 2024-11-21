import Link from "next/link"
import { Button } from "@/components/ui/button"
import { sectionData, SectionData } from "@/data/mockData"

const fetchData = async (): Promise<SectionData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sectionData)
    }, 1000)
  })
}

export default async function PortfolioPage() {
  const data = await fetchData()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <header className="container mx-auto pt-52 pb-6 px-4 bg-opacity-80 backdrop-blur-sm">
        <h1 className="text-5xl font-bold text-gray-800 font-rokkitt">
          Young & AI
        </h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        {data.map((section, index) => (
          <Section key={index} data={section} />
        ))}
      </main>
    </div>
  )
}

function Section({ data }: { data: SectionData }) {
  const displayItems = data.items.slice(0, 5)
  const hasMoreItems = data.items.length > 5

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-700">{data.title}</h2>
        {hasMoreItems && (
          <Link
            href={`/${data.title.toLowerCase().replace(/\s+/g, "-")}`}
            passHref
          >
            <Button variant="outline" size="sm">
              Show more
            </Button>
          </Link>
        )}
      </div>
      <div className="relative">
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {displayItems.map((item) => (
            <Link key={item.id} href={item.link} passHref>
              <div className="flex-none w-64 bg-white p-4 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105">
                <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 truncate">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
