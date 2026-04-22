import { Navbar } from "@/components/navbar"
import { Schedule } from "@/components/schedule"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Schedule | HACK DGO",
  description: "Full program and schedule for HACK DGO 2026.",
}

export default function AgendaPage() {
  return (
    <main>
      <Navbar />
      <Schedule showBackButton />
      <Footer />
    </main>
  )
}
