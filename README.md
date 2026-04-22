# HACK DGO 2026

Official website for **HACK DGO 2026** — Durango's biggest 24-hour hackathon, taking place on **September 12, 2026**.

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## Changes & Features

### Spelling corrections
All text across the site was reviewed and corrected — both in the English (primary) and Spanish versions — ensuring professional, error-free copy throughout every page.

### FAQ — Interactive accordion
The FAQ page was rebuilt using the **Shadcn Accordion** component. Each question expands and collapses on click, replacing the previous static list. The section is fully bilingual (EN/ES).

### Pre-registration form
A registration modal was added to the **Register** button in the navbar and to the hero/CTA sections. Features:
- Fields: Full Name, Email, School/Organization, Role, Team status.
- **Custom validation** — no browser-native tooltips. Each field shows an inline error message with a red border when invalid, and a green check when correct.
- Layout is stable: error message space is always reserved so the form never shifts.
- On submit, opens a pre-filled `mailto:` to `hackdgo@utd.edu.mx`.
- Fully responsive: full-screen on mobile, centered modal on desktop.

### Back to Home button
A **← Back to Home** link was added to every inner page (About, Tracks, Schedule, Team, FAQ, Rules, Code of Conduct, Sponsors). It reads the active language from context and shows "Back to Home" or "Volver al Inicio" accordingly.

### Agenda — 24-hour schedule
The schedule was restructured to reflect the real event format: **one 24-hour day** (September 12–13, 2026). It is split into two readable columns:
- **Day** (08:00–22:00): Registration, Opening Ceremony, Team Formation, Hacking Begins, Lunch, Workshop, Dinner & Networking.
- **Night → Closing** (23:00–17:00): Overnight Hacking, Breakfast, Mentorships, Submission Deadline, Demo Presentations, Awards Ceremony, Farewell.

A previous date bug (Day 2 showed "June 13" instead of "September 13") was also fixed.

### English as primary language + language toggle
The entire site was translated to **English as the default language**. A segmented **EN | ES** pill in the navbar lets users switch languages at any time. The preference is saved in `localStorage` so it persists across page visits.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| UI library | React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| Components | Shadcn UI (Accordion, Dialog, Button, Input…) |
| Icons | Lucide React |
| Fonts | Inter + Space Grotesk (Google Fonts) |
| Analytics | Vercel Analytics |
| Deploy | GitHub Pages (`gh-pages` branch) |

---

## Getting started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Build & deploy to GitHub Pages

```bash
# 1. Build the static site
npm run build

# 2. Copy output to a temp folder
mkdir ~/tmp/out
cp -r out/* ~/tmp/out

# 3. Switch to the gh-pages branch and deploy
git checkout gh-pages
cp -r ~/tmp/out/* ./
git add .
git commit -m "deploy"
git push
```

The static output is generated in the `out/` directory.

---

## Project structure

```
app/
  page.tsx              # Home (Hero + About + CTA)
  sobre/page.tsx        # About
  tracks/page.tsx       # Tracks / Challenges
  agenda/page.tsx       # Schedule
  faq/page.tsx          # FAQ
  reglas/page.tsx       # Rules
  conducta/page.tsx     # Code of Conduct
  equipo/page.tsx       # Team
  patrocinadores/page.tsx # Sponsors

components/
  navbar.tsx            # Fixed navbar with language toggle
  hero.tsx              # Hero section with countdown
  about.tsx             # About / stats section
  cta.tsx               # Call-to-action / registration section
  schedule.tsx          # 24-hour schedule
  tracks.tsx            # Challenge categories
  team.tsx              # Organizing team
  footer.tsx            # Site footer
  registration-modal.tsx # Pre-registration form (Dialog)
  back-button.tsx       # ← Back to Home link
  faq-content.tsx       # Interactive FAQ accordion
  rules-content.tsx     # Rules page content
  conduct-content.tsx   # Code of Conduct content
  sponsors-content.tsx  # Sponsors page content

contexts/
  language-context.tsx  # EN/ES language context + hook
```

---

© 2026 HACK DGO. All rights reserved.
