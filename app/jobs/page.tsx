import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { JOBS } from "@/data/jobs"

export const dynamic = "force-static"

function formatCompensation(input?: string) {
  if (!input) return ""
  // Ensure format: "RMB 12,000 / month + performance bonus"
  let s = input.trim()
  s = s.replace(/(\d[\d,.]*)\s*RMB/i, "RMB $1")
  s = s.replace(/\s+/g, " ")
  return s
}

function formatLocation(input?: string) {
  if (!input) return ""
  let s = input
  // Normalize JingAn -> Jingan, and drop the word "District"
  s = s.replace(/Jing\s*An/gi, "Jingan").replace(/JingAn/gi, "Jingan")
  s = s.replace(/\bDistrict\b/gi, "").replace(/\s{2,}/g, " ")
  s = s.replace(/,\s*,/g, ", ")
  return s.trim()
}

export default function JobsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Open Roles
        </h1>
        <p className="mt-3 text-base md:text-lg text-muted-foreground">
          We&apos;re building AI products and looking for great people to join
          us.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {JOBS.map((job) => {
          const details: string[] = []
          if (job.location) details.push(formatLocation(job.location))
          if (job.commitment) details.push(job.commitment)
          if (job.compensation) details.push(formatCompensation(job.compensation))
          const subtext = details.filter(Boolean).join(" • ")

          return (
            <Card
              key={job.id}
              className="group relative transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <CardContent className="p-6 md:flex md:items-center md:justify-between">
                <div className="space-y-2 md:pr-6">
                  <h2 className="text-2xl font-semibold tracking-tight">{job.title}</h2>
                  {job.summary && (
                    <p className="text-base md:text-lg text-muted-foreground/90">
                      {job.summary}
                    </p>
                  )}
                  {subtext && (
                    <p className="text-sm md:text-base text-muted-foreground/70">
                      {subtext}
                    </p>
                  )}
                </div>
                <div className="mt-4 md:mt-0 md:pl-6 md:self-start">
                  <Link
                    href={`/jobs/${job.id}`}
                    aria-label={`Learn more about ${job.title}`}
                    className="inline-flex"
                  >
                    <Button variant="secondary">
                      Learn more
                      <ArrowRight className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

