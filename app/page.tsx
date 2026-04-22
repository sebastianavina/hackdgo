import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
// import { About } from "@/components/about"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      { <Hero/> }
      {/* <About /> */}
      {/* <CTA /> */}
      <Footer />
    </main>
  )
}
