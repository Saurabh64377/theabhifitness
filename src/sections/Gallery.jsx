import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronLeft, BsChevronRight, BsX, BsZoomIn } from "react-icons/bs";
import { GALLERY_IMAGES } from "../constants/siteData";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import SectionHeading from "../components/SectionHeading";
import { StaggerGroup, StaggerItem } from "../components/Reveal";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;
  useLockBodyScroll(isOpen);

  const next = () => setActiveIndex((i) => (i + 1) % GALLERY_IMAGES.length);
  const prev = () => setActiveIndex((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

  return (
    <section id="gallery" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Gym Gallery"
          title="Take A Look"
          highlight="Inside The Tiger"
          subtitle="A premium training floor built with world-class equipment and an atmosphere that keeps you coming back."
        />

        <StaggerGroup className="mt-14 columns-2 gap-4 sm:columns-3 [&>*]:mb-4">
          {GALLERY_IMAGES.map((src, i) => (
            <StaggerItem key={src} className="break-inside-avoid">
              <button
                onClick={() => setActiveIndex(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-line"
              >
                <img
                  src={src}
                  alt={`The Tiger Fitness gallery ${i + 1}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ aspectRatio: i % 3 === 0 ? "3/4" : "4/5" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white backdrop-blur-sm">
                    <BsZoomIn />
                  </span>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
          >
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-primary hover:text-primary"
              aria-label="Close"
            >
              <BsX className="text-2xl" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-primary hover:text-primary sm:left-8"
              aria-label="Previous image"
            >
              <BsChevronLeft className="text-xl" />
            </button>
            <motion.img
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={GALLERY_IMAGES[activeIndex]}
              alt="Gallery preview"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:border-primary hover:text-primary sm:right-8"
              aria-label="Next image"
            >
              <BsChevronRight className="text-xl" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
