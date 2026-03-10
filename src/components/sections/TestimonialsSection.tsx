import FadeUp from "@/components/animations/FadeUp";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const displayed = testimonials.slice(0, 3);
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-600 mb-4">
            Témoignages
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900">
            Ce que Disent nos Clients
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {displayed.map((t, i) => (
            <FadeUp key={t.id} delay={i * 0.1}>
              <div className="h-full flex flex-col p-6 md:p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className={`h-4 w-4 ${j < t.rating ? "text-accent-500" : "text-neutral-300"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <blockquote className="flex-1 text-sm text-neutral-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </blockquote>
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary-200 flex items-center justify-center text-primary-800 font-semibold text-sm">
                    {t.clientName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{t.clientName}</p>
                    <p className="text-xs text-neutral-500">{t.projectType}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
