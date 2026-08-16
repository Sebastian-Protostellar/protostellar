"use client";

import { useEffect, useState } from "react";

const items = [
  { id: "hero", label: "01" },
  { id: "firm", label: "02" },
  { id: "protostellar-and-co", label: "03" },
  { id: "protostellar-capital", label: "04" },
  { id: "portfolio", label: "05" },
  { id: "memos", label: "06" },
];

export function SectionRail() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0.15, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ol className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`pointer-events-auto text-[0.62rem] tracking-[0.2em] text-paper mix-blend-difference transition-opacity ${
                active === item.id ? "opacity-100" : "opacity-35 hover:opacity-80"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
