import { ExternalLink } from "lucide-react"

export default function Community() {
  return (
    <section className="border-t border-primary/10 py-20 px-4 min-h-[60vh]">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">AI Breakfast</h2>
          <p className="mt-6 text-xl leading-relaxed md:text-2xl text-muted-foreground">
            Every Thursday in Shanghai, we host AI Breakfast—a casual, high-signal meetup where founders, engineers, and operators trade notes on what's new and what's working.
          </p>
          <p className="mt-4 text-lg leading-relaxed md:text-xl text-muted-foreground">
            We dive into the latest advancements, compare real-world AI workflows we've built, and share how AI is changing our day-to-day work and personal lives. It's practical, open, and focused on shipping.
          </p>
          <p className="mt-4 text-lg leading-relaxed md:text-xl text-muted-foreground">
            Visiting Shanghai on a Thursday? Join us—we'd love to have you at the table.
          </p>
          <div className="mt-10">
            <a
              href="https://ai-breakfast.youngandai.com"
              aria-label="Visit ai-breakfast.youngandai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-foreground/20 px-5 py-3 hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground/30 transition"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-base md:text-lg">Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

