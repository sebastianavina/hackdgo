"use client"
import { CheckCircle, XCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { BackButton } from "@/components/back-button"

export function RulesContent() {
  const { lang } = useLanguage()

  const data =
    lang === "en"
      ? {
          section: "Guidelines",
          title: (
            <>
              Hackathon <span className="text-primary">Rules</span>
            </>
          ),
          subtitle: "Please read the official rules carefully before participating.",
          rules: [
            {
              title: "Team Formation",
              items: [
                "Teams must consist of 2 to 5 people.",
                "Participants can join teams during the team formation session on the first day.",
                "Each participant may only belong to one team.",
              ],
            },
            {
              title: "Project Development",
              items: [
                "All projects must be started from scratch at the beginning of the hackathon.",
                "The use of libraries, frameworks, and third-party APIs is allowed.",
                "The project must fall within one of the official tracks.",
                "Source code must be available in a public repository at the time of submission.",
              ],
            },
            {
              title: "Submission & Presentation",
              items: [
                "Teams must upload their project by the official deadline.",
                "Each team will have 5 minutes to present their demo to the judges.",
                "The presentation must include the problem, the solution, and a working demo.",
              ],
            },
            {
              title: "Intellectual Property",
              items: [
                "Each team retains ownership rights over their project.",
                "By participating, teams authorize HACK DGO to use images and project descriptions for promotional purposes.",
              ],
            },
          ],
          prohibitedTitle: "Prohibited Conduct",
          prohibited: [
            "Projects developed before the start of the hackathon.",
            "Plagiarism or use of other teams' code without credit.",
            "Disrespectful behavior toward other participants, mentors, or organizers.",
            "Any activity that violates the event's Code of Conduct.",
          ],
          footer:
            "Violations of these rules may result in team disqualification. For questions, contact",
        }
      : {
          section: "Lineamientos",
          title: (
            <>
              Reglas del <span className="text-primary">Hackathon</span>
            </>
          ),
          subtitle: "Lee con atención las reglas oficiales antes de participar.",
          rules: [
            {
              title: "Formación de Equipos",
              items: [
                "Los equipos deben estar conformados por 2 a 5 personas.",
                "Los participantes pueden unirse a equipos durante la sesión de formación del primer día.",
                "Cada participante solo puede pertenecer a un equipo.",
              ],
            },
            {
              title: "Desarrollo del Proyecto",
              items: [
                "Todos los proyectos deben iniciarse desde cero al comenzar el hackathon.",
                "El uso de librerías, frameworks y APIs de terceros está permitido.",
                "El proyecto debe enmarcarse dentro de uno de los tracks oficiales.",
                "El código fuente debe estar disponible en un repositorio público al momento de la entrega.",
              ],
            },
            {
              title: "Entrega y Presentación",
              items: [
                "Los equipos tienen hasta el deadline oficial para subir su proyecto.",
                "Cada equipo tendrá 5 minutos para presentar su demo ante el jurado.",
                "La presentación debe incluir el problema, la solución y una demo funcional.",
              ],
            },
            {
              title: "Propiedad Intelectual",
              items: [
                "Cada equipo conserva los derechos sobre su proyecto.",
                "Al participar, los equipos autorizan a HACK DGO a usar imágenes y descripciones del proyecto con fines promocionales.",
              ],
            },
          ],
          prohibitedTitle: "Conductas Prohibidas",
          prohibited: [
            "Proyectos desarrollados antes del inicio del hackathon.",
            "Plagio o uso de código de otros equipos sin crédito.",
            "Comportamiento irrespetuoso hacia otros participantes, mentores u organizadores.",
            "Cualquier actividad que viole el Código de Conducta del evento.",
          ],
          footer:
            "El incumplimiento de estas reglas puede resultar en la descalificación del equipo. Para dudas, contacta a",
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
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{data.subtitle}</p>
        </div>

        <div className="mt-16 space-y-10">
          {data.rules.map((section) => (
            <div key={section.title}>
              <h2 className="font-mono text-xl font-bold text-foreground">{section.title}</h2>
              <ul className="mt-4 space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="font-mono text-xl font-bold text-foreground">{data.prohibitedTitle}</h2>
          <ul className="mt-4 space-y-3">
            {data.prohibited.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-muted p-8 text-center text-sm text-muted-foreground">
          {data.footer}{" "}
          <a
            href="mailto:hackdgo@utd.edu.mx"
            className="font-medium text-primary hover:underline"
          >
            hackdgo@utd.edu.mx
          </a>
          .
        </div>
      </div>
    </section>
  )
}
