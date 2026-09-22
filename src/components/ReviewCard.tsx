import Image from "next/image";
import type { Review } from "@/data/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="glass flex h-full flex-col rounded-3xl p-6">
      <div className="flex items-center gap-3">
        <Image
          src={review.avatar}
          alt={`${review.name} portrait`}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{review.name}</p>
          <p className="text-xs text-muted">
            {review.location ? `${review.location} · ` : ""}
            {review.date}
          </p>
        </div>
      </div>
      <p className="mt-3 text-copper" aria-label={`${review.rating} out of 5 stars`}>
        {"★".repeat(review.rating)}
      </p>
      <p className="mt-3 text-sm leading-7 text-muted">“{review.text}”</p>
    </article>
  );
}
