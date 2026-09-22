import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { stock } from "@/data/media";
import { site } from "@/data/site";

export const metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Welcome to Govind Tyre and Auto"
        copy="At Govind Tyre and Auto, we are passionate about keeping your vehicles safe, reliable, and road-ready. Located at 8/14 Holbeche Road, Arndell Park, NSW 2148, we have built a reputation for providing high-quality automotive services with honesty, precision, and care."
        image={stock.workshop}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-base leading-8 text-muted">
          Our mission is simple: to deliver fast, reliable, and professional auto care for every customer who drives through our doors. Whether you need a tyre repair, wheel alignment, logbook service, or a full mechanical repair, our certified technicians are here to ensure your vehicle performs at its best.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading title="Meet Our Founder" />
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
          Rohin Sharma, the owner of Govind Tyre and Auto, brings years of experience and dedication to the automotive industry. His focus is on customer satisfaction, quality workmanship, and using the latest technology to deliver efficient and reliable auto services. Rohin personally ensures that every vehicle leaving our workshop meets the highest standards of safety and performance.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title="We offer a wide range of automotive solutions" className="mb-8" />
        <ul className="grid gap-4 md:grid-cols-2">
          {[
            "Certified Technicians – Skilled professionals ready to handle all your vehicle needs.",
            "Reliable Service – Fast, efficient, and trustworthy auto care.",
            "Comprehensive Solutions – From tyres and wheels to mechanical and air conditioning services.",
            "Customer-Focused – Your satisfaction and safety are our top priorities.",
            "Convenient Hours – Open Monday to Friday 08:00 AM – 05:00 PM, Saturday 08:00 AM – 01:00 PM, Sunday 08:00 AM – 03:00 PM.",
          ].map((item) => (
            <li key={item} className="glass rounded-3xl p-6 text-sm leading-7 text-muted">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading title="Our Commitment" />
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
          At Govind Tyre and Auto, we understand how important your vehicle is to your daily life. That’s why we go above and beyond to ensure every service is done right the first time. Our team is committed to delivering professional, honest, and reliable service that keeps your car running smoothly and safely.
        </p>
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
          Whether it’s a quick tyre repair, a full mechanical overhaul, or a routine maintenance check, we treat every vehicle as if it were our own.
        </p>
      </section>

      <CTA
        title="Come and see us"
        copy={`${site.address.line} · ${site.email} · ${site.phones.mobile}`}
      />
    </>
  );
}
