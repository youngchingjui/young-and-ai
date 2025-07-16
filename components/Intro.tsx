export default function Intro() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mb-12 rounded-lg shadow-lg">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-tight drop-shadow-lg">
          Young & AI
        </h1>
        <p className="mt-6 max-w-3xl text-center text-lg md:text-xl lg:text-2xl font-medium">
          We’ve been helping companies build cutting-edge AI and automation solutions since <span className="font-bold">2018</span>.
          <br className="hidden md:block" />
          From multi-agent architectures to dazzling product experiences, our team turns bold ideas into reality.
        </p>
      </div>
    </section>
  )
}

