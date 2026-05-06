import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/case-studies';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllCaseStudies().map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 sm:px-8">
      <div className="space-y-6 pb-10">
        <Link href="/case-studies" className="text-sm font-semibold text-accent transition hover:text-slate-900 dark:hover:text-white">
          ← Back to case studies
        </Link>
        <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-800/70 dark:bg-slate-900/85">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Case study</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">{caseStudy.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{caseStudy.subheading}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {caseStudy.metrics.map((metric) => (
              <span key={metric} className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1 text-sm text-slate-600 dark:border-slate-700/80 dark:bg-slate-800/75 dark:text-slate-300">
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-10">
          <section className="space-y-4 rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-800/70 dark:bg-slate-900/85">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Problem</p>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">{caseStudy.problem}</p>
          </section>
          <section className="space-y-4 rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-800/70 dark:bg-slate-900/85">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Approach</p>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">{caseStudy.approach}</p>
          </section>
          <section className="space-y-4 rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-800/70 dark:bg-slate-900/85">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Outcome</p>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">{caseStudy.outcome}</p>
          </section>
        </div>

        <aside className="space-y-6">
          {caseStudy.liveUrl && (
            <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-soft dark:border-slate-800/70 dark:bg-slate-900/85">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Live Prototype</p>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Experience the working RentRight marketplace prototype with real search, verified listings, and cost transparency.
              </p>
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent/90"
              >
                View Live Prototype
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}
          {caseStudy.images?.length ? (
            <div className="space-y-4 rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-soft dark:border-slate-800/70 dark:bg-slate-900/85">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Screenshots</p>
              <div className="space-y-4">
                {caseStudy.images.map((image) => (
                  <div key={image.src} className="overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-50 dark:border-slate-700/70 dark:bg-slate-800/90">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          
        </aside>
      </div>
    </main>
  );
}
