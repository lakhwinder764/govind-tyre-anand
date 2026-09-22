"use client";

import { motion, useReducedMotion } from "motion/react";
import { MagneticButton } from "@/components/MagneticButton";
import { site } from "@/data/site";

type Props = {
  title: string;
  copy: string;
};

export function CTA({ title, copy }: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-copper/25 bg-gradient-to-br from-[#2a2116] to-[#100e0b] px-6 py-14 sm:px-12"
        initial={reduce ? false : { opacity: 0, y: 36, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        whileHover={reduce ? undefined : { scale: 1.01, rotateX: 2, rotateY: -2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformPerspective: 1200 }}
      >
        <div className="pulse-glow absolute -right-16 -top-16 h-56 w-56 rounded-full bg-copper/20 blur-3xl" />
        <div className="drift absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-copper/10 blur-3xl" />
        <h2 className="display max-w-2xl text-3xl font-semibold sm:text-5xl">{title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{copy}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <MagneticButton
            href="/book"
            className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-bg hover:bg-copper-deep"
          >
            Book online
          </MagneticButton>
          <MagneticButton
            href={`tel:${site.phones.mobileTel}`}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold"
          >
            Call {site.phones.mobile}
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}
