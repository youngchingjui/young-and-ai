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
    location: "Jingan, Shanghai",
    commitment: "Full-time contract",
    compensation: "RMB 12,000 / month + performance bonus",
    language: "Basic English proficiency",
    summary:
      "Drive product awareness, user growth, and revenue for Issue To PR and other AI tools under Young & AI.",
    description: `
## Overview

We’re seeking a **Marketing & Growth Associate** who combines creative energy with disciplined execution.

Your mission is to **drive product awareness, user growth, and revenue** — starting with Issue To PR, and later expanding to other AI-powered products under the **Young & AI** brand.

You’ll develop marketing strategies, test growth ideas, and experiment with innovative (even unconventional) ways to reach potential users and partners.

## Key Responsibilities

### 1. Growth & Strategy
- Develop and execute **marketing and sales strategies** to drive user acquisition.
- Experiment with **guerrilla marketing tactics** and creative outreach ideas.
- Identify and test new channels (e.g. developer communities, Reddit, Hacker News, Product Hunt, X / LinkedIn).

### 2. Sales Outreach
- Conduct lead generation and **outreach to developers, startups, and teams** who could benefit from Issue To PR.
- Create and run cold-email / LinkedIn outreach campaigns.
- Develop scripts, track performance, and optimize conversion funnels.

### 3. Marketing Execution
- Help produce social media, blog, and email content about the product.
- Support community engagement and early-adopter programs.
- Build and maintain a simple CRM or prospect list.

### 4. Product Collaboration
- Work closely with the founder to align marketing efforts with product development.
- Gather and organize **customer feedback** to refine messaging and identify growth levers.

## What You’ll Learn
- How to design and run **AI-powered growth workflows** (including autonomous lead-gen and content bots).
- How to use modern tools for marketing automation, analytics, and experimentation.
- Startup strategy and lean growth methodologies directly from a founder with McKinsey consulting experience.
- How to translate product value into real-world traction and measurable business growth.

## Who You Are
- Eager to learn and grow your expertise in marketing and sales, especially for AI SaaS tools.
- Based in Shanghai, open to working in-person (with flexibility).
- Creative, resourceful, and self-driven; you get energy from testing ideas and seeing results.
- Familiar with SaaS, developer tools, or AI products (bonus, not required).
- Comfortable with ambiguity and fast iteration in an early-stage startup environment.

## Compensation & Growth
- **Base rate:** 12,000 RMB / month
- **Performance bonus:** tied to revenue milestones
- **Long-term potential:** opportunity to evolve into a core marketing or growth leadership role as the company scales
`,
    applyEmail: "jobs@youngandai.com",
  },
]

