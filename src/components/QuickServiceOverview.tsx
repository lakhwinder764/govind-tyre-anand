import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { quickOverview } from "@/data/content";

export function QuickServiceOverview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr]">
        <Reveal>
          <div>
            <h2 className="display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              Quick
              <br />
              Service
              <br />
              <span className="text-copper">Overview</span>
            </h2>
            <div className="mt-5 flex gap-1.5" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="h-1.5 w-3 rounded-full bg-copper" />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {quickOverview.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <TiltCard className="h-full">
                <Link
                  href={item.href}
                  className="group relative block h-[340px] overflow-hidden rounded-[1.6rem] border border-white/10 sm:h-[420px]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 22vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                    <h3 className="display text-lg font-semibold leading-tight text-ink sm:text-xl">
                      {item.title}
                    </h3>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-copper text-[#090807] transition group-hover:bg-copper-deep">
                      <span aria-hidden="true">→</span>
                      <span className="sr-only">View {item.title}</span>
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
