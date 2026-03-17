export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <section className="pt-24 pb-20">
        <h1 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
          About
        </h1>
        <div className="mt-8 space-y-4 text-foreground/80 text-lg leading-relaxed">
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
              className="underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground/40 transition-colors"
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
            className="text-foreground/60 underline underline-offset-4 decoration-foreground/20 hover:text-foreground hover:decoration-foreground/40 transition-colors"
          >
            contact@youngandai.com
          </a>
        </p>
      </section>
    </div>
  )
}
