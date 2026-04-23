import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Menu, X } from "lucide-react";
import { getWhatsAppUrl, IMAGEKIT_BASE_URL } from "@/lib/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    setIsMenuOpen(false);
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 backdrop-blur-md bg-stone-950/80 border-b border-stone-100/10"
        style={{
          paddingLeft: "clamp(24px, 5vw, 64px)",
          paddingRight: "clamp(24px, 5vw, 64px)",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center gap-10">
          <Link to="/" onClick={(e) => handleNavClick(e, "hero")}>
            <img
              src={`${IMAGEKIT_BASE_URL}/logo-white.png`}
              alt="Goacha Logo"
              className="h-6 md:h-8 object-contain cursor-pointer"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8 font-body text-sm font-light text-gc-cream/80 tracking-widest uppercase">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="hover:text-gc-cream transition-colors"
            >
              About
            </a>
            <a
              href="#flavors"
              onClick={(e) => handleNavClick(e, "flavors")}
              className="hover:text-gc-cream transition-colors"
            >
              Flavours
            </a>
            <a
              href="#bundles"
              onClick={(e) => handleNavClick(e, "bundles")}
              className="hover:text-gc-cream transition-colors"
            >
              Bundles
            </a>
            <a
              href="#stock"
              onClick={(e) => handleNavClick(e, "stock")}
              className="hover:text-gc-cream transition-colors"
            >
              Stock
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={getWhatsAppUrl(
              "Hi, I'd like to enquire about Goacha Kombucha.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-goacha flex items-center gap-2"
          >
            <MessageCircle size={13} strokeWidth={1.5} />
            <span className="hidden sm:inline">Enquire</span>
          </a>

          <button
            className="md:hidden btn-goacha !p-2 flex items-center justify-center text-gc-cream"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-stone-950 flex flex-col pt-24 px-6 pb-8"
          >
            <button
              className="absolute top-6 right-6 text-gc-cream p-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col gap-8 text-center mt-12 font-display text-3xl font-light tracking-widest uppercase items-center">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="text-gc-cream/80 hover:text-gc-cream active:text-gc-cream transition-colors"
              >
                About
              </a>
              <a
                href="#flavors"
                onClick={(e) => handleNavClick(e, "flavors")}
                className="text-gc-cream/80 hover:text-gc-cream active:text-gc-cream transition-colors"
              >
                Flavours
              </a>
              <a
                href="#bundles"
                onClick={(e) => handleNavClick(e, "bundles")}
                className="text-gc-cream/80 hover:text-gc-cream active:text-gc-cream transition-colors"
              >
                Bundles
              </a>
              <a
                href="#stock"
                onClick={(e) => handleNavClick(e, "stock")}
                className="text-gc-cream/80 hover:text-gc-cream active:text-gc-cream transition-colors"
              >
                Stock
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
