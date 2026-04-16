import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, IMAGEKIT_BASE_URL } from "@/lib/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface Props {
  goTo: (index: number) => void;
  totalSections: number;
  currentSection: number;
}

export default function Navbar({ goTo, totalSections, currentSection }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      goTo(0);
    } else {
      navigate("/");
    }
  };

  const progress = (currentSection / (totalSections - 1)) * 100;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-2"
      style={{ padding: "0.75rem clamp(24px, 5vw, 64px)" }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      <div className="h-30 w-full absolute top-0 left-0 bg-linear-to-b  from-black/50 via-black/20 to-transparent -z-10" />
      <Link to="/" onClick={handleLogoClick}>
        <img
          src={`${IMAGEKIT_BASE_URL}/logo-white.png`}
          alt="Goacha Logo"
          className="h-6 md:h-8 object-contain cursor-pointer"
        />
      </Link>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-goacha flex items-center gap-2 "
      >
        <MessageCircle size={13} strokeWidth={1.5} />
        Enquire
      </a>
      <div className="w-full md:hidden h-fit absolute bottom-0 left-0">
        <div
          className="w-full h-0.5 bg-white/20 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </motion.nav>
  );
}
