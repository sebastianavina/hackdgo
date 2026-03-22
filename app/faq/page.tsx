import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"

export const metadata = {
  title: "Preguntas Frecuentes | HACK DGO",
  description: "Respuestas a las preguntas mas comunes sobre HACK DGO.",
}

const faqs = [
  {
    question: "¿Quien puede participar?",
    answer:
      "Cualquier persona apasionada por la tecnologia: estudiantes, profesionales, disenadores, emprendedores y mas. No se requiere experiencia previa en hackathones.",
  },
  {
    question: "¿Cuanto cuesta participar?",
    answer:
      "La participacion en HACK DGO es completamente gratuita. Solo necesitas registrarte y presentarte el dia del evento.",
  },
  {
    question: "¿De cuantas personas puede ser un equipo?",
    answer:
      "Los equipos deben ser de 2 a 5 personas. Si no tienes equipo, no te preocupes — el dia del evento habra una sesion de formacion de equipos.",
  },
  {
    question: "¿Necesito llevar mi propia computadora?",
    answer:
      "Si, cada participante debe traer su propio equipo de trabajo. Habrá energia electrica y WiFi disponibles en el venue.",
  },
  {
    question: "¿Que debo llevar al evento?",
    answer:
      "Tu laptop, cargadores, identificacion oficial y muchas ganas de crear. El evento incluye comidas durante los 3 dias.",
  },
  {
    question: "¿Puedo participar de forma remota?",
    answer:
      "No, HACK DGO es un evento presencial. La colaboracion cara a cara es parte esencial de la experiencia.",
  },
  {
    question: "¿Los proyectos deben ser nuevos?",
    answer:
      "Si, todos los proyectos deben comenzarse desde cero durante el hackathon. No se permiten proyectos desarrollados previamente.",
  },
  {
    question: "¿Como se evaluan los proyectos?",
    answer:
      "Los proyectos son evaluados por un jurado de expertos con base en innovacion, impacto, viabilidad tecnica y presentacion.",
  },
]

export default function FaqPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
              FAQ
            </span>
            <h1 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Preguntas <span className="text-primary">Frecuentes</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Encuentra respuestas a las dudas mas comunes sobre HACK DGO.
            </p>
          </div>

          <div className="mt-16 space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-mono text-base font-bold text-foreground">
                    {faq.question}
                  </h3>
                  <ChevronDown className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <p className="text-muted-foreground">
              ¿Tienes otra pregunta?{" "}
              <a
                href="mailto:hackdgo@utd.edu.mx"
                className="font-medium text-primary hover:underline"
              >
                Escribenos a hackdgo@utd.edu.mx
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
