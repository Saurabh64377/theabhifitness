import { BsInstagram, BsHeartFill, BsChatFill } from "react-icons/bs";
import { BRAND, GALLERY_IMAGES } from "../constants/siteData";
import SectionHeading from "../components/SectionHeading";
import { StaggerGroup, StaggerItem } from "../components/Reveal";
import Button from "../components/Button";

const POSTS = GALLERY_IMAGES.slice(0, 6).map((src, i) => ({
  src,
  likes: 120 + i * 37,
  comments: 8 + i * 3,
}));

export default function InstagramFeed() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Follow The Journey"
          title="Join Our"
          highlight="Instagram Community"
          subtitle="Daily training clips, transformation reveals, and gym-floor moments — follow along for extra motivation."
        />

        <StaggerGroup className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {POSTS.map((post, i) => (
            <StaggerItem key={i}>
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl border border-line"
              >
                <img
                  src={post.src}
                  alt="Instagram post from The Tiger Fitness"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/60 group-hover:opacity-100">
                  <div className="flex items-center gap-3 text-xs font-semibold text-white">
                    <span className="flex items-center gap-1"><BsHeartFill /> {post.likes}</span>
                    <span className="flex items-center gap-1"><BsChatFill /> {post.comments}</span>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-10 flex justify-center">
          <Button as="a" href={BRAND.instagram} target="_blank" rel="noreferrer" icon={BsInstagram} variant="outline">
            @thetigerfitness
          </Button>
        </div>
      </div>
    </section>
  );
}
