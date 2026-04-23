"use client";

import { motion, Variants } from "motion/react";
import { useEffect, useState } from "react";
import { MessageCircle, ArrowDown } from "lucide-react";
import { getWhatsAppUrl, IMAGEKIT_BASE_URL } from "@/lib/constants";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Parent container for stagger animation
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
      },
    },
  };

  // Each word animation
  const child: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div
      className="relative w-full h-[100svh] flex flex-col items-center justify-end pb-12 overflow-hidden mobile-section"
      data-index={0}
    >
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={`${IMAGEKIT_BASE_URL}/all-phone.png?tr=w-1080,h-1920,fo-auto,q-85`}
        />
        <img
          src={`${IMAGEKIT_BASE_URL}/all-desktop.png?tr=w-1920,h-1080,fo-auto,q-85`}
          alt="Goacha Kombucha"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </picture>

      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#0A0A08] via-[#0A0A08]/10 to-transparent" />

      <div className="relative z-10 max-w-[600px] w-full px-6 text-center flex flex-col items-center pb-8">
        {/* Top label */}
        <motion.span
          className="font-body font-extralight text-[0.625rem] tracking-[0.25em] uppercase text-[#F2EDE4]/90"
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={
            isVisible
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 10, filter: "blur(4px)" }
          }
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          Handcrafted Kombucha
        </motion.span>

        {/* Fixed heading animation */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="font-display  text-[clamp(1.75rem,4vw,3rem)] text-[#F2EDE4] mb-2 flex justify-center"
        >
          {"Not Soda. Not Boring.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={child}
              className="inline-block mr-[0.35em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.span
          className="font-body font-extralight text-[0.75rem] tracking-[0.28em] uppercase text-[#F2EDE4]/80 mb-8 sr-only"
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={
            isVisible
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 10, filter: "blur(4px)" }
          }
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          Not soda. Not boring.
        </motion.span>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          <a
            href={getWhatsAppUrl("Hi, I'd like to order some Goacha Kombucha.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-goacha btn-goacha-solid w-full sm:w-auto justify-center"
          >
            <MessageCircle size={13} strokeWidth={1.5} />
            Order On Whatsapp
          </a>

          <button
            onClick={() => {
              const el = document.getElementById("flavors");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-goacha w-full sm:w-auto justify-center"
          >
            Explore Flavours
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown
            size={14}
            className="text-[#F2EDE4]/70"
            strokeWidth={1.5}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
