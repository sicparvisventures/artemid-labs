import Image from "next/image";
import { Launchpad } from "./launchpad";

const capabilities = [
  "Forecast interfaces",
  "Agent workflows",
  "Market intelligence",
  "Operational dashboards",
];

const work = [
  {
    name: "Statera",
    type: "Hospitality intelligence",
    href: "https://eurostat-insights.vercel.app/",
    icon: "/apps/statera.png",
    description:
      "Forecasting, signals, and portfolio views built for operators who need the next week to feel legible.",
  },
  {
    name: "Agentix",
    type: "Agent operations",
    href: "https://agentix-gilt.vercel.app/",
    icon: "/apps/agentix.svg",
    description:
      "A clean command surface for agent-driven work, orchestration, and operational follow-through.",
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="page-frame" aria-hidden="true" />
      <header className="site-header" aria-label="Artemid Labs">
        <a className="brand-header" href="#top" aria-label="Artemid Labs home">
          <Image
            src="/artemid-mark.svg"
            alt=""
            width={44}
            height={44}
            priority
            className="brand-symbol"
          />
          <span className="brand-name">Artemid Labs</span>
        </a>
        <nav className="site-nav" aria-label="Page sections">
          <a href="#work">Work</a>
          <a href="#method">Method</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Independent product studio</p>
          <h1>Artemid Labs</h1>
          <p className="hero-text">
            Interfaces for companies that run on timing, judgement, and data. We
            turn messy operational signals into calm systems people actually use.
          </p>
          <div className="hero-actions">
            <a href="#work" className="text-link">
              View work
            </a>
            <a href="https://agentix-gilt.vercel.app/" className="text-link muted-link">
              Open Agentix
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <Launchpad />
          <div className="signal-strip" aria-label="Artemid Labs capabilities">
            {capabilities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-kicker">Selected work</div>
        <div className="work-grid">
          {work.map((item) => (
            <a
              className="work-card"
              href={item.href}
              key={item.name}
            >
              <span className="work-meta">{item.type}</span>
              <span className="work-icon">
                <Image src={item.icon} alt="" width={96} height={96} />
              </span>
              <span className="work-title">{item.name}</span>
              <span className="work-description">{item.description}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="method-section" id="method">
        <div>
          <p className="section-kicker">Method</p>
          <h2>Small teams, sharp systems, no theatre.</h2>
        </div>
        <div className="method-copy">
          <p>
            Artemid Labs builds products around the decisions that matter:
            forecast the week, route attention, automate the boring handoffs,
            and keep the interface quiet enough to trust.
          </p>
          <div className="method-list">
            <span>Research the operating loop</span>
            <span>Design the control surface</span>
            <span>Ship the smallest useful system</span>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <span>Artemid Labs</span>
        <a href="https://github.com/sicparvisventures/artemid-labs">
          GitHub
        </a>
      </footer>
    </main>
  );
}
