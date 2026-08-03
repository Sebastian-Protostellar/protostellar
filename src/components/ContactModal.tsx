"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactModal({ open, onClose }: ContactModalProps) {
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 50);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setError("");
    }
  }, [open]);

  if (!open) return null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(
          payload?.error || "Something went wrong. Please try again.",
        );
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Close contact form"
        className="absolute inset-0 bg-foreground/30 animate-fade-in"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-md border border-line bg-surface p-8 shadow-none animate-scale-in sm:mx-6"
      >
        <div className="mb-8 flex items-start justify-between gap-6">
          <h2
            id={titleId}
            className="font-serif text-3xl leading-none tracking-tight text-foreground"
          >
            Contact
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Close
          </button>
        </div>

        {status === "success" ? (
          <div className="space-y-6 animate-fade-up">
            <p className="text-sm leading-relaxed text-muted">
              Thank you. We&apos;ll be in touch.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="text-sm text-foreground underline underline-offset-4 transition-opacity hover:opacity-60"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="block space-y-2">
              <span className="text-xs tracking-wide text-muted">Name</span>
              <input
                ref={firstFieldRef}
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full border-b border-line bg-transparent py-2 text-sm outline-none transition-colors focus:border-foreground"
              />
            </label>

            <label className="block space-y-2">
              <span className="text-xs tracking-wide text-muted">Email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full border-b border-line bg-transparent py-2 text-sm outline-none transition-colors focus:border-foreground"
              />
            </label>

            <label className="block space-y-2">
              <span className="text-xs tracking-wide text-muted">Message</span>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full resize-none border-b border-line bg-transparent py-2 text-sm outline-none transition-colors focus:border-foreground"
              />
            </label>

            {status === "error" && (
              <p className="text-sm text-foreground">{error}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="text-sm text-foreground underline underline-offset-4 transition-opacity hover:opacity-60 disabled:opacity-40"
            >
              {status === "submitting" ? "Sending…" : "Send"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
