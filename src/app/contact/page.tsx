export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-8">
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Contact</p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Let’s build something great together.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
            I’m always interested in new opportunities and collaborations. Whether you’re hiring for a product role or have an exciting project in mind, let’s connect.
          </p>
        </section>

        {/* Contact Methods */}
        <section className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {/* Email Card */}
          <div className="group rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-soft transition hover:shadow-lg dark:border-slate-800/70 dark:bg-slate-900/85 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white sm:h-12 sm:w-12">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">Email</h3>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                  Best way to reach me for professional inquiries
                </p>
                <a
                  href="mailto:oyewalebisola23@gmail.com"
                  className="mt-2 inline-flex items-center gap-2 text-accent hover:text-accent/80 transition text-sm sm:text-base"
                >
                  <span className="truncate">oyewalebisola23@gmail.com</span>
                  <svg className="h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="group rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-soft transition hover:shadow-lg dark:border-slate-800/70 dark:bg-slate-900/85 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white sm:h-12 sm:w-12">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">LinkedIn</h3>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                  Connect professionally and view my experience
                </p>
                <a
                  href="https://www.linkedin.com/in/bisola-oyewale-540285217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-accent hover:text-accent/80 transition text-sm sm:text-base"
                >
                  <span className="truncate">linkedin.com/in/bisola-oyewale</span>
                  <svg className="h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-soft dark:border-slate-800/70 dark:bg-slate-900/85 sm:p-8">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white sm:text-lg">Response Time</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            I typically respond to professional inquiries within 24 hours. For urgent opportunities, feel free to follow up.
          </p>
        </section>
      </div>
    </main>
  );
}
