type Props = {
  name: "brokr" | "pxiq" | "gatsbi";
  className?: string;
};

export function PortfolioMark({ name, className = "" }: Props) {
  if (name === "brokr") {
    return (
      <span className={`inline-flex items-baseline gap-0 text-[1.85rem] tracking-[-0.04em] ${className}`}>
        <span className="font-sans font-medium lowercase">brokr</span>
      </span>
    );
  }

  if (name === "pxiq") {
    return (
      <span className={`inline-flex items-center text-[1.35rem] font-medium tracking-[0.28em] ${className}`}>
        PXIQ
      </span>
    );
  }

  return (
    <span className={`font-serif text-[2rem] tracking-[-0.03em] ${className}`}>Gatsbi</span>
  );
}
