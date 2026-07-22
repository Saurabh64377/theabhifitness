import { BsGeoAltFill, BsClockFill, BsTelephoneFill } from "react-icons/bs";
import { BRAND } from "../constants/siteData";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function LocationMap() {
  return (
    <section className="section-pad relative bg-bg-soft">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-8 rounded-3xl border border-line bg-card/40 p-4 lg:grid-cols-5 lg:p-6">
          <Reveal direction="left" className="overflow-hidden rounded-2xl lg:col-span-3">
            <iframe
              title="THE ABHI FITNESS location"
              src={BRAND.mapEmbedUrl}
              className="h-80 w-full grayscale-[40%] contrast-125 lg:h-full lg:min-h-[420px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Reveal direction="right" delay={0.1} className="flex flex-col justify-center gap-6 p-4 lg:col-span-2 lg:p-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Find Us</span>
              <h3 className="font-display mt-2 text-3xl uppercase tracking-wide">Visit THE ABHI FITNESS</h3>
            </div>
            <div className="flex items-start gap-3 text-sm text-muted">
              <BsGeoAltFill className="mt-0.5 shrink-0 text-primary" />
              {BRAND.address}
            </div>
            <div className="space-y-2">
              {BRAND.hours.map((h) => (
                <div key={h.day} className="flex items-start gap-3 text-sm text-muted">
                  <BsClockFill className="mt-0.5 shrink-0 text-primary" />
                  <span>
                    <span className="text-white/85">{h.day}:</span> {h.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 text-sm text-muted">
              <BsTelephoneFill className="shrink-0 text-primary" />
              <a href={`tel:${BRAND.phoneRaw}`} className="text-white/85 hover:text-primary">{BRAND.phone}</a>
            </div>
            <Button as="a" href={`https://wa.me/${BRAND.whatsappRaw}`} target="_blank" rel="noreferrer" className="w-fit">
              Get Directions
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
