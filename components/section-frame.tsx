import type { ReactNode } from "react";

type Theme = "light" | "dark";

export function SectionFrame({
  id,
  theme,
  kicker,
  title,
  intro,
  children,
}: {
  id: string;
  theme: Theme;
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  const dark = theme === "dark";

  return (
    <section
      id={id}
      data-nav-theme={dark ? "dark" : "light"}
      className={`section ${dark ? "bg-ink text-warm" : "bg-warm text-ink"}`}
    >
      <div className="mx-auto max-w-[92rem] px-6 py-28 md:px-10 md:py-36">
        <header className="grid items-start gap-8 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="kicker">{kicker}</p>
            <h2 className="mt-5 font-serif text-[clamp(2.35rem,4.8vw,4.1rem)] leading-[1.06] tracking-[-0.02em]">
              {title}
            </h2>
          </div>
          {intro ? (
            <div
              className={`measure text-[1.05rem] leading-8 md:col-span-6 md:col-start-7 ${
                dark ? "text-warm/70" : "text-ink/70"
              }`}
            >
              {intro}
            </div>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}

export function IndexRow({
  theme,
  label,
  children,
  href,
}: {
  theme: Theme;
  label: ReactNode;
  children: ReactNode;
  href?: string | null;
}) {
  const dark = theme === "dark";
  const rule = dark ? "border-white/12" : "border-rule";
  const body = dark ? "text-warm/65" : "text-ink/65";

  const name =
    href ? (
      <a href={href} target="_blank" rel="noreferrer" className="transition-opacity hover:opacity-70">
        {label}
      </a>
    ) : (
      label
    );

  return (
    <li className={`grid gap-4 border-t py-10 last:border-b md:grid-cols-12 md:items-baseline md:gap-8 md:py-12 ${rule}`}>
      <div className="font-serif text-[1.7rem] leading-tight tracking-[-0.03em] md:col-span-5 md:text-[1.9rem]">
        {name}
      </div>
      <div className={`text-[1.02rem] leading-8 md:col-span-6 md:col-start-7 ${body}`}>{children}</div>
    </li>
  );
}
