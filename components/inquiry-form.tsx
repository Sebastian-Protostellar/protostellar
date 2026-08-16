"use client";

import { FormEvent, useState } from "react";

export function InquiryForm({ className = "mt-12" }: { className?: string }) {
  const [values, setValues] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(data.error || "Failed to send message. Please try again.");
        return;
      }

      setStatus("sent");
    } catch {
      setStatus("error");
      setError("Failed to send message. Please try again.");
    }
  }

  const inputClass =
    "w-full border-0 border-b border-rule bg-transparent py-3 text-[0.98rem] text-ink outline-none transition placeholder:text-mid focus:border-ink";

  if (status === "sent") {
    return <p className={`${className} text-[0.98rem] leading-7 text-ink/70`}>Your message has been sent.</p>;
  }

  return (
    <form onSubmit={onSubmit} className={`${className} grid gap-8`} noValidate={false}>
      <label className="grid gap-2">
        <span className="kicker">Name</span>
        <input
          required
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
          className={inputClass}
        />
      </label>
      <label className="grid gap-2">
        <span className="kicker">Organization</span>
        <input
          name="organization"
          autoComplete="organization"
          value={values.organization}
          onChange={(event) => setValues((current) => ({ ...current, organization: event.target.value }))}
          className={inputClass}
        />
      </label>
      <label className="grid gap-2">
        <span className="kicker">Email</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
          className={inputClass}
        />
      </label>
      <label className="grid gap-2">
        <span className="kicker">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          className={`${inputClass} resize-y`}
        />
      </label>
      <button type="submit" className="anchor w-fit text-ink" disabled={status === "sending"}>
        {status === "sending" ? "Sending" : "Send"}
      </button>
      {status === "error" ? (
        <p role="alert" className="text-sm text-ink/60">
          {error}
        </p>
      ) : null}
    </form>
  );
}
