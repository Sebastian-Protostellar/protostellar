import type { CSSProperties, ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { Wordmark } from "@/components/wordmark";
import Link from "next/link";

type Props = {
  title: string;
  kicker?: string;
  tight?: boolean;
  children: ReactNode;
};

export function UtilityPage({ title, kicker, tight = false, children }: Props) {
  return (
    <div className="min-h-screen bg-warm text-ink">
      <header className="site-nav is-scrolled sticky top-0 z-50" style={{ "--nav-p": "1" } as CSSProperties}>
        <div className="nav-inner mx-auto flex max-w-[92rem] items-center justify-between px-6 md:px-10">
          <Wordmark />
          <div className="flex items-center gap-8">
            <a
              href="#portal"
              className="border border-white/35 px-3.5 py-2 text-[0.68rem] tracking-[0.2em] uppercase text-warm/80 transition-colors hover:border-paper hover:text-paper"
            >
              Portal
            </a>
            <Link href="/" className="text-[0.7rem] tracking-[0.18em] uppercase text-warm/70 hover:text-paper">
              Home
            </Link>
          </div>
        </div>
      </header>
      <main
        className={`mx-auto max-w-[46rem] px-6 ${tight ? "py-14 md:py-16" : "py-20 md:py-28"}`}
      >
        {kicker ? <p className="kicker">{kicker}</p> : null}
        <h1 className={`font-serif ${tight ? "text-4xl" : "text-5xl"} ${kicker ? "mt-5" : ""}`}>{title}</h1>
        <div
          className={`${tight ? "mt-8" : "mt-12"} text-[1.02rem] leading-8 text-ink/75 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-14 [&_h2]:font-serif [&_h2]:text-[1.55rem] [&_h2]:leading-snug [&_h2]:tracking-[-0.03em] [&_h2]:text-ink [&_p+_p]:mt-6 [&_ul]:mt-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5`}
        >
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
