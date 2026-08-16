import { SectionFrame } from "@/components/section-frame";

export function SectionCapital() {
  return (
    <SectionFrame
      id="protostellar-capital"
      theme="light"
      kicker="Asset manager"
      title="Protostellar Capital"
      intro={
        <p>
          The firm’s investment-management platform. It conducts private
          investment activities and develops vehicles aligned with long-duration
          capital allocation.
        </p>
      }
    />
  );
}
