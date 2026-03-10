import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { company } from "@/data/company";
import { clientConfig } from "@/config/client.config";
import {
  ArrowLeft,
  Building2,
  User,
  Server,
  Shield,
  AlertCircle,
  Cookie,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: `Mentions légales du site ${clientConfig.NOM_ENTREPRISE}.`,
};

const sections = [
  {
    icon: Building2,
    title: "Éditeur du site",
    content: (
      <div className="space-y-1 text-neutral-600">
        <p className="font-semibold text-neutral-900">{company.legalName}</p>
        <p>{company.address.street}</p>
        <p>{company.address.postalCode} {company.address.city}, {company.address.country}</p>
        <p>SIRET : <span className="font-mono">{company.siret}</span></p>
        <p>
          Tél. :{" "}
          <a href={`tel:${company.phone}`} className="text-primary-900 hover:text-accent-600 transition-colors font-medium">
            {company.phone}
          </a>
        </p>
        <p>
          Email :{" "}
          <a href={`mailto:${company.email}`} className="text-primary-900 hover:text-accent-600 transition-colors font-medium">
            {company.email}
          </a>
        </p>
      </div>
    ),
  },
  {
    icon: User,
    title: "Directeur de la publication",
    content: (
      <p className="text-neutral-600">
        {clientConfig.PRENOM_DIRIGEANT} {clientConfig.NOM_DIRIGEANT}, Gérant de {company.legalName}.
      </p>
    ),
  },
  {
    icon: Server,
    title: "Hébergement",
    content: (
      <p className="text-neutral-600">
        Ce site est hébergé par <span className="font-semibold text-neutral-900">Vercel Inc.</span>,
        440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
      </p>
    ),
  },
  {
    icon: Shield,
    title: "Propriété intellectuelle",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est
        la propriété exclusive de {company.name}, à l&apos;exception des marques, logos ou contenus
        appartenant à d&apos;autres sociétés partenaires ou auteurs. Toute reproduction, distribution,
        modification, adaptation, retransmission ou publication de ces éléments est strictement
        interdite sans l&apos;accord exprès par écrit de {company.name}.
      </p>
    ),
  },
  {
    icon: AlertCircle,
    title: "Limitation de responsabilité",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        {company.name} s&apos;efforce de fournir sur ce site des informations aussi précises que
        possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes
        et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait de tiers
        partenaires qui lui fournissent ces informations.
      </p>
    ),
  },
  {
    icon: Cookie,
    title: "Cookies",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        Ce site peut utiliser des cookies à des fins statistiques et d&apos;amélioration de
        l&apos;expérience utilisateur. En naviguant sur ce site, vous acceptez l&apos;utilisation
        de cookies conformément à notre{" "}
        <Link href="/politique-de-confidentialite" className="text-primary-900 hover:text-accent-600 transition-colors font-medium underline underline-offset-2">
          politique de confidentialité
        </Link>.
      </p>
    ),
  },
  {
    icon: Scale,
    title: "Droit applicable",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        Tout litige en relation avec l&apos;utilisation du site {company.name} est soumis au
        droit français. L&apos;utilisateur reconnaît la compétence exclusive des tribunaux
        compétents de {company.address.city}.
      </p>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white" />
        </div>
        <Container className="relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={15} />
            Retour au site
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Mentions Légales
          </h1>
          <p className="mt-3 text-neutral-400 text-sm">
            {company.name} · Dernière mise à jour : 2025
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 bg-neutral-50">
        <Container className="max-w-3xl">
          <div className="space-y-4">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-neutral-100 shadow-sm overflow-hidden"
                >
                  <div className="flex items-center gap-3 px-6 py-4 border-b border-neutral-50 bg-neutral-50/50">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-900/10">
                      <Icon size={16} className="text-primary-900" />
                    </div>
                    <h2 className="font-heading text-base font-semibold text-neutral-900">
                      {section.title}
                    </h2>
                  </div>
                  <div className="px-6 py-5 text-sm leading-relaxed">
                    {section.content}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-200 pt-6">
            <span>© {new Date().getFullYear()} {company.name}</span>
            <Link href="/politique-de-confidentialite" className="hover:text-neutral-600 transition-colors">
              Politique de confidentialité →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
