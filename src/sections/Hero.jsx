import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BsTelephoneFill, BsWhatsapp, BsGeoAltFill, BsClockFill, BsChevronDown } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import { BRAND, HERO_STATS } from "../constants/siteData";
import { useTrialModal } from "../hooks/useTrialModal";
import Button from "../components/Button";
import StatCounter from "../components/StatCounter";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=2069&auto=format&fit=crop";

export default function Hero() {
  const { open: openTrial } = useTrialModal();
  const heroRef = useRef(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });
  const shapeX = useTransform(springX, (v) => v * 30);
  const shapeY = useTransform(springY, (v) => v * 30);
  const shapeX2 = useTransform(springX, (v) => v * -22);
  const shapeY2 = useTransform(springY, (v) => v * -22);

  const handleMouseMove = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-16"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Premium gym training floor"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/85 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/40 to-transparent" />
        <div className="bg-noise absolute inset-0" />
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,0.16),transparent_45%)]"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating gradient shapes */}
      <motion.div
        style={{ x: shapeX, y: shapeY }}
        className="pointer-events-none absolute right-[8%] top-24 h-72 w-72 animate-float rounded-full bg-primary/20 blur-[90px]"
      />
      <motion.div
        style={{ x: shapeX2, y: shapeY2 }}
        className="pointer-events-none absolute bottom-10 right-[20%] h-64 w-64 animate-float-slow rounded-full bg-accent/20 blur-[90px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur-sm"
          >
            <HiSparkles className="text-sm" />
            {BRAND.isOpenNow ? "Open Today" : "Currently Closed"} · {BRAND.city}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mt-6 text-4xl uppercase leading-[0.92] tracking-wide sm:text-5xl md:text-7xl lg:text-8xl"
          >
            Transform <span className="text-gradient">Your Body</span>, Transform Your Life.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {BRAND.name} is a premium strength &amp; transformation studio — elite coaching,
            world-class equipment, and a training culture built for people who refuse to settle
            for average.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" onClick={() => document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" })}>
              Join Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => openTrial()}>
              Book Free Trial
            </Button>
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-line text-white transition-colors hover:border-primary hover:text-primary"
              aria-label="Call now"
            >
              <BsTelephoneFill />
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsappRaw}`}
              target="_blank"
              rel="noreferrer"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-line text-white transition-colors hover:border-[#25D366] hover:text-[#25D366]"
              aria-label="WhatsApp"
            >
              <BsWhatsapp />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted"
          >
            <span className="flex items-center gap-2">
              <BsGeoAltFill className="text-primary" /> {BRAND.city}
            </span>
            <span className="flex items-center gap-2">
              <BsClockFill className="text-primary" /> Mon–Sat 5:30 AM – 11 PM
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="glass mt-14 grid grid-cols-2 gap-6 rounded-3xl p-6 sm:grid-cols-4 sm:p-8"
        >
          {HERO_STATS.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <BsChevronDown />
      </motion.div>
    </section>
  );
}
