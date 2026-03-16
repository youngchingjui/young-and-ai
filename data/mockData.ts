export type Item = {
  id: number
  title: string
  description: string
  slug: string
  type?: "client" | "talk" | "project" | "tweet"
  tags?: string[]
  metric?: string
  date?: string
  location?: string
  url?: string
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
        title: "Multi-Agent RAG System",
        description:
          "Built a multi-agent architecture for a German manufacturer to extract key information from complex RFQ documents. Multiple specialized LLMs coordinate to parse, validate, and structure data from technical procurement documents.",
        slug: "multi-agent-rag-architecture",
        type: "client",
        tags: ["OpenAI", "LangGraph", "Azure", "FastAPI", "PostgreSQL"],
        metric: "3x more accurate than single-agent baseline",
      },
      {
        id: 2,
        title: "Publication Platform",
        description:
          "Managed, redesigned, and rebuilt a publication website for a Swiss publishing company with 10k+ pages and 50k+ monthly views. Built a headless CMS, new frontend, analytics dashboards, and SEO optimization. Led a team of 6.",
        slug: "nextjs-publication",
        type: "client",
        tags: ["Next.js", "React", "Django", "Wagtail", "PostgreSQL", "Grafana"],
        metric: "10k+ pages, 50k+ monthly views",
      },
      {
        id: 3,
        title: "Trend Prediction Engine",
        description:
          "Designed, built, and deployed a trend detection dashboard for a global FMCG company. Collaborated with Chinese and international teams to identify user needs. Managed database storage on Microsoft Azure Cloud.",
        slug: "fmcg-trends-prediction",
        type: "client",
        tags: ["Python", "PowerBI", "PowerApps", "Azure"],
        metric: "Deployed across global teams",
      },
      {
        id: 4,
        title: "Health Tech Marketplace",
        description:
          "Developed and managed ML models for a two-sided marketplace startup, creating a Health Index Score from dietary data. Built digital products and advised on platform strategy, including WeChat mini-programs.",
        slug: "mlops-health-tech-marketplace",
        type: "client",
        tags: ["Python", "scikit-learn", "Databricks", "Streamlit", "Next.js"],
        metric: "End-to-end ML pipeline to production",
      },
      {
        id: 5,
        title: "Image Classification for Real Estate",
        description:
          "Designed and trained a deep convolutional neural network for an Australian real estate company to identify residential housing features from Google Street View images. Fine-tuned to over 70% accuracy.",
        slug: "image-classification-real-estate",
        type: "client",
        tags: ["PyTorch", "AWS SageMaker", "Mechanical Turk", "Python"],
        metric: "70%+ accuracy on housing feature detection",
      },
      {
        id: 6,
        title: "Manufacturing Fault Detection",
        description:
          "Built ML algorithms for detecting faults on auto-manufacturer assembly lines. Developed predictive models to identify defects before they reach quality control.",
        slug: "manufacturing-fault-detection",
        type: "client",
        tags: ["Python", "scikit-learn", "XGBoost"],
        metric: "Automated quality assurance pipeline",
      },
      {
        id: 7,
        title: "Enterprise Tableau Optimization",
        description:
          "Optimized Tableau dashboards managing millions of data points for a French audit company. Reduced load times from 5 minutes to seconds by fixing ETL issues and streamlining metrics.",
        slug: "tableau-optimization",
        type: "client",
        tags: ["Tableau", "SQL", "ETL"],
        metric: "5 min load time reduced to seconds",
      },
      {
        id: 8,
        title: "Natural Language Data Querying",
        description:
          "Built an in-house Code Interpreter prototype for a large enterprise, enabling analysts to query complex databases using natural language instead of SQL. Connected to live production databases with permission controls.",
        slug: "natural-language-sql",
        type: "client",
        tags: ["OpenAI", "Python", "SQL", "PostgreSQL"],
        metric: "Analysts 3x faster at retrieving insights",
      },
      {
        id: 9,
        title: "Visa Form Automation",
        description:
          "Developed a web scraping service to auto-fill government website forms for a China-focused travel services company. Automated repetitive data entry across complex multi-step government portals.",
        slug: "visa-form-automation",
        type: "client",
        tags: ["Puppeteer", "Electron", "React", "Selenium"],
      },
      {
        id: 10,
        title: "Landing Page for AI Startup",
        description:
          "Built and deployed a landing page with complex animations and integrated Stripe for payments for a Dubai-based AI company.",
        slug: "landing-page-dubai-ai-startup",
        type: "client",
        tags: ["Webflow", "JavaScript", "Tailwind CSS", "Stripe"],
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        id: 1,
        title: "Issue to PR",
        description:
          "Production-grade autonomous coding agent that resolves GitHub issues by analyzing repos, generating code, and creating pull requests. Built months before Claude Code and Cursor Agent.",
        slug: "issue-to-pr",
        type: "project",
        tags: ["Next.js", "TypeScript", "OpenAI", "Docker", "AWS"],
        metric: "96% reduction in issue resolution time",
        url: "https://issuetopr.dev",
      },
      {
        id: 2,
        title: "Talking Terry",
        description:
          "Voice-to-voice chatbot built in March 2023 — months before the voice AI wave. Real-time speech-to-speech conversation powered by GPT-3.5.",
        slug: "talking-terry",
        type: "project",
        tags: ["OpenAI", "Speech-to-Text", "Python"],
        date: "March 2023",
      },
      {
        id: 3,
        title: "StoryCraft",
        description:
          "GenAI service that crafts customized storybooks for children, including animations in the child's likeness using Midjourney.",
        slug: "storycraft",
        type: "project",
        tags: ["Midjourney", "GenAI", "React"],
      },
      {
        id: 4,
        title: "AI Form Filler",
        description:
          "Automatically fills out long and complicated forms using AI agents. Supports both text and voice input for hands-free form completion.",
        slug: "ai-form-filler",
        type: "project",
        tags: ["Next.js", "OpenAI", "Voice AI"],
      },
      {
        id: 5,
        title: "Book of Prompts",
        description:
          "A newsfeed platform of effective prompts for Generative AI models, with examples and community contributions.",
        slug: "book-of-prompts",
        type: "project",
        tags: ["Next.js", "AWS S3", "PostgreSQL"],
      },
      {
        id: 6,
        title: "SpeakZhongWen",
        description:
          "Cohort-based Chinese language learning platform. Record 1-minute videos of you speaking Chinese, and a professional teacher engages via async voice notes.",
        slug: "speak-zhong-wen",
        type: "project",
        tags: ["React", "Video", "Education"],
      },
      {
        id: 7,
        title: "File Renamer",
        description:
          "Desktop app that automatically renames images and PDF files based on their visual content using GPT-4 Vision.",
        slug: "file-renamer",
        type: "project",
        tags: ["GPT-4 Vision", "Electron", "React"],
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
          "Interactive workshop on building applications with LLM structured outputs. Demonstrated building a type-safe AI form-filling tool live with v0, Cursor, and Next.js.",
        slug: "20241219",
        type: "talk",
        date: "December 2024",
        tags: ["Workshop", "LLMs", "Structured Outputs"],
      },
      {
        id: 2,
        title: "ChatGPT for Business",
        description:
          "Invited workshop in Hangzhou on practical applications of ChatGPT for business operations. Covered prompt engineering, workflow automation, and real-world use cases.",
        slug: "chatgpt-for-business",
        type: "talk",
        date: "2023",
        location: "Hangzhou, China",
        tags: ["Workshop", "ChatGPT", "Business"],
        metric: "30-40 attendees",
      },
      {
        id: 3,
        title: "AI & Entrepreneurship Workshop",
        description:
          "Workshop with students at the Huawei campus in Shenzhen on AI applications in entrepreneurship and startup building.",
        slug: "huawei-ai-entrepreneurship",
        type: "talk",
        date: "2023",
        location: "Huawei Campus, Shenzhen",
        tags: ["Workshop", "AI", "Entrepreneurship"],
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
