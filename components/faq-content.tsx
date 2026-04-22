"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BackButton } from "@/components/back-button"
import { useLanguage } from "@/contexts/language-context"

export function FaqContent() {
  const { lang } = useLanguage()

  const faqs =
    lang === "en"
      ? [
          {
            q: "Who can participate?",
            a: "Anyone passionate about technology: students, professionals, designers, entrepreneurs, and more. No previous hackathon experience is required.",
          },
          {
            q: "How much does it cost to participate?",
            a: "Participation in HACK DGO is completely free. You just need to register and show up on the event day.",
          },
          {
            q: "How many people can be on a team?",
            a: "Teams must have 2 to 5 people. If you don't have a team, don't worry — there will be a team formation session on the first day of the event.",
          },
          {
            q: "Do I need to bring my own computer?",
            a: "Yes, each participant must bring their own device. Power outlets and Wi-Fi will be available at the venue.",
          },
          {
            q: "What should I bring to the event?",
            a: "Your laptop, chargers, a valid ID, and lots of creativity. The event includes meals throughout the 24-hour hackathon.",
          },
          {
            q: "Can I participate remotely?",
            a: "No, HACK DGO is an in-person event. Face-to-face collaboration is an essential part of the experience.",
          },
          {
            q: "Must projects be brand new?",
            a: "Yes, all projects must be started from scratch during the hackathon. Previously developed projects are not permitted.",
          },
          {
            q: "How are projects evaluated?",
            a: "Projects are evaluated by a panel of expert judges based on innovation, impact, technical feasibility, and presentation quality.",
          },
        ]
      : [
          {
            q: "¿Quién puede participar?",
            a: "Cualquier persona apasionada por la tecnología: estudiantes, profesionales, diseñadores, emprendedores y más. No se requiere experiencia previa en hackathones.",
          },
          {
            q: "¿Cuánto cuesta participar?",
            a: "La participación en HACK DGO es completamente gratuita. Solo necesitas registrarte y presentarte el día del evento.",
          },
          {
            q: "¿De cuántas personas puede ser un equipo?",
            a: "Los equipos deben ser de 2 a 5 personas. Si no tienes equipo, no te preocupes — el día del evento habrá una sesión de formación de equipos.",
          },
          {
            q: "¿Necesito llevar mi propia computadora?",
            a: "Sí, cada participante debe traer su propio equipo de trabajo. Habrá energía eléctrica y Wi-Fi disponibles en el venue.",
          },
          {
            q: "¿Qué debo llevar al evento?",
            a: "Tu laptop, cargadores, identificación oficial y muchas ganas de crear. El evento incluye comidas durante las 24 horas del hackathon.",
          },
          {
            q: "¿Puedo participar de forma remota?",
            a: "No, HACK DGO es un evento presencial. La colaboración cara a cara es parte esencial de la experiencia.",
          },
          {
            q: "¿Los proyectos deben ser nuevos?",
            a: "Sí, todos los proyectos deben comenzarse desde cero durante el hackathon. No se permiten proyectos desarrollados previamente.",
          },
          {
            q: "¿Cómo se evalúan los proyectos?",
            a: "Los proyectos son evaluados por un jurado de expertos con base en innovación, impacto, viabilidad técnica y presentación.",
          },
        ]

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <BackButton />
        <div className="text-center mt-4">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h1 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {lang === "en" ? (
              <>
                Frequently Asked <span className="text-primary">Questions</span>
              </>
            ) : (
              <>
                Preguntas <span className="text-primary">Frecuentes</span>
              </>
            )}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {lang === "en"
              ? "Find answers to the most common questions about HACK DGO."
              : "Encuentra respuestas a las dudas más comunes sobre HACK DGO."}
          </p>
        </div>

        <div className="mt-16">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-6 data-[state=open]:border-primary/30 last:border-b"
              >
                <AccordionTrigger className="font-mono text-base font-bold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <p className="text-muted-foreground">
            {lang === "en" ? "Have another question? " : "¿Tienes otra pregunta? "}
            <a
              href="mailto:hackdgo@utd.edu.mx"
              className="font-medium text-primary hover:underline"
            >
              {lang === "en"
                ? "Email us at hackdgo@utd.edu.mx"
                : "Escríbenos a hackdgo@utd.edu.mx"}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
