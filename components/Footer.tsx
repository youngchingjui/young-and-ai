import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-6 text-sm text-foreground/50">
      <div className="mx-auto w-full max-w-5xl px-4 flex items-center justify-between">
        <p>&copy; {new Date().getFullYear()} Young & AI</p>
        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:text-foreground/80 transition-colors">
            Home
          </Link>
          <Link href="/jobs" className="hover:text-foreground/80 transition-colors">
            Jobs
          </Link>
        </nav>
      </div>
    </footer>
  )
}
