import { Navbar } from "@/components/navbar"
import { SponsorsContent } from "@/components/sponsors-content"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Sponsors | HACK DGO",
  description: "Meet the sponsors that make HACK DGO possible.",
}

export default function PatrocinadoresPage() {
  return (
    <main>
      <Navbar />
      <SponsorsContent />
      <Footer />
    </main>
  )
}
