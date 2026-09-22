"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/faq";

export function FAQ({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 rounded-[2rem] border border-white/10">
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : i)}
            >
              <span className="display text-base font-semibold sm:text-lg">{item.question}</span>
              <span className="text-copper" aria-hidden="true">
                {expanded ? "–" : "+"}
              </span>
            </button>
            {expanded ? (
              <p className="px-5 pb-6 text-sm leading-7 text-muted sm:px-7">{item.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
