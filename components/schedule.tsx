const days = [
  {
    day: "Dia 1",
    date: "Sabado 12 de Septiembre",
    events: [
      { time: "08:00", title: "Registro y Check-in", type: "registro" },
      { time: "09:00", title: "Ceremonia de Apertura", type: "ceremonia" },
      { time: "10:00", title: "Formacion de Equipos", type: "actividad" },
      { time: "11:00", title: "Inicio del Hackathon", type: "hack" },
      { time: "14:00", title: "Almuerzo", type: "comida" },
      { time: "18:00", title: "Taller: Introduccion a IA", type: "taller" },
      { time: "21:00", title: "Cena y Networking", type: "comida" },
    ],
  },
  {
    day: "Dia 2",
    date: "Domingo 13 de Junio",
    events: [
      { time: "08:00", title: "Desayuno", type: "comida" },
      { time: "09:00", title: "Mentorias 1-a-1", type: "actividad" },
      { time: "12:00", title: "Check-in de progreso", type: "actividad" },
      { time: "14:00", title: "Almuerzo", type: "comida" },
      { time: "16:00", title: "Taller: Pitch Efectivo", type: "taller" },
      { time: "20:00", title: "Cena", type: "comida" },
      { time: "23:59", title: "Hacking toda la noche", type: "hack" },
    ],
  }
]

function getTypeColor(type: string) {
  switch (type) {
    case "hack":
      return "bg-primary text-primary-foreground"
    case "taller":
      return "bg-secondary text-secondary-foreground"
    case "ceremonia":
      return "bg-accent text-accent-foreground"
    case "comida":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-primary/10 text-primary"
  }
}

export function Schedule() {
  return (
    <section id="agenda" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            Agenda
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            48 horas de <span className="text-primary">innovacion</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Tres dias llenos de creatividad, aprendizaje y colaboracion.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {days.map((day) => (
            <div
              key={day.day}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              {/* Day Header */}
              <div className="bg-primary px-6 py-5">
                <h3 className="font-mono text-xl font-bold text-primary-foreground">
                  {day.day}
                </h3>
                <p className="mt-1 text-sm text-primary-foreground/70">{day.date}</p>
              </div>

              {/* Events */}
              <div className="divide-y divide-border">
                {day.events.map((event, i) => (
                  <div key={i} className="flex items-center gap-4 px-6 py-4">
                    <span className="shrink-0 font-mono text-sm font-semibold text-muted-foreground w-12">
                      {event.time}
                    </span>
                    <span className="flex-1 text-sm font-medium text-foreground">
                      {event.title}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${getTypeColor(
                        event.type
                      )}`}
                    >
                      {event.type}
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
