import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Patrocinadores | HACK DGO",
  description: "Conoce a los patrocinadores que hacen posible HACK DGO.",
}

const tiers = [
  {
    name: "Platino",
    color: "border-primary bg-primary/5",
    labelColor: "text-primary",
    sponsors: [],
  },
  {
    name: "Oro",
    color: "border-secondary bg-secondary/5",
    labelColor: "text-secondary",
    sponsors: [],
  },
  {
    name: "Plata",
    color: "border-accent bg-accent/5",
    labelColor: "text-accent",
    sponsors: [],
  },
]

export default function PatrocinadoresPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
              Aliados
            </span>
            <h1 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Nuestros <span className="text-primary">Patrocinadores</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              HACK DGO es posible gracias al apoyo de empresas e instituciones
              comprometidas con el ecosistema tecnologico de Durango.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {tiers.map((tier) => (
              <div key={tier.name}>
                <h2 className={`font-mono text-xl font-bold ${tier.labelColor}`}>
                  {tier.name}
                </h2>
                <div
                  className={`mt-6 flex min-h-40 items-center justify-center rounded-2xl border-2 border-dashed ${tier.color} p-10`}
                >
                  {tier.sponsors.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      Proximamente — se el primero en patrocinar este nivel.
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 rounded-2xl border border-border bg-card p-10 text-center">
            <h2 className="font-mono text-2xl font-bold text-foreground">
              ¿Quieres ser patrocinador?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Conecta tu marca con los mejores talentos tecnologicos de Durango.
              Escríbenos y te enviamos nuestro kit de patrocinio.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href="mailto:hackdgo@utd.edu.mx">
                <Mail className="mr-2 h-4 w-4" />
                Contactar al equipo
              </a>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
