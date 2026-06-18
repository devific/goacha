import { motion } from "motion/react";

type Props = {
  onScrollHint?: () => void;
};

export default function AboutSection({ onScrollHint }: Props) {
  return (
    <div
      className="relative w-full min-h-[100svh] py-32 bg-pale-yellow flex items-center justify-center overflow-hidden mobile-section"
      data-index={1}
    >
      {/* Decorative Blobs */}
      <div className="absolute top-[-20%] left-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full px-6 lg:px-12 text-left flex flex-col md:flex-row gap-10 md:gap-16 relative z-10">
        <div className="flex-1 max-w-lg">
          <motion.div
            className="flex items-center  justify-start gap-4 mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-[40px] h-[1px] bg-stone-950/20" />
            <span className="font-body font-extralight text-lg tracking-[0.28em] text-black uppercase">
              About The Brew
            </span>
            <div className="w-[40px] h-[1px] bg-stone-950/20 md:hidden" />
          </motion.div>

          <motion.h2
            className="font-display text-[clamp(2.5rem,5vw,4rem)] text-stone-950 leading-[1.05] mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Small Batch
            <br />
            Raw & Unpasteurized
          </motion.h2>

          <motion.p
            className="font-body font-medium text-[1.05rem] md:text-lg text-stone-950/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Goacha was born out of a simple idea: drinks should make you feel as
            good as they taste.
          </motion.p>
        </div>

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
            className="pl-0 md:pl-12 md:border-l border-stone-950/10 font-body text-[0.9375rem] leading-[1.8] 
                flex flex-col gap-4 md:gap-0 md:space-y-6 text-left font-medium text-stone-950/90"
          >
            <p>
              In a world full of overly sweet sodas and deeply serious "health
              drinks", we wanted to create something entirely different.
              Something undeniably light, refreshing, and easy to reach for
              every single day.
            </p>

            <p>
              Crafted right here in Goa in small batches, Goacha is naturally
              fermented, gently fizzy, and brimming with character. But more
              than what's inside the bottle, it's about how it fits into your
              life.
            </p>

            <p className=" pt-0 md:pt-4">
              It's what you reach for on a slow afternoon. What you carry to the
              beach. What you sip on when you want something better, without
              overthinking it.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
