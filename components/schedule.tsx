"use client"
import { useLanguage } from "@/contexts/language-context"
import { BackButton } from "@/components/back-button"

function getTypeLabel(type: string, lang: "en" | "es") {
  const labels: Record<string, { en: string; es: string }> = {
    hack:      { en: "Hacking",      es: "Hacking"     },
    taller:    { en: "Workshop",     es: "Taller"      },
    ceremonia: { en: "Ceremony",     es: "Ceremonia"   },
    comida:    { en: "Meal",         es: "Comida"      },
    actividad: { en: "Activity",     es: "Actividad"   },
    registro:  { en: "Check-in",     es: "Registro"    },
  }
  return labels[type]?.[lang] ?? type
}

function getTypeColor(type: string) {
  switch (type) {
    case "hack":      return "bg-primary text-primary-foreground"
    case "taller":    return "bg-secondary text-secondary-foreground"
    case "ceremonia": return "bg-accent text-accent-foreground"
    case "comida":    return "bg-muted text-muted-foreground"
    default:          return "bg-primary/10 text-primary"
  }
}

export function Schedule({ showBackButton = false }: { showBackButton?: boolean }) {
  const { lang } = useLanguage()

  /* Two halves of the 24-hour event kept as separate columns for readability */
  const halves =
    lang === "en"
      ? [
          {
            label: "Day",
            date:  "Sat, September 12",
            hours: "08:00 — 22:00",
            events: [
              { time: "08:00", title: "Registration & Check-in",   type: "registro"  },
              { time: "09:00", title: "Opening Ceremony",          type: "ceremonia" },
              { time: "10:00", title: "Team Formation Session",    type: "actividad" },
              { time: "11:00", title: "Hacking Begins!",           type: "hack"      },
              { time: "14:00", title: "Lunch",                     type: "comida"    },
              { time: "18:00", title: "Workshop: Intro to AI",     type: "taller"    },
              { time: "21:00", title: "Dinner & Networking",       type: "comida"    },
            ],
          },
          {
            label: "Night → Closing",
            date:  "Sat Sep 12 — Sun Sep 13",
            hours: "23:00 — 17:00",
            events: [
              { time: "23:00", title: "Overnight Hacking",         type: "hack"      },
              { time: "03:00", title: "Late-Night Snacks",         type: "comida"    },
              { time: "07:00", title: "Breakfast",                 type: "comida"    },
              { time: "09:00", title: "1-on-1 Mentorships",        type: "actividad" },
              { time: "11:00", title: "Submission Deadline",       type: "hack"      },
              { time: "11:30", title: "Demo Presentations",        type: "ceremonia" },
              { time: "14:00", title: "Lunch & Judges Deliberation", type: "comida"  },
              { time: "16:00", title: "Awards Ceremony",           type: "ceremonia" },
              { time: "17:00", title: "Closing & Farewell",        type: "actividad" },
            ],
          },
        ]
      : [
          {
            label: "Día",
            date:  "Sáb, 12 de Septiembre",
            hours: "08:00 — 22:00",
            events: [
              { time: "08:00", title: "Registro y Check-in",          type: "registro"  },
              { time: "09:00", title: "Ceremonia de Apertura",         type: "ceremonia" },
              { time: "10:00", title: "Formación de Equipos",          type: "actividad" },
              { time: "11:00", title: "¡Inicio del Hackathon!",        type: "hack"      },
              { time: "14:00", title: "Almuerzo",                      type: "comida"    },
              { time: "18:00", title: "Taller: Introducción a IA",     type: "taller"    },
              { time: "21:00", title: "Cena y Networking",             type: "comida"    },
            ],
          },
          {
            label: "Noche → Clausura",
            date:  "Sáb 12 — Dom 13 Sep",
            hours: "23:00 — 17:00",
            events: [
              { time: "23:00", title: "Hacking Toda la Noche",         type: "hack"      },
              { time: "03:00", title: "Snacks de Madrugada",           type: "comida"    },
              { time: "07:00", title: "Desayuno",                      type: "comida"    },
              { time: "09:00", title: "Mentorías 1-a-1",               type: "actividad" },
              { time: "11:00", title: "Límite de Entrega",             type: "hack"      },
              { time: "11:30", title: "Demos y Presentaciones",        type: "ceremonia" },
              { time: "14:00", title: "Almuerzo y Deliberación",       type: "comida"    },
              { time: "16:00", title: "Ceremonia de Premios",          type: "ceremonia" },
              { time: "17:00", title: "Clausura",                      type: "actividad" },
            ],
          },
        ]

  return (
    <section id="agenda" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {showBackButton && <BackButton />}

        <div className="mx-auto max-w-3xl text-center mt-4">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            {lang === "en" ? "Schedule" : "Agenda"}
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {lang === "en" ? (
              <>24 hours of <span className="text-primary">innovation</span></>
            ) : (
              <>24 horas de <span className="text-primary">innovación</span></>
            )}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {lang === "en"
              ? "One intense day of creativity, learning, and building — September 12, 2026."
              : "Un día intenso de creatividad, aprendizaje y construcción — 12 de septiembre de 2026."}
          </p>
        </div>

        {/* Two-column schedule (Day | Night) */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {halves.map((half) => (
            <div
              key={half.label}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              {/* Header */}
              <div className="bg-primary px-6 py-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-mono text-xl font-bold text-primary-foreground">
                    {half.label}
                  </h3>
                  <p className="mt-0.5 text-sm text-primary-foreground/70">{half.date}</p>
                </div>
                <span className="shrink-0 rounded-full bg-primary-foreground/10 px-3 py-1 font-mono text-xs font-semibold text-primary-foreground/80">
                  {half.hours}
                </span>
              </div>

              {/* Events */}
              <div className="divide-y divide-border">
                {half.events.map((event, i) => (
                  <div key={i} className="flex items-center gap-4 px-6 py-4">
                    <span className="shrink-0 w-12 font-mono text-sm font-semibold text-muted-foreground">
                      {event.time}
                    </span>
                    <span className="flex-1 text-sm font-medium text-foreground">
                      {event.title}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${getTypeColor(event.type)}`}
                    >
                      {getTypeLabel(event.type, lang)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
