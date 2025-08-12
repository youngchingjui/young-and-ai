import Image from "next/image"
import Link from "next/link"

export default function HeroIntro() {
  return (
    <section className="relative overflow-hidden">
      {/* Splashy gradient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/30 via-fuchsia-500/20 to-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-emerald-400/20 via-cyan-400/20 to-fuchsia-500/30 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-2xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Young &
              <span className="ml-3 bg-gradient-to-r from-cyan-300 via-emerald-300 to-fuchsia-300 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We’ve been helping companies build AI and automation solutions since
              2018.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#client-work"
                className="inline-flex items-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-white/20 backdrop-blur transition-colors hover:bg-white/20"
              >
                See our work
              </Link>
              <Link
                href="#talks"
                className="inline-flex items-center rounded-md bg-transparent px-5 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-white/30 transition-colors hover:bg-white/10"
              >
                Talks & workshops
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex h-64 w-64 items-center justify-center md:h-80 md:w-80">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-fuchsia-400/15 via-cyan-400/15 to-emerald-400/15 blur-2xl" />
            <Image
              src="/globe.svg"
              alt="Globe"
              width={256}
              height={256}
              className="relative drop-shadow-[0_0_35px_rgba(56,189,248,0.25)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

