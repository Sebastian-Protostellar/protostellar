import Link from "next/link";
import { site } from "@/lib/site";
import { Wordmark } from "@/components/wordmark";

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/legal", label: "Terms" },
];

function FootText({
  href,
  children,
  external,
}: {
  href: string;
  children: string;
  external?: boolean;
}) {
  const className = "transition-colors hover:text-paper";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
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

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="border-t border-white/12 bg-ink text-warm">
      <div className="mx-auto max-w-[92rem] px-6 py-10 md:px-10 md:py-12">
        <div className="flex items-center justify-between gap-4">
          <Wordmark href="/" size="footer" />

          <div className="flex shrink-0 items-center gap-3 text-[0.6875rem] tracking-[0.18em] uppercase text-warm/50 sm:gap-6">
            <FootText href="/contact">Contact</FootText>
            <div className="flex items-center gap-1 sm:gap-4">
              {site.social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-8 w-8 items-center justify-center text-warm/55 transition-colors hover:text-paper"
                >
                  <SocialIcon label={item.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-nowrap items-center justify-between gap-2 border-t border-white/10 pt-5 text-[0.55rem] tracking-[0.06em] uppercase text-warm/40 sm:mt-10 sm:gap-3 sm:text-[0.6875rem] sm:tracking-[0.16em]">
          <p className="whitespace-nowrap">
            © {year} {site.legalName}
            <span className="hidden sm:inline"> All rights reserved.</span>
          </p>
          <ul className="flex shrink-0 gap-3 sm:gap-8">
            {legal.map((item) => (
              <li key={item.href}>
                <FootText href={item.href}>{item.label}</FootText>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
