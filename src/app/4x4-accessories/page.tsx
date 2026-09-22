import { MagneticButton } from "@/components/MagneticButton";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceOfferCard } from "@/components/ServiceOfferCard";
import { fourByFourOfferings } from "@/data/content";
import { wp } from "@/data/media";
import { liftKits } from "@/data/products";
import { featuredReviews } from "@/data/reviews";
import { site } from "@/data/site";

const heroImage = wp("2025/12/coil-spring-only-lift-kit-ford-next-gen-raptor-3.png");

export const metadata = {
  title: "4×4 Accessories",
  description:
    "At Govind Tyre & Auto, we know that owning a 4WD isn’t just about driving – it’s about exploring. Whether you’re heading into the outback, tackling muddy",
  openGraph: {
    title: "4×4 Accessories - Govind Tyre & Auto",
    description:
      "At Govind Tyre & Auto, we know that owning a 4WD isn’t just about driving – it’s about exploring. Whether you’re heading into the outback, tackling muddy",
    images: [
      {
        url: heroImage,
        width: 400,
        height: 400,
        alt: "4×4 Accessories",
      },
    ],
  },
};

export default function FourByFourPage() {
  return (
    <>
      <PageHero
        eyebrow="4×4 Accessories"
        title="Premium 4×4 Accessories"
        copy="At Govind Tyre & Auto, we know that owning a 4WD isn’t just about driving – it’s about exploring. Whether you’re heading into the outback, tackling muddy trails, or simply upgrading your ride for a tougher look, the right accessories make all the difference. Our 4×4 accessories are designed for performance, durability, and safety – giving you the confidence to push your limits."
        image={heroImage}
      />

      <section
        id="quote"
        className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:px-8"
      >
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-copper/20 bg-linear-to-br from-[#2a2116] to-[#100e0b] p-7 sm:p-10">
            <div className="pulse-glow absolute -right-16 -top-16 h-48 w-48 rounded-full bg-copper/20 blur-3xl" />
            <SectionHeading
              title="Premium 4×4 Accessories"
              copy="Fill out the form & we’ll get back to you within minutes"
            />
            <div className="mt-8">
              <MagneticButton
                href="#booking"
                className="inline-flex rounded-full bg-copper px-6 py-3 text-sm font-semibold text-bg hover:bg-copper-deep"
              >
                Fill out the form & we’ll get back to you within minutes
              </MagneticButton>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div id="booking">
            <QuoteForm
              heading="Book an Accessories"
              intro="Fill out the form & we’ll get back to you within minutes"
              submitLabel="Book an Accessories"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Accessories"
          copy="At Govind Tyre & Auto, we do more than just supply 4WD accessories – we provide complete fitting, servicing, and customization solutions for all off-road vehicles. Whether you’re gearing up for weekend adventures or preparing for tough outback conditions, our services are designed to keep your 4×4 ready for anything."
          className="mb-10"
        />
        <ProductGrid products={liftKits} ctaLabel="Get More Details" />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {fourByFourOfferings.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="h-full">
              <ServiceOfferCard
                title={item.title}
                copy={item.copy}
                image={item.image}
                points={item.points}
                href={`tel:${site.phones.mobileTel}`}
                ctaLabel="Learn More"
                imageFit="contain"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Customers Say"
          copy="Real feedback from our happy customers across Sydney – here’s why drivers trust Govind Tyre & Auto."
          className="mb-8"
        />
        <ReviewsCarousel reviews={featuredReviews} />
      </section>
    </>
  );
}
