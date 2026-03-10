import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import ProjectGallery from "@/components/features/ProjectGallery";
import { projects } from "@/data/projects";
import { clientConfig } from "@/config/client.config";

export const metadata: Metadata = {
  title: "Nos Réalisations",
  description: `Découvrez nos réalisations de jardins d'exception, terrasses et aménagements paysagers haut de gamme réalisés à ${clientConfig.VILLE} et ses environs.`,
};

export default function RealisationsPage() {
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
              Nos Réalisations
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-200">
              Chaque projet est une histoire unique. Découvrez nos créations paysagères.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <Container>
          <FadeIn>
            <ProjectGallery projects={projects} />
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
