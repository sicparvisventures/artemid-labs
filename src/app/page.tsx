import Image from "next/image";
import { Launchpad } from "./launchpad";

export default function Home() {
  return (
    <main className="page-shell">
      <div className="page-frame" aria-hidden="true" />
      <section className="stage">
        <header className="brand-header" aria-label="Artemid Labs">
          <Image
            src="/artemid-mark.svg"
            alt=""
            width={44}
            height={44}
            priority
            className="brand-symbol"
          />
          <span className="brand-name">Artemid Labs</span>
        </header>

        <div className="hero-lockup">
          <Image
            src="/artemid-mark.svg"
            alt=""
            width={88}
            height={88}
            priority
            className="hero-symbol"
          />
          <h1>Artemid Labs</h1>
        </div>

        <Launchpad />
      </section>
    </main>
  );
}
