import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import StatsSection from "@/components/sections/StatsSection";
import { clientConfig } from "@/config/client.config";

export const metadata: Metadata = {
  title: "À Propos",
  description: `${clientConfig.NOM_ENTREPRISE}, paysagiste en Seine-et-Marne. ${clientConfig.ANNEES_EXPERIENCE} ans d'expérience, 250+ projets réalisés.`,
};

const values = [
  {
    title: "Sérieux",
    description: "On fait ce qu'on dit, dans les délais et le budget annoncés.",
  },
  {
    title: "Sur mesure",
    description: "Chaque jardin est différent. On s'adapte à votre terrain et vos envies.",
  },
  {
    title: "Propreté",
    description: "On laisse le chantier propre. C'est la base, mais on y tient.",
  },
  {
    title: "Proximité",
    description: "On est du coin, on se déplace vite, et on reste joignable.",
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
              Qui on est, comment on travaille
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
                Depuis {clientConfig.ANNEES_EXPERIENCE} ans, on intervient dans toute la Seine-et-Marne
                pour créer, aménager et entretenir des espaces verts. Notre truc, c&apos;est
                le travail bien fait : on arrive, on bosse, on laisse le chantier propre,
                et le client est content.
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                On est une petite équipe, ce qui veut dire que c&apos;est Ethan qui vient
                sur le terrain, qui fait le devis et qui suit le chantier. Pas
                d&apos;intermédiaire, pas de mauvaise surprise.
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
              title="Comment on Travaille"
              subtitle="Des principes simples qu'on applique sur chaque chantier"
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

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-center">
        <Container>
          <FadeIn>
            <h2 className="text-3xl font-bold text-white">
              Un projet en tête ?
            </h2>
            <p className="mt-4 text-neutral-200 max-w-2xl mx-auto">
              Appelez-nous ou envoyez un message. On se déplace pour voir votre terrain et vous faire un devis gratuit.
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
