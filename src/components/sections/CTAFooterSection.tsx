import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CTAFooterSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="relative w-full h-full bg-[#0A0A08] flex flex-col overflow-hidden mobile-section"
      data-index={5}
    >
      {/* TOP */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-[500px] w-full px-6 text-center flex flex-col items-center">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-[30px] h-[1px] bg-[#F2EDE4]/30" />
            <span className="font-body font-extralight text-[0.5625rem] tracking-[0.28em] uppercase text-[#F2EDE4]/90">
              Get Yours
            </span>
            <div className="w-[30px] h-[1px] bg-[#F2EDE4]/30" />
          </motion.div>

          <motion.h2
            className="font-display italic font-light text-[clamp(2.5rem,6vw,5rem)] text-[#F2EDE4] leading-[1.0] mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Taste the Culture
          </motion.h2>

          <motion.p
            className="font-body font-extralight text-[0.875rem] tracking-[0.04em] text-[#F2EDE4]/75 leading-[1.8] max-w-[380px]"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Available in Goa at local markets, cafes, and through direct
            enquiry.
          </motion.p>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-goacha btn-goacha-solid mt-9 px-10 py-3.5 text-[0.75rem]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.3,
            }}
          >
            <MessageCircle size={14} strokeWidth={1.5} />
            Enquire on WhatsApp
          </motion.a>

          <motion.span
            className="font-body font-extralight text-[0.5625rem] tracking-[0.1em] uppercase text-[#F2EDE4] mt-4"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Available at Saukhyam India and Clean Food Market, Anjuna
          </motion.span>
        </div>
      </div>

      {/* FOOTER BAR */}
      <div className="w-full border-t border-[#F2EDE4]/[0.06] py-5 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-body font-extralight text-[0.5625rem] tracking-[0.06em] text-[#F2EDE4]/50 text-center md:text-left">
          © 2025 Goacha Kombucha. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          <Link
            to="/terms"
            className="font-body font-extralight text-[0.5625rem] tracking-[0.06em] text-[#F2EDE4]/80 hover:text-white transition-colors duration-200"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy"
            className="font-body font-extralight text-[0.5625rem] tracking-[0.06em] text-[#F2EDE4]/80 hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
