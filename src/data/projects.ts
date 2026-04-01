import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "creation-jardin-courpaley",
    slug: "creation-jardin-courpaley",
    title: "Création de Jardin à Courpaley",
    category: "jardin",
    shortDescription:
      "Terrain nu transformé en jardin complet : gazon en plaques, clôture composite et finitions.",
    fullDescription:
      "Le client avait un terrain en terre battue, sans rien dessus. On a tout préparé : nivellement, apport de terre végétale, pose de gazon en plaques pour un résultat immédiat. On a terminé par une clôture composite anthracite tout autour pour fermer la propriété proprement.",
    challenge:
      "Sol très compact, pas de végétation du tout. Il fallait tout reprendre de zéro, du terrassement à la finition.",
    solution:
      "On a retourné le sol, apporté du terreau, posé le gazon en plaques et installé la clôture sur fondations béton. Résultat propre en 2 semaines.",
    images: [
      "/images/_template/portfolio/apres/projet-1-apres.jpg",
      "/images/_template/portfolio/apres/projet-2-apres.jpg",
      "/images/_template/portfolio/apres/projet-3-apres.jpg",
    ],
    beforeImage: "/images/_template/portfolio/avant/projet-1-avant.jpg",
    afterImage: "/images/_template/portfolio/apres/projet-1-apres.jpg",
    featuredImage: "/images/_template/portfolio/apres/projet-1-apres.jpg",
    surface: "250 m²",
    duration: "2 semaines",
    location: "Courpaley",
    year: 2025,
    featured: true,
    services: ["creation-jardins"],
  },
  {
    id: "terrasse-travertin-nangis",
    slug: "terrasse-travertin-nangis",
    title: "Terrasse en Travertin à Nangis",
    category: "terrasse",
    shortDescription:
      "Pose de travertin autour d'une piscine avec taille de haies et nettoyage complet.",
    fullDescription:
      "Les abords de la piscine étaient vieillissants, les haies partaient dans tous les sens. On a posé du travertin ivoire sur dalle stabilisée, taillé toutes les haies bien droit, et nettoyé l'ensemble. Le coin piscine est devenu un vrai espace détente.",
    challenge:
      "Ancien dallage abîmé, haies pas entretenues depuis longtemps. Il fallait tout reprendre sans toucher à la piscine.",
    solution:
      "Dépose de l'ancien revêtement, pose du travertin, taille de toutes les haies et nettoyage haute pression des abords.",
    images: [
      "/images/_template/portfolio/apres/projet-2-apres.jpg",
      "/images/_template/portfolio/apres/projet-3-apres.jpg",
    ],
    beforeImage: "/images/_template/portfolio/avant/projet-2-avant.jpg",
    afterImage: "/images/_template/portfolio/apres/projet-2-apres.jpg",
    featuredImage: "/images/_template/portfolio/apres/projet-2-apres.jpg",
    surface: "80 m²",
    duration: "3 semaines",
    location: "Nangis",
    year: 2025,
    featured: true,
    services: ["amenagement-terrasses"],
  },
  {
    id: "allee-amenagee-noisy",
    slug: "allee-amenagee-noisy-le-grand",
    title: "Allée Aménagée à Noisy-le-Grand",
    category: "terrasse",
    shortDescription:
      "Réfection complète d'une allée d'entrée : bordures, gravier stabilisé et désherbage.",
    fullDescription:
      "L'allée était en mauvais état : béton fissuré, mauvaises herbes partout, bordures cassées. On a tout repris : nouvelles bordures béton, gravier stabilisé, et désherbage complet des abords. L'entrée de la maison a retrouvé un aspect propre et soigné.",
    challenge:
      "Allée étroite le long de la façade, envahie par les mauvaises herbes. Il fallait intervenir sans abîmer les fondations de la maison.",
    solution:
      "Désherbage manuel, pose de bordures neuves, gravier stabilisé et paillage minéral pour éviter que ça repousse.",
    images: [
      "/images/_template/portfolio/apres/projet-3-apres.jpg",
      "/images/_template/portfolio/apres/projet-4-apres.jpg",
    ],
    beforeImage: "/images/_template/portfolio/avant/projet-3-avant.jpg",
    afterImage: "/images/_template/portfolio/apres/projet-3-apres.jpg",
    featuredImage: "/images/_template/portfolio/apres/projet-3-apres.jpg",
    surface: "30 m²",
    duration: "1 semaine",
    location: "Noisy-le-Grand",
    year: 2025,
    featured: true,
    services: ["creation-jardins", "amenagement-terrasses"],
  },
  {
    id: "cloture-composite-provins",
    slug: "cloture-composite-provins",
    title: "Clôture Composite à Provins",
    category: "cloture",
    shortDescription:
      "Pose de clôture composite anthracite avec remise en état du jardin.",
    fullDescription:
      "Le jardin était en friche totale : herbes hautes, pas de clôture, terrain bosselé. On a tout débroussaillé, nivelé le terrain, posé des panneaux composites anthracite sur toute la longueur, et fini par du gazon et quelques galets blancs en déco.",
    challenge:
      "Terrain en friche complète, pas de délimitation de propriété. Sol très irrégulier.",
    solution:
      "Débroussaillage, nivellement, pose des poteaux et panneaux sur fondations béton, gazon et finitions.",
    images: [
      "/images/_template/portfolio/apres/projet-4-apres.jpg",
    ],
    beforeImage: "/images/_template/portfolio/avant/projet-4-avant.jpg",
    afterImage: "/images/_template/portfolio/apres/projet-4-apres.jpg",
    featuredImage: "/images/_template/portfolio/apres/projet-4-apres.jpg",
    surface: "35 ml",
    duration: "2 semaines",
    location: "Provins",
    year: 2025,
    featured: false,
    services: ["clotures-murets"],
  },
  {
    id: "elagage-grands-arbres-melun",
    slug: "elagage-grands-arbres-melun",
    title: "Élagage de Grands Arbres à Melun",
    category: "elagage",
    shortDescription:
      "Élagage en hauteur et abattage d'arbres dangereux chez un particulier.",
    fullDescription:
      "Plusieurs grands arbres menaçaient la maison et les lignes électriques. On est intervenu en grimpe pour tailler, réduire et abattre les arbres les plus dangereux. Tout a été broyé et évacué sur place.",
    challenge:
      "Arbres très hauts, proches de la maison et des câbles. Pas de place pour un engin, tout à faire en grimpe.",
    solution:
      "Élagage en grimpe avec harnais et cordes, démontage branche par branche. Broyage sur place pour limiter les allers-retours.",
    images: [
      "/images/_template/portfolio/apres/projet-5-apres.jpg",
    ],
    beforeImage: "/images/_template/portfolio/avant/projet-5-avant.jpg",
    afterImage: "/images/_template/portfolio/apres/projet-5-apres.jpg",
    featuredImage: "/images/_template/portfolio/apres/projet-5-apres.jpg",
    surface: "500 m²",
    duration: "3 jours",
    location: "Melun",
    year: 2025,
    featured: false,
    services: ["elagage"],
  },
  {
    id: "amenagement-complet-fontenay",
    slug: "amenagement-complet-fontenay-tresigny",
    title: "Aménagement Complet à Fontenay-Trésigny",
    category: "amenagement-complet",
    shortDescription:
      "Reprise totale d'une propriété : débroussaillage, pelouse, haies et clôtures.",
    fullDescription:
      "La propriété était à l'abandon depuis des années : ronces, herbes hautes partout, aucun entretien. On a tout repris en plusieurs phases : débroussaillage, évacuation, préparation du sol, semis de gazon, taille des haies et tonte de finition. Plus de 1000 m² remis en état.",
    challenge:
      "Terrain complètement envahi. Ronces et herbes hautes rendaient l'espace impraticable. Pas entretenu depuis plusieurs années.",
    solution:
      "Débroussaillage mécanique, évacuation des déchets, préparation du sol, semis et tonte. Résultat : une pelouse nette avec des bandes de tonte bien droites.",
    images: [
      "/images/_template/portfolio/apres/projet-6-apres.jpg",
      "/images/_template/portfolio/apres/projet-1-apres.jpg",
      "/images/_template/portfolio/apres/projet-2-apres.jpg",
    ],
    beforeImage: "/images/_template/portfolio/avant/projet-6-avant.jpg",
    afterImage: "/images/_template/portfolio/apres/projet-6-apres.jpg",
    featuredImage: "/images/_template/portfolio/apres/projet-6-apres.jpg",
    surface: "1000 m²",
    duration: "4 semaines",
    location: "Fontenay-Trésigny",
    year: 2025,
    featured: true,
    services: ["creation-jardins", "amenagement-terrasses", "clotures-murets"],
  },
];
