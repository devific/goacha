import { useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import FlavorSection from "@/components/sections/FlavorSection";
import BundlesSection from "@/components/sections/BundlesSection";
import PartnerSection from "@/components/sections/PartnerSection";
import CTAFooterSection from "@/components/sections/CTAFooterSection";
import FlavorSheet from "@/components/FlavorSheet";
import { flavors } from "@/lib/flavorsData";

import { SEO } from "@/components/SEO";

export default function Home() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeFlavor, setActiveFlavor] = useState<number | null>(null);

  const openFlavorInfo = (index: number) => {
    setActiveFlavor(index);
    setSheetOpen(true);
  };

  return (
    <Layout>
      <SEO />

      <section id="hero" className="w-full relative">
        <HeroSection />
      </section>
      <section id="about" className="w-full relative">
        <AboutSection
          onScrollHint={() => {
            const el = document.getElementById("flavors");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </section>
      <section id="stats" className="w-full relative">
        <StatsSection />
      </section>
      <section id="flavors" className="w-full relative">
        <div className="w-full relative">
          <FlavorSection
            flavor={flavors[0]}
            index={0}
            onMoreInfo={() => openFlavorInfo(0)}
          />
        </div>
        <div className="w-full relative">
          <FlavorSection
            flavor={flavors[1]}
            index={1}
            onMoreInfo={() => openFlavorInfo(1)}
          />
        </div>
        <div className="w-full relative">
          <FlavorSection
            flavor={flavors[2]}
            index={2}
            onMoreInfo={() => openFlavorInfo(2)}
          />
        </div>
      </section>
      <section id="bundles" className="w-full relative">
        <BundlesSection />
      </section>
      <section id="stock" className="w-full relative">
        <PartnerSection />
      </section>
      <section className="w-full relative">
        <CTAFooterSection />
      </section>

      {/* ── Flavor Sheet ── */}
      {activeFlavor !== null && (
        <FlavorSheet
          flavor={flavors[activeFlavor]}
          open={sheetOpen}
          onClose={() => setSheetOpen(false)}
        />
      )}
    </Layout>
  );
}
