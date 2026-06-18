import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import type { Flavor } from "@/lib/flavorsData";
import { getWhatsAppUrl } from "@/lib/constants";
import { Button } from "@/components/ui/button";

type Props = {
  flavor: Flavor;
  onMoreInfo: () => void;
  index: number;
};

export default function FlavorSection({ flavor, onMoreInfo, index }: Props) {
  const viewport = {
    once: true,
    amount: 0.05,
  };

  return (
    <div
      className="relative w-full h-full min-h-[100svh] flex flex-col items-center justify-end pb-10 overflow-hidden mobile-section bg-stone-950"
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

      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent" />

      <div className="relative z-10 max-w-md w-full px-6 text-center flex flex-col items-center">
        <motion.h2
          className="font-display text-[clamp(2rem,4.5vw,3.5rem)] text-stone-100 leading-[1.0] mb-4 flex justify-center flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.02,
                delayChildren: 0,
              },
            },
          }}
        >
          {flavor.name.split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 12,
                  filter: "blur(4px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.22,
                    ease: "easeOut",
                  },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.span
          className="font-body font-extralight text-[0.75rem] tracking-[0.22em] uppercase text-stone-100 mb-2 block"
          initial={{
            opacity: 0,
            y: 6,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={viewport}
          transition={{
            duration: 0.35,
            delay: 0.05,
          }}
        >
          {flavor.subtitle}
        </motion.span>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full">
          <Button asChild variant="solid" theme="green">
            <motion.a
              href={getWhatsAppUrl(
                `Hi, I'd like to order the ${flavor.name} kombucha.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-goacha w-full sm:w-auto justify-center"
              initial={{
                opacity: 0,
                scale: 0.98,
                y: 6,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={viewport}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
                delay: 0.1,
              }}
            >
              <MessageCircle size={13} strokeWidth={1.5} className="mr-2" />
              Order on WhatsApp
            </motion.a>
          </Button>

          <Button asChild variant="default" theme="brand">
            <motion.button
              onClick={onMoreInfo}
              className="btn-goacha w-full sm:w-auto justify-center"
              initial={{
                opacity: 0,
                scale: 0.98,
                y: 6,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={viewport}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
                delay: 0.15,
              }}
            >
              More Info
            </motion.button>
          </Button>
        </div>
      </div>
    </div>
  );
}
