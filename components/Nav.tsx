import Link from "next/link"

export default function Nav() {
  return (
    <nav className="w-full max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
      <Link href="/" className="text-lg md:text-xl text-foreground font-bold">
        Young & AI
      </Link>
      <div className="flex gap-6 text-lg md:text-xl text-foreground/60">
        <Link href="/about" className="hover:text-foreground transition-colors">
          About
        </Link>
      </div>
    </nav>
  )
}
