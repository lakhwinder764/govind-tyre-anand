import { BookingForm } from "@/components/BookingForm";
import { PageHero } from "@/components/PageHero";
import { stock } from "@/data/media";
import { site } from "@/data/site";

export const metadata = {
  title: "Book a service",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book"
        title="Book a service"
        copy="Absolutely. You can book an appointment through our website or simply call us for same-day service availability."
        image={stock.alignment}
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-base leading-8 text-muted">
            Call {site.phones.mobile} or {site.phones.landline}. WhatsApp is available on the mobile number. Walk-ins are welcome when the bays are free.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted">
            <li>{site.hours.weekdays}</li>
            <li>{site.hours.saturday}</li>
            <li>{site.hours.sunday}</li>
            <li>{site.address.line}</li>
          </ul>
        </div>
        <BookingForm />
      </section>
    </>
  );
}
