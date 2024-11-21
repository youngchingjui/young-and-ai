export type Item = {
  id: number
  title: string
  description: string
  link: string
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
        title: "Swiss Consultancy Website",
        description:
          "Built and launched a publication website with 10k+ pages and 50k+ monthly views using NextJS and Wagtail. Improved SEO, loading speeds, and page rendering. Led a team of 6 as product manager and lead front-end developer.",
        link: "/projects/swiss-consultancy-website",
      },
      {
        id: 2,
        title: "LLM-Powered API for German Manufacturer",
        description:
          "Developed a FastAPI API for an LLM-powered solution, integrating with Azure. Improved results by 3x over baseline GPT-4 results. Led a team of 4 as lead software engineer and architect.",
        link: "/projects/llm-powered-api-german-manufacturer",
      },
      {
        id: 3,
        title: "MLOps for Health Tech Marketplace",
        description:
          "Implemented MLOps to train and deploy ML models predicting a Health Score Index. Built a front-end website for users to track dieting habits and view their Health Score.",
        link: "/projects/mlops-health-tech-marketplace",
      },
      {
        id: 4,
        title: "Web Scraping for French Travel Services",
        description:
          "Developed a Puppeteer web scraping service to auto-fill government website forms for a French travel services company.",
        link: "/projects/web-scraping-french-travel-services",
      },
      {
        id: 5,
        title: "Landing Page for Dubai AI Startup",
        description:
          "Built and deployed a landing page with complex animations and integrated Stripe for payments for a Dubai-based AI startup.",
        link: "/projects/landing-page-dubai-ai-startup",
      },
      {
        id: 6,
        title: "Data Scraping for Financial Management",
        description:
          "Built data scraping and cleaning automation with Python and pandas for a financial management company.",
        link: "/projects/data-scraping-financial-management",
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
        link: "/projects/personal-project-1",
      },
      {
        id: 2,
        title: "Personal Project 2",
        description: "Description for Personal Project 2",
        link: "/projects/personal-project-2",
      },
      {
        id: 3,
        title: "Personal Project 3",
        description: "Description for Personal Project 3",
        link: "/projects/personal-project-3",
      },
    ],
  },
  {
    title: "Talks",
    items: [
      {
        id: 1,
        title: "Conference Talk 1",
        description: "Description for Conference Talk 1",
        link: "/talks/conference-talk-1",
      },
      {
        id: 2,
        title: "Workshop 1",
        description: "Description for Workshop 1",
        link: "/talks/workshop-1",
      },
      {
        id: 3,
        title: "Webinar 1",
        description: "Description for Webinar 1",
        link: "/talks/webinar-1",
      },
      {
        id: 4,
        title: "Panel Discussion",
        description: "Description for Panel Discussion",
        link: "/talks/panel-discussion",
      },
      {
        id: 5,
        title: "Keynote Speech",
        description: "Description for Keynote Speech",
        link: "/talks/keynote-speech",
      },
      {
        id: 6,
        title: "Tech Meetup Talk",
        description: "Description for Tech Meetup Talk",
        link: "/talks/tech-meetup-talk",
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
        link: "/tweets/tweet-1",
      },
      {
        id: 2,
        title: "Tweet 2",
        description: "Content of Tweet 2",
        link: "/tweets/tweet-2",
      },
      {
        id: 3,
        title: "Tweet 3",
        description: "Content of Tweet 3",
        link: "/tweets/tweet-3",
      },
    ],
  },
]
