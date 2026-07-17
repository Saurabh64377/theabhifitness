import { COUNTER_STATS } from "../constants/siteData";
import { getIcon } from "../utils/iconMap";
import StatCounter from "../components/StatCounter";
import { StaggerGroup, StaggerItem } from "../components/Reveal";

export default function CounterSection() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-gradient-to-r from-card via-bg to-card py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.06),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-5">
        <StaggerGroup className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {COUNTER_STATS.map((stat) => {
            const Icon = getIcon(stat.icon);
            return (
              <StaggerItem key={stat.label} direction="scale" className="flex flex-col items-center text-center">
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xl text-primary">
                  <Icon />
                </span>
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
