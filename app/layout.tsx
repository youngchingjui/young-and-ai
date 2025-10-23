import type { Metadata } from "next"
import localFont from "next/font/local"
import { Rokkitt } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

const rokkitt = Rokkitt({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Young & AI",
  description: "Building AI and software for enterprise",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rokkitt.className} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

