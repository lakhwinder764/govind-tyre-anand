import { valuePropIcons } from "@/components/ValuePropIcons";
import { valueProps } from "@/data/content";

export function ValuePropsBar() {
  return (
    <section
      className="relative z-20 border-b border-white/10 bg-black/45 backdrop-blur-xl"
      aria-label="Why choose Govind Tyre and Auto"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {valueProps.map((item) => {
          const Icon = valuePropIcons[item.icon];
          return (
            <article key={item.title} className="flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-copper/40 bg-copper/15 text-copper">
                <Icon />
              </span>
              <div className="min-w-0">
                <h2 className="text-sm font-semibold text-ink sm:text-base">{item.title}</h2>
                <p className="text-xs leading-5 text-muted sm:text-sm">{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
