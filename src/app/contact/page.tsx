import { BookingForm } from "@/components/BookingForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { contactServices } from "@/data/content";
import { stock } from "@/data/media";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch with Govind Tyre and Auto"
        copy="Have questions about our services or need urgent vehicle assistance? We’re here to help! Whether it’s a tyre repair, wheel alignment, mechanical repair, or any other automotive service, our friendly team is ready to assist you."
        image={stock.workshop}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading title="Working Hours" />
          <ul className="mt-6 space-y-3 text-muted">
            <li>{site.hours.weekdays}</li>
            <li>{site.hours.saturday}</li>
            <li>{site.hours.sunday}</li>
          </ul>

          <SectionHeading title="Our Contact Information" className="mt-12" />
          <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
            <li>Business Name: Govind Tyre and Auto</li>
            <li>Owner: {site.owner}</li>
            <li>
              Phone: {site.phones.mobile} (Call or WhatsApp)
            </li>
            <li>Phone: {site.phones.landline} (Call)</li>
            <li>Email: {site.email}</li>
            <li>Address: {site.address.line}</li>
          </ul>

          <SectionHeading title="Our Services" className="mt-12" />
          <p className="mt-4 text-sm text-muted">
            We provide a wide range of services to keep your vehicle running smoothly and safely:
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-muted">
            {contactServices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading title="Ready to Book Your Service?" copy="Contact us today or fill out the form to schedule an appointment!" className="mb-6" />
          <BookingForm />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <h2 className="display text-3xl font-semibold">Call : 02 72566883 (0272566883)</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
          Stuck on the road? Flat tire, dead battery, or urgent repairs – we’re here to get you back on the road safely. Our certified technicians are ready anytime, any day to assist you.
        </p>
        <p className="mt-4 text-muted">Address: {site.address.line}</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10">
          <iframe
            title="Govind Tyre & Auto workshop map"
            src={site.address.embedUrl}
            className="h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
