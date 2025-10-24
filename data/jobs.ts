export type Job = {
  id: string
  title: string
  slug: string
  location?: string
  commitment?: string
  compensation?: string
  language?: string
  description?: string
  summary?: string
  applyEmail?: string
  applyUrl?: string
}

export const JOBS: Job[] = [
  {
    id: "marketing-growth-associate",
    title: "Marketing & Growth Associate",
    slug: "marketing-growth-associate",
    location: "JingAn District, Shanghai",
    commitment: "Full-time contract",
    compensation:
      "12,000 RMB / month + performance bonus tied to revenue milestones",
    language: "English",
    summary:
      "Drive product awareness, user growth, and revenue for Issue To PR and other AI tools under Young & AI.",
    description:
      "We’re seeking a Marketing & Growth Associate who combines creative energy with disciplined execution. Your mission is to drive product awareness, user growth, and revenue — starting with Issue To PR, and later expanding to other AI-powered products under the Young & AI brand.",
    applyEmail: "jobs@youngandai.com",
  },
]
