import Image from "next/image";
import { MagneticButton } from "@/components/MagneticButton";
import { TiltCard } from "@/components/TiltCard";

type Props = {
  title: string;
  copy: string;
  image: string;
  points: string[];
  href?: string;
  ctaLabel?: string;
  imageFit?: "cover" | "contain";
};

export function ServiceOfferCard({
  title,
  copy,
  image,
  points,
  href = "/book",
  ctaLabel = "Book Now",
  imageFit = "cover",
}: Props) {
  return (
    <TiltCard className="h-full overflow-hidden rounded-3xl">
      <article className="glass flex h-full flex-col overflow-hidden rounded-3xl">
        <div className={`relative aspect-16/10 overflow-hidden ${imageFit === "contain" ? "bg-black/25" : ""}`}>
          <Image
            src={image}
            alt={title}
            fill
            className={imageFit === "contain" ? "object-contain p-6" : "object-cover"}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="display text-xl font-semibold text-copper">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-0.5 text-copper" aria-hidden="true">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6">
            <MagneticButton
              href={href}
              className="rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-bg transition hover:bg-copper-deep"
            >
              {ctaLabel}
            </MagneticButton>
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
