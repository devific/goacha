"use client";

import { motion, Variants } from "motion/react";
import { useEffect, useState } from "react";
import { MessageCircle, ArrowDown } from "lucide-react";
import { getWhatsAppUrl, IMAGEKIT_BASE_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    },
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
      className="
        relative w-full h-[100svh]
        flex flex-col justify-end items-center
        lg:justify-center lg:items-start
        pb-12 lg:pb-0
        overflow-hidden mobile-section
      "
      data-index={0}
    >
      {/* Background */}
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={`${IMAGEKIT_BASE_URL}/phone-hero.jpg?tr=w-1080,h-1920,fo-auto,q-85`}
        />

        <img
          src={`${IMAGEKIT_BASE_URL}/hero-right.jpg?tr=w-1920,h-1080,fo-auto,q-85`}
          alt="Goacha Kombucha"
          className="
            absolute inset-0
            w-full h-full
            object-cover
            object-center
            lg:object-[right_50px]
          "
          loading="eager"
          referrerPolicy="no-referrer"
        />
      </picture>

      {/* Mobile overlay (same as before) */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#0A0A08] via-[#0A0A08]/10 to-transparent lg:hidden" />

      {/* Desktop overlay */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0A0A08]/88 via-[#0A0A08]/40 to-transparent" />

      {/* Content */}
      <div
        className="
          relative z-10
          w-full
          max-w-[600px]
          lg:max-w-[720px]
          px-6
          lg:px-16
          text-center
          lg:text-left
          flex flex-col
          items-center
          lg:items-start
          pb-8
          lg:pb-0
        "
      >
        {/* Top label */}
        <motion.span
          className="
            font-body
            text-[0.625rem]
            lg:text-[0.7rem]
            tracking-[0.25em]
            lg:tracking-[0.28em]
            uppercase
            text-white
            lg:text-[#F2EDE4]/75
            mb-0
            lg:mb-4
          "
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(4px)",
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }
              : {
                  opacity: 0,
                  y: 10,
                  filter: "blur(4px)",
                }
          }
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: "easeOut",
          }}
        >
          Handcrafted Kombucha
        </motion.span>

        {/* Heading */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="
            font-display
            text-[clamp(1.75rem,4vw,3rem)]
            lg:text-[clamp(3rem,6vw,5.5rem)]
            text-[#F2EDE4]
            mb-2
            lg:mb-5
            flex
            flex-wrap
            justify-center
            lg:justify-start
            lg:leading-[0.95]
          "
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

        {/* Hidden SEO copy */}
        <motion.span
          className="
            font-body
            font-extralight
            text-[0.75rem]
            tracking-[0.28em]
            uppercase
            text-[#F2EDE4]/80
            mb-8
            sr-only
          "
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(4px)",
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }
              : {
                  opacity: 0,
                  y: 10,
                  filter: "blur(4px)",
                }
          }
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: "easeOut",
          }}
        >
          Not soda. Not boring.
        </motion.span>

        {/* Buttons */}
        <motion.div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            lg:items-start
            justify-center
            lg:justify-start
            gap-4
            w-full
          "
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={
            isVisible
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 10,
                }
          }
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: "easeOut",
          }}
        >
          <Button
            asChild
            variant="solid"
            theme="green"
            className="w-full sm:w-auto justify-center"
          >
            <a
              href={getWhatsAppUrl(
                "Hi, I'd like to order some Goacha Kombucha.",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={13} strokeWidth={1.5} />
              Order On Whatsapp
            </a>
          </Button>

          <Button
            onClick={() => {
              const el = document.getElementById("flavors");
              el?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            variant="default"
            theme="brand"
            className="w-full sm:w-auto justify-center"
          >
            Explore Flavours
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          lg:left-16
          lg:translate-x-0
          flex flex-col items-center
        "
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
        }}
      >
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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
