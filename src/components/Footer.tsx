import Link from "next/link";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/10 bg-[#070605]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-semibold">{site.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted">
            We are a locally trusted auto service centre dedicated to keeping your
            car in top condition. With years of experience in tyres, repairs, and
            vehicle maintenance, we focus on delivering excellent workmanship and
            outstanding customer care.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-faint">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-faint">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <a href={`tel:${site.phones.mobileTel}`} className="hover:text-ink">
                +61 {site.phones.mobile}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phones.landlineTel}`} className="hover:text-ink">
                {site.phones.landline}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.address.mapsUrl} className="hover:text-ink">
                {site.address.line}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-4 text-sm">
            <a href={site.social.facebook} className="text-muted hover:text-ink">
              Facebook
            </a>
            <a href={site.social.instagram} className="text-muted hover:text-ink">
              Instagram
            </a>
            <a href={site.social.tiktok} className="text-muted hover:text-ink">
              TikTok
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-faint">
        © {new Date().getFullYear()} {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
