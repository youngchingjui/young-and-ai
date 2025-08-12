export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Splashy background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-400/30 via-teal-400/20 to-cyan-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-400/30 via-sky-400/20 to-indigo-400/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-wider text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
          Building with AI since 2018
        </p>
        <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent">
            Young & AI
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80 md:mt-6 md:text-2xl">
          We’ve been helping companies build AI and automation solutions since
          2018.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80">
            Applied AI
          </span>
          <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80">
            Automation
          </span>
          <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80">
            Data & MLOps
          </span>
        </div>
      </div>
    </section>
  )
}

