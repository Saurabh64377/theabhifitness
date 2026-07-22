import { motion } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";
import { GiTargetShot, GiEyeTarget } from "react-icons/gi";
import Reveal, { StaggerGroup, StaggerItem } from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const HIGHLIGHTS = [
  "Certified strength & conditioning coaches",
  "Personalized training and nutrition plans",
  "Clean, premium, fully air-conditioned floor",
  "A results-driven community that pushes you forward",
];

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop";

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="left" className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="overflow-hidden rounded-[2rem] border border-line">
                <img
                  src={ABOUT_IMAGE}
                  alt="Inside THE ABHI FITNESS training floor"
                  className="h-[480px] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass absolute -bottom-8 -right-4 rounded-2xl p-5 shadow-2xl sm:-right-10"
              >
                <p className="font-display text-4xl text-primary">4+</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Years Of Excellence</p>
              </motion.div>
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary/25 blur-3xl" />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="About THE ABHI FITNESS"
              title="A Training Ground Built For"
              highlight="Real Results"
              className="mx-0"
            />

            <Reveal direction="up" delay={0.15}>
              <p className="mt-6 text-base leading-relaxed text-muted">
                We built THE ABHI FITNESS on one belief — everyone has a stronger version of
                themselves waiting to be unlocked. From your first session to your hundredth,
                every program here is designed around your goals, tracked with real progress, and
                backed by coaches who care about your outcome, not just your check-in.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Reveal direction="up" delay={0.2} className="rounded-2xl border border-line bg-card/60 p-5">
                <GiTargetShot className="text-2xl text-primary" />
                <h4 className="font-display mt-3 text-lg uppercase tracking-wide">Our Mission</h4>
                <p className="mt-2 text-sm text-muted">
                  Deliver world-class training and coaching that transforms bodies and builds
                  lasting discipline.
                </p>
              </Reveal>
              <Reveal direction="up" delay={0.28} className="rounded-2xl border border-line bg-card/60 p-5">
                <GiEyeTarget className="text-2xl text-primary" />
                <h4 className="font-display mt-3 text-lg uppercase tracking-wide">Our Vision</h4>
                <p className="mt-2 text-sm text-muted">
                  Become the most trusted premium fitness brand in the region — one transformation
                  at a time.
                </p>
              </Reveal>
            </div>

            <StaggerGroup className="mt-8 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <StaggerItem key={item} direction="right" className="flex items-center gap-3">
                  <BsCheckCircleFill className="shrink-0 text-primary" />
                  <span className="text-sm text-white/85">{item}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
