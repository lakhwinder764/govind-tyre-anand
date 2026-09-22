import { CTA } from "@/components/CTA";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { stock } from "@/data/media";
import { wheelBrands, wheels } from "@/data/products";

export const metadata = {
  title: "Wheels",
};

export default function WheelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Wheels Services"
        title="Keep Your Ride Smooth, Safe, and Reliable"
        copy="At Govind Tyre and Auto, we specialize in wheels services to ensure your vehicle delivers the best performance on every drive. wheels and precision alignment, our certified technicians provide professional solutions tailored to your vehicle’s needs."
        image={stock.wheels}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title="Wheel range" copy="Call Us for Price. Installation Free on selected styles." className="mb-10" />
        <ProductGrid products={wheels} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.28em] text-copper">Brands we work with</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {wheelBrands.map((brand) => (
            <span key={brand} className="rounded-full border border-white/10 px-3 py-1 text-sm text-muted">
              {brand}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-8 sm:px-6 md:grid-cols-3 lg:px-8">
        <FeatureCard
          title="Wheel Alignment"
          text="Keep your car running straight and safe with accurate wheel alignment. Misaligned wheels can cause uneven tyre wear and handling issues—our specialists make sure everything is perfectly aligned. Improved handling & safety. Even tyre wear. Advanced alignment technology."
        />
        <FeatureCard
          title="Custom Wheels & Lift Kits"
          text="Transform your vehicle’s look and performance with our range of custom wheels and lift kits. Whether you want a stylish upgrade or off-road capability, we’ve got you covered. Stylish custom wheel options. Lift kits for off-road performance. Expert installation and advice."
        />
        <FeatureCard
          title="Wheel Balancing"
          text="Ensure a smoother and safer drive with our precision wheel balancing services. Properly balanced wheels reduce vibrations, extend tyre life, and improve fuel efficiency. Advanced balancing equipment. Smoother ride experience. Extended tyre lifespan."
        />
      </section>

      <CTA
        title="Book Your Tyre & Wheels Service Today"
        copy="Drive safer, smoother, and longer with professional tyre and wheel care. Contact us now at 0439 374 511 or book online to schedule your appointment!"
      />
    </>
  );
}
