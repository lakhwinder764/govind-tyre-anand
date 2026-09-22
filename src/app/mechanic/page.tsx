import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceOfferCard } from "@/components/ServiceOfferCard";
import { mechanicServices } from "@/data/content";
import { stock } from "@/data/media";

export const metadata = {
  title: "Mechanic",
};

export default function MechanicPage() {
  return (
    <>
      <PageHero
        eyebrow="Mechanical Services"
        title="Your Trusted Local Mechanic in Arndell Park"
        copy="At Govind Tyre and Auto, we do more than just tyres and wheels – we provide complete mechanical services to keep your vehicle running at peak performance. From regular logbook servicing to complex mechanical repairs, our certified technicians use the latest diagnostic tools and genuine parts to deliver reliable results every time."
        image={stock.mechanic}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="AC Regas & Air Conditioning Service"
          copy="Keep cool and comfortable on every drive with professional AC servicing at Govind Tyre & Auto. Over time, your car’s air conditioning system can lose efficiency, blow warm air, or develop leaks. That’s where we step in."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            "AC Regas – Recharging refrigerant gas for optimal cooling",
            "System Check – Inspecting for leaks, blockages, and worn parts",
            "Performance Test – Making sure your AC blows ice-cold again",
            "Repairs & Replacements – Fixing faulty compressors, condensers, or fans",
          ].map((item) => (
            <p key={item} className="glass rounded-3xl p-5 text-sm text-muted">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SectionHeading title="Show the difference between Serviced vs. Non-Serviced AC:" className="mb-6" />
        <div className="overflow-x-auto rounded-[2rem] border border-white/10">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/5 text-muted">
              <tr>
                <th className="px-5 py-4"> </th>
                <th className="px-5 py-4">Without Service</th>
                <th className="px-5 py-4">With Govind Tyre & Auto</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              {[
                ["Cooling", "Weak, warm air", "Ice-cold, instant cooling"],
                ["Air Quality", "Dusty, smelly", "Fresh & clean airflow"],
                ["Efficiency", "Wastes fuel", "Smooth & energy-efficient"],
                ["Comfort", "Sweaty drives", "Comfortable ride"],
              ].map((row) => (
                <tr key={row[0]} className="border-t border-white/10">
                  {row.map((cell) => (
                    <td key={cell} className="px-5 py-4">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mechanicServices.map((service) => (
            <ServiceOfferCard
              key={service.title}
              title={service.title}
              copy={service.copy}
              image={service.image}
              points={service.points}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading title="Our Commitment" />
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
          We know how important it is to have a mechanic you can trust. At Govind Tyre and Auto, we treat every vehicle as if it were our own – delivering quality, reliability, and safety in every service. Whether it’s a quick repair or ongoing vehicle maintenance, we’re here to keep you moving with confidence.
        </p>
      </section>

      <CTA
        title="Book Your Mechanical Service Today"
        copy="Drive safer, smoother, and longer with professional Mechanical service care. Contact us now at 0439 374 511 or book online to schedule your appointment!"
      />
    </>
  );
}
