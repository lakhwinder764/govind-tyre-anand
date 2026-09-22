import Image from "next/image";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { stock, wp } from "@/data/media";
import { featuredReviews } from "@/data/reviews";

const accessories = [
  {
    title: "Hub ring",
    image: wp("2025/09/hub-ring-1.jpg"),
    copy: "Hub rings fill the gap between your vehicle’s hub and the wheel center bore, ensuring perfect wheel alignment and reducing vibrations.",
    uses: [
      "Snug fit for aftermarket wheels",
      "Improves hub-to-wheel connection",
      "Prevents steering vibration",
    ],
  },
  {
    title: "Wheel Spacers",
    image: wp("2025/09/spacer.jpg"),
    copy: "Wheel spacers create clearance between the hub and wheel, allowing a wider stance and better handling for your vehicle.",
    uses: [
      "Fit wider tyres and wheels",
      "Prevent rubbing with brakes/suspension",
      "Achieve aggressive stance",
    ],
  },
  {
    title: "Bolts & Nuts",
    image: wp("2025/09/nut-bolt.jpg"),
    copy: "High-quality bolts and nuts are essential to keep your wheels securely fastened, ensuring safety and performance on every drive.",
    uses: [
      "Secures stock and aftermarket wheels",
      "Available in multiple sizes & finishes",
      "Suitable for heavy-duty performance",
    ],
  },
];

export const metadata = {
  title: "Car Accessories",
};

export default function CarAccessoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Premium Car Accessories"
        title="Performance, safety and stance"
        copy="Enhance your driving experience with our high-quality accessories – from hub rings for smooth rides, spacers for bold looks, to durable bolts & nuts for ultimate safety. Built to perform, designed to last."
        image={stock.sportsCar}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Accessories"
          copy="Explore our premium range of accessories designed to improve performance, safety, and style. From hub rings to wheel spacers and strong bolts & nuts – we’ve got you covered."
          className="mb-10"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {accessories.map((item) => (
            <TiltCard key={item.title}>
              <article className="glass overflow-hidden rounded-3xl">
                <div className="relative h-64 bg-white">
                  <Image src={item.image} alt={item.title} fill className="object-contain p-8" sizes="33vw" />
                </div>
                <div className="p-6">
                  <h3 className="display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.copy}</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-copper">Uses</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {item.uses.map((use) => (
                      <li key={use}>{use}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Customers Say"
          copy="Real feedback from our happy customers across Sydney – here’s why drivers trust Govind Tyre & Auto."
          className="mb-8"
        />
        <ReviewsCarousel reviews={featuredReviews} />
      </section>

      <CTA title="Fit it properly" copy="Hub rings, spacers and hardware installed by the team who know wheels." />
    </>
  );
}
