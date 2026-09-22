"use client";

import { useEffect, useRef, useState } from "react";
import { ReviewCard } from "@/components/ReviewCard";
import { TiltCard } from "@/components/TiltCard";
import type { Review } from "@/data/reviews";

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scroller.current;
    if (!el || paused) return;
    const id = window.setInterval(() => {
      const max = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft + 340;
      el.scrollTo({ left: next >= max - 8 ? 0 : next, behavior: "smooth" });
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused]);

  function jump(dir: number) {
    scroller.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  }

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review) => (
          <div key={review.id} className="w-[min(86vw,360px)] shrink-0 snap-start">
            <TiltCard>
              <ReviewCard review={review} />
            </TiltCard>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={() => jump(-1)}
          className="rounded-full border border-white/15 px-4 py-2 text-sm"
          aria-label="Previous reviews"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => jump(1)}
          className="rounded-full border border-white/15 px-4 py-2 text-sm"
          aria-label="Next reviews"
        >
          Next
        </button>
      </div>
    </div>
  );
}
