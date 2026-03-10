export interface CompanyInfo {
  name: string;
  legalName: string;
  siret: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    region: string;
    country: string;
  };
  phone: string;
  email: string;
  hours: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    pinterest?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  icon: string;
  order: number;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  featuredImage: string;
  surface?: string;
  duration?: string;
  location: string;
  year: number;
  featured: boolean;
  services: string[];
}

export type ProjectCategory =
  | "jardin"
  | "terrasse"
  | "piscine"
  | "cloture"
  | "elagage"
  | "amenagement-complet";

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  jardin: "Jardins",
  terrasse: "Terrasses & Allées",
  piscine: "Abords de Piscine",
  cloture: "Clôtures & Murets",
  elagage: "Élagage & Taille",
  "amenagement-complet": "Aménagement Complet",
};

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole?: string;
  clientPhoto?: string;
  quote: string;
  rating: number;
  projectType: string;
  date: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: BlogSection[];
  featuredImage: string;
  category: BlogCategory;
  author: string;
  publishDate: string;
  readingTime: number;
  tags: string[];
}

export interface BlogSection {
  type: "paragraph" | "heading" | "image" | "list" | "quote";
  content: string;
  items?: string[];
  imageAlt?: string;
  level?: 2 | 3;
}

export type BlogCategory = "conseils" | "saisons" | "tendances" | "entretien";

export const BLOG_CATEGORY_LABELS: Record<BlogCategory, string> = {
  conseils: "Conseils",
  saisons: "Saisons",
  tendances: "Tendances",
  entretien: "Entretien",
};

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  specialties: string[];
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  projectDescription: string;
  budget: string;
  rgpdConsent: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
