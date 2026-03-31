import type { Project, ProjectCategory, Service, Testimonial } from "@/types";

/* ───────── Projects ───────── */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function projectFromRow(row: any): Project {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    category: row.category as ProjectCategory,
    shortDescription: row.short_description,
    fullDescription: row.full_description,
    challenge: row.challenge,
    solution: row.solution,
    images: row.images ?? [],
    beforeImage: row.before_image ?? undefined,
    afterImage: row.after_image ?? undefined,
    featuredImage: row.featured_image,
    surface: row.surface ?? undefined,
    duration: row.duration ?? undefined,
    location: row.location,
    year: row.year,
    featured: row.featured,
    services: row.services ?? [],
  };
}

export function projectToRow(p: Project) {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    category: p.category,
    short_description: p.shortDescription,
    full_description: p.fullDescription,
    challenge: p.challenge,
    solution: p.solution,
    images: p.images,
    before_image: p.beforeImage ?? null,
    after_image: p.afterImage ?? null,
    featured_image: p.featuredImage,
    surface: p.surface ?? null,
    duration: p.duration ?? null,
    location: p.location,
    year: p.year,
    featured: p.featured,
    services: p.services,
  };
}

/* ───────── Services ───────── */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function serviceFromRow(row: any): Service {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    shortDescription: row.short_description,
    fullDescription: row.full_description,
    features: row.features ?? [],
    image: row.image,
    icon: row.icon,
    order: row.order,
  };
}

export function serviceToRow(s: Service) {
  return {
    id: s.id,
    slug: s.slug,
    title: s.title,
    short_description: s.shortDescription,
    full_description: s.fullDescription,
    features: s.features,
    image: s.image,
    icon: s.icon,
    order: s.order,
  };
}

/* ───────── Testimonials ───────── */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function testimonialFromRow(row: any): Testimonial {
  return {
    id: row.id,
    clientName: row.client_name,
    clientRole: row.client_role ?? undefined,
    clientPhoto: row.client_photo ?? undefined,
    quote: row.quote,
    rating: row.rating,
    projectType: row.project_type,
    date: row.date,
  };
}

export function testimonialToRow(t: Testimonial) {
  return {
    id: t.id,
    client_name: t.clientName,
    client_role: t.clientRole ?? null,
    client_photo: t.clientPhoto ?? null,
    quote: t.quote,
    rating: t.rating,
    project_type: t.projectType,
    date: t.date,
  };
}
