import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function CTA() {
  return (
    <section id="registro" className="relative overflow-hidden bg-primary py-24 lg:py-32">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-secondary/15" />
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/15" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2">
          <Zap className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium text-primary-foreground">Cupos limitados</span>
        </div>
        <h2 className="font-mono text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
          {"¿"}Listo para hackear el futuro?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
          Registrate ahora y se parte del evento de tecnologia mas emocionante
          de Durango. No te quedes fuera.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base font-bold shadow-lg"
          >
            <a href="#">
              Registrate Gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base"
          >
            <a href="mailto:contacto@hackdgo.com">Contactanos</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
