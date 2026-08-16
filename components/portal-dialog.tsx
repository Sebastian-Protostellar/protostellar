"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

function isPortalHref(href: string | null) {
  if (!href) return false;
  try {
    const url = new URL(href, window.location.origin);
    return url.pathname === "/portal" || url.hash === "#portal";
  } catch {
    return href === "/portal" || href === "#portal" || href.endsWith("#portal");
  }
}

export function PortalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const titleId = useId();

  const close = useCallback(() => {
    setOpen(false);
    setNotice("");
    if (window.location.hash === "#portal") {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }, []);

  const show = useCallback(() => {
    setOpen(true);
    if (window.location.hash !== "#portal") {
      window.history.pushState(null, "", "#portal");
    }
  }, []);

  useEffect(() => {
    const sync = () => {
      setOpen(window.location.hash === "#portal");
    };
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest("a[href]");
      if (!link) return;
      if (!isPortalHref(link.getAttribute("href"))) return;
      event.preventDefault();
      show();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [show]);

  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const root = dialogRef.current;
    const focusables = () =>
      root
        ? Array.from(
            root.querySelectorAll<HTMLElement>(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
            ),
          ).filter((node) => !node.hasAttribute("disabled"))
        : [];
    const id = window.requestAnimationFrame(() => focusables()[0]?.focus());
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(id);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      lastFocus.current?.focus();
    };
  }, [open, close]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice("This email is not registered.");
  }

  const inputClass =
    "w-full border-0 border-b border-rule bg-transparent py-3 text-[0.98rem] text-ink outline-none transition placeholder:text-mid focus:border-ink";

  return (
    <>
      {children}
      {open ? (
        <div className="fixed inset-0 z-[80]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            onClick={close}
          />
          <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-y-auto px-4 py-10 sm:px-6 sm:py-16">
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="pointer-events-auto relative my-auto w-full max-w-[28rem] bg-warm px-6 py-8 text-ink shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:px-10 md:py-10"
            >
              <button
                type="button"
                onClick={close}
                className="absolute right-6 top-6 text-[0.68rem] tracking-[0.18em] uppercase text-mid transition-colors hover:text-ink"
              >
                Close
              </button>
              <p className="kicker">Access</p>
              <h2 id={titleId} className="mt-4 font-serif text-[clamp(2rem,4vw,2.75rem)] leading-[1.08]">
                Portal
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-ink/70">
                Enter your email to receive a magic link.
              </p>
              <form onSubmit={onSubmit} className="mt-8 grid gap-8">
                <label className="grid gap-2">
                  <span className="kicker">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={inputClass}
                  />
                </label>
                <button type="submit" className="anchor w-fit text-ink">
                  Sign in
                </button>
                {notice ? (
                  <p role="alert" className="text-sm text-ink/60">
                    {notice}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
