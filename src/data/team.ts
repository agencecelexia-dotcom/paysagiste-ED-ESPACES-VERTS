import type { TeamMember } from "@/types";
import { clientConfig } from "@/config/client.config";

export const team: TeamMember[] = [
  {
    id: "1",
    name: `${clientConfig.PRENOM_DIRIGEANT} ${clientConfig.NOM_DIRIGEANT}`,
    role: `Fondateur & ${clientConfig.DIPLOME_DIRIGEANT}`,
    bio: `${clientConfig.DIPLOME_DIRIGEANT.charAt(0).toUpperCase() + clientConfig.DIPLOME_DIRIGEANT.slice(1)}, ${clientConfig.PRENOM_DIRIGEANT} a fondé ${clientConfig.NOM_ENTREPRISE} en ${clientConfig.ANNEE_CREATION} avec la vision de créer des espaces extérieurs d'exception. Son expertise en design et sa passion pour la botanique guident chaque projet.`,
    photo: "/images/_template/equipe/dirigeant.jpg",
    specialties: ["Design paysager", "Architecture de jardins", "Gestion de projets"],
  },
  {
    id: "2",
    name: "Sophie Blanchard",
    role: "Ingénieure Paysagiste",
    bio: "Spécialiste des écosystèmes végétaux, Sophie apporte une approche scientifique et écologique à nos projets. Elle conçoit des jardins durables et biodiversifiés, en harmonie avec la nature environnante.",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    specialties: ["Écologie paysagère", "Sélection végétale", "Jardins durables"],
  },
  {
    id: "3",
    name: "Marc Dupont",
    role: "Chef d'Équipe Paysagiste",
    bio: "Avec plus de 20 ans d'expérience sur le terrain, Marc est le garant de l'excellence d'exécution de nos chantiers. Son savoir-faire en maçonnerie paysagère et en plantation est reconnu dans toute la région.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    specialties: ["Maçonnerie paysagère", "Plantation", "Arrosage automatique"],
  },
  {
    id: "4",
    name: "Julie Martinez",
    role: "Arboriste Certifiée",
    bio: "Julie est notre experte en soins arboricoles. Certifiée European Tree Worker, elle pratique une taille raisonnée respectueuse de la physiologie des arbres, des plus jeunes aux centenaires.",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    specialties: ["Élagage", "Diagnostic arboricole", "Taille douce"],
  },
];
