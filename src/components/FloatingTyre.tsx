import Image from "next/image";
import { tyres } from "@/data/products";

export function FloatingTyre() {
  const image = tyres[0]?.image;

  return (
    <div className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80" style={{ perspective: 900 }}>
      <div className="float-3d absolute inset-0">
        <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,.45)]">
          {image ? (
            <Image src={image} alt="All-terrain tyre" fill className="object-contain p-8" sizes="320px" />
          ) : null}
        </div>
      </div>
    </div>
  );
}
