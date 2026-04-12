import { motion } from "motion/react"
import { MessageCircle } from "lucide-react"
import { WHATSAPP_URL } from "@/lib/constants"

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-14 md:h-16"
      style={{ padding: "0 clamp(24px, 5vw, 64px)" }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      <span className="font-display font-light text-[var(--color-gc-cream)] tracking-[0.22em] uppercase text-[1.125rem]">
        Goacha
      </span>
      
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
  )
}
