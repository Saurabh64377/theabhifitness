import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { cn } from "../utils/cn";

const ACTIVITY_LEVELS = [
  { label: "Sedentary", desc: "Little to no exercise", factor: 1.2 },
  { label: "Light", desc: "1–3 workouts / week", factor: 1.375 },
  { label: "Moderate", desc: "3–5 workouts / week", factor: 1.55 },
  { label: "Active", desc: "6–7 workouts / week", factor: 1.725 },
  { label: "Very Active", desc: "Athlete / physical job", factor: 1.9 },
];

const GOALS = [
  { label: "Lose Weight", adjust: -500 },
  { label: "Maintain", adjust: 0 },
  { label: "Gain Muscle", adjust: 350 },
];

export default function CalorieCalculator() {
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(70);
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState(ACTIVITY_LEVELS[2]);
  const [goal, setGoal] = useState(GOALS[0]);

  const { bmr, tdee, target } = useMemo(() => {
    const base =
      gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;
    const t = base * activity.factor;
    return { bmr: Math.round(base), tdee: Math.round(t), target: Math.round(t + goal.adjust) };
  }, [age, height, weight, gender, activity, goal]);

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setGender("male")}
            className={cn(
              "flex items-center justify-center gap-2 rounded-xl border py-3 text-sm font-medium transition-colors",
              gender === "male" ? "border-primary bg-primary/10 text-primary" : "border-line text-muted"
            )}
          >
            <BsGenderMale /> Male
          </button>
          <button
            onClick={() => setGender("female")}
            className={cn(
              "flex items-center justify-center gap-2 rounded-xl border py-3 text-sm font-medium transition-colors",
              gender === "female" ? "border-primary bg-primary/10 text-primary" : "border-line text-muted"
            )}
          >
            <BsGenderFemale /> Female
          </button>
        </div>

        <div>
          <div className="flex items-center justify-between text-sm">
            <label className="font-medium text-white/80">Age</label>
            <span className="font-display text-xl text-primary">{age} yrs</span>
          </div>
          <input type="range" min={14} max={70} value={age} onChange={(e) => setAge(Number(e.target.value))} className="brand-range mt-3 w-full" />
        </div>

        <div>
          <div className="flex items-center justify-between text-sm">
            <label className="font-medium text-white/80">Height</label>
            <span className="font-display text-xl text-primary">{height} cm</span>
          </div>
          <input type="range" min={120} max={220} value={height} onChange={(e) => setHeight(Number(e.target.value))} className="brand-range mt-3 w-full" />
        </div>

        <div>
          <div className="flex items-center justify-between text-sm">
            <label className="font-medium text-white/80">Weight</label>
            <span className="font-display text-xl text-primary">{weight} kg</span>
          </div>
          <input type="range" min={30} max={160} value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="brand-range mt-3 w-full" />
        </div>

        <div>
          <label className="text-sm font-medium text-white/80">Activity Level</label>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {ACTIVITY_LEVELS.map((level) => (
              <button
                key={level.label}
                onClick={() => setActivity(level)}
                className={cn(
                  "rounded-xl border px-3 py-2.5 text-left text-xs transition-colors",
                  activity.label === level.label
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-line text-muted hover:border-white/20"
                )}
              >
                <span className="block font-semibold">{level.label}</span>
                <span className="text-[10px] opacity-80">{level.desc}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-white/80">Goal</label>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {GOALS.map((g) => (
              <button
                key={g.label}
                onClick={() => setGoal(g)}
                className={cn(
                  "rounded-xl border px-3 py-2.5 text-xs font-semibold transition-colors",
                  goal.label === g.label ? "border-primary bg-primary/10 text-primary" : "border-line text-muted"
                )}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center rounded-3xl border border-line bg-card/60 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">Daily Calorie Target</p>
        <motion.p
          key={target}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-display mt-2 text-6xl text-primary"
        >
          {target.toLocaleString()}
        </motion.p>
        <p className="mt-1 text-sm text-muted">kcal / day for your goal: {goal.label}</p>

        <div className="mt-8 grid w-full max-w-sm grid-cols-2 gap-4 text-left">
          <div className="rounded-xl border border-line p-4">
            <p className="text-[10px] uppercase tracking-wide text-muted">BMR</p>
            <p className="font-display mt-1 text-2xl">{bmr.toLocaleString()}</p>
          </div>
          <div className="rounded-xl border border-line p-4">
            <p className="text-[10px] uppercase tracking-wide text-muted">Maintenance</p>
            <p className="font-display mt-1 text-2xl">{tdee.toLocaleString()}</p>
          </div>
        </div>
        <p className="mt-6 max-w-xs text-xs leading-relaxed text-muted">
          Estimates use the Mifflin-St Jeor formula. Our coaches fine-tune this into a full
          nutrition plan for you.
        </p>
      </div>
    </div>
  );
}
