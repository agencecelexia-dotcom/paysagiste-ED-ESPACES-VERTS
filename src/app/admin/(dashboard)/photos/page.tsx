"use client";

import { useState } from "react";
import { Image as ImageIcon, Info } from "lucide-react";

const PHOTO_PACK = [
  { file: "hero-principal.jpg", path: "/images/_template/hero/", category: "Hero", usage: "Section hero (fond plein écran)" },
  { file: "service-1.jpg", path: "/images/_template/services/", category: "Services", usage: "Création de jardins" },
  { file: "service-2.jpg", path: "/images/_template/services/", category: "Services", usage: "Aménagement terrasses" },
  { file: "service-3.jpg", path: "/images/_template/services/", category: "Services", usage: "Entretien paysager" },
  { file: "service-4.jpg", path: "/images/_template/services/", category: "Services", usage: "Élagage & Taille" },
  { file: "service-5.jpg", path: "/images/_template/services/", category: "Services", usage: "Clôtures & Murets" },
  { file: "service-6.jpg", path: "/images/_template/services/", category: "Services", usage: "Arrosage automatique" },
  { file: "projet-1-avant.jpg", path: "/images/_template/portfolio/avant/", category: "Avant", usage: "Projet 1 — avant travaux" },
  { file: "projet-2-avant.jpg", path: "/images/_template/portfolio/avant/", category: "Avant", usage: "Projet 2 — avant travaux" },
  { file: "projet-3-avant.jpg", path: "/images/_template/portfolio/avant/", category: "Avant", usage: "Projet 3 — avant travaux" },
  { file: "projet-4-avant.jpg", path: "/images/_template/portfolio/avant/", category: "Avant", usage: "Projet 4 — avant travaux" },
  { file: "projet-5-avant.jpg", path: "/images/_template/portfolio/avant/", category: "Avant", usage: "Projet 5 — avant travaux" },
  { file: "projet-6-avant.jpg", path: "/images/_template/portfolio/avant/", category: "Avant", usage: "Projet 6 — avant travaux" },
  { file: "projet-1-apres.jpg", path: "/images/_template/portfolio/apres/", category: "Après", usage: "Projet 1 — après travaux" },
  { file: "projet-2-apres.jpg", path: "/images/_template/portfolio/apres/", category: "Après", usage: "Projet 2 — après travaux" },
  { file: "projet-3-apres.jpg", path: "/images/_template/portfolio/apres/", category: "Après", usage: "Projet 3 — après travaux" },
  { file: "projet-4-apres.jpg", path: "/images/_template/portfolio/apres/", category: "Après", usage: "Projet 4 — après travaux" },
  { file: "projet-5-apres.jpg", path: "/images/_template/portfolio/apres/", category: "Après", usage: "Projet 5 — après travaux" },
  { file: "projet-6-apres.jpg", path: "/images/_template/portfolio/apres/", category: "Après", usage: "Projet 6 — après travaux" },
  { file: "dirigeant.jpg", path: "/images/_template/equipe/", category: "Équipe", usage: "Portrait du dirigeant (page À Propos)" },
  { file: "equipe-groupe.jpg", path: "/images/_template/equipe/", category: "Équipe", usage: "Photo d'équipe" },
  { file: "badge-qualite.png", path: "/images/_template/badges/", category: "Badges", usage: "Badge qualité (section stats)" },
  { file: "badge-experience.png", path: "/images/_template/badges/", category: "Badges", usage: "Badge expérience" },
  { file: "og-image.jpg", path: "/images/_template/og/", category: "SEO", usage: "Image Open Graph (partage réseaux)" },
];

const categories = ["Tous", "Hero", "Services", "Avant", "Après", "Équipe", "Badges", "SEO"];

export default function AdminPhotosPage() {
  const [filter, setFilter] = useState("Tous");

  const filtered = filter === "Tous" ? PHOTO_PACK : PHOTO_PACK.filter((p) => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-neutral-900 mb-2">Photos — Pack Paysagiste</h1>
      <p className="text-neutral-500 text-sm mb-6">24 images génériques réutilisables pour tout client paysagiste.</p>

      {/* Info banner */}
      <div className="mb-6 flex items-start gap-3 rounded-xl bg-primary-50 border border-primary-200 px-4 py-3">
        <Info className="h-5 w-5 text-primary-700 mt-0.5 shrink-0" />
        <p className="text-sm text-primary-800">
          Les photos sont stockées dans <code className="bg-primary-100 px-1 rounded">public/images/_template/</code>.
          Les prompts IA pour les générer sont dans <code className="bg-primary-100 px-1 rounded">IMAGES-PROMPTS-V2.md</code>.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === cat
                ? "bg-primary-900 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((photo) => (
          <div key={photo.file} className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
            <div className="relative h-36 bg-neutral-100 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.path + photo.file}
                alt={photo.usage}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                }}
              />
              <div className="hidden absolute inset-0 flex items-center justify-center">
                <ImageIcon className="h-8 w-8 text-neutral-300" />
              </div>
            </div>
            <div className="p-3">
              <span className="inline-block rounded-full bg-primary-100 text-primary-800 text-[10px] font-semibold px-2 py-0.5 mb-1.5">
                {photo.category}
              </span>
              <p className="text-xs font-medium text-neutral-700 truncate">{photo.file}</p>
              <p className="text-xs text-neutral-400 truncate">{photo.usage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
