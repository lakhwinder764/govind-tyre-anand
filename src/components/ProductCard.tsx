import Image from "next/image";
import { TiltCard } from "@/components/TiltCard";
import type { Product } from "@/data/products";
import { site } from "@/data/site";

export function ProductCard({
  product,
  ctaLabel = "Enquire",
}: {
  product: Product;
  ctaLabel?: string;
}) {
  return (
    <TiltCard>
      <article className="glass group overflow-hidden rounded-3xl">
        <div className="relative aspect-square bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-5">
          <h3 className="display text-lg font-semibold">{product.name}</h3>
          <p className="mt-2 text-sm text-muted">{product.priceNote ?? "Call Us for Price"}</p>
          {product.badge ? (
            <p className="mt-3 inline-flex rounded-full border border-copper/30 px-3 py-1 text-xs text-copper">
              {product.badge}
            </p>
          ) : null}
          <a
            href={`tel:${site.phones.mobileTel}`}
            className="mt-4 inline-flex text-sm font-semibold text-copper hover:text-ink"
          >
            {ctaLabel}
          </a>
        </div>
      </article>
    </TiltCard>
  );
}
