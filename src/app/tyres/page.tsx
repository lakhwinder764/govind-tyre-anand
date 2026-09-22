import { CTA } from "@/components/CTA";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { stock } from "@/data/media";
import { tyres } from "@/data/products";

export const metadata = {
  title: "Tyres",
};

export default function TyresPage() {
  return (
    <>
      <PageHero
        eyebrow="Tyres Services"
        title="Keep Your Ride Smooth, Safe, and Reliable"
        copy="At Govind Tyre and Auto, we specialize in tyres to ensure your vehicle delivers the best performance on every drive. From tyre repairs and precision alignment, our certified technicians provide professional solutions tailored to your vehicle’s needs."
        image={stock.tyreClose}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title="Tyre range" copy="Call Us for Price. Installation available in-house." className="mb-10" />
        <ProductGrid products={tyres} />
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-8 sm:px-6 md:grid-cols-2 lg:px-8">
        <FeatureCard
          title="Tyre Repair"
          text="Get back on the road quickly with our expert tyre repair services. Whether it’s a puncture, slow leak, or damage, our technicians ensure safe and reliable repairs. Quick puncture repair. Safe and durable fixes. Professional inspection."
          image={stock.alignment}
        />
        <FeatureCard
          title="New Tyres"
          text="Upgrade your ride with top-quality tyres from trusted brands. We stock a wide range of tyres for all vehicles and budgets, installed by our experts."
          image={stock.highway}
        />
      </section>

      <CTA title="Customer Satisfaction" copy="Contact us for a quote, fitting, or puncture repair today." />
    </>
  );
}
