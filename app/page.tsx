import { Hero } from "@/components/hero";
import { SectionAndCo } from "@/components/section-and-co";
import { SectionCapital } from "@/components/section-capital";
import { SectionFirm } from "@/components/section-firm";
import { SectionMemos } from "@/components/section-memos";
import { SectionPortfolio } from "@/components/section-portfolio";
import { SectionRail } from "@/components/section-rail";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <a
        href="#firm"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:bg-warm focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <SiteHeader />
      <SectionRail />
      <main>
        <Hero />
        <SectionFirm />
        <SectionAndCo />
        <SectionCapital />
        <SectionPortfolio />
        <SectionMemos />
      </main>
      <SiteFooter />
    </>
  );
}
