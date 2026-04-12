import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, IMAGEKIT_BASE_URL } from "@/lib/constants";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-2"
      style={{ padding: "0.75rem clamp(24px, 5vw, 64px)" }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      <img
        src={`${IMAGEKIT_BASE_URL}/logo-white.png`}
        alt="Goacha Logo"
        className="h-6 md:h-8 object-contain"
      />

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-goacha flex items-center gap-2"
      >
        <MessageCircle size={13} strokeWidth={1.5} />
        Enquire
      </a>
    </motion.nav>
  );
}
