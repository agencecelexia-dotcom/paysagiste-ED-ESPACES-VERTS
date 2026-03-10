import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import StatsSection from "@/components/sections/StatsSection";
import { team } from "@/data/team";
import { clientConfig } from "@/config/client.config";

export const metadata: Metadata = {
  title: "À Propos",
  description: `Découvrez l'histoire de ${clientConfig.NOM_ENTREPRISE}, notre équipe de paysagistes passionnés et nos valeurs. Plus de ${clientConfig.ANNEES_EXPERIENCE} ans d'expertise au service de vos jardins à ${clientConfig.VILLE}.`,
};

const values = [
  {
    title: "Excellence",
    description: "Nous visons la perfection dans chaque détail, du choix des matériaux à la finition.",
  },
  {
    title: "Créativité",
    description: "Chaque jardin est une œuvre unique, conçue sur mesure selon vos envies.",
  },
  {
    title: "Durabilité",
    description: "Nous privilégions les pratiques écologiques et les matériaux responsables.",
  },
  {
    title: "Proximité",
    description: "Un accompagnement personnalisé et transparent, de la conception à l'entretien.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-primary-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/_template/hero/hero-principal.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <Container className="relative z-10 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              À Propos
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-200">
              L&apos;histoire d&apos;une passion pour l&apos;art des jardins
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <Container>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <FadeIn className="lg:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/_template/equipe/equipe-groupe.jpg"
                  alt="Notre équipe au travail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Notre Histoire
              </h2>
              <div className="mt-4 h-1 w-12 rounded-full bg-accent-500" />
              <p className="mt-6 text-neutral-600 leading-relaxed">
                {clientConfig.DESCRIPTION_APROPOS}
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Depuis plus de {clientConfig.ANNEES_EXPERIENCE} ans, notre équipe d&apos;experts conçoit et réalise
                des jardins d&apos;exception dans la région de {clientConfig.VILLE}. Notre approche
                allie créativité, expertise technique et respect de l&apos;environnement
                pour donner vie à des espaces uniques qui reflètent la personnalité de
                chaque client.
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Labellisés QualiPaysage et engagés dans une démarche éco-responsable,
                nous sélectionnons les meilleurs matériaux et les essences les plus
                adaptées pour garantir des réalisations pérennes et respectueuses de la
                biodiversité.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-[clamp(4rem,8vw,8rem)] bg-white">
        <Container>
          <FadeIn>
            <SectionHeading
              title="Nos Valeurs"
              subtitle="Les principes qui guident notre travail au quotidien"
            />
          </FadeIn>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="text-center rounded-xl bg-neutral-50 p-5 sm:p-8 h-full">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 font-heading text-xl font-bold">
                    {value.title[0]}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Team */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <Container>
          <FadeIn>
            <SectionHeading
              title="Notre Équipe"
              subtitle="Des passionnés au service de vos projets"
            />
          </FadeIn>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <FadeIn key={member.id} delay={index * 0.1}>
                <div className="group text-center">
                  <div className="relative mx-auto h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 overflow-hidden rounded-full mb-4">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-accent-600">
                    {member.role}
                  </p>
                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-neutral-100">
        <Container className="text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              Certifications & Labels
            </h2>
            <p className="text-neutral-600 mb-8">
              Des garanties de qualité et de professionnalisme
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 items-center">
              {["QualiPaysage", "RGE", "Artisan Certifié", "Éco-Jardin"].map(
                (label) => (
                  <div
                    key={label}
                    className="rounded-lg bg-white px-8 py-4 text-sm font-semibold text-neutral-700 shadow-sm"
                  >
                    {label}
                  </div>
                )
              )}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-center">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-white">
              Envie de travailler ensemble ?
            </h2>
            <p className="mt-4 text-neutral-200 max-w-2xl mx-auto">
              Rencontrons-nous pour discuter de votre projet et imaginer ensemble
              le jardin de vos rêves.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Contactez-nous
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
