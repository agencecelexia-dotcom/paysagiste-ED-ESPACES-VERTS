import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "creation-jardins",
    slug: "creation-de-jardins",
    title: "Création de Jardins",
    shortDescription:
      "Conception et réalisation de jardins sur mesure, alliant esthétisme et fonctionnalité pour créer votre espace de vie extérieur idéal.",
    fullDescription:
      "Notre équipe de paysagistes conçoit des jardins uniques qui reflètent votre personnalité et s'intègrent harmonieusement à votre environnement. De l'étude paysagère initiale à la réalisation finale, nous vous accompagnons à chaque étape pour créer un jardin d'exception qui vous ressemble. Nous sélectionnons les essences végétales les plus adaptées à votre terrain et à votre climat pour garantir un résultat pérenne et éblouissant.",
    features: [
      "Étude paysagère personnalisée",
      "Plans 3D de votre futur jardin",
      "Sélection végétale adaptée au terroir",
      "Réalisation clé en main",
      "Suivi post-plantation",
    ],
    image: "/images/_template/services/service-1.jpg",
    icon: "leaf",
    order: 1,
  },
  {
    id: "amenagement-terrasses",
    slug: "amenagement-de-terrasses",
    title: "Aménagement de Terrasses",
    shortDescription:
      "Création de terrasses et allées en matériaux nobles pour sublimer vos espaces extérieurs et prolonger votre habitat.",
    fullDescription:
      "Nous concevons des terrasses qui deviennent de véritables pièces à vivre en plein air. Pierre naturelle, bois exotique, dalles en grès cérame — nous maîtrisons tous les matériaux nobles pour créer un espace à la fois esthétique et durable. Chaque projet est pensé pour s'harmoniser avec l'architecture de votre maison et le paysage environnant.",
    features: [
      "Pierre naturelle et bois noble",
      "Conception sur mesure",
      "Éclairage d'ambiance intégré",
      "Drainage professionnel",
      "Garantie décennale",
    ],
    image: "/images/_template/services/service-2.jpg",
    icon: "grid",
    order: 2,
  },
  {
    id: "entretien-paysager",
    slug: "entretien-paysager",
    title: "Entretien Paysager",
    shortDescription:
      "Contrats d'entretien sur mesure pour préserver la beauté et la santé de vos espaces verts tout au long de l'année.",
    fullDescription:
      "Un jardin d'exception mérite un entretien à la hauteur. Nos équipes d'experts assurent l'entretien régulier de vos espaces verts avec un soin méticuleux. Taille, tonte, désherbage, fertilisation — chaque intervention est planifiée selon le calendrier végétal pour garantir un résultat impeccable en toute saison.",
    features: [
      "Contrats d'entretien annuels",
      "Taille et tonte régulières",
      "Fertilisation et traitements bio",
      "Nettoyage saisonnier",
      "Rapport d'intervention détaillé",
    ],
    image: "/images/_template/services/service-3.jpg",
    icon: "scissors",
    order: 3,
  },
  {
    id: "elagage",
    slug: "elagage-et-taille",
    title: "Élagage & Taille",
    shortDescription:
      "Élagage professionnel et taille artistique de vos arbres et haies pour garantir leur santé et leur beauté.",
    fullDescription:
      "L'élagage est un art qui requiert expertise et précision. Nos arboristes certifiés interviennent sur tous types d'arbres, des plus courants aux essences les plus rares. Nous pratiquons une taille raisonnée, respectueuse de la physiologie de l'arbre, pour préserver sa santé et révéler sa beauté naturelle.",
    features: [
      "Arboristes certifiés",
      "Taille douce et raisonnée",
      "Abattage sécurisé",
      "Dessouchage et broyage",
      "Intervention en hauteur",
    ],
    image: "/images/_template/services/service-4.jpg",
    icon: "tree",
    order: 4,
  },
  {
    id: "clotures-murets",
    slug: "clotures-et-murets",
    title: "Clôtures & Murets",
    shortDescription:
      "Pose de clôtures élégantes et construction de murets en pierre pour délimiter et embellir votre propriété.",
    fullDescription:
      "Nous créons des clôtures et murets qui allient sécurité, intimité et esthétisme. Pierre sèche, gabions, bois, aluminium — nous travaillons avec les meilleurs matériaux pour concevoir des ouvrages durables qui s'intègrent naturellement dans votre paysage et valorisent votre propriété.",
    features: [
      "Murets en pierre sèche",
      "Clôtures en aluminium design",
      "Gabions décoratifs",
      "Portails et portillons",
      "Intégration paysagère",
    ],
    image: "/images/_template/services/service-5.jpg",
    icon: "fence",
    order: 5,
  },
  {
    id: "arrosage-automatique",
    slug: "arrosage-automatique",
    title: "Arrosage Automatique",
    shortDescription:
      "Installation de systèmes d'arrosage automatique intelligents pour un jardin verdoyant avec une consommation d'eau maîtrisée.",
    fullDescription:
      "Un système d'arrosage bien conçu est la clé d'un jardin en pleine santé. Nous installons des systèmes d'arrosage automatique de dernière génération, pilotés par des programmateurs intelligents qui s'adaptent aux conditions météorologiques. Économies d'eau garanties et résultat optimal pour vos plantations.",
    features: [
      "Étude hydraulique complète",
      "Programmateurs connectés",
      "Goutte-à-goutte et aspersion",
      "Capteurs météo intégrés",
      "Économie d'eau jusqu'à 40%",
    ],
    image: "/images/_template/services/service-6.jpg",
    icon: "droplet",
    order: 6,
  },
];
