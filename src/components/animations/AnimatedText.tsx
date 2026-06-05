import { motion } from "motion/react";

export function AnimatedText({ text }: { text: string }) {
  const totalDuration = 2;

  return (
    <span className="flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: (i * totalDuration) / text.length,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
