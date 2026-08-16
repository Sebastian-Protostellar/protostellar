"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playIfAllowed = () => {
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      if (!video.paused) return;
      void video.play().catch(() => undefined);
    };

    playIfAllowed();
    video.addEventListener("canplay", playIfAllowed);
    video.addEventListener("loadeddata", playIfAllowed);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          video.pause();
          return;
        }
        playIfAllowed();
      },
      { threshold: 0.2 },
    );
    io.observe(video);

    return () => {
      video.removeEventListener("canplay", playIfAllowed);
      video.removeEventListener("loadeddata", playIfAllowed);
      io.disconnect();
    };
  }, []);

  return (
    <section
      id="hero"
      data-nav-theme="dark"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-warm"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/film/hero-poster.jpg"
          src="/film/hero.mp4"
          aria-hidden="true"
          disablePictureInPicture
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-black/30" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[92rem] px-6 pb-20 pt-36 md:px-10 md:pb-24">
        <h1 className="reveal max-w-[16ch] font-serif text-[clamp(2.6rem,6.2vw,4.8rem)] leading-[1.06] tracking-[-0.02em] text-paper">
          {site.heroTitle}
        </h1>
        <p className="reveal reveal-delay-2 measure mt-8 text-[1.05rem] leading-8 text-warm/80">
          {site.supporting}
        </p>
        <a href="#firm" className="anchor reveal reveal-delay-3 mt-14 text-paper">
          Explore the firm
        </a>
      </div>
    </section>
  );
}
