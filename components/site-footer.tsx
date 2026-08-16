import Link from "next/link";
import { site } from "@/lib/site";

const correspondence = [
  { href: "/contact", label: "Contact" },
  ...site.social.map((item) => ({ href: item.href, label: item.label, external: true })),
];

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/legal", label: "Legal" },
];

function MetaLink({
  href,
  children,
  external,
}: {
  href: string;
  children: string;
  external?: boolean;
}) {
  const className = "text-warm/70 transition-colors hover:text-paper";

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

export function SiteFooter() {
  return (
    <footer id="site-footer" className="bg-ink text-warm">
      <div className="mx-auto max-w-[92rem] px-6 pt-16 pb-10 md:px-10 md:pt-24 md:pb-12">
        <div className="grid items-start gap-12 border-t border-white/12 pt-14 md:grid-cols-12 md:gap-8 md:pt-16">
          <Link
            href="/"
            aria-label="Protostellar, home"
            className="inline-flex items-center gap-4 md:col-span-6"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/crest-white-512.png"
              alt=""
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
              decoding="async"
            />
            <span className="font-serif text-[1.85rem] leading-none tracking-[-0.03em] md:text-[2.1rem]">
              Protostellar
            </span>
          </Link>

          <ul className="flex flex-col gap-2 font-serif text-[1.15rem] leading-snug tracking-[-0.02em] md:col-span-3 md:col-start-10">
            {correspondence.map((item) => (
              <li key={item.href}>
                <MetaLink href={item.href} external={"external" in item}>
                  {item.label}
                </MetaLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-4 border-t border-white/10 pt-6 text-[0.68rem] tracking-[0.16em] uppercase text-warm/40 md:mt-20 md:grid-cols-3 md:items-center">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="md:text-center">{site.geography.join(" · ")}</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 md:justify-end">
            {legal.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-paper">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
