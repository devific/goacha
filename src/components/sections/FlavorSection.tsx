import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import type { Flavor } from "@/lib/flavorsData";
import { getWhatsAppUrl } from "@/lib/constants";
import { useEffect, useState } from "react";

type Props = {
  flavor: Flavor;
  onMoreInfo: () => void;
  index: number;
};

export default function FlavorSection({ flavor, onMoreInfo, index }: Props) {
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
        <span className="font-body font-extralight text-[0.5rem] tracking-[0.3em] uppercase text-stone-100/80 mb-2">
          0{index + 1}
        </span>

        <motion.h2
          className="font-display text-[clamp(2rem,4.5vw,3.5rem)] text-stone-100 leading-[1.0] mb-4 flex justify-center flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {flavor.name.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.span
          className="font-body font-extralight text-[0.75rem] tracking-[0.22em] uppercase text-stone-100 mb-2 block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {flavor.subtitle}
        </motion.span>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full">
          <motion.a
            href={getWhatsAppUrl(
              `Hi, I'd like to order the ${flavor.name} kombucha.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-goacha btn-goacha-solid w-full sm:w-auto justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4,
            }}
          >
            <MessageCircle size={13} strokeWidth={1.5} className="mr-2" />
            Order on WhatsApp
          </motion.a>

          <motion.button
            onClick={onMoreInfo}
            className="btn-goacha w-full sm:w-auto justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
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
