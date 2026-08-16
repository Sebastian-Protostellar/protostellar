"use client";

import { useEffect, useRef, useState } from "react";
import { nav } from "@/lib/site";
import { Wordmark } from "@/components/wordmark";

export function SiteHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-theme]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = 0;
    let target = 0;
    let frame = 0;

    const apply = (value: number) => {
      header.style.setProperty("--nav-p", value.toFixed(4));
      header.classList.toggle("is-scrolled", value > 0.08 || open);
    };

    const measure = () => {
      if (open) return 1;
      const start = 12;
      const span = 320;
      const y = window.scrollY;
      const linear = y <= start ? 0 : Math.min(1, (y - start) / span);
      return linear * linear * (3 - 2 * linear);
    };

    const tick = () => {
      const delta = target - current;
      if (reduced || Math.abs(delta) < 0.002) {
        current = target;
        apply(current);
        frame = 0;
        return;
      }
      current += delta * 0.16;
      apply(current);
      frame = requestAnimationFrame(tick);
    };

    const sync = () => {
      target = measure();
      if (!frame) frame = requestAnimationFrame(tick);
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header ref={headerRef} className={`site-nav fixed inset-x-0 top-0 z-50 ${open ? "is-menu-open" : ""}`}>
      <div className="nav-inner relative z-50 mx-auto flex max-w-[92rem] items-center gap-6 px-6 md:px-10">
        <Wordmark />
        <nav className="ml-auto hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`text-[0.7rem] font-normal tracking-[0.18em] uppercase transition-opacity duration-300 ${
                active === item.id ? "opacity-100" : "opacity-55 hover:opacity-100"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#portal"
          className="ml-auto border border-current/40 px-3.5 py-2 text-[0.68rem] tracking-[0.2em] uppercase transition-opacity hover:opacity-100 lg:ml-2"
        >
          Portal
        </a>
        <button
          type="button"
          className="relative h-10 w-10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`absolute left-2 right-2 top-[14px] h-px bg-current transition ${open ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`absolute left-2 right-2 top-[24px] h-px bg-current transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </button>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-0 z-40 flex flex-col bg-ink px-8 pt-28 text-warm lg:hidden"
        >
          <nav className="flex flex-col gap-7" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl tracking-[-0.03em]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
