import { motion } from "motion/react";
import { AnimatedNumber } from "@/components/animations/AnimatedNumber";
import { AnimatedText } from "@/components/animations/AnimatedText";

const stats = [
  { type: "percentage", value: 100, label: "Real Ingredients" },
  { type: "fade", value: 0, label: "Artificial Flavours" },
  { type: "number", value: 3, label: "Unique Flavours" },
  { type: "text", value: "GOA", label: "Brewed & Bottled" },
];

export default function StatsSection() {
  return (
    <div
      className="relative w-full py-20 bg-stone-950 flex flex-col items-center justify-center overflow-hidden mobile-section border-t border-stone-800"
      data-index={2}
    >
      <div className="max-w-6xl w-full px-6 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 lg:gap-16 justify-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center gap-2 md:gap-3 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              delay: 0.2 + i * 0.1,
            }}
          >
            <span className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-[#FFF8F0] flex items-center justify-center">
              {stat.type === "percentage" && (
                <AnimatedNumber value={100} suffix="%" />
              )}

              {stat.type === "number" && <AnimatedNumber value={3} />}

              {stat.type === "fade" && (
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2,
                    ease: "linear",
                  }}
                >
                  0
                </motion.span>
              )}

              {stat.type === "text" && (
                <AnimatedText text={String(stat.value)} />
              )}
            </span>

            <span className="font-body font-bold text-[0.6rem] sm:text-[0.65rem] md:text-xs tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase text-[#FFF8F0]/70">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
