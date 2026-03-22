import { Navbar } from "@/components/navbar"
import { Tracks } from "@/components/tracks"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Tracks | HACK DGO",
  description: "Explora las categorias y retos del hackathon HACK DGO.",
}

export default function TracksPage() {
  return (
    <main>
      <Navbar />
      <Tracks />
      <Footer />
    </main>
  )
}
