"use client"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function BackButton() {
  const { lang } = useLanguage()
  return (
    <Link
      href="/"
      className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
    >
      <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
      {lang === "en" ? "Back to Home" : "Volver al Inicio"}
    </Link>
  )
}
