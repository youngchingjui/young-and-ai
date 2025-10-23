import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6 text-sm text-gray-600">
      <div className="mx-auto w-full max-w-5xl px-4 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Young & AI</p>
        <nav className="flex items-center gap-6">
          <Link href="/jobs" className="hover:underline">
            Jobs
          </Link>
        </nav>
      </div>
    </footer>
  )
}

