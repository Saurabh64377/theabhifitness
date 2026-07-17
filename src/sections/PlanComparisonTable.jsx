import { BsCheckCircleFill, BsDashCircle } from "react-icons/bs";
import { PLANS, PLAN_COMPARISON_ROWS } from "../constants/siteData";
import Reveal from "../components/Reveal";

function Cell({ value }) {
  if (value === true) return <BsCheckCircleFill className="mx-auto text-lg text-primary" />;
  if (value === false) return <BsDashCircle className="mx-auto text-lg text-white/20" />;
  return <span className="text-xs font-medium text-white/80">{value}</span>;
}

export default function PlanComparisonTable() {
  return (
    <Reveal direction="up" className="mt-20">
      <h3 className="font-display text-center text-2xl uppercase tracking-wide sm:text-3xl">
        Compare <span className="text-gradient">All Plans</span>
      </h3>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-card/80">
              <th className="p-4 text-left font-medium text-muted">Features</th>
              {PLANS.map((plan) => (
                <th key={plan.name} className="p-4 text-center">
                  <span className={plan.popular ? "text-primary" : "text-white"}>{plan.name}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PLAN_COMPARISON_ROWS.map((row, i) => (
              <tr key={row.label} className={i % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}>
                <td className="p-4 text-left text-white/85">{row.label}</td>
                {row.values.map((value, idx) => (
                  <td key={idx} className="p-4 text-center">
                    <Cell value={value} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}
