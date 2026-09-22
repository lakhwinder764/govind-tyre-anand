"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export function MagneticButton({ href, children, className, external }: Props) {
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const shared = {
    className,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: { x, y },
  };

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <motion.a href={href} {...shared}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div style={{ x, y }} className="inline-flex">
      <Link href={href} className={className} onMouseMove={onMove} onMouseLeave={onLeave}>
        {children}
      </Link>
    </motion.div>
  );
}
