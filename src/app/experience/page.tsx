import Timeline from '@/components/Timeline';
import type { ExperienceItem } from '@/types';
import experience from '@/data/experience.json';

export default function ExperiencePage() {
  const timelineItems = experience as ExperienceItem[];

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 sm:px-8">
      <section className="space-y-6 pb-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Experience</p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            Timeline of impact, not only titles.
          </h1>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          The focus here is the change delivered across product, revenue, and adoption — not a laundry list of responsibilities.
        </p>
      </section>

      <Timeline items={timelineItems} />
    </main>
  );
}
