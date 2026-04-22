import { Navbar } from "@/components/navbar"
import { RulesContent } from "@/components/rules-content"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Rules | HACK DGO",
  description: "Official rules and guidelines for HACK DGO.",
}

export default function ReglasPage() {
  return (
    <main>
      <Navbar />
      <RulesContent />
      <Footer />
    </main>
  )
}
