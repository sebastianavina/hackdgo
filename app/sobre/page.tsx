import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Sobre Nosotros | HACK DGO",
  description: "Conoce mas sobre HACK DGO, el hackathon mas grande de Durango.",
}

export default function SobrePage() {
  return (
    <main>
      <Navbar />
      <About />
      <Footer />
    </main>
  )
}
