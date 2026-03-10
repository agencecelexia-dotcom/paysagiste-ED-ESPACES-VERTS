"use client";

import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, X, Save, MapPin, Calendar } from "lucide-react";

type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: number;
  shortDescription: string;
  fullDescription: string;
  featuredImage: string;
  beforeImage?: string;
  afterImage?: string;
  featured?: boolean;
};

const CATEGORIES = ["jardin", "terrasse", "piscine", "cloture", "elagage", "amenagement-complet"];

const empty: Omit<Project, "id"> = {
  slug: "",
  title: "",
  category: "jardin",
  location: "",
  year: new Date().getFullYear(),
  shortDescription: "",
  fullDescription: "",
  featuredImage: "",
  beforeImage: "",
  afterImage: "",
  featured: false,
};

export default function AdminProjetsPage() {
  const [items, setItems] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<Project | null>(null);
  const [form, setForm] = useState<Omit<Project, "id">>(empty);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/api/admin/projects")
      .then((r) => r.json())
      .then((d) => { setItems(d); setLoading(false); });
  }, []);

  function openCreate() { setModal({ id: "", ...empty }); setForm(empty); }
  function openEdit(p: Project) {
    setModal(p);
    setForm({ slug: p.slug, title: p.title, category: p.category, location: p.location, year: p.year, shortDescription: p.shortDescription, fullDescription: p.fullDescription, featuredImage: p.featuredImage, beforeImage: p.beforeImage ?? "", afterImage: p.afterImage ?? "", featured: p.featured ?? false });
  }

  async function handleSave() {
    setSaving(true);
    const isNew = !modal?.id;
    const res = await fetch("/api/admin/projects", {
      method: isNew ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(isNew ? form : { id: modal?.id, ...form }),
    });
    if (res.ok) {
      const data = await res.json();
      setItems((prev) => isNew ? [...prev, data] : prev.map((p) => p.id === data.id ? data : p));
      setModal(null);
      setStatus("Sauvegardé ✓");
      setTimeout(() => setStatus(""), 2000);
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer ce projet ?")) return;
    await fetch(`/api/admin/projects?id=${id}`, { method: "DELETE" });
    setItems((prev) => prev.filter((p) => p.id !== id));
  }

  const field = (label: string, key: keyof typeof form, type = "text") => (
    <div>
      <label className="block text-xs font-medium text-neutral-600 mb-1">{label}</label>
      <input type={type} className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" value={form[key] as string} onChange={(e) => setForm({ ...form, [key]: type === "number" ? +e.target.value : e.target.value })} />
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Projets & Réalisations</h1>
          <p className="text-sm text-neutral-500">{items.length} réalisations</p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 rounded-lg bg-primary-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-800 transition-colors">
          <Plus className="h-4 w-4" /> Ajouter
        </button>
      </div>
      {status && <div className="mb-4 rounded-lg bg-green-50 border border-green-200 px-4 py-2 text-sm text-green-700">{status}</div>}

      {loading ? <p className="text-neutral-400 text-sm">Chargement...</p> : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((p) => (
            <div key={p.id} className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
              {p.featuredImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.featuredImage} alt={p.title} className="h-36 w-full object-cover" />
              )}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="inline-block rounded-full bg-primary-100 text-primary-800 text-[10px] font-semibold px-2 py-0.5 mb-1">{p.category}</span>
                    <h3 className="font-semibold text-neutral-900">{p.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-xs text-neutral-400">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{p.location}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{p.year}</span>
                    </div>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <button onClick={() => openEdit(p)} className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"><Pencil className="h-4 w-4" /></button>
                    <button onClick={() => handleDelete(p.id)} className="rounded-lg p-1.5 text-neutral-400 hover:bg-red-50 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold">{modal.id ? "Modifier le projet" : "Nouveau projet"}</h2>
              <button onClick={() => setModal(null)} className="text-neutral-400 hover:text-neutral-600"><X className="h-5 w-5" /></button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {field("Titre", "title")}
                {field("Slug (URL)", "slug")}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Catégorie</label>
                  <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                {field("Année", "year", "number")}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {field("Localisation", "location")}
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">Description courte</label>
                <textarea rows={2} className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" value={form.shortDescription} onChange={(e) => setForm({ ...form, shortDescription: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">Description complète</label>
                <textarea rows={4} className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" value={form.fullDescription} onChange={(e) => setForm({ ...form, fullDescription: e.target.value })} />
              </div>
              {field("Image principale (URL)", "featuredImage")}
              <div className="grid grid-cols-2 gap-3">
                {field("Image Avant (URL)", "beforeImage")}
                {field("Image Après (URL)", "afterImage")}
              </div>
              <label className="flex items-center gap-2 text-sm text-neutral-700 cursor-pointer">
                <input type="checkbox" checked={form.featured ?? false} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="rounded" />
                Mise en avant sur la page d'accueil
              </label>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button onClick={() => setModal(null)} className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100">Annuler</button>
              <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 rounded-lg bg-primary-900 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 disabled:opacity-50">
                <Save className="h-4 w-4" />{saving ? "Sauvegarde..." : "Sauvegarder"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
