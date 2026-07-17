import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "../constants/siteData";
import { getIcon } from "../utils/iconMap";
import SectionHeading from "../components/SectionHeading";
import { StaggerGroup, StaggerItem } from "../components/Reveal";

export default function WhyChooseUs() {
  return (
    <section className="section-pad relative bg-bg-soft">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Everything You Need To"
          highlight="Train Like A Pro"
          subtitle="From elite coaching to premium amenities, every detail at The Tiger Fitness is designed to keep you consistent, comfortable, and progressing."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card/60 p-6"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(250,204,21,0.12),transparent_70%)]" />
                  <div className="relative">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-2xl text-primary transition-transform duration-500 group-hover:scale-110">
                      <Icon />
                    </span>
                    <h3 className="font-display mt-4 text-lg uppercase tracking-wide">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
