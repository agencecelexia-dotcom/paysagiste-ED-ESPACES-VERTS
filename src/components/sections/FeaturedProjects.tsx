import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import { projects } from "@/data/projects";
import { PROJECT_CATEGORY_LABELS } from "@/types";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  if (featured.length === 0) return null;

  const [main, ...rest] = featured;

  return (
    <section className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <FadeUp className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-600 mb-3">
              Portfolio
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900">
              Nos Réalisations
            </h2>
          </div>
          <Link
            href="/realisations"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-primary-900 transition-colors"
          >
            Voir tout
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </FadeUp>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Main large project */}
          <FadeUp>
            <Link href={`/realisations/${main.slug}`} className="group relative block overflow-hidden rounded-2xl aspect-[4/3]">
              <Image
                src={main.featuredImage}
                alt={main.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient permanent — texte toujours lisible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-xs font-semibold text-accent-400 uppercase tracking-wider mb-1">
                  {PROJECT_CATEGORY_LABELS[main.category]}
                </p>
                <h3 className="font-heading text-xl font-bold text-white">{main.title}</h3>
                <p className="text-sm text-neutral-300 mt-1">{main.location} — {main.year}</p>
              </div>
            </Link>
          </FadeUp>

          {/* Two smaller projects */}
          <div className="grid grid-rows-2 gap-4">
            {rest.map((project, idx) => (
              <FadeUp key={project.id} delay={(idx + 1) * 0.1}>
                <Link href={`/realisations/${project.slug}`} className="group relative block overflow-hidden rounded-2xl h-full min-h-[180px]">
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                  {/* Gradient permanent */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent group-hover:from-black/90 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-xs font-semibold text-accent-400 uppercase tracking-wider mb-1">
                      {PROJECT_CATEGORY_LABELS[project.category]}
                    </p>
                    <h3 className="font-heading text-lg font-bold text-white">{project.title}</h3>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
