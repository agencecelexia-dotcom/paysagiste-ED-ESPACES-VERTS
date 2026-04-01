import Image from "next/image";
import FadeUp from "@/components/animations/FadeUp";
import { clientConfig } from "@/config/client.config";

const reasons = [
  { title: `${clientConfig.ANNEES_EXPERIENCE} ans d'expérience`, desc: "On connaît le terrain, les sols, le climat. Chaque chantier est géré avec du métier." },
  { title: "Travail sur mesure", desc: "Chaque jardin est différent. On s'adapte à votre terrain, vos envies et votre budget." },
  { title: "Travail soigné", desc: "On fait les choses bien, proprement, et on laisse le chantier nickel." },
  { title: "Devis gratuit", desc: "On se déplace, on regarde, on vous fait un devis clair et sans surprise." },
  { title: "Suivi du chantier", desc: "Un seul interlocuteur du début à la fin. Vous savez toujours où ça en est." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <FadeUp>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/_template/equipe/equipe-groupe.jpg"
                alt={`Équipe ${clientConfig.NOM_ENTREPRISE} au travail`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeUp>

          {/* Content */}
          <div>
            <FadeUp>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-600 mb-4">
                Pourquoi nous choisir
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-8">
                Du Travail Bien Fait, Tout Simplement
              </h2>
            </FadeUp>

            <div className="space-y-5">
              {reasons.map((r, i) => (
                <FadeUp key={r.title} delay={i * 0.08}>
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 shrink-0 h-6 w-6 rounded-full bg-accent-500 flex items-center justify-center">
                      <svg className="h-3.5 w-3.5 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">{r.title}</p>
                      <p className="text-sm text-neutral-600 mt-0.5">{r.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
