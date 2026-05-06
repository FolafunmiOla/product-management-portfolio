import type { ExperienceItem } from '@/types';

interface TimelineProps {
  items: ExperienceItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item) => (
        <div key={item.company} className="card rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-soft dark:border-slate-800/70 dark:bg-slate-900/85">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.company}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">{item.period}</span>
          </div>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {item.impact.map((point) => (
              <li key={point} className="list-disc pl-5">{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
