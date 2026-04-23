import { motion } from "motion/react";

export default function StatsSection() {
  return (
    <div
      className="relative w-full py-20 bg-stone-950 flex flex-col items-center justify-center overflow-hidden mobile-section border-t border-stone-800"
      data-index={2}
    >
      <div className="max-w-6xl w-full px-6 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 lg:gap-16 justify-center">
        {[
          { num: "100%", label: "Real Ingredients" },
          { num: "0", label: "Artificial Flavours" },
          { num: "3", label: "Unique Flavours" },
          { num: "GOA", label: "Brewed & Bottled" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex flex-col items-center gap-2 md:gap-3 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
          >
            <span className="font-display  font-medium text-4xl sm:text-5xl lg:text-6xl text-[#FFF8F0]">
              {stat.num}
            </span>
            <span className="font-body font-light text-[0.6rem] sm:text-[0.65rem] md:text-xs tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase text-[#FFF8F0]/70">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
