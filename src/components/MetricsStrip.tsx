export default function MetricsStrip() {
  return (
    <div className="mb-6 overflow-hidden rounded-full border border-slate-300/60 bg-white/85 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/85">
      <div className="animate-scroll flex items-center gap-2 whitespace-nowrap px-4 py-2 text-sm text-slate-700 dark:text-slate-200">
        <span>Product thinker</span>
        <span aria-hidden="true">·</span>
        <span>Product Design background</span>
        <span aria-hidden="true">·</span>
        <span>3 shipped products</span>
        <span aria-hidden="true">·</span>
        <span>Open to remote</span>
        <span className="mx-4" aria-hidden="true">•</span>
        <span>Product thinker</span>
        <span aria-hidden="true">·</span>
        <span>Product Design background</span>
        <span aria-hidden="true">·</span>
        <span>3 shipped products</span>
        <span aria-hidden="true">·</span>
        <span>Open to remote</span>
      </div>
    </div>
  );
}
