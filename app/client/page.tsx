import Link from "next/link"
import { sectionData } from "@/data/mockData"

export default function ClientIndexPage() {
  const clientSection = sectionData.find((s) => s.title === "Client Work")
  const items = clientSection?.items ?? []

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-8">Client Projects</h1>
      <p className="text-muted-foreground mb-8">
        A selection of client projects showcasing engineering, product, and AI work.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link key={item.id} href={`/client/${item.slug}`} className="block">
            <div className="h-full bg-card p-5 rounded-lg shadow-md transition-transform hover:scale-[1.02]">
              <h2 className="font-medium text-lg mb-2 text-card-foreground">
                {item.title}
              </h2>
              <p className="text-sm line-clamp-4 text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

