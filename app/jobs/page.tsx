import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { JOBS } from "@/data/jobs"

export const dynamic = "force-static"

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
        {JOBS.map((job) => (
          <Card
            key={job.id}
            className="group relative transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">{job.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-base md:text-lg text-muted-foreground space-y-4">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {job.location && (
                  <span>
                    <strong>Location:</strong> {job.location}
                  </span>
                )}
                {job.commitment && (
                  <span>
                    <strong>Commitment:</strong> {job.commitment}
                  </span>
                )}
                {job.compensation && (
                  <span>
                    <strong>Compensation:</strong> {job.compensation}
                  </span>
                )}
                {job.language && (
                  <span>
                    <strong>Language:</strong> {job.language}
                  </span>
                )}
              </div>
              {job.summary && (
                <p className="text-muted-foreground/90">{job.summary}</p>
              )}

              <div className="flex items-center justify-end">
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
        ))}
      </div>
    </div>
  )
}
