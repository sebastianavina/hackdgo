import { Github, Linkedin, Twitter } from "lucide-react"

export function Team() {
  return (
    <section id="equipo" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Equipo Organizador
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Conoce al <span className="text-primary">equipo</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Un equipo apasionado por la tecnologia y la innovacion en Durango.
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        </div>
      </div>
    </section>
  )
}
