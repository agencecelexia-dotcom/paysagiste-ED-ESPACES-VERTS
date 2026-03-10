import type { Testimonial } from "@/types";
import { clientConfig } from "@/config/client.config";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    clientName: clientConfig.TEMOIGNAGE_1_NOM,
    clientRole: `Propriétaire à ${clientConfig.TEMOIGNAGE_1_VILLE}`,
    quote: clientConfig.TEMOIGNAGE_1_TEXTE,
    rating: parseInt(clientConfig.TEMOIGNAGE_1_NOTE, 10),
    projectType: "Création de jardin",
    date: "2024-06",
  },
  {
    id: "2",
    clientName: clientConfig.TEMOIGNAGE_2_NOM,
    clientRole: `Propriétaires à ${clientConfig.TEMOIGNAGE_2_VILLE}`,
    quote: clientConfig.TEMOIGNAGE_2_TEXTE,
    rating: parseInt(clientConfig.TEMOIGNAGE_2_NOTE, 10),
    projectType: "Abords de piscine",
    date: "2024-03",
  },
  {
    id: "3",
    clientName: clientConfig.TEMOIGNAGE_3_NOM,
    clientRole: `Propriétaire à ${clientConfig.TEMOIGNAGE_3_VILLE}`,
    quote: clientConfig.TEMOIGNAGE_3_TEXTE,
    rating: parseInt(clientConfig.TEMOIGNAGE_3_NOTE, 10),
    projectType: "Aménagement de terrasse",
    date: "2024-08",
  },
];
