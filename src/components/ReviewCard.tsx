import Image from "next/image";
import type { Review } from "@/data/reviews";

function initials(name: string) {
  const parts = name.replace(/\./g, " ").split(/\s+/).filter(Boolean);
  const letters = parts.map((part) => part[0] ?? "").join("");
  return letters.slice(0, 2).toUpperCase() || "GT";
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="glass flex h-full flex-col rounded-3xl p-6">
      <div className="flex items-center gap-3">
        {review.photo ? (
          <Image
            src={review.photo}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="grid h-12 w-12 place-items-center rounded-full border border-copper/30 bg-copper/15 text-sm font-semibold tracking-wide text-copper"
          >
            {initials(review.name)}
          </span>
        )}
        <div>
          <p className="font-semibold">{review.name}</p>
          {review.location ? <p className="text-xs text-muted">{review.location}</p> : null}
          {review.source ? <p className="text-xs text-muted">{review.source}</p> : null}
        </div>
      </div>
      {review.rating ? (
        <p className="mt-3 text-copper" aria-label={`${review.rating} out of 5 stars`}>
          {"★".repeat(review.rating)}
        </p>
      ) : null}
      <p className="mt-3 text-sm leading-7 text-muted">“{review.text}”</p>
    </article>
  );
}
