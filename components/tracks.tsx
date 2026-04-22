"use client"
import { Brain, Leaf, Heart, GraduationCap, Building2, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { BackButton } from "@/components/back-button"

const trackIcons = [
  { icon: Brain, colorClass: "bg-primary", textClass: "text-primary", key: "ai" },
  { icon: Leaf, colorClass: "bg-secondary", textClass: "text-secondary", key: "sustainability" },
  { icon: Heart, colorClass: "bg-accent", textClass: "text-accent", key: "health" },
  { icon: GraduationCap, colorClass: "bg-primary", textClass: "text-primary", key: "education" },
  { icon: Building2, colorClass: "bg-secondary", textClass: "text-secondary", key: "smartcity" },
  { icon: Shield, colorClass: "bg-accent", textClass: "text-accent", key: "cyber" },
]

type TrackKey = "ai" | "sustainability" | "health" | "education" | "smartcity" | "cyber"
type TrackData = { name: string; desc: string }

export function Tracks({ showBackButton = false }: { showBackButton?: boolean }) {
  const { lang } = useLanguage()

  const text = {
    en: {
      section: "Challenges",
      title: (
        <>
          Choose your <span className="text-primary">track</span>
        </>
      ),
      subtitle:
        "Select one of our challenge categories and build a project with real community impact. Track details will be announced soon.",
      coming: "Coming Soon",
      tracks: {
        ai: {
          name: "AI & Machine Learning",
          desc: "Build intelligent systems that solve complex problems using artificial intelligence and machine learning.",
        },
        sustainability: {
          name: "Sustainability",
          desc: "Create tech solutions that address environmental challenges and promote sustainable development.",
        },
        health: {
          name: "HealthTech",
          desc: "Develop applications and tools that improve access to healthcare and community wellness.",
        },
        education: {
          name: "EdTech",
          desc: "Design technology that makes education more accessible, engaging, and effective for everyone.",
        },
        smartcity: {
          name: "Smart City",
          desc: "Build solutions that improve urban infrastructure, mobility, and quality of life in our cities.",
        },
        cyber: {
          name: "Cybersecurity",
          desc: "Create tools and systems that protect individuals and organizations from digital threats.",
        },
      } as Record<TrackKey, TrackData>,
    },
    es: {
      section: "Retos",
      title: (
        <>
          Elige tu <span className="text-primary">track</span>
        </>
      ),
      subtitle:
        "Selecciona una de nuestras categorías y desarrolla un proyecto que genere impacto real en la comunidad. Los detalles de los tracks se anunciarán pronto.",
      coming: "Próximamente",
      tracks: {
        ai: {
          name: "IA y Machine Learning",
          desc: "Construye sistemas inteligentes que resuelvan problemas complejos usando inteligencia artificial.",
        },
        sustainability: {
          name: "Sustentabilidad",
          desc: "Crea soluciones tecnológicas que aborden desafíos ambientales y promuevan el desarrollo sostenible.",
        },
        health: {
          name: "HealthTech",
          desc: "Desarrolla aplicaciones y herramientas que mejoren el acceso a la salud y el bienestar comunitario.",
        },
        education: {
          name: "EdTech",
          desc: "Diseña tecnología que haga la educación más accesible, atractiva y efectiva para todos.",
        },
        smartcity: {
          name: "Ciudad Inteligente",
          desc: "Construye soluciones que mejoren la infraestructura urbana, movilidad y calidad de vida.",
        },
        cyber: {
          name: "Ciberseguridad",
          desc: "Crea herramientas y sistemas que protejan a personas y organizaciones de amenazas digitales.",
        },
      } as Record<TrackKey, TrackData>,
    },
  }

  const t = text[lang]

  return (
    <section id="tracks" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {showBackButton && <BackButton />}
        <div className="mx-auto max-w-3xl text-center mt-4">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            {t.section}
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {t.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.subtitle}
          </p>
        </div>

        {/* Track Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trackIcons.map((track) => {
            const data = t.tracks[track.key as TrackKey]
            return (
              <div
                key={track.key}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`absolute top-0 left-0 h-1 w-full ${track.colorClass} transition-all duration-300 group-hover:h-1.5`}
                />
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${track.colorClass}/10`}
                >
                  <track.icon className={`h-6 w-6 ${track.textClass}`} />
                </div>
                <div className="mt-5 flex items-start gap-2 flex-wrap">
                  <h3 className="font-mono text-xl font-bold text-foreground">{data.name}</h3>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground border border-border">
                    {t.coming}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{data.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
