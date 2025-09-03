import { ArrowUpRight } from "lucide-react"

export default function IssueToPR() {
  return (
    <section className="border-t border-primary/10 py-20 px-4">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Issue to PR</h2>
          <p className="mt-6 text-xl leading-relaxed md:text-2xl text-muted-foreground">
            Issue to PR is an automated way to generate code for a GitHub issue and create pull requests. Describe the problem once, and let it draft focused changes and open PRs you can review and ship.
          </p>
          <div className="mt-10">
            <a
              href="https://issuetopr.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit issuetopr.dev"
              className="inline-flex items-center gap-3 rounded-full border border-foreground/20 px-5 py-3 hover:bg-foreground/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground/30 transition"
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

