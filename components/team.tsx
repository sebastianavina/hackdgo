"use client"
import { useLanguage } from "@/contexts/language-context"
import { BackButton } from "@/components/back-button"

export function Team({ showBackButton = false }: { showBackButton?: boolean }) {
  const { lang } = useLanguage()

  return (
    <section id="equipo" className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {showBackButton && <BackButton />}
        <div className="mx-auto max-w-3xl text-center mt-4">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            {lang === "en" ? "Organizing Team" : "Equipo Organizador"}
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {lang === "en" ? (
              <>
                Meet the <span className="text-primary">team</span>
              </>
            ) : (
              <>
                Conoce al <span className="text-primary">equipo</span>
              </>
            )}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            {lang === "en"
              ? "A team passionate about technology and innovation in Durango."
              : "Un equipo apasionado por la tecnología y la innovación en Durango."}
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 py-24 text-center">
          <p className="font-mono text-lg font-bold text-foreground">
            {lang === "en" ? "Team members coming soon" : "Equipo por anunciar"}
          </p>
          <p className="mt-2 text-sm text-muted-foreground max-w-sm">
            {lang === "en"
              ? "Stay tuned for announcements about the HACK DGO organizing team."
              : "Mantente atento a los anuncios sobre el equipo organizador de HACK DGO."}
          </p>
        </div>
      </div>
    </section>
  )
}
