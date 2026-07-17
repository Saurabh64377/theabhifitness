import Reveal from "./Reveal";
import { cn } from "../utils/cn";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";
  return (
    <div className={cn("max-w-2xl", isCenter ? "mx-auto text-center" : "text-left", className)}>
      {eyebrow && (
        <Reveal direction="up" duration={0.5}>
          <span
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_2px_rgba(250,204,21,0.7)]" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.08} duration={0.6}>
        <h2 className="font-display mt-5 text-4xl uppercase leading-[1.05] tracking-wide sm:text-5xl md:text-6xl">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal direction="up" delay={0.16} duration={0.6}>
          <p className={cn("mt-5 text-base leading-relaxed text-muted sm:text-lg", isCenter && "mx-auto")}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
