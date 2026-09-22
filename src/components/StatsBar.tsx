"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { value: 100, suffix: "%", label: "Client satisfaction" },
  { value: 1200, suffix: "+", label: "Batteries replaced" },
  { value: 5000, suffix: "+", label: "Tyres repaired & replaced" },
  { value: 2000, suffix: "+", label: "Wheel alignments & balancing done" },
];

function CountUp({
  value,
  suffix,
  duration = 2200,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const total = reduce ? 0 : duration;
    let frame = 0;

    const tick = (now: number) => {
      const progress = total === 0 ? 1 : Math.min(1, (now - start) / total);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration, reduce]);

  return (
    <span>
      {current.toLocaleString("en-AU")}
      {suffix}
    </span>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLElement>(null);
  const [runId, setRunId] = useState(0);
  const visible = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!visible.current) {
            visible.current = true;
            setRunId((id) => id + 1);
          }
        } else {
          visible.current = false;
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} aria-label="Workshop results" className="relative py-4">
      <div className="relative overflow-hidden border-y border-copper/25 bg-gradient-to-r from-[#1a140c] via-[#12110f] to-[#1a140c]">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-copper sm:w-3" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-2 bg-copper sm:w-3" />
        <div className="mx-auto grid max-w-7xl gap-8 px-8 py-12 sm:px-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:py-14">
          {stats.map((stat) => (
            <article key={stat.label} className="text-center lg:text-left">
              <p className="display text-4xl font-bold tracking-tight text-copper sm:text-5xl">
                {runId > 0 ? (
                  <CountUp key={`${stat.label}-${runId}`} value={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
