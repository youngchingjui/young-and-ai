import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { JOBS } from "@/data/jobs"

export const dynamic = "force-static"

export default function JobsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Open Roles</h1>
        <p className="mt-2 text-gray-600">
          We&apos;re building AI products and looking for great people to join us.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {JOBS.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle className="text-xl">{job.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
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
                <p className="text-gray-600">{job.summary ?? job.description}</p>
              )}
              {(job.applyEmail || job.applyUrl) && (
                <p>
                  <strong>How to apply:</strong>{" "}
                  {job.applyEmail && (
                    <a
                      className="text-blue-600 hover:underline"
                      href={`mailto:${job.applyEmail}`}
                    >
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
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

