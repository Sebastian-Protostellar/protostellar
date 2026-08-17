import { SectionFrame } from "@/components/section-frame";
import { PortfolioGrid } from "@/components/portfolio-grid";

export function SectionPortfolio() {
  return (
    <SectionFrame id="portfolio" theme="dark" kicker="Holdings" title="Portfolio">
      <PortfolioGrid />
    </SectionFrame>
  );
}
