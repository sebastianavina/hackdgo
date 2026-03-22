"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"



export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
          >
            <a href="#registro">Registrate</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
           
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2 w-full font-semibold"
            >
              <a href="#registro" onClick={() => setIsMobileOpen(false)}>
                Registrate
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
