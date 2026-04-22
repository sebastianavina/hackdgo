import { Navbar } from "@/components/navbar"
import { ConductContent } from "@/components/conduct-content"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Code of Conduct | HACK DGO",
  description: "Official code of conduct for HACK DGO.",
}

export default function ConductaPage() {
  return (
    <main>
      <Navbar />
      <ConductContent />
      <Footer />
    </main>
  )
}
