import { Navbar } from "@/components/navbar"
import { Tracks } from "@/components/tracks"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Tracks | HACK DGO",
  description: "Explore the challenge categories and tracks for HACK DGO 2026.",
}

export default function TracksPage() {
  return (
    <main>
      <Navbar />
      <Tracks showBackButton />
      <Footer />
    </main>
  )
}
