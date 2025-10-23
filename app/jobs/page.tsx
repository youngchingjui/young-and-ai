import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { JOBS } from "@/data/jobs"

export const dynamic = "force-static"

export default function JobsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Open Roles</h1>
        <p className="mt-3 text-base md:text-lg text-muted-foreground">
          We&apos;re building AI products and looking for great people to join us.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {JOBS.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`} className="block group">
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl group-hover:underline">
                  {job.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-base md:text-lg text-muted-foreground space-y-3">
                <div className="flex flex-wrap gap-4">
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
                {job.description && (
                  <p>{job.summary ?? job.description}</p>
                )}
                {job.applyEmail && (
                  <p>
                    <strong>How to apply:</strong>{" "}
                    <span className="whitespace-nowrap">
                      <a
                        className="text-blue-600 hover:underline"
                        href={`mailto:${job.applyEmail}`}
                      >
                        {job.applyEmail}
                      </a>
                    </span>
                  </p>
                )}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

