import Image from "next/image";

type Props = {
  eyebrow?: string;
  title: string;
  copy: string;
  image: string;
};

export function PageHero({ eyebrow, title, copy, image }: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[#090807]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.28em] text-copper">{eyebrow}</p>
        ) : null}
        <h1 className="display mt-4 max-w-4xl text-4xl font-bold sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#efe7d8] sm:text-lg">{copy}</p>
      </div>
    </section>
  );
}
