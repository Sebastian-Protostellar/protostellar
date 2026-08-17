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
            Protostellar &amp; Co. is a permanent capital vehicle that originates
            and operates assets, held for a long duration or in perpetuity.
          </p>
          <a href="#portfolio" className="anchor mt-12 text-paper">
            View the portfolio
          </a>
        </>
      }
    />
  );
}
