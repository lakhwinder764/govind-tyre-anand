import { CTA } from "@/components/CTA";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductGrid";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { stock } from "@/data/media";
import { liftKits } from "@/data/products";
import { reviews } from "@/data/reviews";

export const metadata = {
  title: "4×4 Accessories",
};

export default function FourByFourPage() {
  return (
    <>
      <PageHero
        eyebrow="Premium 4×4 Accessories"
        title="Built for the trails, fitted in Arndell Park"
        copy="At Govind Tyre & Auto, we know that owning a 4WD isn’t just about driving – it’s about exploring. Whether you’re heading into the outback, tackling muddy trails, or simply upgrading your ride for a tougher look, the right accessories make all the difference. Our 4×4 accessories are designed for performance, durability, and safety – giving you the confidence to push your limits."
        image={stock.fourByFour}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Accessories"
          copy="At Govind Tyre & Auto, we do more than just supply 4WD accessories – we provide complete fitting, servicing, and customization solutions for all off-road vehicles. Whether you’re gearing up for weekend adventures or preparing for tough outback conditions, our services are designed to keep your 4×4 ready for anything."
          className="mb-10"
        />
        <ProductGrid products={liftKits} />
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-8 sm:px-6 md:grid-cols-3 lg:px-8">
        <FeatureCard
          title="Lift Kits"
          text="Boost your clearance make room for larger tyres with professionally fitted lift kits. Uses: Better ground clearance, improved off-road capability, and rugged styling. Benefits: Protects your underbody from rocks and uneven terrain."
        />
        <FeatureCard
          title="Snorkels"
          text="Tackle water crossings and dusty trails without worrying about your engine. Uses: Keeps air intake high and clean. Benefits: Prevents engine damage and improves efficiency in tough conditions."
        />
        <FeatureCard
          title="Heavy-Duty Roof Racks"
          text="Carry more gear without compromising space inside your vehicle. Uses: Perfect for camping gear, tools, recovery equipment, and extra tyres. Benefits: Strong, secure, and ready for heavy loads."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Customers Say"
          copy="Real feedback from our happy customers across Sydney – here’s why drivers trust Govind Tyre & Auto."
          className="mb-8"
        />
        <ReviewsCarousel reviews={reviews.slice(0, 4)} />
      </section>

      <CTA title="Ready for the next trip?" copy="Call us for lift kits, wheels, tyres and professional 4x4 fitment." />
    </>
  );
}
