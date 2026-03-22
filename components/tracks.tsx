import { Brain, Leaf, Heart, GraduationCap, Building2, Shield } from "lucide-react"

const tracks = [
  {
    icon: Brain,
    title: "---",
    description:
      "--- por anunciar ---",
    color: "bg-primary",
  },
  {
    icon: Leaf,
    title: "---",
    description:
      "--- por anunciar ---",
    color: "bg-secondary",
  },
  {
    icon: Heart,
    title: "---",
    description:
      "--- por anunciar ---",
    color: "bg-accent",
  },
  {
    icon: GraduationCap,
    title: "---",
    description:
      "--- por anunciar ---",
    color: "bg-primary",
  },
  {
    icon: Building2,
    title: "---",
    description:
      "--- por anunciar ---",
    color: "bg-secondary",
  },
  {
    icon: Shield,
    title: "---",
    description:
      "--- por anunciar ---",
    color: "bg-accent",
  },
]

export function Tracks() {
  return (
    <section id="tracks" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Tracks
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Elige tu <span className="text-primary">reto</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Selecciona una de nuestras categorias y desarrolla un proyecto que
            genere impacto real en la comunidad.
          </p>
        </div>

        {/* Track Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <div
              key={track.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Accent line on top */}
              <div className={`absolute top-0 left-0 h-1 w-full ${track.color} transition-all duration-300 group-hover:h-1.5`} />

              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${track.color}/10`}>
                <track.icon className={`h-6 w-6 ${track.color === "bg-primary" ? "text-primary" : track.color === "bg-secondary" ? "text-secondary" : "text-accent"}`} />
              </div>
              <h3 className="mt-5 font-mono text-xl font-bold text-foreground">
                {track.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {track.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
