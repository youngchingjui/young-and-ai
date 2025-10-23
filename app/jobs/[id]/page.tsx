import { JOBS } from "@/data/jobs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const dynamic = "force-static"

export async function generateStaticParams() {
  return JOBS.map((job) => ({ id: job.id }))
}

function MarketingGrowthAssociateContent() {
  return (
    <div className="space-y-8 text-base md:text-lg text-muted-foreground">
      <aside className="space-y-2">
        <div><strong>Location:</strong> Shanghai (in-office, with flexibility)</div>
        <div><strong>Commitment:</strong> Full-time contract</div>
        <div><strong>Compensation:</strong> 12,000 RMB / month + performance bonus tied to revenue milestones</div>
        <div><strong>Language:</strong> English</div>
      </aside>

      <section>
        <h2 className="text-xl font-semibold text-card-foreground mb-2">About Young &amp; AI</h2>
        <p>
          <strong>Young &amp; AI</strong> builds intelligent products and services that bring AI into the hands of creators,
          developers, and teams.
        </p>
        <p className="mt-2">
          Our current flagship product, <strong>Issue To PR</strong>, helps product managers and designers turn their ideas into
          reality by instantly generating Pull Requests from GitHub Issues — making it easy to preview design and feature ideas
          directly within existing codebases.
        </p>
        <p className="mt-2">
          We’re expanding our portfolio of digital AI tools, and we’re looking for someone excited to help evaluate, market,
          and grow these products internationally.
        </p>
        <p className="mt-2">
          You’ll work directly with the <strong>Founder &amp; CEO (former McKinsey consultant)</strong> and gain firsthand experience in
          startup strategy, AI workflow design, and go-to-market execution.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-card-foreground mb-2">Role Overview</h2>
        <p>
          We’re seeking a <strong>Marketing &amp; Growth Associate</strong> who combines creative energy with disciplined execution.
        </p>
        <p className="mt-2">
          Your mission is to <strong>drive product awareness, user growth, and revenue</strong> — starting with Issue To PR, and later
          expanding to other AI-powered products under the <strong>Young &amp; AI</strong> brand.
        </p>
        <p className="mt-2">
          You’ll develop marketing strategies, test growth ideas, and experiment with innovative (even unconventional) ways to
          reach potential users and partners.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-card-foreground mb-2">Key Responsibilities</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">1. Growth &amp; Strategy</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Develop and execute <strong>marketing and sales strategies</strong> to drive user acquisition.</li>
              <li>Experiment with <strong>guerrilla marketing tactics</strong> and creative outreach ideas.</li>
              <li>Identify and test new channels (e.g. developer communities, Reddit, Hacker News, Product Hunt, X / LinkedIn).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">2. Sales Outreach</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Conduct lead generation and <strong>outreach to developers, startups, and teams</strong> who could benefit from Issue To PR.</li>
              <li>Create and run cold-email / LinkedIn outreach campaigns.</li>
              <li>Develop scripts, track performance, and optimize conversion funnels.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">3. Marketing Execution</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Help produce social media, blog, and email content about the product.</li>
              <li>Support community engagement and early-adopter programs.</li>
              <li>Build and maintain a simple CRM or prospect list.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">4. Product Collaboration</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Work closely with the founder to align marketing efforts with product development.</li>
              <li>Gather and organize <strong>customer feedback</strong> to refine messaging and identify growth levers.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-card-foreground mb-2">What You’ll Learn</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>How to design and run <strong>AI-powered growth workflows</strong> (including autonomous lead-gen and content bots).</li>
          <li>How to use modern tools for marketing automation, analytics, and experimentation.</li>
          <li>Startup strategy and lean growth methodologies directly from a founder with McKinsey consulting experience.</li>
          <li>How to translate product value into real-world traction and measurable business growth.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-card-foreground mb-2">Who You Are</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Eager to learn and grow your expertise in marketing and sales, especially for AI SaaS tools.</li>
          <li>Based in Shanghai, open to working in-person (with flexibility).</li>
          <li>Creative, resourceful, and self-driven; you get energy from testing ideas and seeing results.</li>
          <li>Familiar with SaaS, developer tools, or AI products (bonus, not required).</li>
          <li>Comfortable with ambiguity and fast iteration in an early-stage startup environment.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-card-foreground mb-2">Compensation &amp; Growth</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Base rate:</strong> 12,000 RMB / month</li>
          <li><strong>Performance bonus:</strong> tied to revenue milestones</li>
          <li><strong>Long-term potential:</strong> opportunity to evolve into a core marketing or growth leadership role as the company scales</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-card-foreground mb-2">How to Apply</h2>
        <p>
          Send your CV and a short introduction to {" "}
          <a className="text-blue-600 hover:underline" href="mailto:hello@youngandai.com">hello@youngandai.com</a>.
        </p>
        <p className="mt-2">Or contact Ching Jui Young on WeChat: <span className="font-mono">youngchingjui1</span></p>
      </section>
    </div>
  )
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
        <CardContent className="space-y-6">
          {job.id === "marketing-growth-associate" ? (
            <MarketingGrowthAssociateContent />
          ) : (
            <div className="text-base md:text-lg text-muted-foreground space-y-4">
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

              {job.applyEmail && (
                <div>
                  <h2 className="text-xl font-semibold text-card-foreground mb-2">How to apply</h2>
                  <p>
                    <a className="text-blue-600 hover:underline" href={`mailto:${job.applyEmail}`}>
                      {job.applyEmail}
                    </a>
                  </p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

