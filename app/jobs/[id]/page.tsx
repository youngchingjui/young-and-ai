import type { Metadata } from "next"
import { JOBS } from "@/data/jobs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Markdown } from "@/components/ui/markdown"
import Link from "next/link"
import ApplyCTACard from "@/components/ApplyCTACard"

export const dynamic = "force-static"

export async function generateStaticParams() {
  return JOBS.map((job) => ({ id: job.id }))
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const job = JOBS.find((j) => j.id === params.id)

  if (!job) {
    return {
      title: "Jobs",
      description: "Explore open roles at Young & AI.",
    }
  }

  const description =
    job.summary ??
    `Learn more about the ${job.title} role at Young & AI${job.location ? ` in ${job.location}` : ""}.`

  return {
    title: job.title,
    description,
  }
}

// removed sections renderer in favor of markdown-only description

function AboutUsSection() {
  return (
    <section className="text-base md:text-lg text-muted-foreground">
      <h2 className="text-xl font-semibold text-card-foreground mb-2">
        About Young &amp; AI
      </h2>
      <p>
        <strong>Young &amp; AI</strong> builds AI products and services
        enterprise and startups alike.
      </p>
      <p className="mt-2">
        Our current product,{" "}
        <strong>
          <Link
            href="https://issuetopr.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Issue To PR
          </Link>
        </strong>
        , helps product managers and designers turn their ideas into reality by
        instantly generating Pull Requests from GitHub Issues — making it easy
        to preview design and feature ideas directly within existing codebases.
      </p>
      <p className="mt-2">
        We’re expanding our portfolio of digital AI tools, and we’re looking for
        someone excited to help evaluate, market, and grow these products
        internationally.
      </p>
      <p className="mt-2">
        You&apos;ll work directly with{" "}
        <strong>
          <Link
            href="https://linkedin.com/in/chingjuiyoung"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ching Jui Young
          </Link>
        </strong>
        , the founder and CEO, and gain firsthand experience in startup
        strategy, AI workflow design, and go-to-market execution.
      </p>
    </section>
  )
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = JOBS.find((j) => j.id === params.id)

  if (!job) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-2xl font-semibold">Job not found</h1>
        <p className="mt-2 text-muted-foreground">
          The job you are looking for does not exist.
        </p>
      </div>
    )
  }

  const to = job.applyEmail ?? "jobs@youngandai.com"
  const subject = encodeURIComponent(
    `Application: ${job.title} — Young & AI${
      job.location ? ` (${job.location})` : ""
    }`
  )
  const mailto = `mailto:${to}?subject=${subject}`

  const hasMeta =
    Boolean(job.location) ||
    Boolean(job.commitment) ||
    Boolean(job.compensation) ||
    Boolean(job.language)

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-4">
        <Button asChild variant="ghost" size="sm">
          <Link href="/jobs" aria-label="Back to job listings">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to jobs
          </Link>
        </Button>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2">
          <header className="mb-6">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              {job.title}
            </h1>
            {job.summary && (
              <p className="mt-3 text-base md:text-lg text-muted-foreground">
                {job.summary}
              </p>
            )}
          </header>

          {/* Top CTA for mobile */}
          <ApplyCTACard mailto={mailto} className="lg:hidden" />

          {/* Meta details combined into a single card */}
          {hasMeta && (
            <Card className="mt-6">
              <CardContent className="pt-4 sm:pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
                {job.location && (
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">
                      Location
                    </div>
                    <div className="mt-1 text-base md:text-lg text-card-foreground">
                      {job.location}
                    </div>
                  </div>
                )}
                {job.commitment && (
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">
                      Commitment
                    </div>
                    <div className="mt-1 text-base md:text-lg text-card-foreground">
                      {job.commitment}
                    </div>
                  </div>
                )}
                {job.compensation && (
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">
                      Compensation
                    </div>
                    <div className="mt-1 text-base md:text-lg text-card-foreground">
                      {job.compensation}
                    </div>
                  </div>
                )}
                {job.language && (
                  <div>
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">
                      Language
                    </div>
                    <div className="mt-1 text-base md:text-lg text-card-foreground">
                      {job.language}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Role details */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-2xl">Role details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {job.description && (
                <div className="text-base md:text-lg text-muted-foreground space-y-4">
                  <Markdown content={job.description} />
                </div>
              )}
            </CardContent>
          </Card>

          {/* About Us */}
          <Card className="mt-8">
            <CardContent className="pt-6">
              <AboutUsSection />
            </CardContent>
          </Card>

          {/* Bottom CTA for mobile */}
          <div className="mt-6">
            <ApplyCTACard mailto={mailto} className="lg:hidden" />
          </div>
        </div>

        {/* Sidebar CTA */}
        <div className="mt-8 lg:mt-0">
          <ApplyCTACard mailto={mailto} className="hidden lg:block sticky top-24 h-fit" />
        </div>
      </div>
    </div>
  )
}

