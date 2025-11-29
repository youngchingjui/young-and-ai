# Young & AI Website

This repository is for the Young & AI NextJS website. It is a Next.js application that hosts the main content for youngandai.com.

## Hosting and deployment

- Production
  - Hosting: AWS EC2 (our managed server).
  - Domain & DNS: Squarespace manages the youngandai.com DNS. The root domain is configured in Squarespace to points to the EC2 server.
  - Notes: The main production site (youngandai.com) is served from the EC2 instance.
- Preview deployments
  - Hosting: Vercel.
  - Usage: Used for preview builds for branches and pull requests.
- Subdomains
  - There are additional subdomains under youngandai.com that are maintained in other repositories and may or may not be hosted on the same EC2 server.
  - ai-breakfast.youngandai.com — AI Breakfast event site (info + RSVP).

## Local development

Prerequisites: Node.js LTS and pnpm.

Start the dev server:

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000 in your browser.

You can start editing by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Deployment workflow (summary)

- Create a feature branch and open a pull request.
- Vercel will build a preview deployment for the PR/branch.
- Once approved, changes are merged to `main` and deployed to production on our EC2 server via our internal deployment process.

