import Link from "next/link"
import { sectionData } from "@/data/mockData"

export default function Talks() {
  const talks = sectionData.find((s) => s.title === "Talks")
  if (!talks) return null

  return (
    <section className="relative py-20 px-4">
      {/* Warm section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
          Talks & Workshops
        </h2>
        <p className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl">
          Workshops and presentations on AI, LLMs, and building with generative AI.
        </p>

        <div className="space-y-4">
          {talks.items.map((item) => {
            const inner = (
              <div className="rounded-2xl bg-white/30 backdrop-blur-sm border border-foreground/5 p-6 md:p-8 hover:bg-white/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-foreground/60">
                      {item.description}
                    </p>
                    {item.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-foreground/5 text-foreground/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row md:flex-col items-start md:items-end gap-2 md:gap-1 text-sm text-foreground/50 md:min-w-[140px] md:text-right">
                    {item.date && <span>{item.date}</span>}
                    {item.location && <span>{item.location}</span>}
                    {item.metric && (
                      <span className="text-amber-700/80 font-medium">{item.metric}</span>
                    )}
                  </div>
                </div>
              </div>
            )

            // Link to talk page if it has a date-based slug (has a dedicated page)
            if (item.slug.match(/^\d{8}$/)) {
              return (
                <Link key={item.id} href={`/talks/${item.slug}`}>
                  {inner}
                </Link>
              )
            }

            return <div key={item.id}>{inner}</div>
          })}
        </div>
      </div>
    </section>
  )
}
