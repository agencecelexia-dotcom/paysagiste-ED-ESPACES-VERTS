import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <Image
        src="/images/_template/hero/hero-principal.jpg"
        alt="Jardin de prestige"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary-900/75" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <FadeUp>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Votre Jardin de Rêve Commence Ici
          </h2>
          <p className="text-lg text-neutral-200 mb-10 max-w-xl mx-auto">
            Consultation gratuite, devis sans engagement. Rencontrons-nous pour
            donner vie à votre projet.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 rounded-lg bg-accent-500 text-white font-semibold hover:bg-accent-600 transition-colors"
          >
            Prendre Contact
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
