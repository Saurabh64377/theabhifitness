import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const CATEGORIES = [
  { label: "Underweight", max: 18.5, color: "#38bdf8" },
  { label: "Normal", max: 25, color: "#4ade80" },
  { label: "Overweight", max: 30, color: "#facc15" },
  { label: "Obese", max: 999, color: "#f97316" },
];

function getCategory(bmi) {
  return CATEGORIES.find((c) => bmi < c.max) ?? CATEGORIES[CATEGORIES.length - 1];
}

export default function BmiCalculator() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);

  const bmi = useMemo(() => {
    const h = height / 100;
    return weight / (h * h);
  }, [height, weight]);

  const category = getCategory(bmi);
  const pointer = Math.min(Math.max((bmi / 40) * 100, 2), 98);

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="space-y-8">
        <div>
          <div className="flex items-center justify-between text-sm">
            <label className="font-medium text-white/80">Height</label>
            <span className="font-display text-xl text-primary">{height} cm</span>
          </div>
          <input
            type="range"
            min={120}
            max={220}
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="brand-range mt-3 w-full"
          />
        </div>
        <div>
          <div className="flex items-center justify-between text-sm">
            <label className="font-medium text-white/80">Weight</label>
            <span className="font-display text-xl text-primary">{weight} kg</span>
          </div>
          <input
            type="range"
            min={30}
            max={160}
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="brand-range mt-3 w-full"
          />
        </div>

        <div className="grid grid-cols-4 gap-2 text-center">
          {CATEGORIES.map((c) => (
            <div
              key={c.label}
              className="rounded-lg border border-line px-2 py-2 text-[11px] font-medium uppercase tracking-wide text-muted"
              style={{ color: category.label === c.label ? c.color : undefined, borderColor: category.label === c.label ? c.color : undefined }}
            >
              {c.label}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-3xl border border-line bg-card/60 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">Your BMI Score</p>
        <motion.p
          key={bmi.toFixed(1)}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-display mt-2 text-6xl"
          style={{ color: category.color }}
        >
          {bmi.toFixed(1)}
        </motion.p>
        <p className="mt-1 text-lg font-semibold" style={{ color: category.color }}>
          {category.label}
        </p>

        <div className="relative mt-8 h-2 w-full max-w-sm rounded-full bg-gradient-to-r from-sky-400 via-green-400 via-40% via-yellow-400 via-70% to-orange-500">
          <motion.div
            className="absolute -top-1.5 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-bg bg-white shadow-lg"
            animate={{ left: `${pointer}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
          />
        </div>
        <div className="mt-3 flex w-full max-w-sm justify-between text-[10px] uppercase tracking-wide text-muted">
          <span>15</span>
          <span>40+</span>
        </div>
        <p className="mt-6 max-w-xs text-xs leading-relaxed text-muted">
          BMI is a general guideline. Talk to our trainers for a personalized body composition
          assessment.
        </p>
      </div>
    </div>
  );
}
