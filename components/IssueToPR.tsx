import { ArrowUpRight } from "lucide-react"

export default function IssueToPR() {
  return (
    <section className="relative py-20 px-4">
      {/* Warm section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white/40 backdrop-blur-sm border border-white/50 shadow-sm p-8 md:p-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">Issue to PR</h2>
          <p className="mt-6 text-xl leading-relaxed md:text-2xl text-foreground/55">
            Issue to PR is an automated way to generate code for a GitHub issue and create pull requests. Describe the problem once, and let it draft focused changes and open PRs you can review and ship.
          </p>
          <div className="mt-10">
            <a
              href="https://issuetopr.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit issuetopr.dev"
              className="inline-flex items-center gap-3 rounded-full border border-foreground/15 bg-white/30 px-5 py-3 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500/50 transition"
            >
              <ArrowUpRight className="w-5 h-5" />
              <span className="text-base md:text-lg">Visit issuetopr.dev</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
