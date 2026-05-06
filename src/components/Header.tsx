'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const navItems = [
  { label: 'Work', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-surface/90 backdrop-blur-xl dark:border-slate-800/70 dark:bg-[#1A1814]/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-sm text-slate-700 dark:text-slate-200 sm:px-6">
        <Link href="/" className="font-semibold text-slate-900 dark:text-slate-100">
          Bisola Oyewale
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-900 dark:hover:text-white">
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full border border-slate-300/70 bg-white/90 px-2 py-1 text-xs text-slate-900 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 sm:px-3 sm:text-sm"
          >
            {mounted && theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  );
}
