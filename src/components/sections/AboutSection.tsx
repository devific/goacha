import { motion } from "motion/react";

type Props = {
  onScrollHint?: () => void;
};

export default function AboutSection({ onScrollHint }: Props) {
  return (
    <div
      className="relative w-full h-full bg-stone-950 flex items-center justify-center overflow-hidden mobile-section"
      data-index={1}
    >
      <div className="max-w-3xl w-full px-4 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[40px] h-[1px] bg-stone-100/35" />
          <span className="font-body font-extralight text-[0.5625rem] tracking-[0.28em] uppercase text-stone-100/70">
            About
          </span>
          <div className="w-[40px] h-[1px] bg-stone-100/35" />
        </motion.div>

        <motion.h2
          className="font-display italic font-light text-[clamp(1.75rem,4vw,3rem)] text-stone-100 leading-[1.1] mb-8 flex justify-center flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {"Small Batch. Big Life.".split(" ").map((word, i) => (
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
          className="font-body font-light text-sm leading-[1.85] text-stone-100/65 max-w-xl mb-8 space-y-2"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <p>
            Goacha was born out of a simple idea, drinks should make you feel as
            good as they taste.
          </p>
          <p>
            In a world full of overly sweet sodas and overly serious "health
            drinks", we wanted to create something different. Something light,
            refreshing, and easy to come back to every day.
          </p>
          <p>
            Crafted in Goa in small batches, Goacha is naturally fermented,
            gently fizzy, and full of character. But more than what's inside the
            bottle, Goacha is about how it fits into your life.
          </p>
          <p>
            It's what you reach for on a slow afternoon. What you carry to the
            beach. What you sip on when you want something better, without
            overthinking it.
          </p>
          <p className="font-medium text-stone-100/80">
            Brewed in Goa. Made for your everyday moments.
          </p>
        </motion.div>

        <motion.div
          className="w-[40px] h-[1px] bg-stone-100/20 max-md:hidden my-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <div className="flex flex-row items-center justify-center gap-12">
          {[
            { num: "3", label: "Flavours" },
            { num: "100%", label: "Raw & Live" },
            { num: "Goa", label: "Origin" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.08 }}
            >
              <span className="font-display italic font-light text-[1.75rem] text-stone-100">
                {stat.num}
              </span>
              <span className="font-body font-light text-[0.5625rem] tracking-[0.2em] uppercase text-stone-100/80">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
