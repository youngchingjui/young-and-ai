# Yongin AI Website (Private)

This is the private repository for the Yongin AI marketing/website. It is a Next.js application that hosts the main content for yonginai.com.

## Repository visibility

- This repository is private and is not intended for public distribution.

## Hosting and deployment

- Production
  - Hosting: AWS EC2 (our managed server).
  - Domain & DNS: Squarespace manages the yonginai.com DNS. The root domain is configured in Squarespace to point to the EC2 server.
  - Notes: The main production site (yonginai.com) is served from the EC2 instance.
- Preview deployments
  - Hosting: Vercel.
  - Usage: Used for preview builds for branches and pull requests.
- Subdomains
  - There are additional subdomains under yonginai.com that are maintained in other repositories and may or may not be hosted on the same EC2 server.

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

## Learn more

- Next.js documentation: https://nextjs.org/docs
- Deployment guide: https://nextjs.org/docs/app/building-your-application/deploying

