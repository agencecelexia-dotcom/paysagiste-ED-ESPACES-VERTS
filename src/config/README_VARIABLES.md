# README_VARIABLES.md — Documentation des variables CLIENT.md

> Toutes les variables du template paysagiste — Agence Celexia
> Modifier dans CLIENT.md puis lancer `npm run sync-client`

---

## IDENTITÉ (11 variables)

| Variable | Description | Fichiers | Exemple |
|----------|-------------|----------|---------|
| `NOM_ENTREPRISE` | Nom commercial | layout, Navbar, Footer, company.ts, mentions-legales | `"Jardins de Prestige"` |
| `NOM_LEGAL` | Raison sociale | mentions-legales | `"Jardins de Prestige SARL"` |
| `SIRET` | Numéro SIRET | mentions-legales, company.ts | `"123 456 789 00012"` |
| `METIER` | Métier en minuscules | SEO, schema.org | `"paysagiste"` |
| `METIER_LABEL` | Métier avec majuscule | HeroSection, SEO | `"Paysagiste"` |
| `GENRE_DIRIGEANT` | M ou F (pour accord grammatical) | a-propos | `"M"` |
| `PRENOM_DIRIGEANT` | Prénom du dirigeant | a-propos, schema.org | `"Antoine"` |
| `NOM_DIRIGEANT` | Nom du dirigeant | a-propos, schema.org | `"Leroy"` |
| `DIPLOME_DIRIGEANT` | Diplôme/titre du dirigeant | a-propos | `"architecte paysagiste diplômé de l'ENSP Versailles"` |
| `ANNEE_CREATION` | Année de création | a-propos, schema.org | `"2009"` |
| `ANNEES_EXPERIENCE` | Années d'expérience | a-propos, StatsSection | `"15"` |

---

## CONTACT (11 variables)

| Variable | Description | Fichiers | Exemple |
|----------|-------------|----------|---------|
| `TELEPHONE` | Numéro de téléphone | contact, Footer, company.ts, schema.org | `"+33 4 78 12 34 56"` |
| `EMAIL` | Adresse e-mail | contact, Footer, company.ts, schema.org | `"contact@jardins-de-prestige.fr"` |
| `ADRESSE` | Rue et numéro | contact, mentions-legales, company.ts | `"45 Avenue des Jardins"` |
| `CODE_POSTAL` | Code postal | contact, mentions-legales, company.ts, schema.org | `"69003"` |
| `VILLE` | Ville | contact, mentions-legales, HeroSection | `"Lyon"` |
| `DEPARTEMENT` | Département | mentions-legales, schema.org | `"Rhône"` |
| `REGION` | Région | a-propos, HeroSection, realisations | `"Auvergne-Rhône-Alpes"` |
| `PAYS` | Pays | company.ts | `"France"` |
| `HORAIRES` | Horaires d'ouverture | contact, Footer, company.ts | `"Lun-Ven: 8h00-18h00, Sam: 9h00-13h00"` |
| `ZONE_INTERVENTION` | Zone géographique | contact | `"Lyon et région"` |
| `LATITUDE` | Latitude GPS | company.ts, GoogleMap | `"45.7578"` |
| `LONGITUDE` | Longitude GPS | company.ts, GoogleMap | `"4.832"` |

---

## BRANDING (7 variables)

| Variable | Description | Fichiers | Exemple |
|----------|-------------|----------|---------|
| `COULEUR_PRIMAIRE_HUE` | Teinte de la couleur primaire | globals.css (via sync) | `"145"` |
| `COULEUR_PRIMAIRE_900` | Couleur primaire principale (OKLCH) | globals.css | `"oklch(0.22 0.06 145)"` |
| `COULEUR_ACCENT_HUE` | Teinte de la couleur accent | globals.css (via sync) | `"65"` |
| `COULEUR_ACCENT_500` | Couleur accent (OKLCH) | globals.css | `"oklch(0.72 0.15 65)"` |
| `COULEUR_FOND_50` | Couleur de fond (OKLCH) | globals.css | `"oklch(0.985 0.005 80)"` |
| `FONT_TITRES` | Police des titres | globals.css | `"Playfair Display"` |
| `FONT_CORPS` | Police du corps de texte | globals.css | `"DM Sans"` |

> Note : Pour changer de palette complète, modifier les 3 couleurs OKLCH et relancer sync-client.

---

## SEO (5 variables)

| Variable | Description | Fichiers | Exemple |
|----------|-------------|----------|---------|
| `DOMAINE` | Domaine sans protocole | layout, sitemap, robots, schema.org | `"www.jardins-de-prestige.fr"` |
| `META_TITLE` | Titre par défaut | layout | `"Jardins de Prestige \| Paysagiste de Luxe à Lyon"` |
| `META_DESCRIPTION` | Description meta par défaut | layout | `"Paysagiste haut de gamme à Lyon..."` |
| `META_KEYWORDS` | Mots-clés (séparés par virgules) | layout | `"paysagiste lyon, jardin de luxe..."` |
| `SCHEMA_TYPE` | Type schema.org | JsonLd (si présent) | `"LandscapeArchitect"` |

---

## CONTENU (5 variables)

| Variable | Description | Fichiers | Exemple |
|----------|-------------|----------|---------|
| `SLOGAN` | Slogan principal | HeroSection (H1), Navbar, layout | `"L'Art des Jardins d'Exception"` |
| `ACCROCHE_HERO` | Eyebrow du hero | HeroSection | `"Paysagiste de prestige — Lyon"` |
| `DESCRIPTION_ENTREPRISE` | Description courte (hero, about) | HeroSection, a-propos | `"Nous créons des espaces extérieurs..."` |
| `DESCRIPTION_FOOTER` | Tagline footer | Footer | `"Créateurs de jardins d'exception..."` |
| `DESCRIPTION_APROPOS` | Intro page À Propos | a-propos | `"Fondée en 2009 par Antoine Leroy..."` |

