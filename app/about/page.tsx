export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="pt-24 pb-24">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          About
        </h1>
        <div className="mt-10 space-y-6 text-foreground/80 text-xl leading-relaxed">
          <p>
            Young & AI was founded by Ching Jui Young in Shanghai. We build AI
            products and help companies adopt AI workflows — from early-stage
            prototypes to production systems that run at scale.
          </p>
          <p>
            Our work spans automation, integrations, and data platforms. We
            partner closely with engineering teams, bringing pragmatic and
            reliable solutions to real business problems.
          </p>
          <p>
            We also run{" "}
            <a
              href="https://ai-breakfast.youngandai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary/60 transition-colors"
            >
              AI Breakfast
            </a>
            , a weekly meetup in Shanghai where founders, engineers, and
            operators trade notes on what&apos;s working in AI.
          </p>
        </div>
        <p className="mt-10">
          <a
            href="mailto:contact@youngandai.com"
            className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary/60 transition-colors"
          >
            contact@youngandai.com
          </a>
        </p>
      </section>
    </div>
  )
}
