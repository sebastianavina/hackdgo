import Image from "next/image"
import { Github, Instagram, Twitter, Mail, MapPin } from "lucide-react"

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:contacto@hackdgo.com", label: "Email" },
]

const footerLinks = [
  {
    title: "Evento",
    links: [
      { label: "Sobre nosotros", href: "#sobre" },
      { label: "Tracks", href: "#tracks" },
      { label: "Agenda", href: "#agenda" },
      { label: "Equipo", href: "#equipo" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Preguntas Frecuentes", href: "#" },
      { label: "Reglas del Hackathon", href: "#" },
      { label: "Codigo de Conducta", href: "#" },
      { label: "Patrocinadores", href: "#" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "contacto@hackdgo.com", href: "mailto:contacto@hackdgo.com" },
      { label: "Durango, Mexico", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="HACK DGO Logo"
              width={140}
              height={50}
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              El hackathon mas grande de Durango. Innovacion, tecnologia y
              comunidad en un solo evento.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Durango, Mexico</span>
            </div>
            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HACK DGO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
