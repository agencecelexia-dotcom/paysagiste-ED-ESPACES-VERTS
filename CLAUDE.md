# CLAUDE.md — Gouvernance ED Espaces Verts

> Source unique de vérité. À lire avant chaque session de travail.

## 📌 Projet
- **Nom** : ED Espaces Verts
- **Type** : Site vitrine statique — paysagiste en Seine-et-Marne (77)
- **Statut** : Refonte Master Blueprint 2026
- **URL prod** : https://www.ed-espacesverts.fr

## 🛠️ Stack
| Outil | Version | Notes |
|-------|---------|-------|
| Next.js | 16.1.6 | App Router, Turbopack |
| React | 19.2.3 | Server Components par défaut |
| TypeScript | 5 | strict mode |
| Tailwind CSS | 4 | CSS-first @theme dans globals.css |
| Shadcn/UI | latest | baseColor: neutral, style: default |
| Framer Motion | 12.34 | animations scroll + transitions |
| Zod | 4.x | validation formulaire contact |

## 📐 Architecture
```
src/
├── app/          # Routes (Server Components par défaut)
├── components/
│   ├── layout/   # Header, Footer, Logo
│   ├── ui/       # Shadcn + custom primitives
│   ├── sections/ # Sections homepage (Server Components)
│   ├── features/ # Composants fonctionnels (formulaire, galerie...)
│   └── animations/ # FadeUp, SplitText, etc.
├── data/         # Données TypeScript statiques (NE PAS MODIFIER)
├── lib/          # utils.ts, validation.ts, animations.ts
└── types/        # index.ts — toutes les interfaces
```

## 🎨 Design System
- **Fond** : `neutral-50` (#FAFAF8, crème chaud) — jamais blanc froid
- **Primaire** : `primary-900` (vert forêt profond) — headlines, header, footer
- **Accent** : `accent-500` (or chaud) — CTAs, icônes, hover states
- **Texte** : `neutral-900` sur fond clair, `white/neutral-200` sur fond sombre
- **Font** : Playfair Display (headings) + DM Sans (body)
- **Radius** : `0.375rem` (Shadcn default)

## ⚠️ Règles Critiques
1. **`"use client"`** uniquement si état/événements nécessaires (formulaires, animations useScroll)
2. **Contraste WCAG AA** : jamais de texte `neutral-400` ou moins sur fond sombre
3. **Images** : toujours `next/image` avec `fill` + `sizes`
4. **Shadcn** : ne pas modifier les fichiers dans `src/components/ui/` générés
5. **Zod v4** : `z.literal(true, { message: "..." })` — pas d'errorMap
6. **Next.js 16 params** : `await params` dans les pages dynamiques

## 📋 Pages
| Route | Statut |
|-------|--------|
| `/` | ✅ Refonte |
| `/services` | ✅ Existant |
| `/services/[slug]` | ✅ 6 pages statiques |
| `/realisations` | ✅ Existant |
| `/realisations/[slug]` | ✅ Existant |
| `/blog` | ✅ Existant |
| `/blog/[slug]` | ✅ Existant |
| `/a-propos` | ✅ Existant |
| `/contact` | ✅ Existant |
| `/mentions-legales` | ✅ Existant |

## 📦 Commandes
```bash
npm run dev          # Développement (Turbopack)
npm run build        # Build production
npx shadcn@latest add [component]  # Ajouter un composant Shadcn
```
