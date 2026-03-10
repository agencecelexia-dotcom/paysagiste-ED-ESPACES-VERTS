import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { company } from "@/data/company";
import { clientConfig } from "@/config/client.config";
import {
  ArrowLeft,
  Info,
  Database,
  Target,
  FileCheck,
  Clock,
  Share2,
  CheckCircle,
  Lock,
  Cookie,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: `Politique de confidentialité et protection des données personnelles de ${clientConfig.NOM_ENTREPRISE}.`,
};

const rights = [
  "Droit d'accès",
  "Droit de rectification",
  "Droit à l'effacement",
  "Droit à la limitation du traitement",
  "Droit à la portabilité des données",
  "Droit d'opposition",
];

const collectedData = [
  "Nom et prénom",
  "Adresse email",
  "Numéro de téléphone",
  "Description du projet",
  "Budget estimé",
];

const purposes = [
  "Répondre à vos demandes de devis et de renseignements",
  "Vous recontacter dans le cadre de votre projet",
  "Améliorer nos services",
];

const sections = [
  {
    icon: Info,
    title: "Introduction",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        {company.name} accorde une grande importance à la protection de vos données personnelles.
        Cette politique vous informe sur la manière dont nous collectons, utilisons et protégeons
        vos informations conformément au Règlement Général sur la Protection des Données (RGPD).
      </p>
    ),
  },
  {
    icon: Database,
    title: "Données collectées",
    content: (
      <div className="space-y-3">
        <p className="text-neutral-600">Nous collectons les données suivantes via notre formulaire de contact :</p>
        <ul className="space-y-2">
          {collectedData.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-neutral-600">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    icon: Target,
    title: "Finalité du traitement",
    content: (
      <div className="space-y-3">
        <p className="text-neutral-600">Vos données personnelles sont collectées pour :</p>
        <ul className="space-y-2">
          {purposes.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-neutral-600">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    icon: FileCheck,
    title: "Base légale",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        Le traitement de vos données repose sur votre consentement explicite, donné via la case
        à cocher du formulaire de contact.
      </p>
    ),
  },
  {
    icon: Clock,
    title: "Durée de conservation",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        Vos données personnelles sont conservées pendant une durée maximale de{" "}
        <span className="font-semibold text-neutral-900">3 ans</span> à compter de votre dernier
        contact avec nous, sauf obligation légale contraire.
      </p>
    ),
  },
  {
    icon: Share2,
    title: "Partage des données",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        Vos données personnelles ne sont en aucun cas cédées, vendues ou partagées avec des tiers
        à des fins commerciales. Elles peuvent être communiquées à nos sous-traitants techniques
        (hébergeur) uniquement dans le cadre strict de leur mission.
      </p>
    ),
  },
  {
    icon: CheckCircle,
    title: "Vos droits",
    content: (
      <div className="space-y-3">
        <p className="text-neutral-600">Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {rights.map((right) => (
            <li key={right} className="flex items-center gap-2.5 text-neutral-600">
              <CheckCircle size={14} className="text-accent-500 flex-shrink-0" />
              {right}
            </li>
          ))}
        </ul>
        <p className="text-neutral-600 pt-1">
          Pour exercer ces droits, contactez-nous à :{" "}
          <a href={`mailto:${company.email}`} className="text-primary-900 hover:text-accent-600 transition-colors font-medium">
            {company.email}
          </a>
        </p>
      </div>
    ),
  },
  {
    icon: Lock,
    title: "Sécurité",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées
        pour protéger vos données contre toute perte, accès non autorisé, divulgation, altération
        ou destruction. Notre site utilise le protocole{" "}
        <span className="font-semibold text-neutral-900">HTTPS</span> pour sécuriser les échanges.
      </p>
    ),
  },
  {
    icon: Cookie,
    title: "Cookies",
    content: (
      <p className="text-neutral-600 leading-relaxed">
        Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement.
        Aucun cookie publicitaire ou de suivi n&apos;est déposé sans votre consentement préalable.
      </p>
    ),
  },
  {
    icon: Mail,
    title: "Contact",
    content: (
      <div className="space-y-1 text-neutral-600">
        <p className="font-semibold text-neutral-900">{company.legalName}</p>
        <p>{company.address.street}</p>
        <p>{company.address.postalCode} {company.address.city}</p>
        <p>
          Email :{" "}
          <a href={`mailto:${company.email}`} className="text-primary-900 hover:text-accent-600 transition-colors font-medium">
            {company.email}
          </a>
        </p>
        <p>
          Tél. :{" "}
          <a href={`tel:${company.phone}`} className="text-primary-900 hover:text-accent-600 transition-colors font-medium">
            {company.phone}
          </a>
        </p>
      </div>
    ),
  },
];

export default function PolitiqueConfidentialitePage() {
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
            Politique de Confidentialité
          </h1>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-neutral-400 text-sm">{company.name}</span>
            <span className="text-neutral-600 text-sm">·</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300">
              <Clock size={11} />
              Mise à jour : février 2025
            </span>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 bg-neutral-50">
        <Container className="max-w-3xl">
          {/* RGPD badge */}
          <div className="mb-8 flex items-center gap-3 rounded-xl bg-primary-900/5 border border-primary-900/10 px-5 py-4">
            <Lock size={18} className="text-primary-900 flex-shrink-0" />
            <p className="text-sm text-neutral-700">
              Ce site est conforme au <span className="font-semibold">Règlement Général sur la Protection des Données (RGPD)</span> en vigueur depuis le 25 mai 2018.
            </p>
          </div>

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
            <Link href="/mentions-legales" className="hover:text-neutral-600 transition-colors">
              Mentions légales →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
