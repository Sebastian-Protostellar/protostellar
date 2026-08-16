import { SectionFrame } from "@/components/section-frame";

const pillars = [
  {
    title: "Origination",
    copy: "We form businesses when a market of consequence is not properly served, building from first principles rather than depending on what is already available to buy.",
  },
  {
    title: "Management",
    copy: "We remain involved in the direction of the companies we own — capital allocation, strategy and the development of operating strength.",
  },
  {
    title: "Partnership",
    copy: "We work with a limited number of operators, counterparties and capital partners where interests can be aligned for the duration of the work.",
  },
  {
    title: "Structure",
    copy: "Permanent ownership sits in Protostellar & Co. Investment management sits in Protostellar Capital. Each is distinct. Both belong to the same firm.",
  },
];

export function SectionFirm() {
  return (
    <SectionFrame
      id="firm"
      theme="light"
      kicker="The firm"
      title="Protostellar"
      intro={
        <p>
          Protostellar is organised around four disciplines. They are how the
          firm originates businesses, directs what it owns, chooses its
          relationships and holds capital.
        </p>
      }
    >
      <div className="mt-24 grid border-t border-rule md:grid-cols-2 md:border-b">
        {pillars.map((item, index) => (
          <article
            key={item.title}
            className={`border-rule py-10 md:px-12 md:py-14 ${
              index > 0 ? "border-t md:border-t-0" : ""
            } ${index % 2 === 0 ? "md:border-r" : ""} ${index < 2 ? "md:border-b" : ""}`}
          >
            <h3 className="font-serif text-[1.65rem] tracking-[-0.03em]">{item.title}</h3>
            <p className="mt-4 max-w-[32rem] text-[1.02rem] leading-8 text-ink/65">{item.copy}</p>
          </article>
        ))}
      </div>
    </SectionFrame>
  );
}
