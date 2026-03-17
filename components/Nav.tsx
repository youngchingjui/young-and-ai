import Link from "next/link"

export default function Nav() {
  return (
    <nav className="px-6 py-6 flex items-center justify-between max-w-2xl mx-auto">
      <Link href="/" className="text-foreground font-semibold">
        Young & AI
      </Link>
      <div className="flex gap-6 text-sm text-foreground/60">
        <Link href="/about" className="hover:text-foreground transition-colors">
          About
        </Link>
      </div>
    </nav>
  )
}
