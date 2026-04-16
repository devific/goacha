import { motion } from "motion/react";
import { Code2Icon, CodeIcon, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, IMAGEKIT_BASE_URL } from "@/lib/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CTAFooterSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative w-full h-full bg-stone-950 flex flex-col overflow-hidden mobile-section"
      data-index={5}
    >
      {/* TOP */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-[500px] w-full px-6 text-center flex flex-col items-center">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-[30px] h-[1px] bg-stone-100/30" />
            <span className="font-body  text-xs tracking-[0.28em] uppercase text-stone-100/70">
              Get Goacha Delivered
            </span>
            <div className="w-[30px] h-[1px] bg-stone-100/30" />
          </motion.div>

          <motion.h2
            className="font-display italic font-light text-[clamp(2rem,4.5vw,3.5rem)] text-stone-100 leading-[1.0] mb-4 flex justify-center flex-wrap"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
          >
            {"Taste the Culture".split(" ").map((word, i) => (
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
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-goacha btn-goacha-solid mt-9 px-10 py-3.5 text-[0.75rem]"
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

      {/* FOOTER BAR */}
      <div className="w-full border-t border-stone-100/6 py-5 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 max-lg:flex-col">
          <img
            src={`${IMAGEKIT_BASE_URL}/logo-white.png`}
            alt="Goacha Logo"
            className="h-4 object-contain opacity-50"
          />
          <span className="font-body  text-xs tracking-[0.06em] text-stone-100/50 text-center md:text-left">
            &copy; {new Date().getFullYear()} Goacha Kombucha. All rights
            reserved.
          </span>
        </div>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <Link
            to="/terms"
            className="font-body  text-xs tracking-[0.06em] text-stone-100/80 hover:text-white transition-colors duration-200"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy"
            className="font-body  text-xs tracking-[0.06em] text-stone-100/80 hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <a
            href={`//devific.in/?ref=${window.location.hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body flex  items-center text-xs tracking-[0.06em] text-stone-100/80 hover:text-white transition-colors duration-200"
          >
            <Code2Icon className="h-4" />
            by Devific
          </a>
          <a
            href={`//gavn.in/?ref=${window.location.hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden"
          >
            Gavin Pereira
          </a>
        </div>
      </div>
    </div>
  );
}
