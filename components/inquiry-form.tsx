"use client";

import { FormEvent, useState } from "react";
import { inquiryTypes, site } from "@/lib/site";

type InquiryId = (typeof inquiryTypes)[number]["id"];

const fields: {
  name: string;
  organization: string;
  email: string;
  inquiry: InquiryId;
  message: string;
} = {
  name: "",
  organization: "",
  email: "",
  inquiry: "capital",
  message: "",
};

export function InquiryForm({
  defaultInquiry = "capital",
  className = "mt-12",
}: {
  defaultInquiry?: InquiryId;
  className?: string;
}) {
  const [values, setValues] = useState({ ...fields, inquiry: defaultInquiry });
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const type = inquiryTypes.find((item) => item.id === values.inquiry)?.label ?? "";
    const body = [
      `Name: ${values.name}`,
      `Organization: ${values.organization}`,
      `Email: ${values.email}`,
      `Nature of inquiry: ${type}`,
      "",
      values.message,
    ].join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(`Inquiry — ${type}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  const inputClass =
    "w-full border-0 border-b border-rule bg-transparent py-3 text-[0.98rem] text-ink outline-none transition placeholder:text-mid focus:border-ink";

  return (
    <form onSubmit={onSubmit} className={`${className} grid gap-8`} noValidate={false}>
      <fieldset className="grid gap-3">
        <legend className="kicker">Nature of inquiry</legend>
        <div className="mt-4 grid gap-3">
          {inquiryTypes.map((item) => (
            <label key={item.id} className="flex cursor-pointer items-center gap-3 text-[0.98rem]">
              <input
                type="radio"
                name="inquiry"
                value={item.id}
                checked={values.inquiry === item.id}
                onChange={(event) =>
                  setValues((current) => ({
                    ...current,
                    inquiry: event.target.value as InquiryId,
                  }))
                }
                className="accent-ink"
              />
              {item.label}
            </label>
          ))}
        </div>
      </fieldset>
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
      <button type="submit" className="anchor w-fit text-ink">
        Send inquiry
      </button>
      {sent ? (
        <p className="text-sm text-ink/60">
          Your message has been prepared for {site.email}. If a mail client does not open, write to the firm directly.
        </p>
      ) : (
        <p className="text-sm text-ink/55">
          Or write to{" "}
          <a className="underline decoration-rule underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
