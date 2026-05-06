import Link from 'next/link';
import CaseStudyCard from '@/components/CaseStudyCard';
import { getAllCaseStudies } from '@/lib/case-studies';

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <section className="space-y-6 pb-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Case studies</p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            Product work with clear outcomes.
          </h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Each case study follows a problem → approach → outcome structure, so hiring teams can see the reasoning and the results.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>

      <div className="mt-10">
        <Link href="/" className="text-sm font-semibold text-accent transition hover:text-slate-900 dark:hover:text-white">
          Back to home
        </Link>
      </div>
    </main>
  );
}
