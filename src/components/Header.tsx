"use client";

import { useEffect, useState } from "react";
import { ContactModal } from "./ContactModal";

export function Header() {
  const [open, setOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      if (!hero) return;
      setOverHero(window.scrollY < hero.offsetHeight - 72);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 animate-fade-in">
        <div
          className={`border-b backdrop-blur-xl transition-colors duration-300 ${
            overHero
              ? "border-white/15 bg-white/10 text-white"
              : "border-line/80 bg-white/70 text-foreground"
          }`}
        >
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 sm:py-5">
            <a
              href="#top"
              className="font-serif text-xl leading-none tracking-tight transition-opacity hover:opacity-60 sm:text-2xl"
              aria-label="Protostellar & Co. home"
            >
              Protostellar &amp; Co.
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="text-sm tracking-wide transition-opacity hover:opacity-60"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
