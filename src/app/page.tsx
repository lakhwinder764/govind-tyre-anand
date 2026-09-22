import Link from "next/link";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { FeatureCard } from "@/components/FeatureCard";
import { FloatingTyre } from "@/components/FloatingTyre";
import { Hero } from "@/components/Hero";
import { ImageCarousel } from "@/components/ImageCarousel";
import { OrbitStage } from "@/components/OrbitStage";
import { QuickServiceOverview } from "@/components/QuickServiceOverview";
import { Reveal } from "@/components/Reveal";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsBar } from "@/components/StatsBar";
import { VideoSection } from "@/components/VideoSection";
import { galleryImages, homeServices, tyreTips, valueProps } from "@/data/content";
import { faqs } from "@/data/faq";
import { videos } from "@/data/media";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="glass rounded-3xl p-6">
                <h2 className="display text-xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <StatsBar />

      <QuickServiceOverview />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Expert care for your vehicle"
          copy="Expert care for your vehicle, delivered by certified technicians using quality parts and reliable service — keeping you safe and confident on the road, every mile of the way. With our commitment to reliability, transparency and long-lasting results, we keep you safe, confident and fully supported on the road — every mile of the way."
        />
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <SectionHeading
            title="Govind Tyre & Auto offers top-quality auto repair and maintenance services"
            copy="At Govind Tyre & Auto, we believe every driver deserves safe, reliable, and affordable vehicle care. Whether it’s a quick tyre repair, a battery replacement, or a full logbook service, our certified technicians deliver honest, high-quality workmanship you can trust."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <FloatingTyre />
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="In motion"
            title="Tyres and wheels, in three dimensions"
            copy="Spin the range we fit in the workshop — all-terrains, mud terrains and custom wheels ready to go on in Arndell Park."
            className="mb-8 text-center"
            align="center"
          />
        </Reveal>
        <OrbitStage />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeServices.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.05}>
              <Link href={service.href} className="block">
                <FeatureCard title={service.title} text={service.summary} image={service.image} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <VideoSection
        src={videos.workshop.src}
        poster={videos.workshop.poster}
        title="Honest workmanship, road-ready results"
        copy="From tyre repairs to mechanical services, we’ve got you covered every day. Watch how a well-run workshop keeps Western Sydney moving."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Workshop"
          title="Inside Govind Tyre & Auto"
          copy="Real work from our Arndell Park bays — tyres, wheels, servicing and 4x4 fitment."
          className="mb-10"
        />
        <ImageCarousel slides={galleryImages} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-bg-elev p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-copper">Call</p>
          <h2 className="display mt-3 text-3xl font-semibold sm:text-5xl">
            Call : 02 72566883 (0272566883)
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{site.hours.homepageCopy}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What Our Customers Say"
          title="Real feedback from our happy customers across Sydney"
          copy="Here’s why drivers trust Govind Tyre & Auto."
          className="mb-10"
        />
        <ReviewsCarousel reviews={reviews} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Tyre Tips for a Safer Drive"
          copy="Stay ahead on the road with our expert tyre tips. From maintenance to performance, these tips help you extend tyre life, improve safety, and get the best out of your vehicle."
          className="mb-8"
        />
        <div className="mb-8 flex flex-wrap gap-3 text-sm text-muted">
          <span className="rounded-full border border-white/10 px-3 py-1">Clear Pass/Fail Guidance</span>
          <span className="rounded-full border border-white/10 px-3 py-1">30-45 Minute Service</span>
          <span className="rounded-full border border-white/10 px-3 py-1">Electronic Submission</span>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {tyreTips.map((tip, i) => (
            <Reveal key={tip.title} delay={i * 0.06}>
              <article className="glass rounded-3xl p-6">
                <h3 className="display text-xl font-semibold">{tip.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{tip.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Passionate About Cars, Dedicated to Customers"
          copy="We are a locally trusted auto service centre dedicated to keeping your car in top condition. With years of experience in tyres, repairs, and vehicle maintenance, we focus on delivering excellent workmanship and outstanding customer care."
        />
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
          Our goal is simple: provide hassle-free, affordable, and dependable automotive services so you can drive with confidence every time you hit the road.
        </p>
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
          Trusted locally by thousands of vehicle owners. Known for genuine products and transparent pricing. Experienced technicians with advanced service equipment. Serving our community with honesty, quality and care.
        </p>
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted">
          Our goal is to deliver genuine quality and reliable service. We aim to make every customer feel confident and satisfied. We focus on accurate work, fair pricing and long-term trust. Your safety, comfort and peace of mind will always come first.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          title="Got Questions? We Have Answers!"
          className="mb-8"
        />
        <FAQ items={faqs} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title="Real Stories from Real Customers" className="mb-8" />
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.slice(4).map((review, i) => (
            <Reveal key={review.id} delay={i * 0.08}>
              <article className="glass rounded-3xl p-6">
                <p className="text-sm leading-7 text-muted">“{review.text}”</p>
                <p className="mt-4 font-semibold">{review.name}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA
        title="Visit the workshop in Arndell Park"
        copy={`${site.address.line}. Call ${site.phones.mobile} or ${site.phones.landline}.`}
      />
    </>
  );
}
