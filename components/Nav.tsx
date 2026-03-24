"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full max-w-3xl mx-auto px-6 py-6 flex items-center justify-between relative">
      <Link href="/" className="text-lg md:text-xl text-foreground font-bold">
        Young & AI
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6 text-lg md:text-xl text-foreground/60">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger button */}
      <button
        className="md:hidden p-2 text-foreground/60 hover:text-foreground transition-colors"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-primary/10 shadow-lg md:hidden z-50">
          <div className="flex flex-col px-6 py-4 gap-4 text-lg text-foreground/60">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
