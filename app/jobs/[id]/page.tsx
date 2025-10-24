import { JOBS } from "@/data/jobs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { Markdown } from "@/components/ui/markdown"
import Link from "next/link"

export const dynamic = "force-static"

export async function generateStaticParams() {
  return JOBS.map((job) => ({ id: job.id }))
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

function ApplyCTAInline({ mailto }: { mailto: string }) {
  return (
    <div className="md:hidden">
      <Button asChild className="w-full">
        <a href={mailto} aria-label="Apply via email">
          <Mail />
          Apply by email
        </a>
      </Button>
      <p className="mt-2 text-sm text-muted-foreground">
        This will open your email client. Please attach your CV and a brief
        cover letter.
      </p>
    </div>
  )
}

function ApplyCTASidebar({ mailto }: { mailto: string }) {
  return (
    <Card className="hidden lg:block sticky top-24 h-fit">
      <CardHeader>
        <CardTitle className="text-xl">Ready to apply?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button asChild className="w-full">
          <a href={mailto} aria-label="Apply via email">
            <Mail />
            Apply
          </a>
        </Button>
        <p className="text-sm text-muted-foreground">
          Please include your CV and a brief cover letter.
        </p>
      </CardContent>
    </Card>
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

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
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
          <ApplyCTAInline mailto={mailto} />

          {/* Meta cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {job.location && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-muted-foreground">
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base md:text-lg">
                  {job.location}
                </CardContent>
              </Card>
            )}
            {job.commitment && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-muted-foreground">
                    Commitment
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base md:text-lg">
                  {job.commitment}
                </CardContent>
              </Card>
            )}
            {job.compensation && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-muted-foreground">
                    Compensation
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base md:text-lg">
                  {job.compensation}
                </CardContent>
              </Card>
            )}
            {job.language && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-muted-foreground">
                    Language
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base md:text-lg">
                  {job.language}
                </CardContent>
              </Card>
            )}
          </div>

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
            <ApplyCTAInline mailto={mailto} />
          </div>
        </div>

        {/* Sidebar CTA */}
        <div className="mt-8 lg:mt-0">
          <ApplyCTASidebar mailto={mailto} />
        </div>
      </div>
    </div>
  )
}

