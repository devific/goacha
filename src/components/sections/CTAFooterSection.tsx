import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function CTAFooterSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative w-full py-16 bg-[#F0F6F8] flex flex-col overflow-hidden mobile-section"
      data-index={5}
    >
      {/* Decorative Blobs */}
      <div className="absolute top-[0%] right-[10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[0%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="max-w-[500px] w-full px-6 text-center flex flex-col items-center">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-[30px] h-[1px] bg-stone-950/20" />
            <span className="font-body  text-xs tracking-[0.28em] uppercase text-stone-950/60">
              Get Goacha Delivered
            </span>
            <div className="w-[30px] h-[1px] bg-stone-950/20" />
          </motion.div>

          <motion.h2
            className="font-display italic font-medium text-[clamp(2rem,4.5vw,3.5rem)] text-stone-950 leading-[1.0] mb-4 flex justify-center flex-wrap"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
          >
            {"Sip on something good!".split(" ").map((word, i) => (
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

          <motion.a
            href={getWhatsAppUrl("Hi, I'd like to order some Goacha Kombucha.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-goacha !bg-stone-950 !text-[#F0F6F8] !border-stone-950 hover:!bg-stone-950/80 mt-9 px-10 py-3.5 text-[0.75rem]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.3,
            }}
          >
            <MessageCircle size={14} strokeWidth={1.5} className="mr-2" />
            Order on WhatsApp
          </motion.a>
        </div>
      </div>
    </div>
  );
}
