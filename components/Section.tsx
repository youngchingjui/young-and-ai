import { SectionData } from "@/data/mockData"
import Link from "next/link"

export default function Section({ data }: { data: SectionData }) {
  const displayItems = data.items.slice(0, 5)

  const getItemHref = (item: (typeof data.items)[0]) => {
    switch (item.type) {
      case "talk":
        return `/talks/${item.slug}`
      case "client":
        return `/client/${item.slug}`
      default:
        return `/client/${item.slug}` // fallback to default route
    }
  }

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{data.title}</h2>
      </div>
      <div className="relative">
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {displayItems.map((item) => (
            <Link key={item.id} href={getItemHref(item)} passHref>
              <div className="flex-none w-64 bg-card p-4 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105">
                <h3 className="font-medium text-lg mb-2 text-card-foreground">
                  {item.title}
                </h3>
                <p className="text-sm truncate text-muted-foreground">
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