---

## SERVICES (12 variables)

| Variable | Description | Fichiers | Exemple |
|----------|-------------|----------|---------|
| `SERVICE_1_TITRE` | Titre service 1 | services, layout | `"Création de Jardins"` |
| `SERVICE_1_DESC` | Description service 1 | services | `"Conception et réalisation..."` |
| `SERVICE_2_TITRE` | Titre service 2 | services | `"Aménagement de Terrasses"` |
| `SERVICE_2_DESC` | Description service 2 | services | `"Création de terrasses..."` |
| `SERVICE_3_TITRE` | Titre service 3 | services | `"Entretien Paysager"` |
| `SERVICE_3_DESC` | Description service 3 | services | `"Entretien régulier..."` |
| `SERVICE_4_TITRE` | Titre service 4 | services | `"Élagage & Taille"` |
| `SERVICE_4_DESC` | Description service 4 | services | `"Élagage d'arbres..."` |
| `SERVICE_5_TITRE` | Titre service 5 | services | `"Clôtures & Murets"` |
| `SERVICE_5_DESC` | Description service 5 | services | `"Pose de clôtures..."` |
| `SERVICE_6_TITRE` | Titre service 6 | services | `"Arrosage Automatique"` |
| `SERVICE_6_DESC` | Description service 6 | services | `"Installation de systèmes..."` |

---

## RÉSEAUX SOCIAUX (6 variables)

| Variable | Description | Fichiers | Exemple |
|----------|-------------|----------|---------|
| `GOOGLE_MAPS_URL` | URL embed Google Maps (laisser vide si non configuré) | contact | `"https://maps.google.com/..."` |
| `GOOGLE_REVIEWS_URL` | URL vers les avis Google | contact | `""` |
| `FACEBOOK_URL` | URL page Facebook | Footer, company.ts | `"https://facebook.com/jardinsdeprestige"` |
| `INSTAGRAM_URL` | URL profil Instagram | Footer, company.ts | `"https://instagram.com/jardinsdeprestige"` |
| `LINKEDIN_URL` | URL LinkedIn | Footer, company.ts | `"https://linkedin.com/company/..."` |
| `PINTEREST_URL` | URL Pinterest | Footer, company.ts | `"https://pinterest.com/..."` |

---

## TÉMOIGNAGES (12 variables)

| Variable | Description | Fichiers | Exemple |
|----------|-------------|----------|---------|
| `TEMOIGNAGE_1_NOM` | Nom du client 1 | testimonials.ts | `"Marie-Claire Dubois"` |
| `TEMOIGNAGE_1_VILLE` | Ville du client 1 | testimonials.ts | `"Lyon 6ème"` |
| `TEMOIGNAGE_1_TEXTE` | Avis du client 1 | testimonials.ts | `"Jardins de Prestige a transformé..."` |
| `TEMOIGNAGE_1_NOTE` | Note /5 du client 1 | testimonials.ts | `"5"` |
| `TEMOIGNAGE_2_NOM` | Nom du client 2 | testimonials.ts | `"Philippe & Anne Martin"` |
| `TEMOIGNAGE_2_VILLE` | Ville du client 2 | testimonials.ts | `"Écully"` |
| `TEMOIGNAGE_2_TEXTE` | Avis du client 2 | testimonials.ts | `"Le résultat est spectaculaire..."` |
| `TEMOIGNAGE_2_NOTE` | Note /5 du client 2 | testimonials.ts | `"5"` |
| `TEMOIGNAGE_3_NOM` | Nom du client 3 | testimonials.ts | `"Laurent Girard"` |
| `TEMOIGNAGE_3_VILLE` | Ville du client 3 | testimonials.ts | `"Villeurbanne"` |
| `TEMOIGNAGE_3_TEXTE` | Avis du client 3 | testimonials.ts | `"Notre terrasse en ipé est magnifique..."` |
| `TEMOIGNAGE_3_NOTE` | Note /5 du client 3 | testimonials.ts | `"5"` |

---

## INTÉGRATIONS (2 variables)

| Variable | Description | Fichiers | Exemple |
|----------|-------------|----------|---------|
| `N8N_WEBHOOK` | URL webhook n8n pour le formulaire contact | api/contact | `"https://n8n.agencecelexia.fr/webhook/..."` |
| `ADMIN_PASSWORD` | Mot de passe du panel admin | api/admin/login | `"MonMotDePasse2026"` |

---

## PHOTOS (1 variable)

| Variable | Description | Fichiers | Exemple |
|----------|-------------|----------|---------|
| `PACK_PHOTOS_METIER` | Identifiant du pack photos par métier | documentation | `"paysagiste"` |

---

## Comment changer la palette de couleurs

1. Trouver les valeurs OKLCH de vos nouvelles couleurs (outil : oklch.com)
2. Modifier dans CLIENT.md :
   ```
   COULEUR_PRIMAIRE_900: "oklch(0.22 0.06 200)"  ← changer le hue (200 = bleu)
   COULEUR_ACCENT_500: "oklch(0.72 0.15 30)"      ← changer le hue (30 = orange)
   ```
3. Lancer `npm run sync-client` — les tokens dans globals.css seront mis à jour automatiquement

---

**Généré par** : scripts/sync-client.ts | **Maintenu par** : Agence Celexia
