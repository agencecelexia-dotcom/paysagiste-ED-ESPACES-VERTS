import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "creation-jardins",
    slug: "creation-de-jardins",
    title: "Création de Jardins",
    shortDescription:
      "On crée votre jardin de A à Z : préparation du terrain, gazon, plantations, clôtures. Tout est fait sur mesure.",
    fullDescription:
      "Vous partez d'un terrain vide ou d'un jardin qui ne vous plaît plus ? On s'en occupe. On prépare le sol, on pose le gazon (en plaques ou en semis selon le budget), on plante ce qu'il faut et on installe les clôtures si besoin. On adapte tout à votre terrain et à ce que vous voulez en faire — pas de jardin copié-collé.",
    features: [
      "Étude de votre terrain sur place",
      "Préparation du sol et nivellement",
      "Pose de gazon en plaques ou semis",
      "Plantations adaptées à votre sol",
      "Suivi après plantation",
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
      "Terrasses en pierre, bois ou dalles, allées et bordures. On aménage vos extérieurs pour en profiter vraiment.",
    fullDescription:
      "On pose des terrasses en travertin, en bois, en dalles béton — selon vos goûts et votre budget. On fait aussi les allées, les bordures, les marches. L'idée c'est que votre extérieur soit pratique et agréable à vivre, pas juste joli sur une photo.",
    features: [
      "Terrasses en pierre, bois ou dalles",
      "Allées et bordures",
      "Pose sur dalle stabilisée",
      "Drainage intégré",
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
      "Tonte, taille de haies, désherbage, nettoyage. On entretient votre jardin toute l'année.",
    fullDescription:
      "Un jardin, ça s'entretient. On passe régulièrement pour tondre, tailler les haies, désherber les massifs et nettoyer. On peut intervenir ponctuellement ou mettre en place un contrat à l'année — comme ça, vous n'avez plus à y penser.",
    features: [
      "Tonte régulière",
      "Taille de haies et arbustes",
      "Désherbage des massifs",
      "Nettoyage saisonnier",
      "Contrats à l'année possibles",
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
      "Élagage, abattage, taille d'arbres et d'arbustes. On intervient en toute sécurité, même en hauteur.",
    fullDescription:
      "Vos arbres sont trop hauts, mal en point, ou trop proches de la maison ? On intervient en grimpe ou avec nacelle pour élaguer, réduire ou abattre en toute sécurité. On s'occupe aussi du broyage et de l'évacuation des déchets.",
    features: [
      "Élagage en grimpe",
      "Abattage sécurisé",
      "Taille de réduction",
      "Dessouchage et broyage",
      "Évacuation des déchets verts",
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
      "Clôtures composite, alu, bois, grillage, murets et portails. On ferme et on sécurise votre terrain.",
    fullDescription:
      "On pose tous types de clôtures : panneaux composites, aluminium, bois, grillage rigide. On fait aussi les murets, les portails et les portillons. C'est solide, propre, et ça s'intègre bien dans votre jardin.",
    features: [
      "Clôtures composite et aluminium",
      "Grillage rigide",
      "Murets et bordures",
      "Portails et portillons",
      "Fondations béton solides",
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
      "Installation d'arrosage automatique pour un jardin toujours vert sans y penser.",
    fullDescription:
      "On installe des systèmes d'arrosage automatique adaptés à votre jardin. Aspersion, goutte-à-goutte, programmateur — tout est réglé pour que votre pelouse et vos plantes soient arrosées au bon moment, sans gaspiller d'eau.",
    features: [
      "Étude de votre terrain",
      "Aspersion et goutte-à-goutte",
      "Programmateur automatique",
      "Réglage zone par zone",
      "Économie d'eau",
    ],
    image: "/images/_template/services/service-6.jpg",
    icon: "droplet",
    order: 6,
  },
];
