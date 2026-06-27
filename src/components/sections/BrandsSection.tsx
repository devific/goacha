import { IMAGEKIT_BASE_URL } from "@/lib/constants";

const brandCount = 40;
const brandImages = Array.from(
  { length: brandCount },
  (_, i) => `${IMAGEKIT_BASE_URL}/brands/${i}.png`,
);

function BrandsMarqueeSection() {
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

function BrandsSection() {
  return (
    <section className="w-full pt-20 bg-pale-yellow flex flex-col items-center overflow-hidden">
      <h2 className="flex items-center gap-4 mb-8 md:mb-10">
        <div className="w-7.5 h-px bg-stone-950/20" />
        <span className="font-body text-xs tracking-[0.28em] uppercase text-stone-950/50">
          Find Goacha Here
        </span>
        <div className="w-7.5 h-px bg-stone-950/20" />
      </h2>
      <div className="w-full overflow-hidden px-4 py-10 ">
        <img
          src={`${IMAGEKIT_BASE_URL}/partners-mobile.png`}
          alt="Partners"
          className="w-full h-auto md:hidden max-w-sm mx-auto"
        />
        <img
          src={`${IMAGEKIT_BASE_URL}/partners-desktop.png`}
          alt="Partners"
          className="w-full h-auto max-md:hidden max-w-5xl mx-auto"
        />
      </div>
    </section>
  );
}

export default BrandsSection;
