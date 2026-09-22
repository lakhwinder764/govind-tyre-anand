"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useReducedMotion } from "motion/react";
import { tyres, wheels } from "@/data/products";

export function OrbitStage() {
  const reduce = useReducedMotion();
  const items = useMemo(() => [...tyres.slice(0, 4), ...wheels.slice(0, 4)], []);
  const [paused, setPaused] = useState(false);
  const radius = 190;

  return (
    <div
      className="relative mx-auto h-[380px] w-full max-w-3xl overflow-hidden sm:h-[500px] sm:overflow-visible"
      style={{ perspective: 1400 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper/25 blur-3xl pulse-glow" />
      <div
        className="preserve-3d absolute inset-0 spin-y"
        style={{
          transformStyle: "preserve-3d",
          animationPlayState: paused || reduce ? "paused" : "running",
        }}
      >
        {items.map((item, i) => {
          const angle = (360 / items.length) * i;
          return (
            <article
              key={item.id}
              className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/15 bg-white shadow-2xl sm:h-44 sm:w-44"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                transformStyle: "preserve-3d",
              }}
            >
              <Image src={item.image} alt={item.name} fill className="object-contain p-3 sm:p-4" sizes="176px" />
            </article>
          );
        })}
      </div>
    </div>
  );
}
