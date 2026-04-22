"use client"
import { useState, ReactNode } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CheckCircle, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

/* ─── types ─────────────────────────────────────────────── */
type FormFields = { name: string; email: string; org: string; role: string; hasTeam: string }
type Errors     = Partial<Record<keyof FormFields, string>>
type Touched    = Partial<Record<keyof FormFields, boolean>>

const INITIAL: FormFields = { name: "", email: "", org: "", role: "", hasTeam: "" }

/* ─── component ─────────────────────────────────────────── */
export function RegistrationModal({ children }: { children: ReactNode }) {
  const { lang } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [form,    setForm]    = useState<FormFields>(INITIAL)
  const [errors,  setErrors]  = useState<Errors>({})
  const [touched, setTouched] = useState<Touched>({})

  /* ── translations ── */
  const T = {
    en: {
      title:        "Pre-Register for HACK DGO 2026",
      subtitle:     "Join 200+ participants at Durango's biggest hackathon",
      name:         "Full Name",           namePh:   "Jane Smith",
      email:        "Email Address",       emailPh:  "jane@example.com",
      org:          "School / Organization", orgPh:  "Universidad Tecnológica de Durango",
      role:         "Your Role",
      roleOptions:  ["Developer","Designer","Project Manager","Student","Entrepreneur","Other"],
      team:         "Do you have a team?",
      teamOptions:  ["Looking for a team","Already have a team"],
      submit:       "Pre-Register Now",
      select:       "Select an option…",
      successTitle: "You're on the list!",
      successMsg:   "We'll send updates and confirmation to your email. See you on September 12, 2026!",
      err: {
        nameReq:    "Please enter your full name.",
        nameShort:  "Name must be at least 2 characters.",
        emailReq:   "Please enter your email address.",
        emailInv:   "Enter a valid email (e.g. you@example.com).",
        orgReq:     "Please enter your school or organization.",
        roleReq:    "Please select your role.",
        teamReq:    "Please select an option.",
      },
    },
    es: {
      title:        "Pre-registro para HACK DGO 2026",
      subtitle:     "Únete a más de 200 participantes en el hackathon más grande de Durango",
      name:         "Nombre Completo",     namePh:   "Juan Pérez",
      email:        "Correo Electrónico",  emailPh:  "juan@ejemplo.com",
      org:          "Escuela / Organización", orgPh: "Universidad Tecnológica de Durango",
      role:         "Tu Rol",
      roleOptions:  ["Desarrollador","Diseñador","Project Manager","Estudiante","Emprendedor","Otro"],
      team:         "¿Ya tienes equipo?",
      teamOptions:  ["Estoy buscando equipo","Ya tengo equipo"],
      submit:       "Pre-registrarme",
      select:       "Selecciona una opción…",
      successTitle: "¡Ya estás en la lista!",
      successMsg:   "Te enviaremos actualizaciones y confirmación a tu correo. ¡Nos vemos el 12 de septiembre de 2026!",
      err: {
        nameReq:    "Ingresa tu nombre completo.",
        nameShort:  "El nombre debe tener al menos 2 caracteres.",
        emailReq:   "Ingresa tu correo electrónico.",
        emailInv:   "Ingresa un correo válido (ej. tu@correo.com).",
        orgReq:     "Ingresa tu escuela u organización.",
        roleReq:    "Selecciona tu rol.",
        teamReq:    "Selecciona una opción.",
      },
    },
  }
  const t = T[lang]

  /* ── validation ── */
  function validateField(name: keyof FormFields, value: string): string {
    const e = t.err
    switch (name) {
      case "name":
        if (!value.trim())         return e.nameReq
        if (value.trim().length < 2) return e.nameShort
        return ""
      case "email":
        if (!value.trim())         return e.emailReq
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return e.emailInv
        return ""
      case "org":
        if (!value.trim())         return e.orgReq
        return ""
      case "role":
        if (!value)                return e.roleReq
        return ""
      case "hasTeam":
        if (!value)                return e.teamReq
        return ""
    }
  }

  function validateAll(): boolean {
    const keys = Object.keys(INITIAL) as (keyof FormFields)[]
    const newErrors: Errors  = {}
    const newTouched: Touched = {}
    keys.forEach((k) => {
      newTouched[k] = true
      const msg = validateField(k, form[k])
      if (msg) newErrors[k] = msg
    })
    setTouched(newTouched)
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /* ── handlers ── */
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    const k = name as keyof FormFields
    setForm((prev) => ({ ...prev, [k]: value }))
    if (touched[k]) {
      setErrors((prev) => ({ ...prev, [k]: validateField(k, value) }))
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
    const k = e.target.name as keyof FormFields
    setTouched((prev) => ({ ...prev, [k]: true }))
    setErrors((prev) => ({ ...prev, [k]: validateField(k, form[k]) }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validateAll()) return
    const subject = `Pre-Registration HACK DGO 2026: ${form.name}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Organization: ${form.org}`,
      `Role: ${form.role}`,
      `Team status: ${form.hasTeam}`,
    ].join("\n")
    window.open(
      `mailto:hackdgo@utd.edu.mx?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    )
    setSubmitted(true)
  }

  function handleOpenChange(isOpen: boolean) {
    if (!isOpen) {
      setSubmitted(false)
      setForm(INITIAL)
      setErrors({})
      setTouched({})
    }
  }

  /* ── field style helpers ── */
  function inputClass(k: keyof FormFields) {
    const hasError = touched[k] && errors[k]
    const isValid  = touched[k] && !errors[k] && form[k]
    const base =
      "flex h-12 w-full rounded-lg border bg-background px-3 py-2 text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:opacity-50"
    if (hasError) return `${base} border-destructive focus-visible:ring-destructive/25`
    if (isValid)  return `${base} border-green-500 focus-visible:ring-green-500/25`
    return `${base} border-input focus-visible:ring-primary/30`
  }

  function ErrorMsg({ field }: { field: keyof FormFields }) {
    const msg = touched[field] && errors[field]
    return (
      <p
        aria-live="polite"
        className={`flex items-center gap-1.5 text-xs mt-1.5 h-4 transition-opacity duration-150 ${
          msg ? "text-destructive opacity-100" : "opacity-0 select-none"
        }`}
      >
        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
        {msg || " "}
      </p>
    )
  }

  function FieldIcon({ field }: { field: keyof FormFields }) {
    if (!touched[field] || !form[field]) return null
    if (errors[field]) return null
    return <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500 pointer-events-none" />
  }

  /* ── render ── */
  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent
        className="
          p-0 gap-0 border-0
          fixed inset-0 h-full w-full rounded-none
          sm:inset-auto sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]
          sm:max-w-lg sm:h-auto sm:rounded-2xl sm:border
          flex flex-col overflow-hidden
        "
      >
        {/* Coloured top bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-accent shrink-0" />

        <div className="flex-1 overflow-y-auto px-6 py-7 sm:px-8">
          {submitted ? (
            /* ── SUCCESS STATE ── */
            <div className="flex flex-col items-center justify-center min-h-[60vh] sm:min-h-0 sm:py-10 text-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/5">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <DialogHeader className="items-center gap-2">
                <DialogTitle className="font-mono text-2xl text-center">
                  {t.successTitle}
                </DialogTitle>
              </DialogHeader>
              <p className="text-base text-muted-foreground leading-relaxed max-w-xs">
                {t.successMsg}
              </p>
            </div>
          ) : (
            /* ── FORM STATE ── */
            <>
              <DialogHeader className="mb-6">
                <DialogTitle className="font-mono text-lg leading-snug pr-6">
                  {t.title}
                </DialogTitle>
                <p className="text-sm text-muted-foreground">{t.subtitle}</p>
              </DialogHeader>

              <form onSubmit={handleSubmit} noValidate className="space-y-3">

                {/* Full Name */}
                <div className="space-y-1">
                  <Label htmlFor="reg-name" className="text-sm font-semibold">
                    {t.name} <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <input
                      id="reg-name"
                      name="name"
                      placeholder={t.namePh}
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="name"
                      className={inputClass("name")}
                    />
                    <FieldIcon field="name" />
                  </div>
                  <ErrorMsg field="name" />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <Label htmlFor="reg-email" className="text-sm font-semibold">
                    {t.email} <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <input
                      id="reg-email"
                      name="email"
                      type="email"
                      placeholder={t.emailPh}
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="email"
                      className={inputClass("email")}
                    />
                    <FieldIcon field="email" />
                  </div>
                  <ErrorMsg field="email" />
                </div>

                {/* Organization */}
                <div className="space-y-1">
                  <Label htmlFor="reg-org" className="text-sm font-semibold">
                    {t.org} <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <input
                      id="reg-org"
                      name="org"
                      placeholder={t.orgPh}
                      value={form.org}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="organization"
                      className={inputClass("org")}
                    />
                    <FieldIcon field="org" />
                  </div>
                  <ErrorMsg field="org" />
                </div>

                {/* Role + Team side-by-side on md+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                  {/* Role */}
                  <div className="space-y-1">
                    <Label htmlFor="reg-role" className="text-sm font-semibold">
                      {t.role} <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <select
                        id="reg-role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${inputClass("role")} appearance-none cursor-pointer pr-8`}
                      >
                        <option value="">{t.select}</option>
                        {t.roleOptions.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                      {/* Chevron icon */}
                      <svg
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <ErrorMsg field="role" />
                  </div>

                  {/* Team */}
                  <div className="space-y-1">
                    <Label htmlFor="reg-team" className="text-sm font-semibold">
                      {t.team} <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <select
                        id="reg-team"
                        name="hasTeam"
                        value={form.hasTeam}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${inputClass("hasTeam")} appearance-none cursor-pointer pr-8`}
                      >
                        <option value="">{t.select}</option>
                        {t.teamOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                      <svg
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <ErrorMsg field="hasTeam" />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-semibold text-base h-12 mt-1"
                >
                  {t.submit}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  {lang === "en"
                    ? "Fields marked with * are required."
                    : "Los campos marcados con * son obligatorios."}
                </p>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
