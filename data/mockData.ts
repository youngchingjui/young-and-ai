export type Item = {
  id: number
  title: string
  description: string
  slug: string
  type?: "client" | "talk" | "project" | "tweet"
}

export type SectionData = {
  title: string
  items: Item[]
}

export const sectionData: SectionData[] = [
  {
    title: "Client Work",
    items: [
      {
        id: 1,
        title: "NextJS Publication",
        description:
          "Built and launched a publication website with 10k+ pages and 50k+ monthly views using NextJS and Wagtail. Improved SEO, loading speeds, and page rendering. Led a team of 6 as product manager and lead front-end developer.",
        slug: "nextjs-publication",
        type: "client",
      },
      {
        id: 2,
        title: "Multi-agent RAG Architecture",
        description:
          "Developed a multi-agent RAG architecture for a German manufacturer, integrating with Azure. Improved results by 3x over baseline GPT-4 results. Led a team of 4 as lead software engineer and architect.",
        slug: "multi-agent-rag-architecture",
        type: "client",
      },
      {
        id: 3,
        title: "MLOps for Health Tech Marketplace",
        description:
          "Implemented MLOps to train and deploy ML models predicting a Health Score Index. Built a front-end website for users to track dieting habits and view their Health Score.",
        slug: "mlops-health-tech-marketplace",
        type: "client",
      },
      {
        id: 4,
        title: "Pupeteer Web Scraping",
        description:
          "Developed a Puppeteer web scraping service to auto-fill government website forms for a French travel services company.",
        slug: "pupeteer-web-scraping",
        type: "client",
      },
      {
        id: 5,
        title: "Landing Page for Dubai AI Startup",
        description:
          "Built and deployed a landing page with complex animations and integrated Stripe for payments for a Dubai-based AI startup.",
        slug: "landing-page-dubai-ai-startup",
        type: "client",
      },
      {
        id: 6,
        title: "Data Scraping for Financial Management",
        description:
          "Built data scraping and cleaning automation with Python and pandas for a financial management company.",
        slug: "data-scraping-financial-management",
        type: "client",
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        id: 1,
        title: "Personal Project 1",
        description: "Description for Personal Project 1",
        slug: "personal-project-1",
        type: "project",
      },
      {
        id: 2,
        title: "Personal Project 2",
        description: "Description for Personal Project 2",
        slug: "personal-project-2",
        type: "project",
      },
      {
        id: 3,
        title: "Personal Project 3",
        description: "Description for Personal Project 3",
        slug: "personal-project-3",
        type: "project",
      },
    ],
  },
  {
    title: "Talks",
    items: [
      {
        id: 1,
        title: "LLM Structured Outputs Workshop",
        description:
          "Workshop on building applications with LLM structured outputs. Learn how to create reliable, type-safe outputs from LLMs and integrate them into your applications.",
        slug: "20241219",
        type: "talk",
      },
      {
        id: 2,
        title: "Workshop 1",
        description: "Description for Workshop 1",
        slug: "workshop-1",
        type: "talk",
      },
      {
        id: 3,
        title: "Webinar 1",
        description: "Description for Webinar 1",
        slug: "webinar-1",
        type: "talk",
      },
      {
        id: 4,
        title: "Panel Discussion",
        description: "Description for Panel Discussion",
        slug: "panel-discussion",
        type: "talk",
      },
      {
        id: 5,
        title: "Keynote Speech",
        description: "Description for Keynote Speech",
        slug: "keynote-speech",
        type: "talk",
      },
      {
        id: 6,
        title: "Tech Meetup Talk",
        description: "Description for Tech Meetup Talk",
        slug: "tech-meetup-talk",
        type: "talk",
      },
    ],
  },
  {
    title: "Tweets",
    items: [
      {
        id: 1,
        title: "Tweet 1",
        description: "Content of Tweet 1",
        slug: "tweet-1",
        type: "tweet",
      },
      {
        id: 2,
        title: "Tweet 2",
        description: "Content of Tweet 2",
        slug: "tweet-2",
        type: "tweet",
      },
      {
        id: 3,
        title: "Tweet 3",
        description: "Content of Tweet 3",
        slug: "tweet-3",
        type: "tweet",
      },
    ],
  },
]
