import type { Metadata } from "next"
import { Montserrat, Merriweather } from "next/font/google"
import "./globals.css"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: {
    default: "Young & AI",
    template: "%s | Young & AI",
  },
  description: "Building AI and software for enterprise",
  icons: {
    icon: [
      { url: "/icon.svg", rel: "icon", type: "image/svg+xml" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${merriweather.variable} ${montserrat.className} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

