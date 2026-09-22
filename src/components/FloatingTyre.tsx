"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { tyres } from "@/data/products";

export function FloatingTyre() {
  const reduce = useReducedMotion();
  const image = tyres[0]?.image;
  const rotateX = useSpring(useMotionValue(12), { stiffness: 80, damping: 16 });
  const rotateY = useSpring(useMotionValue(-18), { stiffness: 80, damping: 16 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    rotateX.set(8 + (0.5 - y) * 28);
    rotateY.set(-10 + (x - 0.5) * 40);
  }

  function onLeave() {
    rotateX.set(12);
    rotateY.set(-18);
  }

  return (
    <div
      className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96"
      style={{ perspective: 1200 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="absolute inset-8 rounded-full bg-copper/20 blur-3xl pulse-glow" />
      <motion.div
        className="preserve-3d relative h-full w-full"
        style={{ rotateX, rotateY }}
        animate={reduce ? undefined : { y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-full bg-black/50 blur-2xl translate-z-[-40px]" />
        <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-white shadow-[0_40px_100px_rgba(0,0,0,.55)]">
          {image ? (
            <motion.div
              className="absolute inset-0"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              <Image src={image} alt="All-terrain tyre" fill className="object-contain p-8" sizes="380px" />
            </motion.div>
          ) : null}
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-full border border-copper/40" />
        <div className="pointer-events-none absolute -right-6 top-10 h-16 w-16 rounded-full border border-white/20 bg-white/5 backdrop-blur-md" />
        <div className="pointer-events-none absolute -left-4 bottom-12 h-10 w-10 rounded-full bg-copper/40 blur-md" />
      </motion.div>
    </div>
  );
}
