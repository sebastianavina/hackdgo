import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Tracks } from "@/components/tracks"
import { Schedule } from "@/components/schedule"
import { Team } from "@/components/team"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero /> 
      <CTA />
      <Footer />
    </main>
  )
}
