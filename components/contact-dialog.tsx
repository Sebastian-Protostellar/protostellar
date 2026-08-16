"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { InquiryForm } from "@/components/inquiry-form";
import { inquiryTypes } from "@/lib/site";

type InquiryId = (typeof inquiryTypes)[number]["id"];

type ContactContextValue = {
  open: (inquiry?: InquiryId) => void;
  close: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error("useContact must be used within ContactProvider");
  return ctx;
}

function isContactHref(href: string | null) {
  if (!href) return false;
  try {
    return new URL(href, window.location.origin).hash === "#contact";
  } catch {
    return href === "#contact" || href.endsWith("#contact");
  }
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [inquiry, setInquiry] = useState<InquiryId>("general");
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const titleId = useId();

  const close = useCallback(() => {
    setOpen(false);
    if (window.location.hash === "#contact") {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }, []);

  const show = useCallback((next?: InquiryId) => {
    if (next) setInquiry(next);
    setOpen(true);
    if (window.location.hash !== "#contact") {
      window.history.pushState(null, "", "#contact");
    }
  }, []);

  useEffect(() => {
    const syncHash = () => {
      if (window.location.hash === "#contact") setOpen(true);
      else setOpen(false);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest("a[href]");
      if (!link) return;
      if (!isContactHref(link.getAttribute("href"))) return;
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

  return (
    <ContactContext.Provider value={{ open: show, close }}>
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
              className="pointer-events-auto relative my-auto w-full max-w-[34rem] bg-warm px-6 py-8 text-ink shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:px-10 md:py-10"
            >
              <button
                type="button"
                onClick={close}
                className="absolute right-6 top-6 text-[0.68rem] tracking-[0.18em] uppercase text-mid transition-colors hover:text-ink"
              >
                Close
              </button>
              <p className="kicker">Correspondence</p>
              <h2 id={titleId} className="mt-4 max-w-[12ch] font-serif text-[clamp(2rem,4vw,2.75rem)] leading-[1.08]">
                Contact Protostellar
              </h2>
              <p className="mt-5 text-[0.98rem] leading-7 text-ink/70">
                Confidential inquiries may be directed to the firm.
              </p>
              <InquiryForm key={inquiry} defaultInquiry={inquiry} className="mt-8" />
            </div>
          </div>
        </div>
      ) : null}
    </ContactContext.Provider>
  );
}
