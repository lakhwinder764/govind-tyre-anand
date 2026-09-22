"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";

type Item = {
  src: string;
  alt: string;
};

export function LogoMarquee({ items }: { items: Item[] }) {
  const reduce = useReducedMotion();
  const row = reduce ? items : [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className={
          reduce
            ? "flex flex-wrap justify-center gap-5"
            : "flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]"
        }
      >
        {row.map((item, i) => (
          <figure
            key={`${item.src}-${i}`}
            className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_12px_28px_rgba(0,0,0,0.28)] sm:h-28 sm:w-28"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain p-2"
              sizes="112px"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
