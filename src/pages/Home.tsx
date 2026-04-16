import { useFullPageScroll } from "@/hooks/useFullPageScroll";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FlavorSection from "@/components/sections/FlavorSection";
import BundlesSection from "@/components/sections/BundlesSection";
import PartnerSection from "@/components/sections/PartnerSection";
import CTAFooterSection from "@/components/sections/CTAFooterSection";
import FlavorSheet from "@/components/FlavorSheet";
import { flavors } from "@/lib/flavorsData";

const TOTAL_SECTIONS = 8;

export default function Home() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const { currentSection, goTo } = useFullPageScroll(TOTAL_SECTIONS, sheetOpen);
  const [activeFlavor, setActiveFlavor] = useState<number | null>(null);

  const [prevSection, setPrevSection] = useState(0);
  const [direction, setDirection] = useState(0);

  if (currentSection !== prevSection) {
    setDirection(currentSection > prevSection ? 1 : -1);
    setPrevSection(currentSection);
  }

  const sections = [
    <HeroSection key="hero" goTo={goTo} />,
    <AboutSection key="about" onScrollHint={() => goTo(2)} />,
    <FlavorSection
      key="gh"
      flavor={flavors[0]}
      index={0}
      onMoreInfo={() => {
        setActiveFlavor(0);
        setSheetOpen(true);
      }}
    />,
    <FlavorSection
      key="rr"
      flavor={flavors[1]}
      index={1}
      onMoreInfo={() => {
        setActiveFlavor(1);
        setSheetOpen(true);
      }}
    />,
    <FlavorSection
      key="ib"
      flavor={flavors[2]}
      index={2}
      onMoreInfo={() => {
        setActiveFlavor(2);
        setSheetOpen(true);
      }}
    />,
    <BundlesSection key="bundles" />,
    <PartnerSection key="partner" />,
    <CTAFooterSection key="cta" />,
  ];

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "100%" : "-100%",
    }),
    center: {
      y: 0,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
    }),
  };

  return (
    <>
      <Navbar
        goTo={goTo}
        totalSections={TOTAL_SECTIONS}
        currentSection={currentSection}
      />

      {/* ── Section dot indicators (right side, Jaja-style) ── */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2.5">
        {Array.from({ length: TOTAL_SECTIONS }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="size-2 rounded-full transition-all duration-300 border-none cursor-pointer p-0"
            style={{
              background:
                i === currentSection ? "#F2EDE4" : "rgba(242,237,228,0.25)",
              transform: i === currentSection ? "scale(1.5)" : "scale(1)",
            }}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Full-page container ── */}
      <div className="w-full h-svh overflow-hidden relative bg-stone-950">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSection}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="w-full h-full absolute inset-0"
          >
            {sections[currentSection]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Flavor Sheet ── */}
      {activeFlavor !== null && (
        <FlavorSheet
          flavor={flavors[activeFlavor]}
          open={sheetOpen}
          onClose={() => setSheetOpen(false)}
        />
      )}
    </>
  );
}
