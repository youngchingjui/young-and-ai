export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col px-4">
      <div className="w-full pt-16 md:pt-16 text-center">
        <p className="text-2xl md:text-3xl">Young & AI</p>
      </div>
      <div className="flex-1 grid place-items-center">
        <h1 className="font-extrabold tracking-[-0.02em] leading-[0.82] text-center text-[clamp(2.5rem,20vmin,12rem)]">
          <span className="block">WE</span>
          <span className="block">BUILD</span>
          <span className="block text-primary text-[clamp(2.5rem,50vmin,30rem)]">AI</span>
        </h1>
      </div>
    </section>
  )
}

