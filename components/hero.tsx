"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

export function Hero({
  title = site.heroTitle,
  mark = false,
}: {
  title?: string;
  mark?: boolean;
}) {
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
      className={`relative isolate flex h-dvh overflow-hidden bg-ink text-warm ${
        mark ? "items-start md:items-end" : "items-end"
      }`}
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

      {mark ? (
        <div className="absolute left-6 top-8 z-10 md:left-10 md:top-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/crest-white-512.png"
            alt=""
            width={128}
            height={128}
            className="h-20 w-20 object-contain md:h-32 md:w-32"
            decoding="async"
          />
        </div>
      ) : null}

      <div
        className={`relative z-10 mx-auto w-full max-w-[92rem] px-6 md:px-10 ${
          mark ? "pt-[8.75rem] md:pb-24 md:pt-36" : "pb-16 pt-8 md:pb-24"
        }`}
      >
        <h1 className="reveal max-w-[22ch] font-serif text-[clamp(2.4rem,8vw,4.8rem)] leading-[1.06] tracking-[-0.02em] text-paper">
          {title}
        </h1>
      </div>
    </section>
  );
}
