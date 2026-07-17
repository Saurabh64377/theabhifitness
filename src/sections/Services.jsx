import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { SERVICES } from "../constants/siteData";
import { getIcon } from "../utils/iconMap";
import SectionHeading from "../components/SectionHeading";
import { StaggerGroup, StaggerItem } from "../components/Reveal";

export default function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Our Services"
          title="Programs Engineered For"
          highlight="Every Goal"
          subtitle="Whatever your target — strength, fat loss, performance, or longevity — we have a program built specifically for it."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover="hover"
                  className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card/60 p-7 transition-colors duration-500 hover:border-primary/40"
                >
                  <motion.div
                    variants={{ hover: { scale: 1.4, opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl"
                  />
                  <div className="relative flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-2xl text-bg shadow-[0_10px_25px_rgba(250,204,21,0.25)]">
                      <Icon />
                    </span>
                    <motion.span
                      variants={{ hover: { rotate: 45, opacity: 1 } }}
                      initial={{ opacity: 0.3 }}
                      className="text-xl text-primary"
                    >
                      <BsArrowUpRight />
                    </motion.span>
                  </div>
                  <h3 className="font-display relative mt-6 text-2xl uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted">{service.desc}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
