import type { ReactNode } from "react";
import { legalNotice, nav, site } from "@/lib/site";
import { Wordmark } from "@/components/wordmark";

const correspondence = [
  { href: "/#contact", label: "Contact" },
  { href: "/deal", label: "Submit a deal" },
  { href: "/careers", label: "Careers" },
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/legal", label: "Legal" },
];

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="kicker">{title}</p>
      <div className="mt-5 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function SocialIcon({ label }: { label: "LinkedIn" | "X" }) {
  if (label === "X") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.56V9h3.56zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0" />
    </svg>
  );
}

function FootLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-[0.72rem] tracking-[0.16em] uppercase text-warm/65 transition-colors hover:text-paper"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink text-warm">
      <div className="mx-auto max-w-[92rem] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Wordmark href="/" size="footer" />
            <p className="mt-6 flex flex-col gap-1.5" aria-label="Offices">
              {site.geography.map((city) => (
                <span key={city} className="text-[0.72rem] tracking-[0.16em] uppercase text-warm/65">
                  {city}
                </span>
              ))}
            </p>
            <div className="mt-8 flex items-center gap-5">
              {site.social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="text-warm/65 transition-colors hover:text-paper"
                >
                  <SocialIcon label={item.label} />
                </a>
              ))}
            </div>
          </div>

          <Column title="The firm">
            {nav.map((item) => (
              <FootLink key={item.id} href={item.href}>
                {item.label}
              </FootLink>
            ))}
          </Column>

          <Column title="Correspondence">
            {correspondence.map((item) => (
              <FootLink key={item.href} href={item.href}>
                {item.label}
              </FootLink>
            ))}
          </Column>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="max-w-[42rem] text-[0.78rem] leading-6 text-warm/40">{legalNotice}</p>
          <div className="mt-8 flex flex-col gap-4 text-[0.68rem] tracking-[0.16em] uppercase text-mid sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {site.legalName}</p>
            <div className="flex gap-8">
              {legal.map((item) => (
                <FootLink key={item.href} href={item.href}>
                  {item.label}
                </FootLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
