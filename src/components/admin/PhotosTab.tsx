"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

interface PhotoItem {
  path: string;
  filename: string;
  usage: string;
}

interface PhotoGroup {
  label: string;
  photos: PhotoItem[];
}

const PHOTO_GROUPS: PhotoGroup[] = [
  {
    label: "Hero & Bannières",
    photos: [
      {
        path: "/images/_template/hero/hero-principal.jpg",
        filename: "hero/hero-principal.jpg",
        usage: "Utilisée sur : Accueil (hero), CTA sections, toutes bannières",
      },
    ],
  },
  {
    label: "Équipe",
    photos: [
      {
        path: "/images/_template/equipe/dirigeant.jpg",
        filename: "equipe/dirigeant.jpg",
        usage: "Portrait du dirigeant — page À propos",
      },
      {
        path: "/images/_template/equipe/equipe-groupe.jpg",
        filename: "equipe/equipe-groupe.jpg",
        usage: "Photo équipe complète — page À propos",
      },
    ],
  },
  {
    label: "Services",
    photos: Array.from({ length: 6 }, (_, i) => ({
      path: `/images/_template/services/service-${i + 1}.jpg`,
      filename: `services/service-${i + 1}.jpg`,
      usage: `Image du service ${i + 1} — pages Services`,
    })),
  },
  {
    label: "Portfolio — Avant",
    photos: Array.from({ length: 6 }, (_, i) => ({
      path: `/images/_template/portfolio/avant/projet-${i + 1}-avant.jpg`,
      filename: `portfolio/avant/projet-${i + 1}-avant.jpg`,
      usage: `Photo "avant" du projet ${i + 1} — comparatif avant/après`,
    })),
  },
  {
    label: "Portfolio — Après",
    photos: Array.from({ length: 6 }, (_, i) => ({
      path: `/images/_template/portfolio/apres/projet-${i + 1}-apres.jpg`,
      filename: `portfolio/apres/projet-${i + 1}-apres.jpg`,
      usage: `Photo "après" du projet ${i + 1} — galerie réalisations`,
    })),
  },
  {
    label: "Blog",
    photos: Array.from({ length: 6 }, (_, i) => ({
      path: `/images/_template/blog/blog-${i + 1}.jpg`,
      filename: `blog/blog-${i + 1}.jpg`,
      usage: `Image featured de l'article ${i + 1} — blog`,
    })),
  },
  {
    label: "Autres",
    photos: [
      {
        path: "/images/_template/og/og-image.jpg",
        filename: "og/og-image.jpg",
        usage: "Image Open Graph — partage réseaux sociaux",
      },
      {
        path: "/images/_template/badges/badge-qualite.png",
        filename: "badges/badge-qualite.png",
        usage: "Badge qualité — sections confiance",
      },
      {
        path: "/images/_template/badges/badge-experience.png",
        filename: "badges/badge-experience.png",
        usage: "Badge expérience — sections confiance",
      },
    ],
  },
];

export default function PhotosTab() {
  const [preview, setPreview] = useState<PhotoItem | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-neutral-900">Bibliothèque photos</h1>
        <p className="mt-1 text-neutral-500">Toutes les photos utilisées sur le site</p>
      </div>

      {/* Groups */}
      {PHOTO_GROUPS.map((group) => (
        <div key={group.label} className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-neutral-100">
            <h2 className="font-heading text-base font-semibold text-neutral-900">{group.label}</h2>
            <p className="text-xs text-neutral-500 mt-0.5">{group.photos.length} photo{group.photos.length > 1 ? "s" : ""}</p>
          </div>
          <div className="p-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {group.photos.map((photo) => (
              <div
                key={photo.path}
                className="group relative rounded-lg border border-neutral-200 bg-neutral-50 overflow-hidden cursor-pointer hover:border-primary-900 transition-colors"
                onClick={() => setPreview(photo)}
              >
                {/* Image */}
                <div className="relative aspect-video bg-neutral-100">
                  <Image
                    src={photo.path}
                    alt={photo.filename}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors">
                    <ZoomIn size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                {/* Info */}
                <div className="p-2.5">
                  <p className="text-xs font-mono text-neutral-600 truncate">{photo.filename}</p>
                  <p className="mt-0.5 text-xs text-neutral-400 line-clamp-2">{photo.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Preview Modal */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreview(null)}
              className="absolute -top-10 right-0 flex items-center gap-1.5 text-sm text-white/70 hover:text-white"
            >
              <X size={16} />
              Fermer
            </button>
            <div className="relative rounded-xl overflow-hidden bg-neutral-900">
              <div className="relative aspect-video w-full">
                <Image
                  src={preview.path}
                  alt={preview.filename}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm">
              <p className="text-sm font-mono text-white/90">{preview.path}</p>
              <p className="mt-0.5 text-xs text-white/60">{preview.usage}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
