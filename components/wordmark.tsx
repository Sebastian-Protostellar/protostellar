import Link from "next/link";

type Props = {
  href?: string;
  className?: string;
  size?: "header" | "footer";
};

export function Wordmark({ href = "/", className = "", size = "header" }: Props) {
  const mark = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <span className={size === "header" ? "nav-crest-slot" : undefined}>
        <img
          src="/brand/crest-white-512.png"
          alt=""
          width={size === "footer" ? 40 : 128}
          height={size === "footer" ? 40 : 128}
          className={size === "header" ? "nav-crest" : "h-10 w-10 object-contain"}
          decoding="async"
        />
      </span>
      {size === "footer" ? (
        <span className="font-serif text-[1.25rem] leading-none tracking-[-0.03em] text-warm">
          Protostellar
        </span>
      ) : null}
    </span>
  );

  if (!href) return mark;

  return (
    <Link href={href} className="inline-flex items-center" aria-label="Protostellar, home">
      {mark}
    </Link>
  );
}
