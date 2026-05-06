import type { SkillGroup } from '@/types';

interface SkillsGroupProps {
  groups: SkillGroup[];
}

export default function SkillsGroup({ groups }: SkillsGroupProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {groups.map((group) => (
        <div key={group.title} className="card rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-soft dark:border-slate-800/70 dark:bg-slate-900/85">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">{group.title}</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {group.items.map((item) => (
              <li key={item} className="list-disc pl-5">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
