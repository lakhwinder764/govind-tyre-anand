import Link from "next/link";
import { site } from "@/data/site";

type Props = {
  title: string;
  copy: string;
};

export function CTA({ title, copy }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-copper/25 bg-gradient-to-br from-[#2a2116] to-[#100e0b] px-6 py-14 sm:px-12">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-copper/20 blur-3xl" />
        <h2 className="display max-w-2xl text-3xl font-semibold sm:text-5xl">{title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{copy}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/book"
            className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-bg hover:bg-copper-deep"
          >
            Book online
          </Link>
          <a
            href={`tel:${site.phones.mobileTel}`}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold"
          >
            Call {site.phones.mobile}
          </a>
        </div>
      </div>
    </section>
  );
}
