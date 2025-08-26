import { Mail } from "lucide-react"

export default function Community() {
  return (
    <section className="border-t border-primary/10 py-20 px-4">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Community & Events</h2>
          <p className="mt-6 text-xl leading-relaxed md:text-2xl text-muted-foreground">
            Every Thursday in Shanghai, I host an AI Breakfast—a casual, high-signal meetup where founders, engineers, and operators trade notes on what&#39;s new and what&#39;s working.
          </p>
          <p className="mt-4 text-lg leading-relaxed md:text-xl text-muted-foreground">
            We dive into the latest advancements, compare real-world AI workflows we&#39;ve built, and share how AI is changing our day-to-day work and personal lives. It&#39;s practical, open, and focused on shipping.
          </p>
          <p className="mt-4 text-lg leading-relaxed md:text-xl text-muted-foreground">
            Visiting Shanghai on a Thursday? Join us—would love to have you at the table.
          </p>
          <div className="mt-10">
            <a
              href="mailto:contact@youngandai.com?subject=AI%20Breakfast%20in%20Shanghai"
              aria-label="Email to join AI Breakfast in Shanghai"
              className="inline-flex items-center gap-3 rounded-full border border-foreground/20 px-5 py-3 hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground/30 transition"
            >
              <Mail className="w-5 h-5" />
              <span className="text-base md:text-lg">RSVP for Thursday&#39;s AI Breakfast</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

