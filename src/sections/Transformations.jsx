import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BsStarFill, BsQuote, BsArrowRight } from "react-icons/bs";
import { TRANSFORMATIONS, TESTIMONIALS } from "../constants/siteData";
import SectionHeading from "../components/SectionHeading";
import Reveal, { StaggerGroup, StaggerItem } from "../components/Reveal";

export default function Transformations() {
  return (
    <section id="results" className="section-pad relative bg-bg-soft">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Success Stories"
          title="Real Members,"
          highlight="Real Transformations"
          subtitle="These results were built through consistency, coaching, and a plan that actually fits real life."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TRANSFORMATIONS.map((t) => (
            <StaggerItem key={t.name}>
              <div className="overflow-hidden rounded-3xl border border-line bg-card/60">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={t.before} alt={`${t.name} before`} className="h-56 w-full object-cover grayscale" loading="lazy" />
                    <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                      Before
                    </span>
                  </div>
                  <div className="relative">
                    <img src={t.after} alt={`${t.name} after`} className="h-56 w-full object-cover" loading="lazy" />
                    <span className="absolute bottom-2 right-2 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-bg">
                      After
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h4 className="font-display text-lg uppercase tracking-wide">{t.name}</h4>
                    <p className="text-xs text-muted">{t.duration} Transformation</p>
                  </div>
                  <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">
                    {t.result} <BsArrowRight className="text-[10px]" />
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal direction="up" delay={0.1} className="mt-20">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true, el: ".testimonial-pagination" }}
            breakpoints={{ 768: { slidesPerView: 2 } }}
          >
            {TESTIMONIALS.map((review) => (
              <SwiperSlide key={review.name} className="!h-auto pb-4">
                <div className="relative flex h-full flex-col rounded-3xl border border-line bg-card/60 p-7">
                  <BsQuote className="text-3xl text-primary/40" />
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/85">{review.text}</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                    <img src={review.image} alt={review.name} className="h-11 w-11 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="text-sm font-semibold text-white">{review.name}</p>
                      <p className="text-xs text-primary">{review.result}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <BsStarFill key={i} className="text-xs text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-pagination mt-8 flex justify-center gap-2" />
        </Reveal>
      </div>
    </section>
  );
}
