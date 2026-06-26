import { IMAGEKIT_BASE_URL } from "@/lib/constants";

const brandCount = 40;
const brandImages = Array.from(
  { length: brandCount },
  (_, i) => `${IMAGEKIT_BASE_URL}/brands/${i}.png`,
);

function BrandsSection() {
  // Duplicate images for seamless looping
  const images = [...brandImages, ...brandImages];
  return (
    <section className="w-full pt-20 bg-pale-yellow flex flex-col items-center overflow-hidden">
      <h2 className="flex items-center gap-4 mb-8 md:mb-10">
        <div className="w-7.5 h-px bg-stone-950/20" />
        <span className="font-body text-xs tracking-[0.28em] uppercase text-stone-950/50">
          Find Goacha Here
        </span>
        <div className="w-7.5 h-px bg-stone-950/20" />
      </h2>
      <div className="marquee">
        <div className="marquee__inner">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Brand ${idx % brandCount}`}
              className="brand-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsSection;
