import { ArrowUpRight } from "lucide-react"
import { sectionData } from "@/data/mockData"

export default function Projects() {
  const projects = sectionData.find((s) => s.title === "Projects")
  if (!projects) return null

  return (
    <section className="relative py-20 px-4">
      {/* Warm section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
          Projects
        </h2>
        <p className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl">
          Tools and experiments we&apos;ve built — from autonomous coding agents to voice AI and generative storytelling.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white/30 backdrop-blur-sm border border-foreground/5 p-6 flex flex-col"
            >
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              {item.date && (
                <p className="mt-1 text-xs text-foreground/40">{item.date}</p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-foreground/60 flex-1">
                {item.description}
              </p>
              {item.metric && (
                <p className="mt-3 text-sm font-medium text-amber-700/80">
                  {item.metric}
                </p>
              )}
              {item.tags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-foreground/60 hover:text-foreground/80 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  <span>Visit</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
