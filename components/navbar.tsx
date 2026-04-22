"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { RegistrationModal } from "@/components/registration-modal"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { lang, setLang } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks =
    lang === "en"
      ? [
          //{ label: "About", href: "/sobre" },
          //{ label: "Tracks", href: "/tracks" },
          //{ label: "Schedule", href: "/agenda" },
          //{ label: "FAQ", href: "/faq" },
        ]
      : [
         // { label: "Sobre", href: "/sobre" },
          //{ label: "Tracks", href: "/tracks" },
          //{ label: "Agenda", href: "/agenda" },
          //{ label: "FAQ", href: "/faq" },
        ]

  /* ---------- dynamic color helpers based on scroll state ---------- */
  const linkClass = isScrolled
    ? "text-sm font-medium text-foreground/70 hover:text-foreground transition-colors [text-decoration:none]"
    : "text-sm font-medium text-white/80 hover:text-white transition-colors [text-decoration:none]"

  const logoHackClass = isScrolled ? "text-primary" : "text-white"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className={`font-mono text-xl font-bold transition-colors hover:opacity-90 [text-decoration:none] ${logoHackClass}`}
        >
          HACK <span className="text-secondary">DGO</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: language segmented control + CTA */}
        <div className="hidden md:flex items-center gap-3">

          {/* EN | ES segmented pill */}
          <div
            className={`flex items-center rounded-full border overflow-hidden text-xs font-bold transition-colors ${
              isScrolled ? "border-border" : "border-white/30"
            }`}
          >
            {(["en", "es"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-label={l === "en" ? "Switch to English" : "Cambiar a Español"}
                className={`px-3 py-1.5 uppercase transition-colors ${
                  lang === l
                    ? isScrolled
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/20 text-white"
                    : isScrolled
                    ? "text-foreground/60 hover:text-foreground hover:bg-muted"
                    : "text-white/50 hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Register button — yellow on hero, primary on scroll */}
          <RegistrationModal>
            <Button
              className={`font-semibold transition-all ${
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
              }`}
            >
              {lang === "en" ? "Register" : "Regístrate"}
            </Button>
          </RegistrationModal>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Mini EN|ES pill */}
          <div
            className={`flex items-center rounded-full border overflow-hidden text-xs font-bold ${
              isScrolled ? "border-border" : "border-white/30"
            }`}
          >
            {(["en", "es"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 uppercase transition-colors ${
                  lang === l
                    ? isScrolled
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/20 text-white"
                    : isScrolled
                    ? "text-foreground/60"
                    : "text-white/50"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className={`transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="border-t border-border bg-background/98 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-2 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 text-base font-medium text-foreground/70 hover:text-primary transition-colors [text-decoration:none] border-b border-border/50 last:border-0"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <RegistrationModal>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 w-full font-semibold h-12"
                onClick={() => setIsMobileOpen(false)}
              >
                {lang === "en" ? "Register Free" : "Regístrate Gratis"}
              </Button>
            </RegistrationModal>
          </div>
        </div>
      )}
    </header>
  )
}
