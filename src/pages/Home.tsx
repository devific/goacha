import { useFullPageScroll, goTo } from "@/hooks/useFullPageScroll";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FlavorSection from "@/components/sections/FlavorSection";
import CTAFooterSection from "@/components/sections/CTAFooterSection";
import FlavorSheet from "@/components/FlavorSheet";
import { flavors } from "@/lib/flavorsData";

const TOTAL_SECTIONS = 6;

export default function Home() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const { currentSection, goTo } = useFullPageScroll(TOTAL_SECTIONS, sheetOpen);
  const [activeFlavor, setActiveFlavor] = useState<number | null>(null);

  const sections = [
    <HeroSection key="hero" />,
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
    <CTAFooterSection key="cta" />,
  ];

  return (
    <>
      <Navbar goTo={goTo} />

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
      <div className="w-full h-screen overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
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
