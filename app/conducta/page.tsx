import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Heart, Shield, AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Codigo de Conducta | HACK DGO",
  description: "Codigo de conducta oficial de HACK DGO.",
}

export default function ConductaPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
              Comunidad
            </span>
            <h1 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Codigo de <span className="text-primary">Conducta</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              HACK DGO se compromete a ofrecer un espacio seguro, inclusivo y
              respetuoso para todas las personas participantes.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Respeto",
                description:
                  "Trata a todos los participantes con respeto y amabilidad, independientemente de su origen, genero, edad o nivel de experiencia.",
              },
              {
                icon: Shield,
                title: "Seguridad",
                description:
                  "Nos comprometemos a mantener un ambiente libre de acoso, discriminacion o cualquier forma de violencia fisica o verbal.",
              },
              {
                icon: AlertTriangle,
                title: "Responsabilidad",
                description:
                  "Cada participante es responsable de su comportamiento. Las violaciones a este codigo seran atendidas por el equipo organizador.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-mono text-lg font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 space-y-8">
            <div>
              <h2 className="font-mono text-xl font-bold text-foreground">
                Comportamiento esperado
              </h2>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {[
                  "Usar lenguaje inclusivo y respetuoso en todo momento.",
                  "Ser receptivo a criticas constructivas y diferentes puntos de vista.",
                  "Enfocarse en lo que es mejor para la comunidad y el evento.",
                  "Mostrar empatia hacia otros participantes.",
                  "Respetar las areas de trabajo y los materiales compartidos.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-xl font-bold text-foreground">
                Comportamiento inaceptable
              </h2>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                {[
                  "Acoso, intimidacion o discriminacion de cualquier tipo.",
                  "Comentarios ofensivos relacionados con genero, orientacion sexual, religion, etnia o discapacidad.",
                  "Publicar o mostrar material sexualmente explicito.",
                  "Interrumpir deliberadamente presentaciones o actividades del evento.",
                  "Cualquier conducta que genere un ambiente hostil o inseguro.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-xl font-bold text-foreground">
                Como reportar una incidencia
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Si eres victima o testigo de una violacion a este codigo, reportalo
                de inmediato a cualquier miembro del equipo organizador o escribe a{" "}
                <a
                  href="mailto:hackdgo@utd.edu.mx"
                  className="font-medium text-primary hover:underline"
                >
                  hackdgo@utd.edu.mx
                </a>
                . Todas las quejas seran revisadas con confidencialidad y seriedad.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
