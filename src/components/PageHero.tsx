"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  copy: string;
  image: string;
};

export function PageHero({ eyebrow, title, copy, image }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y, scale }}>
        <Image src={image} alt="" fill className="object-cover" priority sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[#090807]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        {eyebrow ? (
          <motion.p
            className="text-xs uppercase tracking-[0.28em] text-copper"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {eyebrow}
          </motion.p>
        ) : null}
        <motion.h1
          className="display mt-4 max-w-4xl text-4xl font-bold sm:text-6xl"
          initial={reduce ? false : { opacity: 0, y: 28, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformPerspective: 900 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-5 max-w-2xl text-base leading-8 text-[#efe7d8] sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {copy}
        </motion.p>
      </div>
    </section>
  );
}
