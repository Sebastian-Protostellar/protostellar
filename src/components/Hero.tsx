import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-end overflow-hidden"
    >
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-6xl px-6 pb-20 pt-28 sm:px-10 sm:pb-24">
        <h1 className="max-w-xl text-left font-serif text-[clamp(2.75rem,8vw,5.25rem)] leading-[0.95] tracking-tight text-white animate-fade-up">
          Protostellar &amp; Co.
        </h1>
      </div>
    </section>
  );
}
