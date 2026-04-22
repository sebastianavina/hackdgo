import { Navbar } from "@/components/navbar"
import { FaqContent } from "@/components/faq-content"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "FAQ | HACK DGO",
  description: "Frequently asked questions about HACK DGO.",
}

export default function FaqPage() {
  return (
    <main>
      <Navbar />
      <FaqContent />
      <Footer />
    </main>
  )
}
