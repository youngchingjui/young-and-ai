import { NEXT_PUBLIC_CALENDLY_LINK } from "@/lib/env"

export default function BookingCTA() {
  return (
    <section className="pb-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Ready to build?
      </h2>
      <p className="mt-4 text-xl text-foreground/60 max-w-lg mx-auto leading-relaxed">
        Book a free 30-minute discovery call. We&apos;ll scope your project and
        recommend the right package.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
        <a
          href={NEXT_PUBLIC_CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-primary px-8 py-4 text-xl font-bold text-white hover:opacity-90 transition-opacity"
        >
          Book a discovery call
        </a>
        <a
          href="mailto:contact@youngandai.com"
          className="text-xl text-foreground/50 underline underline-offset-4 decoration-foreground/20 hover:text-foreground/70 hover:decoration-foreground/40 transition-colors"
        >
          or email us
        </a>
      </div>
      <p className="mt-3 text-sm text-foreground/30">
        Free &middot; 30 minutes &middot; No commitment
      </p>
    </section>
  )
}
