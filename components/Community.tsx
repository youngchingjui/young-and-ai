import { ExternalLink } from "lucide-react"

export default function Community() {
  return (
    <section className="relative py-20 px-4 min-h-[60vh]">
      {/* Warm section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white/40 backdrop-blur-sm border border-foreground/5 p-8 md:p-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">AI Breakfast</h2>
          <p className="mt-6 text-xl leading-relaxed md:text-2xl text-foreground/60">
            Every Thursday in Shanghai, we host AI Breakfast—a casual, high-signal meetup where founders, engineers, and operators trade notes on what&#39;s new and what&#39;s working.
          </p>
          <p className="mt-4 text-lg leading-relaxed md:text-xl text-foreground/60">
            We dive into the latest advancements, compare real-world AI workflows we&#39;ve built, and share how AI is changing our day-to-day work and personal lives. It&#39;s practical, open, and focused on shipping.
          </p>
          <p className="mt-4 text-lg leading-relaxed md:text-xl text-foreground/60">
            Visiting Shanghai on a Thursday? Join us—we&#39;d love to have you at the table.
          </p>
          <div className="mt-10">
            <a
              href="https://ai-breakfast.youngandai.com"
              aria-label="Visit ai-breakfast.youngandai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-foreground/15 bg-white/30 px-5 py-3 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500/50 transition"
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
