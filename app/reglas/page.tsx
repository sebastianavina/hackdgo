import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle, XCircle } from "lucide-react"

export const metadata = {
  title: "Reglas del Hackathon | HACK DGO",
  description: "Reglas y lineamientos oficiales de HACK DGO.",
}

const rules = [
  {
    title: "Formacion de equipos",
    items: [
      "Los equipos deben estar conformados por 2 a 5 personas.",
      "Los participantes pueden unirse a equipos durante la sesion de formacion del primer dia.",
      "Cada participante solo puede pertenecer a un equipo.",
    ],
  },
  {
    title: "Desarrollo del proyecto",
    items: [
      "Todos los proyectos deben iniciarse desde cero al comenzar el hackathon.",
      "El uso de librerias, frameworks y APIs de terceros esta permitido.",
      "El proyecto debe enmarcarse dentro de uno de los tracks oficiales.",
      "El codigo fuente debe estar disponible en un repositorio publico al momento de la entrega.",
    ],
  },
  {
    title: "Entrega y presentacion",
    items: [
      "Los equipos tienen hasta el deadline oficial para subir su proyecto.",
      "Cada equipo tendra 5 minutos para presentar su demo ante el jurado.",
      "La presentacion debe incluir el problema, la solucion y una demo funcional.",
    ],
  },
  {
    title: "Propiedad intelectual",
    items: [
      "Cada equipo conserva los derechos sobre su proyecto.",
      "Al participar, los equipos autorizan a HACK DGO a usar imagenes y descripciones del proyecto con fines promocionales.",
    ],
  },
]

const prohibited = [
  "Proyectos desarrollados antes del inicio del hackathon.",
  "Plagio o uso de codigo de otros equipos sin credito.",
  "Comportamiento irrespetuoso hacia otros participantes, mentores u organizadores.",
  "Cualquier actividad que viole el Codigo de Conducta del evento.",
]

export default function ReglasPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
              Lineamientos
            </span>
            <h1 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Reglas del <span className="text-primary">Hackathon</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Lee con atencion las reglas oficiales antes de participar.
            </p>
          </div>

          <div className="mt-16 space-y-10">
            {rules.map((section) => (
              <div key={section.title}>
                <h2 className="font-mono text-xl font-bold text-foreground">
                  {section.title}
                </h2>
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
            <h2 className="font-mono text-xl font-bold text-foreground">
              Conductas prohibidas
            </h2>
            <ul className="mt-4 space-y-3">
              {prohibited.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-muted p-8 text-center text-sm text-muted-foreground">
            El incumplimiento de estas reglas puede resultar en la descalificacion del equipo. Para dudas, contacta a{" "}
            <a href="mailto:hackdgo@utd.edu.mx" className="font-medium text-primary hover:underline">
              hackdgo@utd.edu.mx
            </a>
            .
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
