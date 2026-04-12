import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import type { Flavor } from "@/lib/flavorsData";
import { WHATSAPP_URL } from "@/lib/constants";
import { useEffect, useState } from "react";

type Props = {
  flavor: Flavor;
  onMoreInfo: () => void;
  index: number;
};

export default function FlavorSection({ flavor, onMoreInfo, index }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-end pb-10 overflow-hidden mobile-section"
      data-index={index + 2}
    >
      <picture>
        <source media="(max-width: 768px)" srcSet={flavor.imageMobile} />
        <img
          src={flavor.image}
          alt={flavor.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </picture>

      <div
        className="absolute inset-0"
        style={{ backgroundColor: flavor.overlayColor }}
      />
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#0A0A08] via-[#0A0A08]/50 to-transparent" />

      <div className="relative z-10 max-w-[480px] w-full px-6 text-center flex flex-col items-center">
        <span className="font-body font-extralight text-[0.5rem] tracking-[0.3em] uppercase text-[#F2EDE4]/90 mb-2">
          0{index + 1}
        </span>

        <motion.h2
          className="font-display font-light text-[clamp(2rem,5vw,3.5rem)] tracking-[0.08em] uppercase text-[#F2EDE4] leading-[0.9] mb-1"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {flavor.name}
        </motion.h2>

        <motion.span
          className="font-body font-extralight text-[0.75rem] tracking-[0.22em] uppercase text-[#F2EDE4] mb-4 block"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {flavor.subtitle}
        </motion.span>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full">
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-goacha btn-goacha-solid w-full sm:w-auto justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4,
            }}
          >
            <MessageCircle size={13} strokeWidth={1.5} />
            Enquire Now
          </motion.a>

          <motion.button
            onClick={onMoreInfo}
            className="btn-goacha w-full sm:w-auto justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.5,
            }}
          >
            More Info
          </motion.button>
        </div>
      </div>
    </div>
  );
}
