"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import type { ReactNode } from "react";
import { MagneticButton } from "@/components/MagneticButton";
import { videos } from "@/data/media";
import { tyres, wheels } from "@/data/products";
import { site } from "@/data/site";

export function Hero({ children }: { children?: ReactNode }) {
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 40, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 40, damping: 20 });

  function onMove(e: React.MouseEvent<HTMLElement>) {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 24);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 16);
  }

  const cards = [
    { src: tyres[0].image, alt: tyres[0].name, className: "right-4 top-40 hidden lg:block" },
    { src: wheels[7].image, alt: wheels[7].name, className: "right-36 top-72 hidden lg:block" },
    { src: tyres[9].image, alt: tyres[9].name, className: "right-8 bottom-28 hidden xl:block" },
  ];

  return (
    <section
      className="relative isolate min-h-[92vh] overflow-hidden"
      onMouseMove={onMove}
    >
      <motion.div className="absolute inset-0" style={{ x, y, scale: 1.08 }}>
        {reduce ? (
          <Image
            src={videos.hero.poster}
            alt="Night driving on an open road"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={videos.hero.poster}
            preload="metadata"
            aria-hidden="true"
          >
            <source src={videos.hero.src} type="video/mp4" />
          </video>
        )}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-[#090807]" />
      <div className="mesh absolute inset-0 opacity-40" />

      {cards.map((card, i) => (
        <motion.div
          key={card.alt}
          className={`absolute z-10 h-36 w-36 overflow-hidden rounded-3xl border border-white/20 bg-white/90 shadow-2xl ${card.className}`}
          style={{ transformPerspective: 900 }}
          initial={reduce ? false : { opacity: 0, rotateY: -30, y: 30 }}
          animate={
            reduce
              ? { opacity: 1 }
              : { opacity: 1, rotateY: [-12, 12, -12], y: [0, -18, 0], rotateX: [6, 12, 6] }
          }
          transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
        >
          <Image src={card.src} alt={card.alt} fill className="object-contain p-3" sizes="144px" />
        </motion.div>
      ))}

      {children}

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.p
            className="mb-4 text-xs uppercase tracking-[0.18em] text-copper sm:tracking-[0.24em]"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to Govind Tyre and Auto
          </motion.p>
          <h1 className="display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {site.tagline.split(" ").map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="mr-[0.28em] inline-block gradient-text"
                initial={reduce ? false : { opacity: 0, y: 36, rotateX: 40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.7, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformPerspective: 800 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-[#efe7d8] sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            {site.description}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <MagneticButton
              href="/book"
              className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-bg transition hover:bg-copper-deep"
            >
              Book a service
            </MagneticButton>
            <MagneticButton
              href={`tel:${site.phones.landlineTel}`}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-ink hover:bg-white/10"
            >
              Call {site.phones.landline}
            </MagneticButton>
          </motion.div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {site.badges.map((badge, i) => (
              <motion.li
                key={badge}
                className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs text-[#efe7d8]"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.08 }}
              >
                {badge}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
