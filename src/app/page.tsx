import Link from 'next/link';
import CaseStudyCard from '@/components/CaseStudyCard';
import MetricsStrip from '@/components/MetricsStrip';
import { getFeaturedCaseStudies } from '@/lib/case-studies';

export default function HomePage() {
  const featuredStudies = getFeaturedCaseStudies();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
      <section className="space-y-8 pb-10">
        <MetricsStrip />
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Product strategy, design, and execution</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            Build portfolio-grade product work with a warm, human-first point of view.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I help companies turn technical foundations into product experiences that users adopt, teams can ship, and stakeholders understand.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href="/case-studies" className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">
            View case studies
          </Link>
          <Link href="/about" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-100">
            Learn more about me
          </Link>
        </div>
      </section>

      <section className="space-y-8 py-10">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Recent case studies</p>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Work that moves metrics and teams.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-800/70 dark:bg-slate-900/85">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Approach</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">A practical, evidence-first PM practice.</h2>
          </div>
          <p className="leading-8 text-slate-600 dark:text-slate-300">
            I treat product work as a series of decisions tied to measurable outcomes. That means clear problem framing, tight handoffs, and a technical lens on execution.
          </p>
        </div>
      </section>
    </main>
  );
}
