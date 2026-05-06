export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-10 sm:px-8">
      <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-10 shadow-soft dark:border-slate-800/70 dark:bg-slate-900/85">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl">
          Let’s keep it simple.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          If you’re hiring a product manager with technical fluency and design sensibility, send a note and I’ll get back quickly.
        </p>
        <a
          href="mailto:yourname@gmail.com"
          className="mt-8 inline-flex rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
        >
          Get in touch
        </a>
      </section>
    </main>
  );
}
