import { SectionFrame } from "@/components/section-frame";

export function SectionAbout() {
  return (
    <SectionFrame
      id="about"
      theme="light"
      kicker="About"
      title="The firm"
      intro={
        <p>
          Protostellar is an investment firm that originates, operates and manages
          long-term assets, through{" "}
          <strong className="font-medium text-ink">Protostellar &amp; Co.</strong>{" "}
          and{" "}
          <strong className="font-medium text-ink">Protostellar Capital</strong>,
          across New York, London and Melbourne.
        </p>
      }
    />
  );
}
