import { SectionData } from "@/data/mockData"
import Link from "next/link"

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
}

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
    <section id={slugify(data.title)} className="mb-12">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{data.title}</h2>
      </div>
      <div className="relative">
        <div className="scrollbar-hide flex overflow-x-auto space-x-4 pb-4">
          {displayItems.map((item) => (
            <Link key={item.id} href={getItemHref(item)} passHref>
              <div className="w-64 flex-none cursor-pointer rounded-lg bg-card p-4 shadow-md transition-transform hover:scale-105">
                <h3 className="mb-2 text-lg font-medium text-card-foreground">
                  {item.title}
                </h3>
                <p className="truncate text-sm text-muted-foreground">
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

