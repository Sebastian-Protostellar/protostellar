import { SectionFrame } from "@/components/section-frame";
import { portfolio } from "@/lib/site";

const cellClass =
  "group flex h-full min-h-[12.5rem] flex-col border-r border-b border-white/12 bg-ink px-8 py-10 text-warm transition-colors duration-75 hover:z-[1] hover:bg-paper hover:text-ink sm:py-12";

export function SectionPortfolio() {
  return (
    <SectionFrame
      id="portfolio"
      theme="dark"
      kicker="Holdings"
      title="Portfolio"
    >
      <ul className="mt-24 grid auto-rows-fr grid-cols-1 border-t border-l border-white/12 sm:grid-cols-2 lg:grid-cols-4">
        {portfolio.map((company) => {
          const brokr = company.slug === "brokr";
          const inner = (
            <>
              <span className="relative h-7 w-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={company.logo}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain opacity-0 transition-opacity duration-75 group-hover:opacity-100"
                />
              </span>
              <h3
                className={
                  brokr
                    ? "mt-8 font-sans text-[1.45rem] font-medium leading-tight tracking-[-0.04em] md:text-[1.6rem]"
                    : "mt-8 font-serif text-[1.55rem] leading-tight tracking-[-0.03em] md:text-[1.7rem]"
                }
              >
                {company.name}
              </h3>
            </>
          );

          return (
            <li key={company.slug} className="h-full">
              {company.href ? (
                <a href={company.href} target="_blank" rel="noreferrer" className={cellClass}>
                  {inner}
                </a>
              ) : (
                <div className={cellClass}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </SectionFrame>
  );
}
