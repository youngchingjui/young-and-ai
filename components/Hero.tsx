import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[90dvh] grid place-items-center px-4 pt-28 md:pt-32 pb-8">
      <Link
        href="/jobs"
        aria-label="See open roles at Young & AI"
        className="absolute right-4 top-4 md:right-6 md:top-6 inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/80 px-4 py-2 text-sm shadow-sm backdrop-blur hover:bg-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        <span>We&apos;re hiring</span>
      </Link>
      <div className="absolute w-full  top-16 md:top-16 text-2xl md:text-3xl text-center">
        <p className="text-2xl md:text-3xl">Young & AI</p>
      </div>
      <h1 className="font-extrabold tracking-[-0.02em] leading-[0.82] text-center text-[clamp(2.5rem,20vmin,12rem)]">
        <span className="block">WE</span>
        <span className="block">BUILD</span>
        <span className="block text-primary text-[clamp(2.5rem,50vmin,30rem)]">AI</span>
      </h1>
    </section>
  )
}

