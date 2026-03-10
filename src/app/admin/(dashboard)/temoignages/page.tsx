"use client";

import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2, Star, X, Save } from "lucide-react";

type Testimonial = {
  id: string;
  clientName: string;
  clientRole: string;
  quote: string;
  rating: number;
  projectType: string;
  date: string;
};

const empty: Omit<Testimonial, "id"> = {
  clientName: "",
  clientRole: "",
  quote: "",
  rating: 5,
  projectType: "",
  date: new Date().toISOString().slice(0, 7),
};

export default function AdminTemoignagesPage() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<Testimonial | null>(null);
  const [form, setForm] = useState<Omit<Testimonial, "id">>(empty);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/api/admin/testimonials")
      .then((r) => r.json())
      .then((d) => { setItems(d); setLoading(false); });
  }, []);

  function openCreate() {
    setModal({ id: "", ...empty });
    setForm(empty);
  }

  function openEdit(t: Testimonial) {
    setModal(t);
    setForm({ clientName: t.clientName, clientRole: t.clientRole, quote: t.quote, rating: t.rating, projectType: t.projectType, date: t.date });
  }

  async function handleSave() {
    setSaving(true);
    const isNew = !modal?.id;
    const res = await fetch("/api/admin/testimonials", {
      method: isNew ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(isNew ? form : { id: modal?.id, ...form }),
    });
    if (res.ok) {
      const data = await res.json();
      setItems((prev) => isNew ? [...prev, data] : prev.map((t) => t.id === data.id ? data : t));
      setModal(null);
      setStatus("Sauvegardé ✓");
      setTimeout(() => setStatus(""), 2000);
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Supprimer ce témoignage ?")) return;
    await fetch(`/api/admin/testimonials?id=${id}`, { method: "DELETE" });
    setItems((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Témoignages</h1>
          <p className="text-sm text-neutral-500">{items.length} avis clients</p>
        </div>
        <button onClick={openCreate} className="flex items-center gap-2 rounded-lg bg-primary-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-800 transition-colors">
          <Plus className="h-4 w-4" /> Ajouter
        </button>
      </div>
      {status && <div className="mb-4 rounded-lg bg-green-50 border border-green-200 px-4 py-2 text-sm text-green-700">{status}</div>}

      {loading ? (
        <p className="text-neutral-400 text-sm">Chargement...</p>
      ) : (
        <div className="space-y-3">
          {items.map((t) => (
            <div key={t.id} className="rounded-xl border border-neutral-200 bg-white p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-neutral-900">{t.clientName}</span>
                    <span className="text-xs text-neutral-400">— {t.clientRole}</span>
                    <div className="flex">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-accent-500 text-accent-500" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 line-clamp-2">{t.quote}</p>
                  <span className="mt-1 inline-block rounded-full bg-neutral-100 text-neutral-500 text-[10px] px-2 py-0.5">{t.projectType}</span>
                </div>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => openEdit(t)} className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors">
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button onClick={() => handleDelete(t.id)} className="rounded-lg p-2 text-neutral-400 hover:bg-red-50 hover:text-red-600 transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {modal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold">{modal.id ? "Modifier" : "Nouveau témoignage"}</h2>
              <button onClick={() => setModal(null)} className="text-neutral-400 hover:text-neutral-600"><X className="h-5 w-5" /></button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Nom client</label>
                  <input className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" value={form.clientName} onChange={(e) => setForm({ ...form, clientName: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Rôle / Ville</label>
                  <input className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" value={form.clientRole} onChange={(e) => setForm({ ...form, clientRole: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">Avis</label>
                <textarea rows={3} className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none" value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Note</label>
                  <select className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" value={form.rating} onChange={(e) => setForm({ ...form, rating: +e.target.value })}>
                    {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n}/5</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Type de projet</label>
                  <input className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 mb-1">Date (AAAA-MM)</label>
                  <input className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button onClick={() => setModal(null)} className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 transition-colors">Annuler</button>
              <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 rounded-lg bg-primary-900 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 transition-colors disabled:opacity-50">
                <Save className="h-4 w-4" />{saving ? "Sauvegarde..." : "Sauvegarder"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
