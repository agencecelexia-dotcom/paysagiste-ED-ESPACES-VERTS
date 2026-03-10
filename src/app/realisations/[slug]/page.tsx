import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import BeforeAfterSlider from "@/components/features/BeforeAfterSlider";
import { projects } from "@/data/projects";
import { PROJECT_CATEGORY_LABELS } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Projet non trouvé" };

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-primary-900">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={project.featuredImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10">
          <FadeIn>
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors mb-6"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Retour aux réalisations
            </Link>
            <Badge variant="accent" className="mb-4">
              {PROJECT_CATEGORY_LABELS[project.category]}
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
              {project.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-neutral-300">
              {project.surface && (
                <span className="flex items-center gap-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                  {project.surface}
                </span>
              )}
              {project.duration && (
                <span className="flex items-center gap-1">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {project.duration}
                </span>
              )}
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {project.location}
              </span>
              <span>{project.year}</span>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Content */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <FadeIn>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {project.fullDescription}
              </p>
            </FadeIn>

            {/* Challenge & Solution */}
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <FadeIn delay={0.1}>
                <div className="rounded-xl bg-neutral-50 p-6">
                  <h2 className="text-xl font-bold text-neutral-900 mb-3">
                    Le Défi
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="rounded-xl bg-primary-50 p-6">
                  <h2 className="text-xl font-bold text-neutral-900 mb-3">
                    Notre Solution
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Before/After */}
            {project.beforeImage && project.afterImage && (
              <FadeIn className="mt-12">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Avant / Après
                </h2>
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                />
              </FadeIn>
            )}

            {/* Gallery */}
            {project.images.length > 0 && (
              <FadeIn className="mt-12">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Galerie Photos
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Photo ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </FadeIn>
            )}

            {/* CTA */}
            <FadeIn className="mt-16 text-center rounded-xl bg-primary-900 p-10">
              <h2 className="text-2xl font-bold text-white">
                Un projet similaire ?
              </h2>
              <p className="mt-2 text-neutral-200">
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="primary" size="lg">
                  Demander un devis
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <FadeIn className="mt-20">
              <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
                Projets Similaires
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                {relatedProjects.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/realisations/${rp.slug}`}
                    className="group relative block overflow-hidden rounded-xl aspect-[4/3]"
                  >
                    <Image
                      src={rp.featuredImage}
                      alt={rp.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-bold text-white">{rp.title}</h3>
                      <p className="mt-1 text-sm text-neutral-200">{rp.location}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          )}
        </Container>
      </section>
    </>
  );
}
