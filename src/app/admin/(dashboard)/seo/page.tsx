"use client";

import { useState } from "react";
import { Save, Eye } from "lucide-react";
import { clientConfig } from "@/config/client.config";

export default function AdminSeoPage() {
  const [form, setForm] = useState<Record<string, string>>({
    META_TITLE: clientConfig.META_TITLE as string,
    META_DESCRIPTION: clientConfig.META_DESCRIPTION as string,
    META_KEYWORDS: clientConfig.META_KEYWORDS as string,
    DOMAINE: clientConfig.DOMAINE as string,
    SCHEMA_TYPE: clientConfig.SCHEMA_TYPE as string,
  });
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  const titleLen = form.META_TITLE.length;
  const descLen = form.META_DESCRIPTION.length;

  async function handleSave() {
    setSaving(true);
    const res = await fetch("/api/admin/save-client", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setStatus(res.ok ? "Sauvegardé — relancer npm run sync-client pour appliquer" : "Erreur lors de la sauvegarde");
    setSaving(false);
    setTimeout(() => setStatus(""), 4000);
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-neutral-900 mb-2">SEO & Métadonnées</h1>
      <p className="text-sm text-neutral-500 mb-6">Optimisation pour les moteurs de recherche.</p>

      {status && (
        <div className={`mb-4 rounded-lg border px-4 py-2 text-sm ${status.includes("Erreur") ? "bg-red-50 border-red-200 text-red-700" : "bg-green-50 border-green-200 text-green-700"}`}>
          {status}
        </div>
      )}

      {/* Google preview */}
      <div className="mb-6 rounded-xl border border-neutral-200 bg-white p-5">
        <div className="flex items-center gap-2 mb-3 text-xs text-neutral-400">
          <Eye className="h-4 w-4" />
          <span>Aperçu Google</span>
        </div>
        <div className="rounded-lg bg-neutral-50 p-4">
          <p className="text-xs text-neutral-400 mb-1">https://{form.DOMAINE}</p>
          <p className="text-lg text-blue-700 hover:underline cursor-pointer leading-tight mb-1 font-medium">
            {form.META_TITLE || "Titre de la page"}
          </p>
          <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2">
            {form.META_DESCRIPTION || "Description de la page..."}
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {/* Title */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-neutral-700">Titre de la page (META_TITLE)</label>
            <span className={`text-xs font-medium ${titleLen < 60 ? "text-yellow-600" : titleLen <= 70 ? "text-green-600" : "text-red-600"}`}>
              {titleLen}/70 {titleLen < 60 ? "— trop court" : titleLen > 70 ? "— trop long" : "— optimal"}
            </span>
          </div>
          <input
            className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={form.META_TITLE}
            onChange={(e) => setForm({ ...form, META_TITLE: e.target.value })}
          />
        </div>

        {/* Description */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-neutral-700">Méta-description</label>
            <span className={`text-xs font-medium ${descLen < 150 ? "text-yellow-600" : descLen <= 160 ? "text-green-600" : "text-red-600"}`}>
              {descLen}/160 {descLen < 150 ? "— trop court" : descLen > 160 ? "— trop long" : "— optimal"}
            </span>
          </div>
          <textarea
            rows={3}
            className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
            value={form.META_DESCRIPTION}
            onChange={(e) => setForm({ ...form, META_DESCRIPTION: e.target.value })}
          />
        </div>

        {/* Keywords */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">Mots-clés (séparés par des virgules)</label>
          <textarea
            rows={2}
            className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
            value={form.META_KEYWORDS}
            onChange={(e) => setForm({ ...form, META_KEYWORDS: e.target.value })}
          />
        </div>

        {/* Domain & Schema */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Domaine</label>
            <input
              className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={form.DOMAINE}
              onChange={(e) => setForm({ ...form, DOMAINE: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">Type Schema.org</label>
            <input
              className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={form.SCHEMA_TYPE}
              onChange={(e) => setForm({ ...form, SCHEMA_TYPE: e.target.value })}
              placeholder="LandscapeArchitect"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 rounded-lg bg-primary-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-800 disabled:opacity-50 transition-colors"
        >
          <Save className="h-4 w-4" />
          {saving ? "Sauvegarde..." : "Sauvegarder"}
        </button>
      </div>
    </div>
  );
}
