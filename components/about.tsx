"use client"
import { Users, Lightbulb, Trophy, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { BackButton } from "@/components/back-button"

export function About({ showBackButton = false }: { showBackButton?: boolean }) {
  const { lang } = useLanguage()

  const stats =
    lang === "en"
      ? [
          { icon: Users, value: "200+", label: "Participants" },
          { icon: Clock, value: "24", label: "Hacking Hours" },
          { icon: Lightbulb, value: "50+", label: "Projects" },
          { icon: Trophy, value: "$$$", label: "In Prizes" },
        ]
      : [
          { icon: Users, value: "200+", label: "Participantes" },
          { icon: Clock, value: "24", label: "Horas de Hack" },
          { icon: Lightbulb, value: "50+", label: "Proyectos" },
          { icon: Trophy, value: "$$$", label: "En Premios" },
        ]

  const whyItems =
    lang === "en"
      ? [
          "Connect with professionals, mentors, and leading tech companies.",
          "Develop technical skills and teamwork under pressure.",
          "Present your project to a panel of expert judges and win amazing prizes.",
          "Access exclusive workshops, talks, and resources during the event.",
        ]
      : [
          "Conecta con profesionales, mentores y empresas líderes en tecnología.",
          "Desarrolla habilidades técnicas y de trabajo en equipo bajo presión.",
          "Presenta tu proyecto ante un jurado de expertos y gana premios increíbles.",
          "Accede a talleres, charlas y recursos exclusivos durante el evento.",
        ]

  const whoTags =
    lang === "en"
      ? ["Developers", "Designers", "PMs", "Students", "Entrepreneurs"]
      : ["Programadores", "Diseñadores", "PMs", "Estudiantes", "Emprendedores"]

  return (
    <section id="sobre" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {showBackButton && <BackButton />}

        <div className="mx-auto max-w-3xl text-center mt-4">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            {lang === "en" ? "About the Event" : "Sobre el Evento"}
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {lang === "en" ? (
              <>
                Where ideas become <span className="text-primary">reality</span>
              </>
            ) : (
              <>
                Donde las ideas se convierten en <span className="text-primary">realidad</span>
              </>
            )}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            {lang === "en"
              ? "HACK DGO is an innovation and technology event that brings together the best talent from Durango and the region. During 24 intense hours, multidisciplinary teams work to develop creative solutions to real community problems."
              : "HACK DGO es un evento de innovación y tecnología que reúne a los mejores talentos de Durango y la región. Durante 24 horas intensas, equipos multidisciplinarios trabajan para desarrollar soluciones creativas a problemas reales de nuestra comunidad."}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="mt-4 font-mono text-3xl font-bold text-foreground">
                {stat.value}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Content Blocks */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="font-mono text-2xl font-bold text-foreground">
              {lang === "en" ? "Why participate?" : "¿Por qué participar?"}
            </h3>
            <ul className="mt-6 space-y-4">
              {whyItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                    {i + 1}
                  </span>
                  <span className="text-base leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-primary/5 p-8 lg:p-10">
            <h3 className="font-mono text-2xl font-bold text-foreground">
              {lang === "en" ? "Who can participate?" : "¿Quién puede participar?"}
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {lang === "en"
                ? "Students, professionals, entrepreneurs, and anyone passionate about technology. Your experience level doesn't matter — what counts is your energy and drive to create something new."
                : "Estudiantes, profesionales, emprendedores y cualquier persona apasionada por la tecnología. No importa tu nivel de experiencia — lo importante es tu energía y ganas de crear algo nuevo."}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {whoTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
