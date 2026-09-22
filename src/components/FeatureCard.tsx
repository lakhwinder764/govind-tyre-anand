import Image from "next/image";
import { TiltCard } from "@/components/TiltCard";

type Props = {
  title: string;
  text: string;
  image?: string;
};

export function FeatureCard({ title, text, image }: Props) {
  return (
    <TiltCard className="h-full">
      <article className="glass relative h-full overflow-hidden rounded-3xl p-6">
        {image ? (
          <div className="relative mb-5 h-40 overflow-hidden rounded-2xl">
            <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
        ) : null}
        <h3 className="display text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
      </article>
    </TiltCard>
  );
}
