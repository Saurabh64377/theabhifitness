import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BsInstagram, BsStarFill } from "react-icons/bs";
import { TRAINERS } from "../constants/siteData";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Trainers() {
  return (
    <section id="trainers" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Meet Your Coaches"
          title="Trained By The"
          highlight="Best In The Game"
          subtitle="Certified, experienced, and genuinely invested in your progress — our coaching team is what sets THE ABHI FITNESS apart."
        />
      </div>

      <Reveal direction="up" delay={0.15} className="trainer-swiper mt-14">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1.1}
          centeredSlides={false}
          autoplay={{ delay: 3800, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".trainer-pagination" }}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4 },
          }}
          className="!px-4 sm:!px-8"
        >
          {TRAINERS.map((trainer) => (
            <SwiperSlide key={trainer.name} className="!h-auto pb-4">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-card/60">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <a
                    href={trainer.instagram}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-primary hover:text-bg"
                    aria-label={`${trainer.name} on Instagram`}
                  >
                    <BsInstagram />
                  </a>
                  <span className="absolute bottom-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-bg">
                    {trainer.experience}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl uppercase tracking-wide">{trainer.name}</h3>
                  <p className="text-sm font-medium text-primary">{trainer.role}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted">{trainer.specialization}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{trainer.bio}</p>
                  <div className="mt-4 space-y-1.5 border-t border-line pt-4">
                    {trainer.achievements.map((a) => (
                      <div key={a} className="flex items-center gap-2 text-xs text-white/75">
                        <BsStarFill className="text-primary" />
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="trainer-pagination mt-8 flex justify-center gap-2" />
      </Reveal>
    </section>
  );
}
