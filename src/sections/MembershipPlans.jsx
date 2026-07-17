import { motion } from "framer-motion";
import { BsCheckCircleFill, BsStarFill } from "react-icons/bs";
import { PLANS } from "../constants/siteData";
import { usePlanSelection } from "../hooks/usePlanSelection";
import SectionHeading from "../components/SectionHeading";
import { StaggerGroup, StaggerItem } from "../components/Reveal";
import Button from "../components/Button";
import PlanComparisonTable from "./PlanComparisonTable";

export default function MembershipPlans() {
  const { selectPlan } = usePlanSelection();

  const handleJoin = (planName) => {
    selectPlan(planName);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="plans" className="section-pad relative bg-bg-soft">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Membership Plans"
          title="Invest In A"
          highlight="Stronger You"
          subtitle="Transparent pricing. No hidden charges. Pick the plan that fits your goal and timeline."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`relative flex h-full flex-col rounded-3xl border p-7 ${
                  plan.popular
                    ? "border-primary bg-gradient-to-b from-primary/10 to-card shadow-[0_20px_60px_rgba(250,204,21,0.15)]"
                    : "border-line bg-card/60"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-bg shadow-lg">
                    <BsStarFill className="text-[10px]" /> Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl uppercase tracking-wide">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-display text-5xl text-primary">₹{plan.price.toLocaleString()}</span>
                  <span className="mb-1 text-sm text-muted">/{plan.duration}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                      <BsCheckCircleFill className="mt-0.5 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  className="mt-8 w-full"
                  variant={plan.popular ? "primary" : "outline"}
                  onClick={() => handleJoin(plan.name)}
                >
                  Join This Plan
                </Button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-8 text-center text-xs text-muted">
          All plans include free WiFi, drinking water, and general training guidance.
        </p>

        <PlanComparisonTable />
      </div>
    </section>
  );
}
