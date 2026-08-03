type StampIconProps = {
  className?: string;
};

export function StampIcon({ className = "" }: StampIconProps) {
  return (
    <span
      className={`font-serif text-2xl leading-none tracking-tight sm:text-[1.65rem] ${className}`}
      aria-hidden="true"
    >
      P&amp;Co.
    </span>
  );
}
