import Link from "next/link"
import { sectionData } from "@/data/mockData"

export default function SelectedWork() {
  const clientWork = sectionData.find((s) => s.title === "Client Work")
  if (!clientWork) return null

  return (
    <section className="relative py-20 px-4">
      {/* Warm section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
          Selected Work
        </h2>
        <p className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl">
          AI systems, ML pipelines, and digital products built for companies across manufacturing, publishing, FMCG, health tech, and financial services.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {clientWork.items.map((item) => (
            <Link
              key={item.id}
              href={`/client/${item.slug}`}
              className="group rounded-2xl bg-white/30 backdrop-blur-sm border border-foreground/5 p-6 md:p-8 hover:bg-white/50 transition-colors"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/60 line-clamp-3">
                {item.description}
              </p>
              {item.metric && (
                <p className="mt-4 text-sm font-medium text-amber-700/80">
                  {item.metric}
                </p>
              )}
              {item.tags && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-foreground/5 text-foreground/50"
                    >
                      {tag}
                    </span>
                  ))}
                  {item.tags.length > 4 && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-foreground/5 text-foreground/40">
                      +{item.tags.length - 4}
                    </span>
                  )}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
