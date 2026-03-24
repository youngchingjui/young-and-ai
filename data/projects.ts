export interface Project {
  slug: string
  title: string
  subtitle: string
  heroImage: string
  heroImageAlt: string
  overview: string
  challenge: string
  solution: string
  results: string[]
  technologies?: string[]
}

export const projects: Project[] = [
  {
    slug: "openclaw",
    title: "OpenClaw",
    subtitle: "Self-hosted AI assistant deployment",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    heroImageAlt: "Server room with blue lighting",
    overview:
      "We helped multiple teams deploy OpenClaw — an open-source AI assistant with 247K+ GitHub stars — on their own infrastructure, connecting it to their existing messaging platforms and internal tools.",
    challenge:
      "Most teams we spoke with loved the idea of a self-hosted AI assistant but struggled with the infrastructure complexity. Docker networking, credential management, multi-model routing, and channel integrations all needed to work together seamlessly — and the documentation only got them partway there.",
    solution:
      "We built a repeatable deployment playbook that handles infrastructure provisioning, security hardening, channel integration, and custom workflow configuration. Each deployment is tailored to the client's specific tech stack and compliance requirements, with a full handoff so their team can maintain and extend it independently.",
    results: [
      "Deployments completed in under a week, down from months of internal attempts",
      "Teams running autonomous workflows across Slack, WhatsApp, and email",
      "Zero data leaving client infrastructure — fully self-hosted",
    ],
  },
  {
    slug: "refolk",
    title: "Customer Personas",
    subtitle: "AI-powered customer research synthesis",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    heroImageAlt: "Team collaborating around a whiteboard with sticky notes",
    overview:
      "We worked with a product-led SaaS company to transform scattered customer research — interviews, surveys, support tickets, and usage data — into living AI personas that their team could query in real time.",
    challenge:
      "The product team had years of customer research locked in spreadsheets, Notion docs, and recorded interviews. Synthesizing insights meant hours of manual review, and the personas they had built were static documents that went stale within weeks of creation.",
    solution:
      "We built a system that ingests research data from multiple sources, clusters it into distinct persona archetypes, and exposes each persona as a conversational AI agent. Product managers can interview these personas, pressure-test feature ideas, and get instant feedback grounded in real customer data.",
    results: [
      "Product decisions backed by synthesized data from 2,000+ customer touchpoints",
      "Feature validation cycles shortened from weeks to hours",
      "Personas updated automatically as new research flows in",
    ],
  },
  {
    slug: "mingju",
    title: "Anomaly Detection",
    subtitle: "ML-powered operational monitoring",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    heroImageAlt: "Data analytics dashboard with charts and graphs",
    overview:
      "We partnered with a logistics company to build a machine learning system that detects anomalies in their operational data — flagging issues before they cascade into costly disruptions.",
    challenge:
      "The company was processing thousands of shipments daily across multiple warehouses. Equipment failures, routing bottlenecks, and inventory discrepancies were only caught after they caused delays. Their existing rule-based alerts generated too many false positives to be useful.",
    solution:
      "We trained an ensemble of anomaly detection models on their historical operational data, tuned to distinguish genuine anomalies from normal variance. The system monitors sensor readings, throughput metrics, and inventory movements in near real-time, surfacing only high-confidence alerts with contextual explanations.",
    results: [
      "80% reduction in false-positive alerts compared to rule-based system",
      "Equipment failures detected an average of 6 hours before impact",
      "Anomaly explanations helped operators resolve issues 3x faster",
    ],
  },
  {
    slug: "residential",
    title: "Image Recognition",
    subtitle: "Computer vision for property assessment",
    heroImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    heroImageAlt: "Aerial view of residential neighborhood",
    overview:
      "We worked with a property services firm to build an image recognition pipeline that automatically assesses property conditions from photographs — replacing hours of manual review per property.",
    challenge:
      "Assessors were manually reviewing hundreds of property photos per day, classifying damage types, estimating severity, and writing condition reports. The process was slow, inconsistent across assessors, and created bottlenecks during peak seasons.",
    solution:
      "We trained a custom computer vision model on tens of thousands of labeled property images, capable of identifying structural issues, surface damage, and maintenance needs. The system generates condition scores and detailed findings that assessors can review and approve rather than create from scratch.",
    results: [
      "Assessment time reduced from 45 minutes to under 5 minutes per property",
      "Consistency across assessments improved by 60%",
      "Assessors handle 8x more properties during peak season",
    ],
  },
  {
    slug: "fmcg-trends",
    title: "Trend Detection",
    subtitle: "Social media signal analysis across markets",
    heroImage:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80",
    heroImageAlt: "Social media icons and analytics on a screen",
    overview:
      "We worked with a global FMCG company to detect emerging consumer trends across 8 markets using social media signals, helping their innovation team spot opportunities months ahead of traditional research.",
    challenge:
      "The brand team relied on quarterly reports from research agencies to understand shifting consumer preferences. By the time insights reached product development, competitors had often already moved. They needed a way to monitor real-time conversations across markets and languages without drowning in noise.",
    solution:
      "We built a multilingual NLP pipeline that ingests social media posts, reviews, and forum discussions across 8 markets. The system clusters emerging topics, tracks sentiment trajectories, and surfaces trend signals — filtered by product category, demographic, and geography. A weekly digest highlights the most actionable shifts.",
    results: [
      "Trend signals detected 3-6 months ahead of traditional research reports",
      "Coverage expanded from 2 markets to 8 without additional headcount",
      "Three product innovations directly traced to early trend detection",
    ],
  },
  {
    slug: "form-filler",
    title: "Form Automation",
    subtitle: "AI-powered document completion",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    heroImageAlt: "Stack of forms and documents on a desk",
    overview:
      "We built an AI agent that fills out lengthy government applications, insurance forms, and compliance paperwork using voice or text input — cutting completion time from 45 minutes to under 5.",
    challenge:
      "Professionals spending hours each week on repetitive form filling — the same information entered across dozens of documents with slightly different formats. Errors were common, and corrections created further delays in processing.",
    solution:
      "We built an agent that understands form structure, extracts relevant information from prior submissions and conversations, and populates fields intelligently. It handles multi-page government forms, insurance applications, and compliance documents, asking only for information it cannot infer.",
    results: [
      "Form completion time reduced by 90%",
      "Error rates dropped from 12% to under 1%",
      "Users complete forms via voice while driving or between meetings",
    ],
  },
  {
    slug: "talking-terry",
    title: "Voice AI Chatbots",
    subtitle: "Conversational AI for customer engagement",
    heroImage:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1200&q=80",
    heroImageAlt: "Person speaking into a microphone with sound waves",
    overview:
      "We worked with a hospitality group to build a voice-first AI concierge that handles guest inquiries, bookings, and recommendations across their properties — available 24/7 in multiple languages.",
    challenge:
      "The front desk team was overwhelmed with repetitive guest questions — Wi-Fi passwords, restaurant hours, local recommendations, booking modifications. During peak hours, wait times stretched and guest satisfaction scores dropped. Hiring more staff wasn't sustainable across all properties.",
    solution:
      "We built a voice AI system that answers guest queries naturally, handles booking modifications, and provides personalized local recommendations. The system integrates with their property management software, speaks multiple languages, and escalates complex requests to human staff with full context.",
    results: [
      "70% of guest inquiries resolved without human intervention",
      "Guest satisfaction scores improved by 15 points",
      "Front desk staff freed to focus on high-touch guest experiences",
    ],
  },
  {
    slug: "reqaiure",
    title: "Multi-agent RAG",
    subtitle: "Automated procurement document analysis",
    technologies: ["LangChain", "LangGraph", "LangFuse"],
    heroImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    heroImageAlt: "Business documents and contracts on a desk",
    overview:
      "We worked with a manufacturing company to automate the extraction and analysis of Request for Quotation documents — turning hours of manual reading into structured, actionable data in seconds.",
    challenge:
      "The sales team received dozens of RFQs weekly, each in a different format — PDFs, Word documents, emails, even scanned paper. Extracting specifications, quantities, delivery requirements, and compliance conditions took experienced staff 2-3 hours per document, and mistakes led to lost deals or margin erosion.",
    solution:
      "We built a document parsing pipeline using a combination of OCR, layout analysis, and LLM extraction. The system identifies key fields regardless of document format, validates extracted data against product catalogs, and outputs structured quote-ready data directly into their CRM.",
    results: [
      "RFQ processing time reduced from 2-3 hours to under 10 minutes",
      "Extraction accuracy above 97% across document formats",
      "Sales team responds to RFQs 5x faster, improving win rates",
    ],
  },
  {
    slug: "tableau-optimization",
    title: "Enterprise Dashboards",
    subtitle: "Business intelligence platform optimization",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    heroImageAlt: "Business dashboard with data visualizations on a monitor",
    overview:
      "We worked with a mid-size enterprise to overhaul their Tableau environment — consolidating fragmented dashboards, optimizing query performance, and building a self-serve analytics layer that reduced dependency on their data team.",
    challenge:
      "The company had accumulated over 200 Tableau workbooks across departments, many with overlapping metrics that showed different numbers. Dashboard load times averaged 30+ seconds, and the data team spent most of their time fielding ad-hoc requests rather than building strategic analytics.",
    solution:
      "We audited the entire Tableau environment, consolidated metrics into a single source of truth, optimized data extracts and query patterns, and built templated dashboards that business users could customize themselves. We also trained department leads to build their own views.",
    results: [
      "Dashboard load times reduced from 30+ seconds to under 3 seconds",
      "200+ workbooks consolidated into 35 governed dashboards",
      "Ad-hoc requests to the data team dropped by 75%",
    ],
  },
  {
    slug: "luxury-society",
    title: "Publication Websites",
    subtitle: "Content platform development",
    heroImage:
      "https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=1200&q=80",
    heroImageAlt: "Magazine layout with elegant typography",
    overview:
      "We worked with a digital media company in the luxury space to rebuild their publication platform — improving editorial workflows, reader engagement, and content delivery performance across global markets.",
    challenge:
      "The existing platform was built on aging infrastructure that struggled under traffic spikes during major industry events. Editorial workflows required manual HTML editing, content was slow to publish, and the site's performance on mobile lagged behind competitors.",
    solution:
      "We rebuilt the platform on a modern headless CMS architecture with server-side rendering, giving editors a visual content builder while delivering pages that load in under a second globally. We also integrated analytics to surface content performance insights directly in the editorial dashboard.",
    results: [
      "Page load times improved by 4x across all regions",
      "Editorial publish time reduced from hours to minutes",
      "Mobile engagement increased by 40% within the first quarter",
    ],
  },
  {
    slug: "health-index",
    title: "Health Scoring ML",
    subtitle: "Predictive health risk modeling",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    heroImageAlt: "Medical data and health monitoring equipment",
    overview:
      "We worked with a health-tech startup to build a machine learning model that generates personalized health risk scores from wearable data, lab results, and lifestyle questionnaires — giving users actionable insights rather than raw numbers.",
    challenge:
      "Users were overwhelmed by data from wearables, lab tests, and health apps but had no way to understand what it meant holistically. Generic health advice didn't account for individual baselines, and clinicians didn't have time to synthesize all the data during short appointments.",
    solution:
      "We built a scoring model that ingests multi-source health data, establishes personalized baselines, and generates composite risk scores across key health dimensions. The model explains its scores in plain language and suggests evidence-based actions prioritized by potential impact.",
    results: [
      "Users who followed recommendations saw measurable health improvements within 90 days",
      "Clinician review time per patient reduced by 40%",
      "Health score engagement drove 3x higher retention than raw data views",
    ],
  },
  {
    slug: "trading-bot",
    title: "Stock Trading Bots",
    subtitle: "Algorithmic trading strategy automation",
    heroImage:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
    heroImageAlt: "Stock market charts and trading screens",
    overview:
      "We worked with an independent trading firm to build and backtest algorithmic trading strategies that execute automatically based on technical indicators, market sentiment, and custom risk parameters.",
    challenge:
      "The traders had profitable manual strategies but couldn't execute them consistently across multiple markets and time zones. Emotional decision-making during volatile periods led to deviations from their own rules, and opportunities were missed during off-hours.",
    solution:
      "We codified their trading rules into algorithmic strategies, built a backtesting framework against 10 years of historical data, and deployed the system with real-time execution, position sizing, and risk management guardrails. The traders retain full control over strategy parameters and can pause execution at any time.",
    results: [
      "Strategies backtested across 10 years of market data before live deployment",
      "Execution consistency improved — no more emotional deviations from strategy",
      "24/7 market monitoring across multiple exchanges and time zones",
    ],
  },
  {
    slug: "storycraft",
    title: "AI-Generated Storytelling",
    subtitle: "Personalized children's book creation",
    heroImage:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=80",
    heroImageAlt: "Colorful illustrated children's book pages",
    overview:
      "We built a platform that generates fully illustrated, personalized children's storybooks using AI — allowing parents to create unique stories featuring their child's name, interests, and favorite settings.",
    challenge:
      "Personalized children's books existed but were limited to inserting a name into a pre-written template. Parents wanted stories that truly reflected their child — their hobbies, their pet's name, their favorite places. Creating genuinely custom illustrated books at scale was cost-prohibitive with traditional methods.",
    solution:
      "We combined LLM-powered story generation with AI image synthesis to produce fully original stories and illustrations. Parents provide details about their child, choose a theme, and receive a complete illustrated book — each one unique. The system maintains narrative coherence, age-appropriate language, and consistent character illustration across pages.",
    results: [
      "Each book generated in under 2 minutes with unique story and illustrations",
      "Parents can customize characters, settings, and moral themes",
      "Print-ready output at picture-book quality resolution",
    ],
  },
  {
    slug: "calendar-wrapped",
    title: "Calendar Analytics",
    subtitle: "Personal time-use insights",
    heroImage:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80",
    heroImageAlt: "Calendar planner with colorful time blocks",
    overview:
      "We built a tool that analyzes your calendar data and generates a visual year-in-review — showing how you actually spent your time, who you met with most, and where your days went.",
    challenge:
      "People are curious about how they spend their time but have no easy way to get a holistic view. Calendar apps show individual events but don't surface patterns. Manual time tracking is tedious and usually abandoned within a week.",
    solution:
      "The tool connects to Google Calendar or Outlook, categorizes events using NLP, and generates an interactive summary — think Spotify Wrapped for your calendar. It highlights meeting patterns, focus time, work-life balance metrics, and year-over-year comparisons.",
    results: [
      "Users discover patterns they were unaware of — like 30% of their week in recurring meetings",
      "Shareable visual cards drive organic social sharing",
      "Insights help users reclaim an average of 5 hours per week",
    ],
  },
  {
    slug: "bank-stress-tests",
    title: "Stress-Test Modeling",
    subtitle: "Financial scenario simulation",
    heroImage:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=1200&q=80",
    heroImageAlt: "Modern bank building exterior with glass facade",
    overview:
      "We worked with a regional bank to build automated stress-testing models that simulate adverse economic scenarios and assess portfolio resilience — meeting regulatory requirements while reducing the manual modeling burden on their risk team.",
    challenge:
      "The bank's stress-testing process was heavily manual — risk analysts spent weeks each quarter building Excel models, running scenarios, and compiling reports. The process was error-prone, hard to audit, and left little time for the team to actually analyze results and develop risk mitigation strategies.",
    solution:
      "We built an automated modeling pipeline that ingests portfolio data, applies regulatory and custom stress scenarios, and generates comprehensive reports. The system handles scenario generation, sensitivity analysis, and visualization — and produces audit-ready documentation that satisfies regulatory requirements.",
    results: [
      "Quarterly stress-testing cycle reduced from 6 weeks to 3 days",
      "Full audit trail for every scenario and assumption",
      "Risk team now spends 80% of their time on analysis instead of modeling",
    ],
  },
  {
    slug: "izivat",
    title: "VAT Form Automation",
    subtitle: "Cross-border tax compliance automation",
    heroImage:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&q=80",
    heroImageAlt: "Tax forms and calculator on a desk",
    overview:
      "We worked with an accounting firm to automate VAT reclaim processing for their international clients — turning a manual, error-prone workflow into a streamlined digital pipeline.",
    challenge:
      "The firm processed hundreds of VAT reclaim applications monthly across multiple European jurisdictions. Each country had different forms, requirements, and documentation standards. Staff spent hours per application gathering receipts, cross-referencing regulations, and filling out country-specific forms.",
    solution:
      "We built a system that ingests receipts and invoices via photo or email, extracts relevant VAT information using OCR and LLMs, validates eligibility against jurisdiction-specific rules, and auto-populates the correct forms. Staff review and approve rather than create from scratch.",
    results: [
      "Processing time per application reduced by 85%",
      "Error rates dropped from 8% to under 0.5%",
      "Firm doubled their client capacity without additional hires",
    ],
  },
  {
    slug: "burning-vpn",
    title: "VPN Infrastructure",
    subtitle: "Secure network infrastructure deployment",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    heroImageAlt: "Network server infrastructure with cables",
    overview:
      "We built a self-healing VPN infrastructure for a distributed team that needed reliable, private network access across restrictive network environments — without depending on commercial VPN providers.",
    challenge:
      "The team operated across regions with unpredictable network restrictions. Commercial VPN services were frequently blocked, and self-hosted solutions required constant manual intervention when servers were detected and throttled. Downtime meant lost productivity and missed deadlines.",
    solution:
      "We deployed a rotating infrastructure of lightweight VPN nodes across multiple cloud providers, with automatic health monitoring and failover. The system detects when a node is degraded, spins up replacements, and updates client configurations — all without user intervention.",
    results: [
      "99.9% uptime across all network environments",
      "Automatic failover completes in under 30 seconds",
      "Zero manual intervention required for node rotation",
    ],
  },
  {
    slug: "speakzhongwen",
    title: "Language Learning",
    subtitle: "AI-powered conversational language practice",
    heroImage:
      "https://images.unsplash.com/photo-1455894127589-22f75500f116?w=1200&q=80",
    heroImageAlt: "Chinese characters on traditional paper",
    overview:
      "We built a conversational AI tutor for Mandarin learners that adapts to each student's level, corrects mistakes in real time, and generates contextual practice scenarios based on real-life situations.",
    challenge:
      "Language learners plateau when they run out of conversation partners. Tutoring sessions are expensive and hard to schedule, while existing apps focus on vocabulary drills rather than real conversation. Students needed a patient, always-available practice partner that could correct tones, grammar, and vocabulary in context.",
    solution:
      "We built a voice-first AI tutor that conducts free-form conversations in Mandarin, adjusting difficulty to the student's level. It corrects pronunciation and grammar inline, explains cultural context, and generates role-play scenarios — ordering food, negotiating at a market, giving directions — to build practical fluency.",
    results: [
      "Students practice an average of 25 minutes daily — 5x more than with flashcard apps",
      "Conversational confidence scores improved by 40% within 8 weeks",
      "Available 24/7 with infinite patience and no scheduling required",
    ],
  },
  {
    slug: "excelparser",
    title: "Excel Automation",
    subtitle: "Spreadsheet workflow automation",
    heroImage:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&q=80",
    heroImageAlt: "Spreadsheet data on a computer screen",
    overview:
      "We worked with a financial services team to automate their Excel-heavy reporting workflows — eliminating hours of manual data wrangling, formatting, and cross-referencing that consumed their analysts every month.",
    challenge:
      "The team received data in dozens of Excel files from different sources, each with inconsistent formatting. Analysts spent the first week of every month consolidating, cleaning, and reformatting data before they could even begin analysis. Formulas broke frequently, and version control was nonexistent.",
    solution:
      "We built an automation pipeline that ingests Excel files from any source, normalizes data formats, validates against business rules, and produces clean, analysis-ready workbooks. The system also generates the monthly reports automatically, flagging anomalies for human review.",
    results: [
      "Monthly data preparation reduced from 5 days to 2 hours",
      "Report generation fully automated with human-in-the-loop review",
      "Analysts spend 90% of their time on analysis instead of data wrangling",
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
