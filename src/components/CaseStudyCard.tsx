import Link from 'next/link';
import type { CaseStudy } from '@/types';

interface CaseStudyCardProps {
  study: CaseStudy;
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="card overflow-hidden rounded-3xl border border-slate-200/70 p-6 shadow-soft transition hover:-translate-y-1 hover:border-slate-300 dark:border-slate-800/70">
      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Case study</p>
          <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{study.title}</h3>
        </div>
        <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{study.summary}</p>
        <div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
          {study.metrics.map((metric) => (
            <span key={metric} className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 dark:border-slate-700/80 dark:bg-slate-800/70">
              {metric}
            </span>
          ))}
        </div>
        <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-slate-900 dark:hover:text-white">
          Read case study
        </Link>
      </div>
    </article>
  );
}
