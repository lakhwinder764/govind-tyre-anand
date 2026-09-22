import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { highlightCards } from "@/data/content";

export function HighlightCards() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
        {highlightCards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.06} className="h-full">
            <TiltCard className="h-full overflow-hidden rounded-3xl">
              <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-copper shadow-[0_16px_36px_rgba(0,0,0,0.28)]">
                <div className="relative aspect-4/3">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
                <div className="flex min-h-17 items-center justify-center px-3 py-3.5 text-center">
                  <h2 className="text-sm font-semibold leading-tight text-bg sm:text-[0.95rem]">
                    {card.title}
                  </h2>
                </div>
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
