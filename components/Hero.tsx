export default function Hero() {
  return (
    <section className="relative min-h-[90dvh] grid place-items-center px-4 pt-28 md:pt-32 pb-8">
      {/* Hiring pill removed as we are currently not hiring */}
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

