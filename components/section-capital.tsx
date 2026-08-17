import { SectionFrame } from "@/components/section-frame";

export function SectionCapital() {
  return (
    <SectionFrame
      id="protostellar-capital"
      theme="light"
      kicker="Investment manager"
      title="Protostellar Capital"
      intro={
        <p>
          Protostellar Capital allocates capital for{" "}
          <strong className="font-medium text-ink">Protostellar &amp; Co.</strong>{" "}
          and related vehicles.
        </p>
      }
    />
  );
}
