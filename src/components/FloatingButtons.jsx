import { AnimatePresence, motion } from "framer-motion";
import { BsWhatsapp, BsTelephoneFill, BsArrowUp } from "react-icons/bs";
import { BRAND } from "../constants/siteData";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { useElementVisible } from "../hooks/useElementVisible";

export default function FloatingButtons() {
  const { scrolled } = useScrollProgress();
  const footerVisible = useElementVisible("site-footer", { rootMargin: "0px 0px -10% 0px" });

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.div
      animate={{ opacity: footerVisible ? 0 : 1, scale: footerVisible ? 0.85 : 1 }}
      transition={{ duration: 0.3 }}
      style={{ pointerEvents: footerVisible ? "none" : "auto" }}
      className="fixed bottom-5 right-4 z-65 flex flex-col items-center gap-2.5 sm:bottom-8 sm:right-8 sm:gap-3"
    >
      <AnimatePresence>
        {scrolled && !footerVisible && (
          <motion.button
            key="top"
            onClick={scrollTop}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ y: -4 }}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card/90 text-white shadow-lg backdrop-blur-md hover:border-primary hover:text-primary sm:h-11 sm:w-11"
          >
            <BsArrowUp className="text-base sm:text-lg" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={`tel:${BRAND.phoneRaw}`}
        whileHover={{ y: -4, scale: 1.05 }}
        aria-label="Call the gym"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-accent to-primary text-bg shadow-[0_8px_25px_rgba(249,115,22,0.45)] sm:h-13 sm:w-13"
      >
        <BsTelephoneFill className="text-lg sm:text-xl" />
      </motion.a>

      <motion.a
        href={`https://wa.me/${BRAND.whatsappRaw}?text=Hi! I'd like to know more about ${BRAND.name} membership.`}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -4, scale: 1.05 }}
        aria-label="Chat on WhatsApp"
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] sm:h-14.5 sm:w-14.5"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
        <BsWhatsapp className="relative text-xl sm:text-2xl" />
      </motion.a>
    </motion.div>
  );
}
