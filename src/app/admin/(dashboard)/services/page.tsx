"use client";

import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, X, Save } from "lucide-react";

type Service = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  icon: string;
  order: number;
};

const empty: Omit<Service, "id"> = {
  slug: "",
  title: "",
  shortDescription: "",
  fullDescription: "",
  features: [],
  image: "",
  icon: "leaf",
  order: 1,
};

export default function AdminServicesPage() {
  const [items, setItems] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<Service | null>(null);
  const [form, setForm] = useState<Omit<Service, "id">>(empty);
  const [featuresText, setFeaturesText] = useState("");
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/api/admin/services")
      .then((r) => r.json())
      .then((d) => { setItems(d); setLoading(false); });
  }, []);

  function openCreate() {
    setModal({ id: "", ...empty });
    setForm(empty);
    setFeaturesText("");
  }

  function openEdit(s: Service) {
    setModal(s);
    setForm({ slug: s.slug, title: s.title, shortDescription: s.shortDescription, fullDescription: s.fullDescription, features: s.features, image: s.image, icon: s.icon, order: s.order });
    setFeaturesText(s.features?.join("\n") ?? "");
  }

  async function handleSave() {
    setSaving(true);
    const features = featuresText.split("\n").map((f) => f.trim()).filter(Boolean);
    const payload = { ...form, features };
    const isNew = !modal?.id;
    const res = await fetch("/api/admin/services", {
      method: isNew ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(isNew ? payload : { id: modal?.id, ...payload }),
    });
    if (res.ok) {
      const data = await res.json();
      setItems((prev) => isNew ? [...prev, data] : prev.map((s) => s.id === data.id ? data : s));
      setModal(null);
      setStatus("Sauvegardé ✓");
      setTimeout(() => setStatus(""), 2000);
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer ce service ?")) return;
    await fetch(`/api/admin/services?id=${id}`, { method: "DELETE" });
    setItems((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Services</h1>
          <p className="text-sm text-neutral-500">{items.length} services actifs</p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 rounded-lg bg-primary-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-800 transition-colors">
          <Plus className="h-4 w-4" /> Ajouter
        </button>
      </div>
      {status && <div className="mb-4 rounded-lg bg-green-50 border border-green-200 px-4 py-2 text-sm text-green-700">{status}</div>}

      {loading ? <p className="text-neutral-400 text-sm">Chargement...</p> : (
        <div className="space-y-3">
          {[...items].sort((a, b) => a.order - b.order).map((s) => (
            <div key={s.id} className="rounded-xl border border-neutral-200 bg-white p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-neutral-400 font-mono">#{s.order}</span>
                    <span className="font-semibold text-neutral-900">{s.title}</span>
                    <code className="text-[10px] bg-neutral-100 text-neutral-500 px-1.5 py-0.5 rounded">{s.slug}</code>
                  </div>
                  <p className="text-sm text-neutral-600 line-clamp-1">{s.shortDescription}</p>
                  {s.features?.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {s.features.slice(0, 3).map((f, i) => (
                        <span key={i} className="rounded-full bg-primary-50 text-primary-700 text-[10px] px-2 py-0.5">{f}</span>
                      ))}
                      {s.features.length > 3 && <span className="text-[10px] text-neutral-400">+{s.features.length - 3}</span>}
                    </div>
                  )}
                </div>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => openEdit(s)} className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"><Pencil className="h-4 w-4" /></button>
                  <button onClick={() => handleDelete(s.id)} className="rounded-lg p-2 text-neutral-400 hover:bg-red-50 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
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
              <h2 className="text-lg font-bold">{modal.id ? "Modifier le service" : "Nouveau service"}</h2>
              <button onClick={() => setModal(null)} className="text-neutral-400 hover:text-neutral-600"><X className="h-5 w-5" /></button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Titre</label>
                  <input className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Slug (URL)</label>
                  <input className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">Description courte</label>
                <textarea rows={2} className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" value={form.shortDescription} onChange={(e) => setForm({ ...form, shortDescription: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">Description complète</label>
                <textarea rows={4} className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" value={form.fullDescription} onChange={(e) => setForm({ ...form, fullDescription: e.target.value })} />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">Caractéristiques (une par ligne)</label>
                <textarea rows={4} className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" value={featuresText} onChange={(e) => setFeaturesText(e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Icône (nom Lucide)</label>
                  <input className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Ordre d'affichage</label>
                  <input type="number" min="1" className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" value={form.order} onChange={(e) => setForm({ ...form, order: +e.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">URL image</label>
                <input className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
              </div>
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
