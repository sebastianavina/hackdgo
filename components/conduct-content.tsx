"use client"
import { Heart, Shield, AlertTriangle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { BackButton } from "@/components/back-button"

export function ConductContent() {
  const { lang } = useLanguage()

  const data =
    lang === "en"
      ? {
          section: "Community",
          title: (
            <>
              Code of <span className="text-primary">Conduct</span>
            </>
          ),
          subtitle:
            "HACK DGO is committed to providing a safe, inclusive, and respectful space for all participants.",
          pillars: [
            {
              icon: Heart,
              title: "Respect",
              desc: "Treat all participants with respect and kindness, regardless of their background, gender, age, or experience level.",
            },
            {
              icon: Shield,
              title: "Safety",
              desc: "We are committed to maintaining an environment free from harassment, discrimination, or any form of physical or verbal violence.",
            },
            {
              icon: AlertTriangle,
              title: "Accountability",
              desc: "Every participant is responsible for their behavior. Violations of this code will be addressed by the organizing team.",
            },
          ],
          expectedTitle: "Expected Behavior",
          expectedItems: [
            "Use inclusive and respectful language at all times.",
            "Be open to constructive criticism and different points of view.",
            "Focus on what is best for the community and the event.",
            "Show empathy toward other participants.",
            "Respect work areas and shared materials.",
          ],
          unacceptableTitle: "Unacceptable Behavior",
          unacceptableItems: [
            "Harassment, intimidation, or discrimination of any kind.",
            "Offensive comments related to gender, sexual orientation, religion, ethnicity, or disability.",
            "Publishing or displaying sexually explicit material.",
            "Deliberately disrupting presentations or event activities.",
            "Any conduct that creates a hostile or unsafe environment.",
          ],
          reportTitle: "How to Report an Incident",
          reportText:
            "If you are a victim or witness of a violation of this code, report it immediately to any member of the organizing team or write to",
          reportEnd: "All complaints will be reviewed with confidentiality and seriousness.",
        }
      : {
          section: "Comunidad",
          title: (
            <>
              Código de <span className="text-primary">Conducta</span>
            </>
          ),
          subtitle:
            "HACK DGO se compromete a ofrecer un espacio seguro, inclusivo y respetuoso para todas las personas participantes.",
          pillars: [
            {
              icon: Heart,
              title: "Respeto",
              desc: "Trata a todos los participantes con respeto y amabilidad, independientemente de su origen, género, edad o nivel de experiencia.",
            },
            {
              icon: Shield,
              title: "Seguridad",
              desc: "Nos comprometemos a mantener un ambiente libre de acoso, discriminación o cualquier forma de violencia física o verbal.",
            },
            {
              icon: AlertTriangle,
              title: "Responsabilidad",
              desc: "Cada participante es responsable de su comportamiento. Las violaciones a este código serán atendidas por el equipo organizador.",
            },
          ],
          expectedTitle: "Comportamiento Esperado",
          expectedItems: [
            "Usar lenguaje inclusivo y respetuoso en todo momento.",
            "Ser receptivo a críticas constructivas y diferentes puntos de vista.",
            "Enfocarse en lo que es mejor para la comunidad y el evento.",
            "Mostrar empatía hacia otros participantes.",
            "Respetar las áreas de trabajo y los materiales compartidos.",
          ],
          unacceptableTitle: "Comportamiento Inaceptable",
          unacceptableItems: [
            "Acoso, intimidación o discriminación de cualquier tipo.",
            "Comentarios ofensivos relacionados con género, orientación sexual, religión, etnia o discapacidad.",
            "Publicar o mostrar material sexualmente explícito.",
            "Interrumpir deliberadamente presentaciones o actividades del evento.",
            "Cualquier conducta que genere un ambiente hostil o inseguro.",
          ],
          reportTitle: "Cómo Reportar una Incidencia",
          reportText:
            "Si eres víctima o testigo de una violación a este código, repórtalo de inmediato a cualquier miembro del equipo organizador o escribe a",
          reportEnd: "Todas las quejas serán revisadas con confidencialidad y seriedad.",
        }

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6">
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

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {data.pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 font-mono text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-8">
          <div>
            <h2 className="font-mono text-xl font-bold text-foreground">{data.expectedTitle}</h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {data.expectedItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xl font-bold text-foreground">
              {data.unacceptableTitle}
            </h2>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {data.unacceptableItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-xl font-bold text-foreground">{data.reportTitle}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {data.reportText}{" "}
              <a
                href="mailto:hackdgo@utd.edu.mx"
                className="font-medium text-primary hover:underline"
              >
                hackdgo@utd.edu.mx
              </a>
              . {data.reportEnd}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
