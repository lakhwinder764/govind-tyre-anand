import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { MagneticButton } from "@/components/MagneticButton";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { TiltCard } from "@/components/TiltCard";
import { tyreAutoIcons } from "@/components/TyreAutoIcons";
import {
  tyreAutoOfferings,
  tyreAutoServices,
  tyreAutoTrust,
} from "@/data/content";
import { tyreAutoFaqs } from "@/data/faq";
import { wp } from "@/data/media";
import { googleReviews } from "@/data/reviews";
import { site } from "@/data/site";

const heroImage = wp("2025/10/2025-06-29.webp");
const midpoint = Math.ceil(tyreAutoOfferings.length / 2);

export const metadata = {
  title: "Tyre & Auto Services",
  description:
    "Expert tyres, wheel alignment, brake repairs and car servicing in Arndell Park. Fast, honest and reliable auto care. Call Govind Tyre & Auto today.",
  openGraph: {
    title: "Tyre & Auto Services",
    description:
      "Expert tyres, wheel alignment, brake repairs and car servicing in Arndell Park. Fast, honest and reliable auto care. Call Govind Tyre & Auto today.",
    images: [
      {
        url: heroImage,
        width: 765,
        height: 1020,
        alt: "tyre and auto",
      },
    ],
  },
};

function IconBadge({
  name,
  size = "md",
}: {
  name: keyof typeof tyreAutoIcons;
  size?: "sm" | "md" | "lg";
}) {
  const Icon = tyreAutoIcons[name];
  const box =
    size === "lg" ? "h-16 w-16" : size === "sm" ? "h-10 w-10" : "h-12 w-12";
  const glyph = size === "lg" ? "h-8 w-8" : size === "sm" ? "h-5 w-5" : "h-6 w-6";

  return (
    <span
      className={`grid ${box} shrink-0 place-items-center rounded-full border border-copper/40 bg-copper/15 text-copper shadow-[0_0_24px_rgba(212,160,90,0.18)]`}
    >
      <Icon className={glyph} />
    </span>
  );
}

function PhoneButton() {
  const Phone = tyreAutoIcons.phone;
  return (
    <MagneticButton
      href={`tel:${site.phones.mobileTel}`}
      className="inline-flex items-center gap-3 rounded-full bg-copper px-6 py-3 text-sm font-semibold text-bg shadow-[0_12px_32px_rgba(212,160,90,0.28)] hover:bg-copper-deep"
    >
      <Phone className="h-4 w-4" />
      +61 439 374 511
    </MagneticButton>
  );
}

export default function TyreAutoServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tyre & Auto Services"
        title="Govind Tyre and Auto"
        copy="Arndell Park, NSW- Tyres & Auto Care"
        image={heroImage}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-copper">Same-day fitting</p>
          <h2 className="display mt-4 max-w-4xl text-3xl font-semibold sm:text-5xl">
            Fast & Affordable Tyre & Auto Repair – Expert Fitting, Same-Day Service-{" "}
            <span className="gradient-text">24/7 Available</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
            For fast, reliable tyre and auto service designed to keep you safe on the road, we
            offer…
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[tyreAutoOfferings.slice(0, midpoint), tyreAutoOfferings.slice(midpoint)].map(
            (column, i) => (
              <ul key={i} className="space-y-3">
                {column.map((item, j) => (
                  <Reveal key={item.title} delay={0.04 * (i * midpoint + j)}>
                    <li className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5">
                      <IconBadge name={item.icon} size="sm" />
                      <span className="text-[0.95rem] font-semibold leading-snug text-ink">
                        {item.title}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            ),
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tyreAutoTrust.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07} className="h-full">
              <TiltCard className="h-full overflow-hidden rounded-3xl">
                <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-copper shadow-[0_16px_36px_rgba(0,0,0,0.28)]">
                  <div className="grid flex-1 place-items-center bg-[#120f0c] py-10">
                    <IconBadge name={item.icon} size="lg" />
                  </div>
                  <div className="flex min-h-17 items-center justify-center px-3 py-3.5 text-center">
                    <h3 className="text-sm font-semibold leading-tight text-bg sm:text-[0.95rem]">
                      {item.title}
                    </h3>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="quote"
        className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:px-8"
      >
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-copper/20 bg-linear-to-br from-[#2a2116] to-[#100e0b] p-7 sm:p-10">
            <div className="pulse-glow absolute -right-16 -top-16 h-48 w-48 rounded-full bg-copper/20 blur-3xl" />
            <SectionHeading
              title="Request a Free Quote / Book Service"
              copy="Fill quick form and our team will call you within 05-10 minutes"
            />
            <p className="mt-10 text-xs uppercase tracking-[0.32em] text-copper">OR</p>
            <div className="mt-5">
              <PhoneButton />
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
              Typical response time: 10–30 minutes. Serving all Sydney suburbs. Fixed-price quotes
              over the phone.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <QuoteForm />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services – Complete Tyre & Auto Care Under One Roof"
          copy="At Govind Tyre & Auto, we provide a full range of professional auto services and tyre shop to keep your vehicle safe, smooth, and road-ready. Every service is carried out by qualified technicians using quality parts and advanced equipment."
          className="mb-10"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {tyreAutoServices.map((service, i) => (
            <Reveal key={service.title} delay={(i % 2) * 0.06} className="h-full">
              <TiltCard className="h-full">
                <article className="glass flex h-full gap-4 rounded-3xl p-6">
                  <IconBadge name={service.icon} />
                  <div>
                    <h3 className="display text-xl font-semibold text-ink">{service.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{service.text}</p>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <PhoneButton />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-start gap-4">
          <IconBadge name="rated" />
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-copper">Excellent · 4.9/5</p>
            <SectionHeading
              title="Based on 9 Google reviews"
              copy="Real feedback from customers who booked at Govind Tyre & Auto."
              className="mt-3"
            />
          </div>
        </div>
        <ReviewsCarousel reviews={googleReviews} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SectionHeading
          title="Got Questions? We’ve Answered the Most Important Ones."
          className="mb-10"
        />
        <FAQ items={tyreAutoFaqs} />
      </section>

      <CTA
        title="Need tyres, alignment, or a service today?"
        copy="Govind Tyre & Auto is a trusted workshop in Arndell Park, offering expert tyre services, wheel alignment, mechanical repairs, and car servicing with honest pricing and reliable workmanship."
      />
    </>
  );
}
