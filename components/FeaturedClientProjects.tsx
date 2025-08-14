import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { sectionData } from "@/data/mockData"

export default function FeaturedClientProjects() {
  const clientSection = sectionData.find((s) => s.title === "Client Work")
  const items = clientSection ? clientSection.items.slice(0, 3) : []

  // Map known slugs to representative images in /public
  const imageForSlug: Record<string, string> = {
    "nextjs-publication": "/next.svg",
    "multi-agent-rag-architecture": "/globe.svg",
    "mlops-health-tech-marketplace": "/window.svg",
  }

  if (items.length === 0) return null

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-10">Featured Client Projects</h2>

      <div className="space-y-16">
        {items.map((item, idx) => {
          const isImageLeft = idx % 2 === 0
          const imageSrc = imageForSlug[item.slug] ?? "/file.svg"

          return (
            <div key={item.id} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={cn(isImageLeft ? "" : "md:order-2")}>
                <Link href={`/client/${item.slug}`}>
                  <Image
                    src={imageSrc}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg border bg-card"
                  />
                </Link>
              </div>
              <div className={cn(isImageLeft ? "" : "md:order-1")}>
                <h3 className="text-2xl font-medium mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <Button asChild variant="outline">
                  <Link href={`/client/${item.slug}`}>Read case study</Link>
                </Button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-14 flex justify-center">
        <Button asChild size="lg">
          <Link href="/client">Learn more</Link>
        </Button>
      </div>
    </section>
  )
}

