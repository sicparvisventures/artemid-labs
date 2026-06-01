import Link from "next/link";

const apps = [
  {
    name: "Statera",
    subtitle: "Eurostat Insights",
    href: "https://eurostat-insights.vercel.app/",
    status: "Live",
    icon: "statera",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden px-5 py-6 text-[var(--foreground)] sm:px-8 lg:px-12">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl flex-col">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-full pr-3 outline-none transition-opacity hover:opacity-75 focus-visible:ring-2 focus-visible:ring-neutral-950/40"
            aria-label="Artemid Labs home"
          >
            <span className="brand-mark" aria-hidden="true">
              A
            </span>
            <span className="text-[15px] font-semibold tracking-[-0.01em]">
              Artemid Labs
            </span>
          </Link>
          <span className="rounded-full border border-black/10 bg-white/55 px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm backdrop-blur-xl">
            Portfolio
          </span>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center gap-12 py-14 sm:gap-14">
          <div className="splash text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Artemid Labs
            </h1>
          </div>

          <nav
            aria-label="Artemid Labs apps"
            className="launchpad flex w-full max-w-[520px] flex-wrap justify-center gap-x-5 gap-y-8 rounded-[34px] border border-white/55 bg-white/30 px-5 py-7 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:max-w-[680px] sm:gap-x-8 sm:px-8 sm:py-9 lg:max-w-[820px]"
          >
            {apps.map((app) => (
              <a
                key={app.href}
                href={app.href}
                className="group flex w-24 min-w-0 flex-col items-center rounded-3xl px-1 py-2 outline-none transition-transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-neutral-950/40 sm:w-28"
                aria-label={`Open ${app.name}`}
              >
                <span
                  className={`app-icon app-icon-${app.icon}`}
                  aria-hidden="true"
                >
                  <span />
                  <span />
                  <span />
                </span>
                <span className="mt-3 max-w-full truncate text-center text-[13px] font-semibold tracking-[-0.01em] text-neutral-950">
                  {app.name}
                </span>
                <span className="mt-0.5 max-w-full truncate text-center text-[11px] font-medium text-neutral-600">
                  {app.subtitle}
                </span>
                <span className="mt-1 rounded-full bg-black/6 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-neutral-600">
                  {app.status}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
