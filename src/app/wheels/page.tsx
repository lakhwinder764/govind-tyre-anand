import { MagneticButton } from "@/components/MagneticButton";
import { LogoMarquee } from "@/components/LogoMarquee";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceOfferCard } from "@/components/ServiceOfferCard";
import { wheelServices } from "@/data/content";
import { wp } from "@/data/media";
import { wheelBrandShowcase, wheels } from "@/data/products";
import { site } from "@/data/site";

const heroImage = wp("2026/01/009-20-HB-SIDE-1622464088.jpg");

export const metadata = {
  title: "Wheel",
  description: "Keep Your Ride Smooth, Safe, and Reliable",
  openGraph: {
    title: "Wheel - Govind Tyre & Auto",
    description: "Keep Your Ride Smooth, Safe, and Reliable",
    images: [
      {
        url: heroImage,
        width: 1200,
        height: 1200,
        alt: "Wheel",
      },
    ],
  },
};

export default function WheelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Wheels Services"
        title="Keep Your Ride Smooth, Safe, and Reliable"
        copy="At Govind Tyre and Auto, we specialize in wheels services to ensure your vehicle delivers the best performance on every drive. From new wheels and precision alignment, our certified technicians provide professional solutions tailored to your vehicle’s needs."
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
              title="Wheels Services"
              copy="Fill out the form & we’ll get back to you within minutes"
            />
            <div className="mt-8">
              <MagneticButton
                href="#booking"
                className="inline-flex rounded-full bg-copper px-6 py-3 text-sm font-semibold text-bg hover:bg-copper-deep"
              >
                Fill out the form
              </MagneticButton>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
              Call {site.phones.mobile} for wheel fitting, alignment, or balancing the same day.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <QuoteForm intro="Fill out the form & we’ll get back to you within minutes" />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading
          title="Wheel range"
          copy="Call Us for Price. Installation Free on every style shown here."
          className="mb-10"
        />
        <ProductGrid products={wheels} ctaLabel="Get More Details" />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {wheelServices.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06} className="h-full">
              <ServiceOfferCard
                title={service.title}
                copy={service.copy}
                image={service.image}
                points={service.points}
                href={`tel:${site.phones.mobileTel}`}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-xs uppercase tracking-[0.28em] text-copper">
            Styles we fit
          </p>
        </div>
        <LogoMarquee items={wheelBrandShowcase} />
      </section>

      <section
        id="booking"
        className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:px-8"
      >
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-copper/20 bg-linear-to-br from-[#2a2116] to-[#100e0b] p-7 sm:p-10">
            <div className="pulse-glow absolute -right-16 -top-16 h-48 w-48 rounded-full bg-copper/20 blur-3xl" />
            <SectionHeading
              title="Book Your Tyre & Wheels Service Today"
              copy="Drive safer, smoother, and longer with professional tyre and wheel care. Contact us now at 0439 374 511 or book online to schedule your appointment!"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton
                href={`tel:${site.phones.mobileTel}`}
                className="inline-flex rounded-full bg-copper px-6 py-3 text-sm font-semibold text-bg hover:bg-copper-deep"
              >
                Call {site.phones.mobile}
              </MagneticButton>
              <MagneticButton
                href="/book"
                className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold"
              >
                Book online
              </MagneticButton>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <QuoteForm heading="" submitLabel="Send" intro="" />
        </Reveal>
      </section>
    </>
  );
}
