"use client"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { BackButton } from "@/components/back-button"

export function SponsorsContent() {
  const { lang } = useLanguage()

  const data =
    lang === "en"
      ? {
          section: "Partners",
          title: (
            <>
              Our <span className="text-primary">Sponsors</span>
            </>
          ),
          subtitle:
            "HACK DGO is made possible thanks to the support of companies and institutions committed to Durango's tech ecosystem.",
          tiers: [
            { name: "Platinum", color: "border-primary bg-primary/5", labelColor: "text-primary" },
            {
              name: "Gold",
              color: "border-secondary bg-secondary/5",
              labelColor: "text-secondary",
            },
            { name: "Silver", color: "border-accent bg-accent/5", labelColor: "text-accent" },
          ],
          comingSoon: "Coming soon — be the first to sponsor this tier.",
          ctaTitle: "Want to become a sponsor?",
          ctaBody:
            "Connect your brand with Durango's top tech talent. Reach out and we'll send you our sponsorship kit.",
          ctaBtn: "Contact the Team",
        }
      : {
          section: "Aliados",
          title: (
            <>
              Nuestros <span className="text-primary">Patrocinadores</span>
            </>
          ),
          subtitle:
            "HACK DGO es posible gracias al apoyo de empresas e instituciones comprometidas con el ecosistema tecnológico de Durango.",
          tiers: [
            { name: "Platino", color: "border-primary bg-primary/5", labelColor: "text-primary" },
            { name: "Oro", color: "border-secondary bg-secondary/5", labelColor: "text-secondary" },
            { name: "Plata", color: "border-accent bg-accent/5", labelColor: "text-accent" },
          ],
          comingSoon: "Próximamente — sé el primero en patrocinar este nivel.",
          ctaTitle: "¿Quieres ser patrocinador?",
          ctaBody:
            "Conecta tu marca con los mejores talentos tecnológicos de Durango. Escríbenos y te enviamos nuestro kit de patrocinio.",
          ctaBtn: "Contactar al Equipo",
        }

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <BackButton />
        <div className="text-center mt-4">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            {data.section}
          </span>
          <h1 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {data.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {data.tiers.map((tier) => (
            <div key={tier.name}>
              <h2 className={`font-mono text-xl font-bold ${tier.labelColor}`}>{tier.name}</h2>
              <div
                className={`mt-6 flex min-h-40 items-center justify-center rounded-2xl border-2 border-dashed ${tier.color} p-10`}
              >
                <p className="text-sm text-muted-foreground">{data.comingSoon}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-border bg-card p-10 text-center">
          <h2 className="font-mono text-2xl font-bold text-foreground">{data.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{data.ctaBody}</p>
          <Button asChild size="lg" className="mt-8">
            <a href="mailto:hackdgo@utd.edu.mx">
              <Mail className="mr-2 h-4 w-4" />
              {data.ctaBtn}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
