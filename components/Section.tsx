import { SectionData } from "@/data/mockData"
import { Button } from "./ui/button"
import Link from "next/link"

export default function Section({ data }: { data: SectionData }) {
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
            <Link key={item.id} href={`/client/${item.slug}`} passHref>
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
