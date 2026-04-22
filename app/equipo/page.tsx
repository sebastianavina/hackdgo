import { Navbar } from "@/components/navbar"
import { Team } from "@/components/team"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Team | HACK DGO",
  description: "Meet the organizing team behind HACK DGO.",
}

export default function EquipoPage() {
  return (
    <main>
      <Navbar />
      <Team showBackButton />
      <Footer />
    </main>
  )
}
