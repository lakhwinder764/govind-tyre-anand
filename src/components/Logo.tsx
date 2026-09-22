import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className, priority = false }: Props) {
  return (
    <Image
      src="/logo.png"
      alt="Govind Tyre & Auto"
      width={244}
      height={96}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}
