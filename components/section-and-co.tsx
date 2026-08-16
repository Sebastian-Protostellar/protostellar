import { SectionFrame } from "@/components/section-frame";

export function SectionAndCo() {
  return (
    <SectionFrame
      id="protostellar-and-co"
      theme="dark"
      kicker="Holding company"
      title="Protostellar & Co."
      intro={
        <>
          <p>
            It owns the businesses the firm originates, and a limited number of
            other interests held for the long term.
          </p>
          <a href="#portfolio" className="anchor mt-12 text-paper">
            View the portfolio
          </a>
        </>
      }
    />
  );
}
