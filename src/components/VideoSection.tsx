"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  title: string;
  copy: string;
};

export function VideoSection({ src, poster, title, copy }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const reduce = useReducedMotion();

  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-white/10"
        initial={reduce ? false : { opacity: 0, rotateX: 8, y: 40 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        whileHover={reduce ? undefined : { scale: 1.015, rotateX: 2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformPerspective: 1400 }}
      >
        <video
          ref={ref}
          className="h-[70vh] min-h-[420px] w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-copper">Workshop</p>
          <h2 className="display mt-3 max-w-2xl text-3xl font-semibold sm:text-5xl">{title}</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#efe7d8] sm:text-base">{copy}</p>
          <button
            type="button"
            onClick={toggle}
            className="mt-6 rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white/10"
            aria-pressed={!playing}
          >
            {playing ? "Pause preview" : "Play preview"}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
