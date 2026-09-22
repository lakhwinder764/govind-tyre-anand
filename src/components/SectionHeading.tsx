import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  className,
}: Props) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.28em] text-copper">{eyebrow}</p>
      ) : null}
      <h2 className="display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{copy}</p> : null}
    </div>
  );
}
