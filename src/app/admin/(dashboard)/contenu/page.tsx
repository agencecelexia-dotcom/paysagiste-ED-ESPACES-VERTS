"use client";

import { useState } from "react";
import { clientConfig } from "@/config/client.config";
import { Save, CheckCircle, AlertCircle } from "lucide-react";

type FieldGroup = {
  label: string;
  fields: Array<{
    key: keyof typeof clientConfig;
    label: string;
    type?: "text" | "textarea" | "email" | "tel" | "url";
    rows?: number;
    hint?: string;
  }>;
};

const fieldGroups: FieldGroup[] = [
  {
    label: "Identité",
    fields: [
      { key: "NOM_ENTREPRISE", label: "Nom de l'entreprise" },
      { key: "NOM_LEGAL", label: "Raison sociale" },
      { key: "SIRET", label: "SIRET" },
      { key: "METIER", label: "Métier (slug)" },
      { key: "METIER_LABEL", label: "Métier (affiché)" },
      { key: "GENRE_DIRIGEANT", label: "Genre dirigeant (M/Mme)" },
      { key: "PRENOM_DIRIGEANT", label: "Prénom dirigeant" },
      { key: "NOM_DIRIGEANT", label: "Nom dirigeant" },
      { key: "DIPLOME_DIRIGEANT", label: "Diplôme dirigeant" },
      { key: "ANNEE_CREATION", label: "Année de création" },
      { key: "ANNEES_EXPERIENCE", label: "Années d'expérience" },
    ],
  },
  {
    label: "Contact",
    fields: [
      { key: "TELEPHONE", label: "Téléphone", type: "tel" },
      { key: "EMAIL", label: "Email", type: "email" },
      { key: "ADRESSE", label: "Adresse" },
      { key: "CODE_POSTAL", label: "Code postal" },
      { key: "VILLE", label: "Ville" },
      { key: "DEPARTEMENT", label: "Département" },
      { key: "REGION", label: "Région" },
      { key: "PAYS", label: "Pays" },
      { key: "HORAIRES", label: "Horaires" },
      { key: "ZONE_INTERVENTION", label: "Zone d'intervention" },
      { key: "LATITUDE", label: "Latitude GPS" },
      { key: "LONGITUDE", label: "Longitude GPS" },
    ],
  },
  {
    label: "Branding",
    fields: [
      { key: "COULEUR_PRIMAIRE_HUE", label: "Hue couleur primaire", hint: "Ex: 145" },
      { key: "COULEUR_PRIMAIRE_900", label: "Couleur primaire 900 (oklch)", hint: "Ex: oklch(0.22 0.06 145)" },
      { key: "COULEUR_ACCENT_HUE", label: "Hue couleur accent", hint: "Ex: 65" },
      { key: "COULEUR_ACCENT_500", label: "Couleur accent 500 (oklch)", hint: "Ex: oklch(0.72 0.15 65)" },
      { key: "COULEUR_FOND_50", label: "Couleur fond 50 (oklch)" },
      { key: "FONT_TITRES", label: "Police titres" },
      { key: "FONT_CORPS", label: "Police corps" },
    ],
  },
  {
    label: "Contenu",
    fields: [
      { key: "SLOGAN", label: "Slogan" },
      { key: "ACCROCHE_HERO", label: "Accroche hero" },
      { key: "DESCRIPTION_ENTREPRISE", label: "Description entreprise", type: "textarea", rows: 3 },
      { key: "DESCRIPTION_FOOTER", label: "Description footer", type: "textarea", rows: 3 },
      { key: "DESCRIPTION_APROPOS", label: "Description à propos", type: "textarea", rows: 4 },
    ],
  },
  {
    label: "Services",
    fields: [
      { key: "SERVICE_1_TITRE", label: "Service 1 — Titre" },
      { key: "SERVICE_1_DESC", label: "Service 1 — Description", type: "textarea", rows: 2 },
      { key: "SERVICE_2_TITRE", label: "Service 2 — Titre" },
      { key: "SERVICE_2_DESC", label: "Service 2 — Description", type: "textarea", rows: 2 },
      { key: "SERVICE_3_TITRE", label: "Service 3 — Titre" },
      { key: "SERVICE_3_DESC", label: "Service 3 — Description", type: "textarea", rows: 2 },
      { key: "SERVICE_4_TITRE", label: "Service 4 — Titre" },
      { key: "SERVICE_4_DESC", label: "Service 4 — Description", type: "textarea", rows: 2 },
      { key: "SERVICE_5_TITRE", label: "Service 5 — Titre" },
      { key: "SERVICE_5_DESC", label: "Service 5 — Description", type: "textarea", rows: 2 },
      { key: "SERVICE_6_TITRE", label: "Service 6 — Titre" },
      { key: "SERVICE_6_DESC", label: "Service 6 — Description", type: "textarea", rows: 2 },
    ],
  },
  {
    label: "Réseaux sociaux",
    fields: [
      { key: "GOOGLE_MAPS_URL", label: "Google Maps URL", type: "url" },
      { key: "GOOGLE_REVIEWS_URL", label: "Google Reviews URL", type: "url" },
      { key: "FACEBOOK_URL", label: "Facebook URL", type: "url" },
      { key: "INSTAGRAM_URL", label: "Instagram URL", type: "url" },
      { key: "LINKEDIN_URL", label: "LinkedIn URL", type: "url" },
      { key: "PINTEREST_URL", label: "Pinterest URL", type: "url" },
    ],
  },
  {
    label: "Témoignages",
    fields: [
      { key: "TEMOIGNAGE_1_NOM", label: "Témoin 1 — Nom" },
      { key: "TEMOIGNAGE_1_VILLE", label: "Témoin 1 — Ville" },
      { key: "TEMOIGNAGE_1_TEXTE", label: "Témoin 1 — Texte", type: "textarea", rows: 3 },
      { key: "TEMOIGNAGE_1_NOTE", label: "Témoin 1 — Note (1-5)" },
      { key: "TEMOIGNAGE_2_NOM", label: "Témoin 2 — Nom" },
      { key: "TEMOIGNAGE_2_VILLE", label: "Témoin 2 — Ville" },
      { key: "TEMOIGNAGE_2_TEXTE", label: "Témoin 2 — Texte", type: "textarea", rows: 3 },
      { key: "TEMOIGNAGE_2_NOTE", label: "Témoin 2 — Note (1-5)" },
      { key: "TEMOIGNAGE_3_NOM", label: "Témoin 3 — Nom" },
      { key: "TEMOIGNAGE_3_VILLE", label: "Témoin 3 — Ville" },
      { key: "TEMOIGNAGE_3_TEXTE", label: "Témoin 3 — Texte", type: "textarea", rows: 3 },
      { key: "TEMOIGNAGE_3_NOTE", label: "Témoin 3 — Note (1-5)" },
    ],
  },
  {
    label: "Intégrations",
    fields: [
      { key: "N8N_WEBHOOK", label: "n8n Webhook URL", type: "url" },
      { key: "ADMIN_PASSWORD", label: "Mot de passe admin", hint: "Changez-le après la mise en production" },
      { key: "PACK_PHOTOS_METIER", label: "Pack photos métier", hint: "Ex: paysagiste" },
    ],
  },
];

