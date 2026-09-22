import Image from "next/image";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { stock, wp } from "@/data/media";
import { site } from "@/data/site";

const welcomeCar = wp("2025/08/Untitled-design-39-1024x576.png");
const founderImage = wp("2025/08/0c00ad1a382dff7de84f1b27187dfabb.jpg");
const commitmentImage = wp("2025/08/eb0db49c712dd569012b09817e82965c.jpg");

const solutions = [
  "Certified Technicians – Skilled professionals ready to handle all your vehicle needs.",
  "Reliable Service – Fast, efficient, and trustworthy auto care.",
  "Comprehensive Solutions – From tyres and wheels to mechanical and air conditioning services.",
  "Customer-Focused – Your satisfaction and safety are our top priorities.",
  "Convenient Hours – Open Monday to Friday 08:00 AM – 05:00 PM, Saturday 08:00 AM – 01:00 PM, Sunday 08:00 AM – 03:00 PM.",
];

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
  title: "About Us",
  description:
    "At Govind Tyre and Auto, we are passionate about keeping your vehicles safe, reliable, and road-ready. Located at 8/14 Holbeche Road, Arndell Park, NSW 2148,",
  openGraph: {
    title: "About Us - Govind Tyre & Auto",
    description:
      "At Govind Tyre and Auto, we are passionate about keeping your vehicles safe, reliable, and road-ready. Located at 8/14 Holbeche Road, Arndell Park, NSW 2148,",
    images: [
      {
        url: welcomeCar,
        width: 1024,
        height: 576,
        alt: "About Us",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Welcome to Govind Tyre and Auto"
        copy="At Govind Tyre and Auto, we are passionate about keeping your vehicles safe, reliable, and road-ready. Located at 8/14 Holbeche Road, Arndell Park, NSW 2148, we have built a reputation for providing high-quality automotive services with honesty, precision, and care."
        image={stock.workshop}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <p className="max-w-3xl text-base leading-8 text-muted">
            Our mission is simple: to deliver fast, reliable, and professional auto care for every customer who drives through our doors. Whether you need a tyre repair, wheel alignment, logbook service, or a full mechanical repair, our certified technicians are here to ensure your vehicle performs at its best.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative mx-auto mt-12 flex max-w-4xl items-center justify-center">
            <div className="pulse-glow pointer-events-none absolute inset-10 rounded-full bg-copper/22 blur-3xl" />
            <Image
              src={welcomeCar}
              alt="Silver sports car"
              width={1024}
              height={576}
              className="relative h-auto w-full object-contain drop-shadow-[0_24px_60px_rgba(212,160,90,0.22)]"
            />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="min-w-0">
            <SectionHeading title="Meet Our Founder" />
            <p className="mt-6 text-base leading-8 text-muted">
              <strong className="font-semibold text-ink">Rohin Sharma</strong>, the owner of Govind Tyre and Auto, brings years of experience and dedication to the automotive industry. His focus is on{" "}
              <strong className="font-semibold text-ink">
                customer satisfaction, quality workmanship, and using the latest technology
              </strong>{" "}
              to deliver efficient and reliable auto services. Rohin personally ensures that every vehicle leaving our workshop meets the highest standards of safety and performance.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="relative min-w-0">
            <div className="pulse-glow pointer-events-none absolute inset-8 rounded-full bg-copper/18 blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-copper/20">
              <Image
                src={founderImage}
                alt="Tyre & Auto workshop Arndell Park , tyre shop"
                width={685}
                height={667}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title="We offer a wide range of automotive solutions" className="mb-8" />
        <ul className="grid gap-4 md:grid-cols-2">
          {solutions.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-3xl border border-copper/15 bg-black/20 px-5 py-5 text-sm leading-7 text-muted"
            >
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative min-w-0">
            <div className="pulse-glow pointer-events-none absolute inset-8 rounded-full bg-copper/18 blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-copper/20">
              <Image
                src={commitmentImage}
                alt="Govind Tyre and Auto workshop"
                width={736}
                height={736}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="min-w-0">
            <SectionHeading title="Our Commitment" />
            <p className="mt-6 text-base leading-8 text-muted">
              At Govind Tyre and Auto, we understand how important your vehicle is to your daily life. That’s why we{" "}
              <strong className="font-semibold text-ink">go above and beyond to ensure every service is done right the first time</strong>
              . Our team is committed to delivering{" "}
              <strong className="font-semibold text-ink">professional, honest, and reliable service</strong> that keeps your car running smoothly and safely.
            </p>
            <p className="mt-6 text-base leading-8 text-muted">
              Whether it’s a quick tyre repair, a full mechanical overhaul, or a routine maintenance check,{" "}
              <strong className="font-semibold text-ink">we treat every vehicle as if it were our own</strong>.
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Come and see us"
        copy={`${site.address.line} · ${site.email} · ${site.phones.mobile}`}
      />
    </>
  );
}
