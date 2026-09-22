"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks, site, type NavChild } from "@/data/site";
import { cn } from "@/lib/cn";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={cn("h-3 w-3 transition-transform duration-300", open && "rotate-180")}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M2 4.5 6 8l4-3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceTile({
  child,
  active,
  onSelect,
}: {
  child: NavChild;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <Link
      href={child.href}
      role="menuitem"
      onClick={onSelect}
      className={cn(
        "group flex min-w-0 flex-col items-center gap-3 rounded-2xl px-3 py-4 text-center transition-all duration-300",
        active ? "bg-copper/10" : "hover:bg-white/6",
      )}
    >
      <span
        className={cn(
          "relative grid h-24 w-24 place-items-center overflow-hidden rounded-2xl border bg-linear-to-br from-[#2a2116] to-[#100e0b] transition-all duration-300",
          active
            ? "border-copper/50 shadow-[0_0_24px_rgba(212,160,90,0.28)]"
            : "border-copper/20 group-hover:border-copper/45",
        )}
      >
        {child.image ? (
          <Image
            src={child.image}
            alt=""
            fill
            className="object-contain p-2"
            sizes="96px"
          />
        ) : null}
      </span>
      <span
        className={cn(
          "text-sm font-medium leading-5",
          active ? "text-copper" : "text-muted group-hover:text-ink",
        )}
      >
        {child.label}
      </span>
      <span
        className={cn(
          "h-0.5 w-8 rounded-full bg-copper transition-opacity",
          active ? "opacity-100" : "opacity-0 group-hover:opacity-100",
        )}
        aria-hidden="true"
      />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const menuId = useId();
  const servicesItem = navLinks.find((link) => link.children);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  function openServices() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function scheduleClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 160);
  }

  function isActive(href: string, children?: { href: string }[]) {
    if (href === "/") return pathname === "/";
    if (children?.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`))) {
      return true;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const onServiceRoute = Boolean(
    servicesItem?.children?.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`)),
  );
  const showMega = servicesOpen || onServiceRoute;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled || open || showMega ? "bg-[#090807]/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" onClick={() => setOpen(false)} className="group flex min-w-0 items-center">
          <Logo priority className="h-11 w-auto sm:h-12" />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav
          className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href, link.children);
            if (link.children) {
              return (
                <div key={link.label} className="relative" onMouseEnter={openServices} onMouseLeave={scheduleClose}>
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                      active || servicesOpen
                        ? "bg-copper text-bg shadow-[0_0_24px_rgba(212,160,90,0.35)]"
                        : "text-muted hover:bg-white/8 hover:text-ink",
                    )}
                    aria-expanded={servicesOpen}
                    aria-haspopup="menu"
                    aria-controls={menuId}
                    onClick={() => setServicesOpen((v) => !v)}
                    onFocus={openServices}
                  >
                    {link.label}
                    <Chevron open={servicesOpen} />
                  </button>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                  active
                    ? "bg-copper text-bg shadow-[0_0_24px_rgba(212,160,90,0.35)]"
                    : "text-muted hover:bg-white/8 hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/book"
            className="hidden rounded-full bg-copper px-4 py-2 text-sm font-semibold text-bg transition hover:bg-copper-deep sm:inline-flex"
          >
            Book now
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1.5">
              <span className={cn("h-px bg-ink transition", open && "translate-y-1 rotate-45")} />
              <span className={cn("h-px bg-ink transition", open && "-translate-y-1 -rotate-45")} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showMega && servicesItem?.children ? (
          <motion.div
            id={menuId}
            role="menu"
            aria-label="Services"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={openServices}
            onMouseLeave={scheduleClose}
            className={cn(
              "border-t border-copper/20 bg-[#12110f]/95 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.55)] lg:block",
              onServiceRoute ? "relative hidden" : "absolute inset-x-0 top-full hidden",
            )}
          >
            <div className="mx-auto grid max-w-7xl grid-cols-6 gap-1 px-4 py-6 sm:px-6 lg:px-8">
              {servicesItem.children.map((child) => (
                <ServiceTile
                  key={child.href}
                  child={child}
                  active={pathname === child.href}
                  onSelect={() => setServicesOpen(false)}
                />
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 bg-[#090807]/95 px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="grid gap-1">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base text-ink hover:bg-white/5"
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((v) => !v)}
                    >
                      {link.label}
                      <Chevron open={mobileServicesOpen} />
                    </button>
                    {mobileServicesOpen ? (
                      <div className="mb-2 grid grid-cols-2 gap-2 pb-2 sm:grid-cols-3">
                        {link.children.map((child) => (
                          <ServiceTile
                            key={child.href}
                            child={child}
                            active={pathname === child.href}
                            onSelect={() => setOpen(false)}
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-3 text-base hover:bg-white/5",
                    isActive(link.href) ? "text-copper" : "text-ink",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-copper px-3 py-3 text-center font-semibold text-bg"
            >
              Book now
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
