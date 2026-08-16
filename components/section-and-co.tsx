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
            The firm’s permanent ownership platform. It builds and owns
            businesses intended to compound, combining internally originated
            companies with selected strategic investments.
          </p>
          <a href="#portfolio" className="anchor mt-12 text-paper">
            View the portfolio
          </a>
        </>
      }
    />
  );
}
