import SkillsGroup from '@/components/SkillsGroup';
import type { SkillGroup } from '@/types';
import skills from '@/data/skills.json';

export default function AboutPage() {
  const skillGroups = skills as SkillGroup[];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-8">
      <section className="space-y-8 pb-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">About</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            Product Management with a technical instinct and a people first mindset.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I believe great products start with a simple question: What problem are we solving, and how will we know we've solved it? I combine research, design thinking and engineering collaboration to make decisions that are clear, practical and easy for team to execute.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="/images/OyewaleBisolaElizabeth.pdf"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
            download
          >
            Download resume
          </a>
        </div>

        {/* Profile Image Section */}
        <div className="flex justify-center py-8">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 shadow-soft dark:border-slate-800/70 dark:bg-slate-900/85">
              <img
                src="/images/profile.jpeg"
                alt="Bisola Oyewale - Product Manager"
                className="h-80 w-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Skills</p>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Product and technical strengths.</h2>
        </div>
        <SkillsGroup groups={skillGroups} />
      </section>
    </main>
  );
}
