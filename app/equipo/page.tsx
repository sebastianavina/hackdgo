import { Navbar } from "@/components/navbar"
import { Team } from "@/components/team"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Equipo | HACK DGO",
  description: "Conoce al equipo organizador de HACK DGO.",
}

export default function EquipoPage() {
  return (
    <main>
      <Navbar />
      <Team />
      <Footer />
    </main>
  )
}
