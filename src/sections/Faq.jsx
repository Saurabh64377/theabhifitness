import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsPlus } from "react-icons/bs";
import { FAQS, BRAND } from "../constants/siteData";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-pad relative">
      <div className="mx-auto max-w-4xl px-5">
        <SectionHeading
          eyebrow="FAQ"
          title="Got Questions?"
          highlight="We've Got Answers"
          subtitle="Everything you need to know before starting your journey at The Tiger Fitness."
        />

        <div className="mt-12 space-y-4">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} direction="up" delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen ? "border-primary/40 bg-card/60" : "border-line bg-card/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="font-display text-base uppercase tracking-wide sm:text-lg">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                        isOpen ? "border-primary text-primary" : "border-line text-muted"
                      }`}
                    >
                      <BsPlus className="text-lg" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                      >
                        <p className="px-5 pb-6 text-sm leading-relaxed text-muted sm:px-6">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal direction="up" className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-line bg-card/40 p-8 text-center">
          <p className="text-sm text-muted">Still have questions? Our team is happy to help.</p>
          <Button as="a" href={`https://wa.me/${BRAND.phoneRaw}`} target="_blank" rel="noreferrer" variant="outline">
            Chat With Us On WhatsApp
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
