import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import FadeUp from "@/components/animations/FadeUp";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service non trouvé" };
  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: { images: [service.image] },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          <Image src={service.image} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <nav className="mb-6 text-sm text-neutral-300">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{service.title}</span>
            </nav>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-neutral-200">
              {service.shortDescription}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Image */}
      <section className="py-12 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp>
            <div className="relative aspect-[16/6] overflow-hidden rounded-2xl">
              <Image src={service.image} alt={service.title} fill className="object-cover" sizes="100vw" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Description + Features */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeUp>
              <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-6">
                Notre approche
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                {service.fullDescription}
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-6">
                Ce qui est inclus
              </h3>
              <ul className="space-y-4">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 h-5 w-5 rounded-full bg-accent-500 flex items-center justify-center">
                      <svg className="h-3 w-3 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700">{f}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeUp className="mb-10">
            <h2 className="font-heading text-3xl font-bold text-neutral-900">
              Nos autres services
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((svc, i) => (
              <FadeUp key={svc.id} delay={i * 0.08}>
                <Link
                  href={`/services/${svc.slug}`}
                  className="group block p-6 rounded-2xl border border-neutral-200 bg-white hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-neutral-900 group-hover:text-primary-900 mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{svc.shortDescription}</p>
                  <p className="mt-3 text-xs font-semibold text-accent-600">Découvrir →</p>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Intéressé par ce service ?
            </h2>
            <p className="text-neutral-200 mb-8">
              Contactez-nous pour un devis gratuit et sans engagement.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 rounded-lg bg-accent-500 text-white font-semibold hover:bg-accent-600 transition-colors"
            >
              Demander un Devis
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
