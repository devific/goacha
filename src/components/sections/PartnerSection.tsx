import { motion } from "motion/react";
import { MessageCircle, Check } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function PartnerSection() {
  return (
    <div
      className="relative w-full h-full bg-stone-950 flex items-center justify-center overflow-hidden mobile-section px-6"
      data-index={6}
    >
      <div className="max-w-2xl w-full text-center flex flex-col items-center">
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[30px] h-[1px] bg-stone-100/30" />
          <span className="font-body text-xs tracking-[0.28em] uppercase text-stone-100/70">
            Partner With Us
          </span>
          <div className="w-[30px] h-[1px] bg-stone-100/30" />
        </motion.div>

        <motion.h2
          className="font-display italic font-light text-[clamp(2rem,4.5vw,3.5rem)] text-stone-100 leading-[1.1] mb-6 flex justify-center flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {"Stock Goacha".split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          className="font-body font-light text-[0.9375rem] leading-[1.85] text-stone-100/65 max-w-xl mb-8 space-y-4"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <p>
            We partner with cafés, restaurants, bars, and retail stores across
            Goa.
          </p>
          <p>
            If you're looking to offer something refreshing, easy to drink, and
            genuinely different; Goacha fits right in.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3 mb-10 text-left w-full max-w-[320px] bg-white/10 rounded p-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            "Strong repeat demand",
            "Balanced flavours (not too sour)",
            "Premium product with approachable pricing",
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check size={16} className="text-green-500/50 mt-1 shrink-0" />
              <span className="font-body font-light text-sm text-stone-100/80">
                {point}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="font-body font-medium text-sm text-stone-100/90 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Now available in 45+ outlets and growing.
        </motion.p>

        <motion.a
          href={getWhatsAppUrl(
            "Hi, I'm interested in partnering with Goacha for wholesale.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-goacha btn-goacha-solid px-10 py-3.5 text-[0.75rem]"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 1.1,
          }}
        >
          <MessageCircle size={14} strokeWidth={1.5} className="mr-2" />
          Enquire for Wholesale
        </motion.a>
      </div>
    </div>
  );
}
