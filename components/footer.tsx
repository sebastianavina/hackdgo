"use client"
import { Github, Instagram, Twitter, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:hackdgo@utd.edu.mx", label: "Email" },
]

export function Footer() {
  const { lang } = useLanguage()

  const footerLinks =
    lang === "en"
      ? [
          {
            title: "Event",
            links: [
              { label: "About", href: "/sobre" },
              { label: "Tracks", href: "/tracks" },
              { label: "Schedule", href: "/agenda" },
              { label: "Team", href: "/equipo" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "FAQ", href: "/faq" },
              { label: "Rules", href: "/reglas" },
              { label: "Code of Conduct", href: "/conducta" },
              { label: "Sponsors", href: "/patrocinadores" },
            ],
          },
          {
            title: "Contact",
            links: [
              { label: "hackdgo@utd.edu.mx", href: "mailto:hackdgo@utd.edu.mx" },
              { label: "Durango, México", href: "#" },
            ],
          },
        ]
      : [
          {
            title: "Evento",
            links: [
              { label: "Sobre Nosotros", href: "/sobre" },
              { label: "Tracks", href: "/tracks" },
              { label: "Agenda", href: "/agenda" },
              { label: "Equipo", href: "/equipo" },
            ],
          },
          {
            title: "Recursos",
            links: [
              { label: "Preguntas Frecuentes", href: "/faq" },
              { label: "Reglas del Hackathon", href: "/reglas" },
              { label: "Código de Conducta", href: "/conducta" },
              { label: "Patrocinadores", href: "/patrocinadores" },
            ],
          },
          {
            title: "Contacto",
            links: [
              { label: "hackdgo@utd.edu.mx", href: "mailto:hackdgo@utd.edu.mx" },
              { label: "Durango, México", href: "#" },
            ],
          },
        ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-mono text-2xl font-bold text-primary">
              HACK <span className="text-secondary">DGO</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {lang === "en"
                ? "Durango's biggest hackathon. Innovation, technology, and community in one event."
                : "El hackathon más grande de Durango. Innovación, tecnología y comunidad en un solo evento."}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Durango, México</span>
            </div>
            <div className="mt-6 flex gap-3">
             
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3">
                
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HACK DGO.{" "}
            {lang === "en" ? "All rights reserved." : "Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
