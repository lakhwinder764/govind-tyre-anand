import Image from "next/image";
import { ImageCarousel } from "@/components/ImageCarousel";
import { PageHero } from "@/components/PageHero";
import { TiltCard } from "@/components/TiltCard";
import { galleryImages } from "@/data/content";
import { stock } from "@/data/media";

export const metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The workshop, the work, the finish"
        copy="A look at real vehicles through the Govind Tyre & Auto bays in Arndell Park."
        image={stock.garage}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ImageCarousel slides={galleryImages} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image) => (
            <TiltCard key={image.src} className="mb-4 break-inside-avoid">
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={1100}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </TiltCard>
          ))}
        </div>
      </section>
    </>
  );
}
