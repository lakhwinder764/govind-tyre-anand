import Image from "next/image";
import { MagneticButton } from "@/components/MagneticButton";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { contactServices } from "@/data/content";
import { stock, wp } from "@/data/media";
import { site } from "@/data/site";

const servicesImage = wp("2025/08/Untitled-design-39-1024x576.png");
const bookingCarImage = wp("2025/08/Untitled-design-16-1024x576.png");
const mapEmbed =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1657.9545589588688!2d150.87705!3d-33.788845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1299864c6ebbf7%3A0xda4d76cf835f3e52!2sGOVIND%20TYRE%20%26%20AUTO!5e0!3m2!1sen!2sin!4v1755933803867!5m2!1sen!2sin";

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5.4 13.7 0.2 8.5l1.1-1.1 4.1 4.1 9.1-9.1 1.1 1.1z"
      />
    </svg>
  );
}

export const metadata = {
  title: "Contact Us",
  description:
    "Have questions about our services or need urgent vehicle assistance? We’re here to help! Whether it’s a tyre repair, wheel alignment, mechanical repair, or",
  openGraph: {
    title: "Contact Us - Govind Tyre & Auto",
    description:
      "Have questions about our services or need urgent vehicle assistance? We’re here to help! Whether it’s a tyre repair, wheel alignment, mechanical repair, or",
    images: [
      {
        url: servicesImage,
        width: 1024,
        height: 576,
        alt: "Contact Us",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch with Govind Tyre and Auto"
        copy="Have questions about our services or need urgent vehicle assistance? We’re here to help! Whether it’s a tyre repair, wheel alignment, mechanical repair, or any other automotive service, our friendly team is ready to assist you."
        image={stock.workshop}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="rounded-4xl border border-copper/20 bg-linear-to-br from-[#2a2116] to-[#100e0b] p-7 sm:p-10">
            <SectionHeading title="Working Hours" />
            <ul className="mt-6 space-y-3 text-sm text-muted">
              {[site.hours.weekdays, site.hours.saturday, site.hours.sunday].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-4xl border border-copper/20 bg-linear-to-br from-[#2a2116] to-[#100e0b] p-7 sm:p-10">
            <SectionHeading title="Our Contact Information" />
            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
              <li>Business Name: Govind Tyre and Auto</li>
              <li>Owner: {site.owner}</li>
              <li>
                <a href={`tel:${site.phones.mobileTel}`} className="transition hover:text-copper">
                  Phone: {site.phones.mobile} (Call or WhatsApp)
                </a>
              </li>
              <li>
                <a href={`tel:${site.phones.landlineTel}`} className="transition hover:text-copper">
                  Phone: {site.phones.landline} (Call)
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition hover:text-copper">
                  Email: {site.email}
                </a>
              </li>
              <li>Address: {site.address.line}</li>
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          copy="We provide a wide range of services to keep your vehicle running smoothly and safely:"
          className="mb-10"
        />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <ul className="space-y-3 text-sm text-muted">
              {contactServices.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl border border-copper/15 bg-black/20 px-4 py-3">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative flex items-center justify-center">
              <div className="pulse-glow pointer-events-none absolute inset-10 rounded-full bg-copper/25 blur-3xl" />
              <Image
                src={servicesImage}
                alt="Silver sports car"
                width={1024}
                height={576}
                className="relative h-auto w-full object-contain drop-shadow-[0_24px_60px_rgba(212,160,90,0.22)]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Ready to Book Your Service?"
          copy="Contact us today or fill out the form to schedule an appointment!"
          className="mb-10"
        />
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,26rem)]">
          <Reveal className="relative hidden min-w-0 lg:block">
            <div className="pulse-glow pointer-events-none absolute inset-8 rounded-full bg-copper/20 blur-3xl" />
            <Image
              src={bookingCarImage}
              alt="Red convertible"
              width={1024}
              height={576}
              className="relative h-auto w-full object-contain drop-shadow-[0_24px_50px_rgba(212,160,90,0.2)]"
            />
          </Reveal>
          <Reveal delay={0.1} className="relative z-10 min-w-0">
            <QuoteForm heading="" intro="" submitLabel="Send" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-copper/20 bg-linear-to-br from-[#2a2116] to-[#100e0b] px-6 py-12 text-center sm:px-10">
            <div className="pulse-glow absolute -right-16 -top-16 h-48 w-48 rounded-full bg-copper/20 blur-3xl" />
            <h2 className="display text-3xl font-semibold sm:text-4xl">Open 7 Days: 08:00 AM – 05:00 PM</h2>
            <p className="mt-5 display text-2xl font-semibold text-copper">
              <a href={`tel:${site.phones.mobileTel}`}>Call : {site.phones.mobile.replaceAll(" ", "")}</a>
            </p>
            <p className="mt-2 display text-2xl font-semibold text-copper">
              <a href={`tel:${site.phones.landlineTel}`}>Call : {site.phones.landline}</a>
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted">
              Stuck on the road? Flat tire, dead battery, or urgent repairs – we’re here to get you back on the road safely. Our certified technicians are ready{" "}
              <strong className="font-semibold text-ink">anytime, any day</strong> to assist you.
            </p>
            <div className="mt-8">
              <MagneticButton
                href={`tel:${site.phones.mobileTel}`}
                className="inline-flex rounded-full bg-copper px-6 py-3 text-sm font-semibold text-bg hover:bg-copper-deep"
              >
                Call Now
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading title={`Address: ${site.address.line}`} className="mb-8" />
        <div className="overflow-hidden rounded-4xl border border-copper/20">
          <iframe
            title="Govind Tyre & Auto workshop map"
            src={mapEmbed}
            className="h-[450px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
