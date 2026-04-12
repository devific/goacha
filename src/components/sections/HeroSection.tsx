import { motion } from "motion/react";
import { MessageCircle, ArrowDown } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function HeroSection() {
  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-end pb-12 overflow-hidden mobile-section"
      data-index={0}
    >
      <img
        src="https://ik.imagekit.io/devific/goacha/all.png?tr=w-1920,h-1080,fo-auto,q-85"
        alt="Goacha Kombucha"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-[rgba(8,8,6,0.2)]" />
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#0A0A08] via-[#0A0A08]/40 to-transparent" />

      <div className="relative z-10 max-w-[600px] w-full px-6 text-center flex flex-col items-center">
        <motion.span
          className="font-body font-extralight text-[0.625rem] tracking-[0.25em] uppercase text-[#F2EDE4]/90 mb-2 hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Handcrafted Kombucha · Goa
        </motion.span>

        <motion.h1
          className="font-display font-light text-[clamp(2.5rem,6vw,4.5rem)] tracking-[0.12em] uppercase text-[#F2EDE4] leading-[0.9] mb-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
        >
          GOACHA
        </motion.h1>

        <motion.span
          className="font-body font-extralight text-[0.75rem] tracking-[0.28em] uppercase text-[#F2EDE4]/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Raw · Unfiltered · Unpasteurized
        </motion.span>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-goacha mt-3 mb-2 justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 1.1,
          }}
        >
          <MessageCircle size={13} strokeWidth={1.5} />
          Enquire on WhatsApp
        </motion.a>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <span className="font-body font-extralight text-[0.5625rem] tracking-[0.22em] uppercase text-[#F2EDE4]/90 hidden">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown
            size={14}
            className="text-[#F2EDE4]/90"
            strokeWidth={1.5}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
