import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import BmiCalculator from "../components/BmiCalculator";
import CalorieCalculator from "../components/CalorieCalculator";
import { cn } from "../utils/cn";

const TABS = [
  { key: "bmi", label: "BMI Calculator" },
  { key: "calorie", label: "Calorie Calculator" },
];

export default function HealthTools() {
  const [tab, setTab] = useState("bmi");

  return (
    <section id="tools" className="section-pad relative bg-bg-soft">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Free Health Tools"
          title="Know Your Numbers Before You"
          highlight="Start Training"
          subtitle="Use our free calculators to understand your body composition and daily nutrition needs — the same math our coaches use to build your program."
        />

        <Reveal direction="up" delay={0.15} className="mt-12 rounded-3xl border border-line bg-card/40 p-6 sm:p-10">
          <div className="mx-auto flex w-fit gap-1 rounded-full border border-line bg-bg/60 p-1">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={cn(
                  "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                  tab === t.key ? "text-bg" : "text-muted hover:text-white"
                )}
              >
                {tab === t.key && (
                  <motion.span
                    layoutId="tool-tab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                {tab === "bmi" ? <BmiCalculator /> : <CalorieCalculator />}
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
