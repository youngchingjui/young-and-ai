import { JOBS } from "@/data/jobs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const dynamic = "force-static"

export async function generateStaticParams() {
  return JOBS.map((job) => ({ id: job.id }))
}

export default function JobDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const job = JOBS.find((j) => j.id === params.id)

  if (!job) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-2xl font-semibold">Job not found</h1>
        <p className="mt-2 text-muted-foreground">The job you are looking for does not exist.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{job.title}</h1>
        {job.summary && (
          <p className="mt-3 text-base md:text-lg text-muted-foreground">{job.summary}</p>
        )}
      </header>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Role details</CardTitle>
        </CardHeader>
        <CardContent className="text-base md:text-lg text-muted-foreground space-y-4">
          <div className="flex flex-col gap-2">
            {job.location && (
              <div>
                <strong>Location:</strong> {job.location}
              </div>
            )}
            {job.commitment && (
              <div>
                <strong>Commitment:</strong> {job.commitment}
              </div>
            )}
            {job.compensation && (
              <div>
                <strong>Compensation:</strong> {job.compensation}
              </div>
            )}
            {job.language && (
              <div>
                <strong>Language:</strong> {job.language}
              </div>
            )}
          </div>

          {job.description && (
            <div>
              <h2 className="text-xl font-semibold text-card-foreground mb-2">Description</h2>
              <p>{job.description}</p>
            </div>
          )}

          {(job.applyEmail || job.applyUrl) && (
            <div>
              <h2 className="text-xl font-semibold text-card-foreground mb-2">How to apply</h2>
              <p>
                {job.applyEmail && (
                  <a className="text-blue-600 hover:underline" href={`mailto:${job.applyEmail}`}>
                    {job.applyEmail}
                  </a>
                )}
                {job.applyEmail && job.applyUrl ? " or " : null}
                {job.applyUrl && (
                  <a
                    className="text-blue-600 hover:underline"
                    href={job.applyUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    apply online
                  </a>
                )}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

