import { Navbar } from "@/components/navbar"
import { Schedule } from "@/components/schedule"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Agenda | HACK DGO",
  description: "Consulta el programa completo del hackathon HACK DGO.",
}

export default function AgendaPage() {
  return (
    <main>
      <Navbar />
      <Schedule />
      <Footer />
    </main>
  )
}
