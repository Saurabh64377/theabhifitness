import { GiTigerHead } from "react-icons/gi";
import { BsInstagram, BsWhatsapp, BsTelephoneFill, BsEnvelopeFill, BsGeoAltFill } from "react-icons/bs";
import { BRAND, NAV_LINKS } from "../constants/siteData";
import Reveal from "./Reveal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="relative overflow-hidden border-t border-line bg-bg-soft pt-20">
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal direction="up">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-bg">
                <GiTigerHead className="text-2xl" />
              </span>
              <span className="font-display text-2xl uppercase tracking-wide">{BRAND.name}</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              A premium strength &amp; transformation studio built for people who refuse to settle
              for average. Train hard. Recover smart. Become unstoppable.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-white transition-colors hover:border-primary hover:text-primary"
              >
                <BsInstagram />
              </a>
              <a
                href={`https://wa.me/${BRAND.phoneRaw}`}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-white transition-colors hover:border-primary hover:text-primary"
              >
                <BsWhatsapp />
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.08}>
            <h4 className="font-display text-lg uppercase tracking-wide text-primary">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={0.16}>
            <h4 className="font-display text-lg uppercase tracking-wide text-primary">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li className="flex items-start gap-3">
                <BsGeoAltFill className="mt-0.5 shrink-0 text-primary" />
                <span>{BRAND.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <BsTelephoneFill className="shrink-0 text-primary" />
                <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-white">{BRAND.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <BsEnvelopeFill className="shrink-0 text-primary" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white">{BRAND.email}</a>
              </li>
            </ul>
          </Reveal>

          <Reveal direction="up" delay={0.24}>
            <h4 className="font-display text-lg uppercase tracking-wide text-primary">Business Hours</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {BRAND.hours.map((h) => (
                <li key={h.day} className="flex flex-col gap-0.5 border-b border-line/60 pb-2 last:border-none">
                  <span className="text-muted">{h.day}</span>
                  <span className="font-medium text-white">{h.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-7 text-xs text-muted sm:flex-row">
          <p>© {year} {BRAND.name}. All rights reserved.</p>
          <p>Designed &amp; built for those who train different.</p>
        </div>
      </div>
    </footer>
  );
}
