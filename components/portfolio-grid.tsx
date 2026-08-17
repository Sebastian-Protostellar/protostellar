"use client";

import { useState } from "react";
import { portfolio } from "@/lib/site";

const cellClass =
  "group flex h-full min-h-[12.5rem] flex-col border-r border-b border-white/12 bg-ink px-8 py-10 text-warm transition-colors duration-75 hover:z-[1] md:hover:bg-paper md:hover:text-ink sm:py-12";

function Tile({
  company,
}: {
  company: (typeof portfolio)[number];
}) {
  const [on, setOn] = useState(false);
  const brokr = company.slug === "brokr";
  const crest = company.slug.startsWith("protostellar-");
  const mark = crest ? "h-12 w-12" : "h-7 w-7";
  const linked = Boolean(company.href);

  const inner = (
    <>
      <span className="relative flex h-12 w-12 items-center justify-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={company.logoOnDark}
          alt=""
          width={crest ? 48 : 28}
          height={crest ? 48 : 28}
          className={`${mark} object-contain opacity-100 transition-opacity duration-75 md:opacity-0 ${
            on ? "max-md:opacity-0" : ""
          }`}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={company.logo}
          alt=""
          width={crest ? 48 : 28}
          height={crest ? 48 : 28}
          className={`${mark} absolute left-0 top-0 object-contain opacity-0 transition-opacity duration-75 md:group-hover:opacity-100 ${
            on ? "max-md:opacity-100" : ""
          }`}
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

  const inverted = on ? "max-md:bg-paper max-md:text-ink" : "";

  if (linked) {
    return (
      <a
        href={company.href ?? undefined}
        target="_blank"
        rel="noreferrer"
        className={`${cellClass} ${inverted}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={() => setOn((value) => !value)}
      className={`${cellClass} ${inverted} w-full cursor-pointer text-left`}
    >
      {inner}
    </button>
  );
}

export function PortfolioGrid() {
  return (
    <ul className="mt-24 grid auto-rows-fr grid-cols-1 border-t border-l border-white/12 sm:grid-cols-2 lg:grid-cols-4">
      {portfolio.map((company) => (
        <li key={company.slug} className="h-full">
          <Tile company={company} />
        </li>
      ))}
    </ul>
  );
}
