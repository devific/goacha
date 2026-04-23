import { motion } from "motion/react";
import { MessageCircle, Check } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function PartnerSection() {
  return (
    <div
      className="relative w-full py-32 bg-[#F8F5FA] flex items-center justify-center overflow-hidden mobile-section"
      data-index={6}
    >
      {/* Decorative Blobs */}
      <div className="absolute top-[-20%] left-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-fuchsia-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] bg-purple-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full px-6 lg:px-12 text-center md:text-left flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 relative z-10">
        {/* Left Column */}
        <div className="flex-1 max-w-lg md:mt-2">
          <motion.div
            className="flex items-center justify-center md:justify-start gap-4 mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-[40px] h-[1px] bg-stone-950/20" />
            <span className="font-body font-extralight text-[0.5625rem] tracking-[0.28em] uppercase text-stone-950/60">
              Partner With Us
            </span>
            <div className="w-[40px] h-[1px] bg-stone-950/20 md:hidden" />
          </motion.div>

          <motion.h2
            className="font-display italic font-light text-[clamp(2.5rem,5vw,4rem)] text-stone-950 leading-[1.05] mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Stock Goacha.
            <br className="hidden md:block" /> Bring the Brew.
          </motion.h2>

          <motion.p
            className="font-body font-medium text-[1.05rem] md:text-lg text-stone-950/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the growing list of cafés, restaurants, and outlets that serve
            Goacha.
          </motion.p>
        </div>

        {/* Right Column */}
        <motion.div
          className="flex-1 w-full mt-6 md:mt-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* 
            Desktop: standard stacked text with vertical border
            Mobile: vertically stacked cards
          */}
          <div
            className="pl-0 md:pl-12 md:border-l border-stone-950/10 font-body font-light text-[0.9375rem] leading-[1.8] text-stone-950/70
              flex flex-col gap-4 md:gap-0 md:space-y-6 text-left"
          >
            <div className="bg-[#F8F5FA]/60 md:bg-transparent border border-stone-950/5 md:border-none p-6 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
              <span className="font-display italic text-stone-950/20 text-2xl mb-2 block md:hidden">
                01
              </span>
              <p>
                If you're looking to offer something refreshing, easy to drink,
                and genuinely different; Goacha fits right in. We partner with
                curated stores and menus across Goa.
              </p>
            </div>

            <div className="bg-[#F8F5FA]/60 md:bg-transparent border border-stone-950/5 md:border-none p-6 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
              <span className="font-display italic text-stone-950/20 text-2xl mb-4 block md:hidden">
                02
              </span>

              <div className="flex flex-col gap-3">
                {[
                  "Strong repeat demand",
                  "Balanced flavours (not too sour)",
                  "Premium product with approachable pricing",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-stone-950/80 mt-1 shrink-0"
                    />
                    <span className="font-body font-light text-[0.9375rem] text-stone-950/80">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F8F5FA]/60 md:bg-transparent border border-stone-950/5 md:border-none p-6 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none flex flex-col md:pt-4">
              <p className="font-body font-medium text-stone-950/90 mb-6 italic">
                Now available in 45+ outlets and growing. Reach out for
                wholesale pricing.
              </p>

              <a
                href={getWhatsAppUrl(
                  "Hi, I'm interested in partnering with Goacha for wholesale.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-goacha !bg-stone-950 !text-[#F8F5FA] !border-stone-950 hover:!bg-stone-950/80 md:max-w-[280px] w-full justify-center py-3.5 text-[0.75rem]"
              >
                <MessageCircle size={14} strokeWidth={1.5} className="mr-2" />
                Enquire for Wholesale
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
