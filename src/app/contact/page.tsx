import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "@/components/features/ContactForm";
import GoogleMap from "@/components/features/GoogleMap";
import { company } from "@/data/company";
import { clientConfig } from "@/config/client.config";

export const metadata: Metadata = {
  title: "Contact & Devis",
  description: `Contactez ${clientConfig.NOM_ENTREPRISE} pour un devis gratuit. ${clientConfig.SERVICE_1_TITRE}, ${clientConfig.SERVICE_2_TITRE} à ${clientConfig.VILLE} et environs.`,
};

export default function ContactPage() {
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
              Contactez-nous
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-200">
              Parlons de votre projet. Devis gratuit et sans engagement.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Form */}
            <FadeIn className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Demande de Devis Gratuit
              </h2>
              <ContactForm />
            </FadeIn>

            {/* Info */}
            <FadeIn delay={0.2} className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Nos Coordonnées
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 rounded-xl bg-neutral-50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Téléphone</h3>
                    <a
                      href={`tel:${company.phone}`}
                      className="text-neutral-600 hover:text-primary-700 transition-colors"
                    >
                      {company.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 rounded-xl bg-neutral-50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Email</h3>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-neutral-600 hover:text-primary-700 transition-colors"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 rounded-xl bg-neutral-50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Adresse</h3>
                    <p className="text-neutral-600">
                      {company.address.street}
                      <br />
                      {company.address.postalCode} {company.address.city}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 rounded-xl bg-neutral-50 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Horaires</h3>
                    <p className="text-neutral-600">{company.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <GoogleMap />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
