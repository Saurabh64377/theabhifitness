import ReactCountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountUp = ReactCountUp.default ?? ReactCountUp;

export default function StatCounter({ value, suffix = "", prefix = "", label, className = "" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className={className}>
      <div className="font-display bg-gradient-to-br from-white to-white/70 bg-clip-text text-4xl text-transparent sm:text-5xl">
        {prefix}
        {inView ? <CountUp end={value} duration={2.2} separator="," /> : 0}
        {suffix}
      </div>
      {label && <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted sm:text-sm">{label}</p>}
    </div>
  );
}
