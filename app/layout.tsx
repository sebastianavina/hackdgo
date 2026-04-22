import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Providers } from "./providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: "HACK DGO | Hackathon Durango 2026",
  description:
    "Durango's biggest hackathon. Innovate, collaborate, and build technology solutions that transform your community.",
  generator: "Next.js",
  keywords: ["hackathon", "durango", "technology", "innovation", "hack dgo", "programming"],
  openGraph: {
    title: "HACK DGO | Hackathon Durango 2026",
    description:
      "Durango's biggest hackathon. Innovate, collaborate, and build technology solutions.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0A7764",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
