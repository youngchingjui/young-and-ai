import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-primary/15 py-6 text-sm text-foreground/40">
      <div className="mx-auto w-full max-w-3xl px-6 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Young & AI</p>
        <nav className="flex items-center gap-5">
          <Link
            href="/services"
            className="hover:text-foreground/60 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/products"
            className="hover:text-foreground/60 transition-colors"
          >
            Products
          </Link>
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
