"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { RegistrationModal } from "@/components/registration-modal"

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-mono text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/70 sm:text-sm">
        {label}
      </span>
    </div>
  )
}

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const { lang } = useLanguage()

  useEffect(() => {
    /* Sept 12, 2026 at 8 AM CDT (UTC-5) — Durango, México */
    const target = new Date("2026-09-12T08:00:00-05:00").getTime()

    const update = () => {
      const now = Date.now()
      const diff = Math.max(target - now, 0)
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const t =
    lang === "en"
      ? {
          date: "September 12, 2026",
          tagline:
            "Durango's biggest hackathon. 24 hours to innovate, collaborate, and build technology solutions that transform your community.",
          location: "Durango, México",
          days: "Days",
          hours: "Hours",
          min: "Min",
          sec: "Sec",
          register: "Register Now",
          learnMore: "Learn More",
        }
      : {
          date: "12 de Septiembre, 2026",
          tagline:
            "El hackathon más grande de Durango. 24 horas para innovar, colaborar y construir soluciones tecnológicas que transformen tu comunidad.",
          location: "Durango, México",
          days: "Días",
          hours: "Horas",
          min: "Min",
          sec: "Seg",
          register: "Regístrate Ahora",
          //learnMore: "Conoce Más",
        }

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary/10" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/10" />
        <div className="absolute top-1/3 left-1/4 h-2 w-2 rounded-full bg-secondary/40" />
        <div className="absolute top-1/4 right-1/3 h-3 w-3 rounded-full bg-accent/30" />
        <div className="absolute bottom-1/3 right-1/4 h-2 w-2 rounded-full bg-secondary/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center">
        {/* Date Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-2 backdrop-blur-sm">
          <Calendar className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium text-primary-foreground">{t.date}</span>
        </div>

        {/* Heading */}
        <h1 className="font-mono text-5xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-6xl lg:text-8xl text-balance">
          HACK <span className="text-secondary">DGO</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 sm:text-xl text-pretty">
          {t.tagline}
        </p>

        {/* Location */}
        <div className="mt-6 flex items-center justify-center gap-2 text-primary-foreground/60">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{t.location}</span>
        </div>

        {/* Countdown */}
        <div className="mt-10 flex items-center justify-center gap-6 sm:gap-10">
          <CountdownItem value={timeLeft.days} label={t.days} />
          <span className="text-2xl font-bold text-primary-foreground/40">:</span>
          <CountdownItem value={timeLeft.hours} label={t.hours} />
          <span className="text-2xl font-bold text-primary-foreground/40">:</span>
          <CountdownItem value={timeLeft.minutes} label={t.min} />
          <span className="text-2xl font-bold text-primary-foreground/40">:</span>
          <CountdownItem value={timeLeft.seconds} label={t.sec} />
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <RegistrationModal>
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base font-bold shadow-lg"
            >
              {t.register}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </RegistrationModal>
          
          {/* <Button 
            <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base font-medium"
          >
            <a href="/sobre">{t.learnMore}</a>
          </Button>
          */}
        </div>
      </div>
    </section>
  )
}
