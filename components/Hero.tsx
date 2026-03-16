export default function Hero() {
  return (
    <section className="relative min-h-[90dvh] grid place-items-center px-4 pt-28 md:pt-32 pb-8 overflow-hidden">
      {/* Sunrise glow behind the text */}
      <div className="sunrise-glow" />
      {/* Gentle horizontal shimmer */}
      <div className="sunrise-shimmer" />
      {/* Floating particles */}
      <div className="sunrise-particle" />
      <div className="sunrise-particle" />
      <div className="sunrise-particle" />
      <div className="sunrise-particle" />
      <div className="sunrise-particle" />
      <div className="sunrise-particle" />
      <div className="sunrise-particle" />
      <div className="sunrise-particle" />

      <div className="absolute w-full top-16 md:top-16 text-2xl md:text-3xl text-center">
        <p className="text-2xl md:text-3xl tracking-wide text-foreground/80">Young & AI</p>
      </div>
      <h1 className="relative z-10 font-extrabold tracking-[-0.02em] leading-[0.82] text-center text-[clamp(2.5rem,20vmin,12rem)]">
        <span className="block text-foreground/90">WE</span>
        <span className="block text-foreground/90">BUILD</span>
        <span className="block text-transparent bg-clip-text bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-[clamp(2.5rem,50vmin,30rem)]">
          AI
        </span>
      </h1>
    </section>
  )
}
