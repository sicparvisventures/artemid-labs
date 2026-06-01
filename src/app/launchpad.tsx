"use client";

import Image from "next/image";
import { useRef, type CSSProperties } from "react";

const apps = [
  {
    name: "Statera",
    subtitle: "Eurostat Insights",
    href: "https://eurostat-insights.vercel.app/",
    icon: "/apps/statera.png",
  },
  {
    name: "Agentix",
    subtitle: "Agent orchestration",
    href: "https://agentix-gilt.vercel.app/",
    icon: "/apps/agentix.svg",
  },
  {
    name: "Xinori_OS",
    subtitle: "Crossover OS",
    href: "https://xinori-os-v2.vercel.app/",
    icon: "/apps/xinori-os.png",
  },
  {
    name: "Xinori",
    subtitle: "Intelligence",
    href: "https://xinori-intelligence-v2.vercel.app/",
    icon: "/apps/xinori.svg",
  },
  {
    name: "Voxel Quest",
    subtitle: "Loyalty game",
    href: "https://voxel-quest.vercel.app/",
    icon: "/apps/voxel-quest.svg",
  },
  {
    name: "The Coop",
    subtitle: "Rewards",
    href: "https://the-coop-psi.vercel.app/",
    icon: "/apps/the-coop.png",
  },
];

type TileStyle = CSSProperties & {
  "--tile-index": number;
};

export function Launchpad() {
  const rootRef = useRef<HTMLDivElement>(null);

  function setShifts(activeIdx: number | null, phase: "in" | "out") {
    if (!rootRef.current) return;
    const cs = getComputedStyle(document.documentElement);
    const num = (name: string, fallback: number) => {
      const value = parseFloat(cs.getPropertyValue(name));
      return Number.isFinite(value) ? value : fallback;
    };
    const ease = (name: string, fallback: string) =>
      cs.getPropertyValue(name).trim() || fallback;

    const lift = num("--avatar-lift", -4);
    const falloff = num("--avatar-falloff", 0.45);
    const scale = num("--avatar-scale", 1.05);
    const timing =
      phase === "out"
        ? ease("--avatar-ease-out", "cubic-bezier(0.34, 3.85, 0.64, 1)")
        : ease("--avatar-ease-in", "cubic-bezier(0.22, 1, 0.36, 1)");

    rootRef.current.querySelectorAll<HTMLElement>(".t-avatar").forEach((el, i) => {
      el.style.transitionTimingFunction = timing;
      if (activeIdx == null) {
        el.style.setProperty("--shift", "0px");
        el.style.setProperty("--scale-active", "1");
        return;
      }
      const distance = Math.abs(i - activeIdx);
      el.style.setProperty(
        "--shift",
        `${(lift * Math.pow(falloff, distance)).toFixed(3)}px`,
      );
      el.style.setProperty("--scale-active", i === activeIdx ? String(scale) : "1");
    });
  }

  return (
    <nav
      ref={rootRef}
      aria-label="Artemid Labs apps"
      className="launchpad-frame t-panel-slide t-avatar-group"
      data-open="true"
      onMouseLeave={() => setShifts(null, "out")}
    >
      <span className="corner corner-nw" aria-hidden="true" />
      <span className="corner corner-ne" aria-hidden="true" />
      <span className="corner corner-sw" aria-hidden="true" />
      <span className="corner corner-se" aria-hidden="true" />

      <div className="launchpad-grid">
        {apps.map((app, index) => (
          <a
            key={app.href}
            href={app.href}
            className="app-tile t-avatar"
            aria-label={`Open ${app.name}`}
            style={{ "--tile-index": index } as TileStyle}
            onMouseEnter={() => setShifts(index, "in")}
            onFocus={() => setShifts(index, "in")}
            onBlur={() => setShifts(null, "out")}
          >
            <span className="app-icon-shell">
              <Image
                src={app.icon}
                alt=""
                width={112}
                height={112}
                className="app-icon"
                priority
              />
            </span>
            <span className="app-title">{app.name}</span>
            <span className="app-subtitle">{app.subtitle}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
