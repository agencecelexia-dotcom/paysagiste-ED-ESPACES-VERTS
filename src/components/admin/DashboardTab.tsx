"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Eye,
  Users,
  MousePointerClick,
  FileText,
  RefreshCw,
  Phone,
  Mail,
  X,
  TrendingUp,
  Clock,
  Percent,
} from "lucide-react";

type SubmissionStatus = "Nouveau" | "Contacté" | "En cours" | "Converti";

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  subject: string;
  message: string;
  location: string;
  date: string;
  time: string;
  status: SubmissionStatus;
}

const STATUS_COLORS: Record<SubmissionStatus, string> = {
  Nouveau: "bg-blue-100 text-blue-700",
  Contacté: "bg-yellow-100 text-yellow-700",
  "En cours": "bg-orange-100 text-orange-700",
  Converti: "bg-green-100 text-green-700",
};

export default function DashboardTab() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchSubmissions = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/submissions");
      const json = await res.json();
      if (json.success) setSubmissions(json.data);
    } catch (err) {
      console.error("Erreur chargement soumissions:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  async function handleStatusChange(id: string, status: SubmissionStatus) {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
    if (selectedSubmission?.id === id) {
      setSelectedSubmission((prev) => (prev ? { ...prev, status } : null));
    }
    await fetch("/api/admin/submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
  }

  function handleRefresh() {
    setRefreshing(true);
    fetchSubmissions().then(() => setRefreshing(false));
  }

  const totalSubmissions = submissions.length;
  const newCount = submissions.filter((s) => s.status === "Nouveau").length;
  const convertedCount = submissions.filter((s) => s.status === "Converti").length;
  const conversionRate = totalSubmissions > 0 ? Math.round((convertedCount / totalSubmissions) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-neutral-900">Tableau de bord</h1>
          <p className="mt-1 text-neutral-500">Vue d&apos;ensemble de votre activité</p>
        </div>
        <button
          onClick={handleRefresh}
          className="flex items-center gap-2 rounded-lg bg-primary-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
        >
          <RefreshCw size={15} className={refreshing ? "animate-spin" : ""} />
          Actualiser
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          icon={FileText}
          label="Demandes totales"
          value={totalSubmissions.toString()}
          sub={`${newCount} nouvelles`}
          color="bg-blue-50 text-blue-700"
        />
        <StatCard
          icon={Eye}
          label="Nouveaux"
          value={newCount.toString()}
          sub="En attente de traitement"
          color="bg-primary-50 text-primary-700"
        />
        <StatCard
          icon={MousePointerClick}
          label="Convertis"
          value={convertedCount.toString()}
          sub={`Taux: ${conversionRate}%`}
          color="bg-accent-50 text-accent-700"
        />
        <StatCard
          icon={Users}
          label="En cours"
          value={submissions.filter((s) => s.status === "En cours" || s.status === "Contacté").length.toString()}
          sub="En discussion"
          color="bg-green-50 text-green-700"
        />
      </div>

      {/* Secondary stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm flex items-center gap-3">
          <Clock size={18} className="text-neutral-400 flex-shrink-0" />
          <div>
            <p className="text-xs text-neutral-500">Dernière demande</p>
            <p className="text-lg font-bold text-neutral-900">{submissions[0]?.date ?? "—"}</p>
          </div>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm flex items-center gap-3">
          <TrendingUp size={18} className="text-neutral-400 flex-shrink-0" />
          <div>
            <p className="text-xs text-neutral-500">Service le + demandé</p>
            <p className="text-lg font-bold text-neutral-900 truncate">
              {getMostRequestedService(submissions)}
            </p>
          </div>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm flex items-center gap-3">
          <Percent size={18} className="text-neutral-400 flex-shrink-0" />
          <div>
            <p className="text-xs text-neutral-500">Taux de conversion</p>
            <p className="text-lg font-bold text-neutral-900">{conversionRate}%</p>
          </div>
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-neutral-100">
          <h2 className="font-heading text-lg font-semibold text-neutral-900">
            Demandes récentes
          </h2>
        </div>
        {loading ? (
          <div className="px-6 py-12 text-center text-neutral-400">Chargement...</div>
        ) : submissions.length === 0 ? (
          <div className="px-6 py-12 text-center text-neutral-400">
            Aucune demande pour le moment. Les soumissions du formulaire contact apparaîtront ici.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-neutral-50 text-left">
                  <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Nom</th>
                  <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Service</th>
                  <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Sujet</th>
                  <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Date</th>
                  <th className="px-4 py-3 text-xs font-semibold text-neutral-500 uppercase tracking-wide">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {submissions.map((s) => (
                  <tr
                    key={s.id}
                    className="hover:bg-neutral-50 cursor-pointer transition-colors"
                    onClick={() => setSelectedSubmission(s)}
                  >
                    <td className="px-4 py-3 font-medium text-neutral-900">{s.name}</td>
                    <td className="px-4 py-3 text-neutral-500">{s.service}</td>
                    <td className="px-4 py-3 text-neutral-700 max-w-xs truncate">{s.subject}</td>
                    <td className="px-4 py-3 text-neutral-500 whitespace-nowrap">{s.date}</td>
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <select
                        value={s.status}
                        onChange={(e) => handleStatusChange(s.id, e.target.value as SubmissionStatus)}
                        className={`rounded-full px-2.5 py-1 text-xs font-medium border-0 cursor-pointer ${STATUS_COLORS[s.status]}`}
                      >
                        <option value="Nouveau">Nouveau</option>
                        <option value="Contacté">Contacté</option>
                        <option value="En cours">En cours</option>
                        <option value="Converti">Converti</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
              <div>
                <h3 className="font-heading text-xl font-bold text-neutral-900">{selectedSubmission.name}</h3>
                <p className="text-sm text-neutral-500">{selectedSubmission.date} à {selectedSubmission.time}</p>
              </div>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 py-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${STATUS_COLORS[selectedSubmission.status]}`}>
                  {selectedSubmission.status}
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">{selectedSubmission.service}</span>
              </div>

              <div>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-1">Message</p>
                <p className="text-sm text-neutral-700 leading-relaxed">{selectedSubmission.message}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-1">Email</p>
                  <p className="text-sm text-neutral-700">{selectedSubmission.email}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-1">Téléphone</p>
                  <p className="text-sm text-neutral-700">{selectedSubmission.phone}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-2">Changer le statut</p>
                <div className="flex flex-wrap gap-2">
                  {(["Nouveau", "Contacté", "En cours", "Converti"] as SubmissionStatus[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => handleStatusChange(selectedSubmission.id, s)}
                      className={`rounded-full px-3 py-1 text-xs font-medium border transition-all ${
                        selectedSubmission.status === s
                          ? STATUS_COLORS[s] + " ring-2 ring-offset-1 ring-current"
                          : "border-neutral-200 text-neutral-600 hover:border-neutral-400"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 px-6 pb-6">
              <a
                href={`tel:${selectedSubmission.phone}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary-900 px-4 py-2.5 text-sm font-medium text-white hover:opacity-90"
              >
                <Phone size={15} />
                Appeler
              </a>
              <a
                href={`mailto:${selectedSubmission.email}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
              >
                <Mail size={15} />
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  sub: string;
  color: string;
}

function StatCard({ icon: Icon, label, value, sub, color }: StatCardProps) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">{label}</p>
          <p className="mt-1.5 text-2xl font-bold text-neutral-900">{value}</p>
          <p className="mt-0.5 text-xs text-neutral-400">{sub}</p>
        </div>
        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${color}`}>
          <Icon size={18} />
        </div>
      </div>
    </div>
  );
}

function getMostRequestedService(submissions: Submission[]): string {
  if (submissions.length === 0) return "—";
  const counts: Record<string, number> = {};
  for (const s of submissions) {
    if (s.service) counts[s.service] = (counts[s.service] || 0) + 1;
  }
  const sorted = Object.entries(counts).sort(([, a], [, b]) => b - a);
  return sorted[0]?.[0] || "—";
}
