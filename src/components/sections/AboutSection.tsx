import { motion } from "motion/react";

type Props = {
  onScrollHint?: () => void;
};

export default function AboutSection({ onScrollHint }: Props) {
  return (
    <div
      className="relative w-full h-full bg-[#0A0A08] flex items-center justify-center overflow-hidden mobile-section"
      data-index={1}
    >
      <div className="max-w-[520px] w-full px-8 text-center flex flex-col items-center">
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[40px] h-[1px] bg-[#F2EDE4]/35" />
          <span className="font-body font-extralight text-[0.5625rem] tracking-[0.28em] uppercase text-[#F2EDE4]/70">
            About
          </span>
          <div className="w-[40px] h-[1px] bg-[#F2EDE4]/35" />
        </motion.div>

        <motion.h2
          className="font-display italic font-light text-[clamp(1.75rem,4vw,3rem)] text-[#F2EDE4] leading-[1.1] mb-8 flex justify-center flex-wrap"
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

        <motion.p
          className="font-body font-light text-[0.9375rem] leading-[1.85] text-[#F2EDE4]/65 max-w-[440px] mb-8"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Goacha is a Goa-born kombucha brewed in small batches — raw,
          unfiltered, and full of life. We ferment with care, using real
          ingredients and no shortcuts. Every bottle is alive with natural
          probiotics, naturally carbonated through fermentation, and made to
          support your gut, your energy, and your day.
        </motion.p>

        <motion.div
          className="w-[40px] h-[1px] bg-[#F2EDE4]/20 my-8"
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
              <span className="font-display italic font-light text-[1.75rem] text-[#F2EDE4]">
                {stat.num}
              </span>
              <span className="font-body font-extralight text-[0.5625rem] tracking-[0.2em] uppercase text-[#F2EDE4]/40">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