export default function ContenuPage() {
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(
      Object.entries(clientConfig).map(([k, v]) => [k, String(v)])
    )
  );
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function handleChange(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("saving");
    setMessage("");

    try {
      const res = await fetch("/api/admin/save-client", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("CLIENT.md mis à jour avec succès. Relancez npm run sync-client pour synchroniser.");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(data.error || "Erreur lors de la sauvegarde");
      }
    } catch {
      setStatus("error");
      setMessage("Erreur réseau. Veuillez réessayer.");
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-neutral-900">
          Contenu
        </h1>
        <p className="mt-1 text-neutral-500">
          Modifiez les champs de <code className="rounded bg-neutral-100 px-1 py-0.5 text-sm">CLIENT.md</code>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {fieldGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <h2 className="mb-4 font-heading text-lg font-semibold text-neutral-900">
              {group.label}
            </h2>
            <div className="space-y-4">
              {group.fields.map((field) => {
                const inputType = field.type || "text";
                return (
                  <div key={field.key}>
                    <label
                      htmlFor={field.key}
                      className="mb-1 block text-sm font-medium text-neutral-700"
                    >
                      {field.label}
                    </label>
                    {inputType === "textarea" ? (
                      <textarea
                        id={field.key}
                        rows={field.rows || 3}
                        value={values[field.key] ?? ""}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      />
                    ) : (
                      <input
                        id={field.key}
                        type={inputType}
                        value={values[field.key] ?? ""}
                        onChange={(e) => handleChange(field.key, e.target.value)}
                        className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      />
                    )}
                    {field.hint && (
                      <p className="mt-1 text-xs text-neutral-400">{field.hint}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Status message */}
        {status === "success" && (
          <div className="flex items-start gap-3 rounded-lg bg-green-50 border border-green-200 p-4">
            <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-green-600" />
            <p className="text-sm text-green-700">{message}</p>
          </div>
        )}
        {status === "error" && (
          <div className="flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 p-4">
            <AlertCircle size={18} className="mt-0.5 flex-shrink-0 text-red-600" />
            <p className="text-sm text-red-700">{message}</p>
          </div>
        )}

        {/* Submit */}
        <div className="flex justify-end pb-8">
          <button
            type="submit"
            disabled={status === "saving"}
            className="flex items-center gap-2 rounded-lg bg-primary-900 px-6 py-2.5 font-semibold text-white transition hover:bg-primary-800 disabled:opacity-60"
          >
            <Save size={16} />
            {status === "saving" ? "Sauvegarde..." : "Sauvegarder CLIENT.md"}
          </button>
        </div>
      </form>
    </div>
  );
}
