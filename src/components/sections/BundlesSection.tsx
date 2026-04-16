import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { WHATSAPP_URL, IMAGEKIT_BASE_URL } from "@/lib/constants";
import { useState } from "react";

const bundles = [
  {
    name: "Starter Pack",
    number: "All 3 flavours",
    description: "Perfect to try",
    image: `${IMAGEKIT_BASE_URL}/bundle-3.png`,
  },
  {
    name: "Weekly Pack",
    number: "6 bottles",
    description: "Your everyday refresh",
    image: `${IMAGEKIT_BASE_URL}/bundle-6.png`,
  },
  {
    name: "Party Pack",
    number: "12 bottles",
    description: "Made for sharing",
    image: `${IMAGEKIT_BASE_URL}/bundle-12.png`,
  },
];

export default function BundlesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextBundle = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % bundles.length);
  };

  const prevBundle = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + bundles.length) % bundles.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <div
      className="relative w-full h-full bg-stone-950 flex flex-col items-center justify-center overflow-hidden mobile-section px-6"
      data-index={5}
    >
      <div className="max-w-6xl w-full flex flex-col items-center">
        <motion.div
          className="flex items-center gap-4 mb-8 md:mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[30px] h-[1px] bg-stone-100/30" />
          <span className="font-body text-xs tracking-[0.28em] uppercase text-stone-100/70">
            Bundles
          </span>
          <div className="w-[30px] h-[1px] bg-stone-100/30" />
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 w-full">
          {bundles.map((bundle, i) => (
            <motion.div
              key={bundle.name}
              className="flex flex-col items-center text-center bg-stone-900/40 border border-stone-100/10 p-8 rounded-sm group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
            >
              <div className="w-full aspect-square mb-6 bg-stone-900/50 rounded-sm overflow-hidden relative">
                <img
                  src={`${bundle.image}?tr=w-400,fo-auto,q-80`}
                  alt={bundle.name}
                  className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback for placeholder
                    (e.target as HTMLImageElement).src =
                      `https://picsum.photos/seed/${bundle.name.replace(" ", "")}/600/600?blur=2`;
                  }}
                />
              </div>
              <h3 className="font-display italic font-light text-2xl text-stone-100 mb-2">
                {bundle.name}
              </h3>
              <p className="font-body font-light text-sm text-stone-100/60 mb-6 flex-1">
                {bundle.number} &middot; {bundle.description}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-goacha w-full justify-center text-xs py-3"
              >
                <MessageCircle size={14} strokeWidth={1.5} className="mr-2" />
                Order on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="flex md:hidden relative w-full items-center justify-center px-8">
          <button
            onClick={prevBundle}
            className="absolute left-0 z-20 p-1 text-stone-100/50 hover:text-stone-100"
            aria-label="Previous bundle"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="w-full relative overflow-hidden rounded-sm bg-stone-900/40 border border-stone-100/10">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col items-center text-center p-6 w-full"
              >
                <div className="w-full aspect-square mb-4 bg-stone-900/50 rounded-sm overflow-hidden relative">
                  <img
                    src={`${bundles[currentIndex].image}?tr=w-400,fo-auto,q-80`}
                    alt={bundles[currentIndex].name}
                    className="w-full h-full object-cover opacity-80 grayscale transition-all duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://picsum.photos/seed/${bundles[currentIndex].name.replace(" ", "")}/600/600?blur=2`;
                    }}
                  />
                </div>
                <h3 className="font-display italic font-light text-xl text-stone-100 mb-1">
                  {bundles[currentIndex].name}
                </h3>
                <p className="font-body font-light text-xs text-stone-100/60 mb-4 flex-1">
                  {bundles[currentIndex].number} &middot;{" "}
                  {bundles[currentIndex].description}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-goacha w-full justify-center text-xs py-2.5"
                >
                  <MessageCircle size={14} strokeWidth={1.5} className="mr-2" />
                  Order
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={nextBundle}
            className="absolute right-0 z-20 p-1 text-stone-100/50 hover:text-stone-100"
            aria-label="Next bundle"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}
