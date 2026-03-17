import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-foreground/8 py-6 text-sm text-foreground/40">
      <div className="mx-auto w-full max-w-2xl px-6 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Young & AI</p>
        <nav className="flex items-center gap-6">
          <Link
            href="/about"
            className="hover:text-foreground/60 transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </footer>
  )
}

