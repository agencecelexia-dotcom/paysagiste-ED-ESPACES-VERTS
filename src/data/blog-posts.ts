import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "preparer-jardin-printemps",
    title: "Comment Préparer Votre Jardin pour le Printemps",
    excerpt:
      "Le printemps approche et il est temps de préparer votre jardin. Découvrez nos conseils d'experts pour un jardin resplendissant dès les premiers beaux jours.",
    content: [
      {
        type: "paragraph",
        content:
          "Le printemps est la saison du renouveau au jardin. Après les mois d'hiver, vos espaces extérieurs ont besoin d'attention pour retrouver toute leur splendeur. Voici notre guide complet pour préparer votre jardin et profiter pleinement de la belle saison.",
      },
      {
        type: "heading",
        content: "Nettoyer et évaluer",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Commencez par un grand nettoyage : ramassez les feuilles mortes, taillez les branches sèches et désherbez les massifs. Profitez-en pour évaluer l'état général de votre jardin et identifier les zones nécessitant une attention particulière.",
      },
      {
        type: "heading",
        content: "Préparer le sol",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Un sol bien préparé est la clé d'un jardin en bonne santé. Aérez la terre avec une grelinette, apportez du compost ou du terreau de qualité, et paillez vos massifs pour conserver l'humidité et limiter les mauvaises herbes.",
      },
      {
        type: "list",
        content: "Les étapes clés de la préparation du sol :",
        items: [
          "Aérer le sol sans le retourner",
          "Apporter du compost mûr (3-5 cm)",
          "Pailler les massifs avec du BRF ou des écorces",
          "Vérifier le pH du sol et ajuster si nécessaire",
        ],
      },
      {
        type: "heading",
        content: "Planifier les plantations",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Mars et avril sont les mois idéaux pour planter arbustes, vivaces et bulbes d'été. Pensez à varier les espèces pour assurer un jardin fleuri du printemps à l'automne. Privilégiez les plantes adaptées à votre sol et à votre exposition.",
      },
      {
        type: "quote",
        content:
          "Un jardin bien planifié au printemps, c'est la garantie de moments de bonheur tout au long de l'année.",
      },
    ],
    featuredImage: "/images/_template/blog/blog-1.jpg",
    category: "saisons",
    author: "Le Dirigeant",
    publishDate: "2025-02-15",
    readingTime: 5,
    tags: ["printemps", "entretien", "plantation", "sol"],
  },
  {
    id: "2",
    slug: "tendances-jardins-2025",
    title: "Les Tendances Jardins 2025 : Nature et Élégance",
    excerpt:
      "Jardins naturalistes, matériaux durables, espaces de bien-être... Découvrez les grandes tendances qui façonneront les jardins de demain.",
    content: [
      {
        type: "paragraph",
        content:
          "L'année 2025 marque un tournant dans l'art des jardins. Plus que jamais, les tendances s'orientent vers un retour à la nature, alliant esthétisme et respect de l'environnement. Voici les tendances majeures à connaître.",
      },
      {
        type: "heading",
        content: "Le jardin naturaliste",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Inspiré des prairies sauvages, le jardin naturaliste privilégie les graminées, les vivaces et les plantes locales dans des compositions qui imitent la nature. Un style à la fois poétique et écologique qui séduit de plus en plus de propriétaires.",
      },
      {
        type: "heading",
        content: "Les espaces de bien-être extérieurs",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Le jardin devient un véritable lieu de ressourcement avec l'intégration de spas, saunas extérieurs, bassins de baignade naturels et espaces de méditation. L'objectif : créer une bulle de sérénité chez soi.",
      },
      {
        type: "heading",
        content: "Matériaux nobles et durables",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Pierre naturelle locale, bois certifié, acier corten, gabions... Les matériaux durables et nobles sont au cœur des aménagements paysagers contemporains, alliant esthétique premium et responsabilité environnementale.",
      },
    ],
    featuredImage: "/images/_template/blog/blog-2.jpg",
    category: "tendances",
    author: "L'Équipe",
    publishDate: "2025-01-20",
    readingTime: 7,
    tags: ["tendances", "design", "naturaliste", "bien-être"],
  },
  {
    id: "3",
    slug: "entretenir-gazon-parfait",
    title: "Les Secrets d'un Gazon Parfait Toute l'Année",
    excerpt:
      "Tonte, arrosage, fertilisation... Tous les secrets de nos experts pour obtenir et maintenir un gazon digne des plus beaux jardins anglais.",
    content: [
      {
        type: "paragraph",
        content:
          "Un gazon impeccable est la signature d'un jardin soigné. Mais obtenir ce tapis vert parfait demande des soins réguliers et des techniques adaptées à chaque saison. Nos paysagistes partagent leurs secrets.",
      },
      {
        type: "heading",
        content: "La tonte : l'art du détail",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Tondez régulièrement (une fois par semaine au printemps) en ne coupant jamais plus d'un tiers de la hauteur du brin. Variez le sens de tonte à chaque passage pour éviter le couchage de l'herbe. En été, relevez la hauteur de coupe pour protéger le gazon de la sécheresse.",
      },
      {
        type: "heading",
        content: "L'arrosage intelligent",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Arrosez tôt le matin, en profondeur et moins fréquemment. Un arrosage de 20-30 minutes deux fois par semaine est préférable à un arrosage léger quotidien. Un système d'arrosage automatique avec sonde d'humidité optimise la consommation d'eau.",
      },
      {
        type: "list",
        content: "Le calendrier de fertilisation :",
        items: [
          "Mars : engrais riche en azote pour la reprise",
          "Juin : engrais équilibré pour le maintien",
          "Septembre : engrais potassique pour renforcer avant l'hiver",
          "Novembre : chaulage si le sol est acide",
        ],
      },
    ],
    featuredImage: "/images/_template/blog/blog-3.jpg",
    category: "entretien",
    author: "Le Dirigeant",
    publishDate: "2024-11-10",
    readingTime: 6,
    tags: ["gazon", "entretien", "tonte", "arrosage"],
  },
  {
    id: "4",
    slug: "choisir-arbres-jardin",
    title: "Bien Choisir ses Arbres : Guide Complet",
    excerpt:
      "Choisir le bon arbre au bon endroit est essentiel. Notre guide vous aide à sélectionner les essences idéales pour votre jardin et votre climat.",
    content: [
      {
        type: "paragraph",
        content:
          "Un arbre est un investissement sur le long terme. Bien choisi et bien planté, il embellira votre jardin pendant des décennies. Voici nos conseils pour faire le bon choix.",
      },
      {
        type: "heading",
        content: "Évaluer votre espace",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Avant de choisir un arbre, évaluez précisément l'espace disponible. Mesurez la distance aux bâtiments, aux clôtures et aux autres arbres. Pensez à la taille adulte de l'arbre, tant en hauteur qu'en envergure.",
      },
      {
        type: "heading",
        content: "Adapter l'essence au terrain",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Le type de sol, l'exposition et le climat de votre région sont déterminants. Un érable du Japon ne s'épanouira pas dans un sol calcaire, tout comme un olivier ne résistera pas aux hivers rigoureux du nord de la France.",
      },
      {
        type: "heading",
        content: "Nos essences favorites",
        level: 2,
      },
      {
        type: "list",
        content: "",
        items: [
          "Magnolia grandiflora : persistant, floraison spectaculaire",
          "Érable champêtre : rustique, superbes couleurs d'automne",
          "Olivier : résistant une fois établi, symbole méditerranéen",
          "Chêne vert : persistant, majestueux, longévité exceptionnelle",
          "Cerisier du Japon : floraison printanière remarquable",
        ],
      },
    ],
    featuredImage: "/images/_template/blog/blog-4.jpg",
    category: "conseils",
    author: "L'Équipe",
    publishDate: "2024-09-05",
    readingTime: 8,
    tags: ["arbres", "plantation", "essences", "conseil"],
  },
  {
    id: "5",
    slug: "amenager-terrasse-bois",
    title: "Aménager une Terrasse en Bois : Guide Complet",
    excerpt:
      "Bois exotique, douglas, composite... Découvrez comment choisir les bons matériaux et concevoir une terrasse en bois durable et élégante.",
    content: [
      {
        type: "paragraph",
        content:
          "La terrasse en bois est l'une des extensions les plus prisées des jardins. Elle crée un lien naturel entre l'intérieur de la maison et le jardin, offrant un espace de vie extérieur chaleureux et esthétique. Mais réussir une terrasse en bois demande de bien choisir ses matériaux, de soigner la pose et d'assurer un entretien régulier.",
      },
      {
        type: "heading",
        content: "Choisir le bon bois pour votre terrasse",
        level: 2,
      },
      {
        type: "list",
        content: "Les essences les plus adaptées :",
        items: [
          "Ipé (Tabebuia) : bois exotique extrêmement dense, durabilité classe 1",
          "Cumaru : excellente résistance aux intempéries, teinte brun-dorée",
          "Douglas traité : bois local, bon rapport qualité-prix",
          "Mélèze : bois européen naturellement résistant, belle patine grise",
          "Composite bois-plastique : zéro entretien, longévité maximale",
        ],
      },
      {
        type: "heading",
        content: "La pose : clés cachées ou visibles ?",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "La technique de pose par clips cachés est la plus esthétique : aucune vis n'est visible en surface. Elle est également préférable pour éviter les points d'entrée d'humidité. Dans tous les cas, laissez un joint de dilatation de 5 à 8 mm entre chaque lame pour permettre les mouvements naturels du bois.",
      },
      {
        type: "quote",
        content:
          "Une terrasse en bois bien conçue et bien entretenue prend de la valeur avec le temps. C'est un investissement qui transforme radicalement la qualité de vie à l'extérieur.",
      },
    ],
    featuredImage: "/images/_template/blog/blog-5.jpg",
    category: "conseils",
    author: "Le Dirigeant",
    publishDate: "2025-01-10",
    readingTime: 7,
    tags: ["terrasse", "bois", "aménagement"],
  },
  {
    id: "6",
    slug: "entretien-jardin-automne",
    title: "Entretien du Jardin en Automne : les Gestes Indispensables",
    excerpt:
      "L'automne est une saison charnière pour le jardin. Découvrez tous les gestes essentiels pour protéger vos plantes et préparer votre jardin à traverser l'hiver.",
    content: [
      {
        type: "paragraph",
        content:
          "L'automne est souvent négligé au jardin, à tort. C'est pourtant la saison où se joue l'avenir de vos massifs, de votre gazon et de vos arbustes. Voici un tour complet des gestes à effectuer pour aborder l'hiver sereinement.",
      },
      {
        type: "heading",
        content: "La taille des arbustes et des vivaces",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "L'automne est le moment idéal pour tailler les arbustes à floraison estivale. Rosiers, buddléias, spirées d'été peuvent être rabattus à deux tiers de leur hauteur. En revanche, attendez le printemps pour les arbustes à floraison printanière comme les forsythias et les lilas.",
      },
      {
        type: "heading",
        content: "Ramassage et valorisation des feuilles mortes",
        level: 2,
      },
      {
        type: "paragraph",
        content:
          "Les feuilles mortes ne sont pas des déchets mais une ressource précieuse. Ramassez-les régulièrement sur la pelouse, mais utilisez-les pour pailler vos massifs. En se décomposant sur 12 à 18 mois, elles produiront un terreau noir et riche.",
      },
      {
        type: "list",
        content: "Le programme d'entretien automnal mois par mois :",
        items: [
          "Septembre : plantation des bulbes de printemps (tulipes, narcisses, jacinthes)",
          "Octobre : taille des haies persistantes, dernière fertilisation du gazon",
          "Novembre : protection des plantes frileuses, paillage épais",
          "Novembre : vidange et hivernage du système d'arrosage automatique",
        ],
      },
      {
        type: "quote",
        content:
          "Le jardinier qui travaille en automne récolte les fruits de son travail au printemps.",
      },
    ],
    featuredImage: "/images/_template/blog/blog-6.jpg",
    category: "saisons",
    author: "L'Équipe",
    publishDate: "2024-10-05",
    readingTime: 6,
    tags: ["automne", "entretien", "taille", "préparation"],
  },
];
