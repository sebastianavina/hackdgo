import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: 'HACK DGO | Hackathon Durango 2026',
  description: 'El hackathon mas grande de Durango. Innova, colabora y construye soluciones tecnologicas que transformen tu comunidad.',
  generator: 'Next.js',
  keywords: ['hackathon', 'durango', 'tecnologia', 'innovacion', 'hack dgo', 'programacion'],
  //icons: {
   // icon: '/images/logo.png',
   // apple: '/images/logo.png',
 // },
  openGraph: {
    title: 'HACK DGO | Hackathon Durango 2026',
    description: 'El hackathon mas grande de Durango. Innova, colabora y construye soluciones tecnologicas.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A7764',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
