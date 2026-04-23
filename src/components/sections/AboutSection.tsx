import { motion } from "motion/react";

type Props = {
  onScrollHint?: () => void;
};

export default function AboutSection({ onScrollHint }: Props) {
  return (
    <div
      className="relative w-full min-h-[100svh] py-32 bg-[#FFF8F0] flex items-center justify-center overflow-hidden mobile-section"
      data-index={1}
    >
      {/* Decorative Blobs */}
      <div className="absolute top-[0%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-amber-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-rose-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full px-6 lg:px-12 text-center md:text-left flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
        <div className="flex-1 max-w-lg">
          <motion.div
            className="flex items-center justify-center md:justify-start gap-4 mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-[40px] h-[1px] bg-stone-950/20" />
            <span className="font-body font-extralight text-[0.5625rem] tracking-[0.28em] uppercase text-stone-950/60">
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
            Small Batch.
            <br />
            Big Life.
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
            className="pl-0 md:pl-12 md:border-l border-stone-950/10 font-body font-light text-[0.9375rem] leading-[1.8] text-stone-950/70
              flex flex-col gap-4 md:gap-0 md:space-y-6 text-left"
          >
            <div className="bg-[#FFF8F0]/60 md:bg-transparent border border-stone-950/5 md:border-none p-6 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
              <span className="font-display  text-stone-950/20 text-2xl mb-2 block md:hidden">
                01
              </span>
              <p>
                In a world full of overly sweet sodas and deeply serious "health
                drinks", we wanted to create something entirely different.
                Something undeniably light, refreshing, and easy to reach for
                every single day.
              </p>
            </div>

            <div className="bg-[#FFF8F0]/60 md:bg-transparent border border-stone-950/5 md:border-none p-6 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
              <span className="font-display  text-stone-950/20 text-2xl mb-2 block md:hidden">
                02
              </span>
              <p>
                Crafted right here in Goa in small batches, Goacha is naturally
                fermented, gently fizzy, and brimming with character. But more
                than what's inside the bottle, it's about how it fits into your
                life.
              </p>
            </div>

            <div className="bg-[#FFF8F0]/60 md:bg-transparent border border-stone-950/5 md:border-none p-6 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none">
              <span className="font-display  text-stone-950/20 text-2xl mb-2 block md:hidden">
                03
              </span>
              <p className=" font-medium text-stone-950/90 pt-0 md:pt-4">
                It's what you reach for on a slow afternoon. What you carry to
                the beach. What you sip on when you want something better,
                without overthinking it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
