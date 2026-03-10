# ONBOARDING.md — Template Paysagiste

> Guide de déploiement pour Agence Celexia.
> Flow : Brief commercial → CLIENT.md → sync → deploy

---

## Déploiement d'un nouveau client paysagiste

### Étape 1 — Cloner le template

```bash
git clone https://github.com/agencecelexia-dotcom/paysagiste mon-client-paysagiste
cd mon-client-paysagiste
npm install
```

### Étape 2 — Remplir CLIENT.md

Ouvrir `CLIENT.md` à la racine et remplir les 73 variables :

```
NOM_ENTREPRISE: "Nom du client"
PRENOM_DIRIGEANT: "Prénom"
NOM_DIRIGEANT: "Nom"
TELEPHONE: "+33 X XX XX XX XX"
EMAIL: "contact@domaine.fr"
VILLE: "Ville"
REGION: "Région"
DOMAINE: "www.domaine.fr"
...
```

> Toutes les variables sont documentées dans `src/config/README_VARIABLES.md`

### Étape 3 — Synchroniser

```bash
npm run sync-client
```

Ce script :
1. Parse `CLIENT.md`
2. Génère `src/config/client.config.ts` (73 variables typées)
3. Met à jour les tokens de couleur dans `globals.css`

### Étape 4 — Vérifier et déployer

```bash
npm run dev          # Vérification visuelle sur http://localhost:3000
npm run build        # Vérification du build (0 erreurs attendues)
git add -A && git commit -m "feat: config client [NOM_CLIENT]"
git push
```

Déployer sur Vercel :
1. Importer le repo sur vercel.com
2. Configurer les variables d'environnement si nécessaire (`ADMIN_PASSWORD`, `NEXT_PUBLIC_N8N_WEBHOOK`)
3. Configurer le domaine personnalisé

---

## Panel Admin

Accessible sur `/admin/login` (mot de passe défaut : `1234`)

| Page | Route | Description |
|------|-------|-------------|
| Dashboard | `/admin/dashboard` | Vue d'ensemble |
| Contenu | `/admin/contenu` | Modifier les champs CLIENT.md |
| Photos | `/admin/photos` | Galerie du pack paysagiste |
| Témoignages | `/admin/temoignages` | CRUD témoignages clients |
| Services | `/admin/services` | CRUD 6 services |
| Projets | `/admin/projets` | CRUD réalisations avant/après |
| SEO | `/admin/seo` | Meta tags + preview Google |

> **Important** : Changer le mot de passe admin dans CLIENT.md (`ADMIN_PASSWORD`) avant le déploiement.

---

## Variables CLIENT.md

| Section | Nb | Variables clés |
|---------|-----|----------------|
| Identité | 11 | NOM_ENTREPRISE, PRENOM/NOM_DIRIGEANT, ANNEES_EXPERIENCE |
| Contact | 11 | TELEPHONE, EMAIL, VILLE, REGION, LATITUDE, LONGITUDE |
| Branding | 7 | COULEUR_PRIMAIRE_900, COULEUR_ACCENT_500, FONT_TITRES |
| SEO | 5 | DOMAINE, META_TITLE, META_DESCRIPTION, SCHEMA_TYPE |
| Contenu | 5 | SLOGAN, ACCROCHE_HERO, DESCRIPTION_ENTREPRISE |
| Services | 12 | SERVICE_1-6_TITRE, SERVICE_1-6_DESC |
| Réseaux | 6 | FACEBOOK_URL, INSTAGRAM_URL, GOOGLE_MAPS_URL |
| Témoignages | 12 | TEMOIGNAGE_1-3_NOM, _VILLE, _TEXTE, _NOTE |
| Intégrations | 2 | N8N_WEBHOOK, ADMIN_PASSWORD |
| Photos | 1 | PACK_PHOTOS_METIER |

---

## Photos

Les photos sont dans `public/images/_template/` avec une structure générique :

```
hero/hero-principal.jpg          ← Photo panoramique jardin
services/service-1.jpg           ← Création de jardins
services/service-2.jpg           ← Terrasses
services/service-3.jpg           ← Entretien
services/service-4.jpg           ← Élagage
services/service-5.jpg           ← Clôtures
services/service-6.jpg           ← Arrosage
portfolio/avant/projet-[1-6]-avant.jpg
portfolio/apres/projet-[1-6]-apres.jpg
equipe/dirigeant.jpg
equipe/equipe-groupe.jpg
badges/badge-qualite.png
badges/badge-experience.png
og/og-image.jpg
```

Les prompts IA pour générer ces photos sont dans `IMAGES-PROMPTS-V2.md`.

---

## Commandes utiles

```bash
npm run sync-client   # Synchroniser CLIENT.md → client.config.ts
npm run dev           # Développement (Turbopack, http://localhost:3000)
npm run build         # Build production
npm run lint          # Vérification ESLint
```

---

## Pour un nouveau métier

1. Dupliquer ce repo
2. Adapter CLIENT.md (METIER, METIER_LABEL, SCHEMA_TYPE, services)
3. Générer les photos du pack métier via `IMAGES-PROMPTS-V2.md`
4. Placer les photos dans `public/images/_template/`
5. Adapter `src/data/services.ts` et `src/data/projects.ts` pour le nouveau métier

---

**Version** : 1.0 | **Mainteneur** : Agence Celexia
