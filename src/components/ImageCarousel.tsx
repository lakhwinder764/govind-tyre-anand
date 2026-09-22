"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type Slide = {
  src: string;
  alt: string;
};

type Props = {
  slides: Slide[];
  autoPlay?: boolean;
};

export function ImageCarousel({ slides, autoPlay = true }: Props) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!autoPlay || paused || reduce) return;
    const id = window.setInterval(next, 4200);
    return () => window.clearInterval(id);
  }, [autoPlay, paused, reduce, next]);

  function onPointerDown(e: React.PointerEvent) {
    startX.current = e.clientX;
  }

  function onPointerUp(e: React.PointerEvent) {
    if (startX.current == null) return;
    const delta = e.clientX - startX.current;
    if (delta > 40) prev();
    if (delta < -40) next();
    startX.current = null;
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <div className="relative mx-auto h-[420px] max-w-5xl overflow-visible sm:h-[520px]" style={{ perspective: 1400 }}>
        {slides.map((slide, i) => {
          const offset = i - index;
          const wrapped =
            offset < -Math.floor(slides.length / 2)
              ? offset + slides.length
              : offset > Math.floor(slides.length / 2)
                ? offset - slides.length
                : offset;
          const active = wrapped === 0;
          return (
            <figure
              key={slide.src}
              className="absolute left-1/2 top-1/2 w-[78%] max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl"
              style={{
                transform: `translate(-50%, -50%) translateX(${wrapped * 38}%) scale(${active ? 1 : 0.78}) rotateY(${wrapped * -18}deg)`,
                opacity: Math.abs(wrapped) > 2 ? 0 : active ? 1 : 0.45,
                zIndex: 20 - Math.abs(wrapped),
                transition: reduce ? "none" : "transform 600ms cubic-bezier(0.22,1,0.36,1), opacity 600ms ease",
              }}
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 800px"
                />
              </div>
            </figure>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-ink hover:bg-white/10"
          aria-label="Previous image"
        >
          Prev
        </button>
        <div className="flex gap-2" role="tablist" aria-label="Carousel pagination">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-copper" : "w-2 bg-white/25"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-ink hover:bg-white/10"
          aria-label="Next image"
        >
          Next
        </button>
      </div>
    </div>
  );
}
