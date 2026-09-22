"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/site";
import { videos } from "@/data/media";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-[#090807]" />
        <div className="mesh absolute inset-0 opacity-40" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-copper">
            Arndell Park workshop
          </p>
          <h1 className="display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="gradient-text">{site.tagline}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#efe7d8] sm:text-lg">
            {site.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-bg transition hover:bg-copper-deep"
            >
              Book a service
            </Link>
            <a
              href={`tel:${site.phones.landlineTel}`}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-ink hover:bg-white/10"
            >
              Call {site.phones.landline}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {site.badges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs text-[#efe7d8]"
              >
                {badge}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
