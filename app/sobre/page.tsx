import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About | HACK DGO",
  description: "Learn more about HACK DGO, Durango's biggest hackathon.",
}

export default function SobrePage() {
  return (
    <main>
      <Navbar />
      <About showBackButton />
      <Footer />
    </main>
  )
}
