import { Link } from "react-router-dom";
import { Code2Icon } from "lucide-react";
import { IMAGEKIT_BASE_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-stone-950 text-stone-100/80 border-t border-stone-100/10 pt-16 pb-8 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top: Multi-column links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <img
              src={`${IMAGEKIT_BASE_URL}/logo-white.png`}
              alt="Goacha Logo"
              className="h-6 object-contain self-start opacity-90"
            />
            <p className="font-body font-light text-sm text-stone-100/60 max-w-[250px]">
              Small batch, raw & live kombucha brewed naturally in Goa.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display uppercase tracking-widest text-xs text-stone-100/40 mb-2">
              Explore
            </h4>
            <a
              href="/#about"
              className="font-body text-sm hover:text-white transition-colors duration-200"
            >
              About
            </a>
            <a
              href="/#flavors"
              className="font-body text-sm hover:text-white transition-colors duration-200"
            >
              Flavours
            </a>
            <a
              href="/#bundles"
              className="font-body text-sm hover:text-white transition-colors duration-200"
            >
              Bundles
            </a>
            <a
              href="/#stock"
              className="font-body text-sm hover:text-white transition-colors duration-200"
            >
              Stockists
            </a>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display uppercase tracking-widest text-xs text-stone-100/40 mb-2">
              Legal
            </h4>
            <Link
              to="/terms"
              className="font-body text-sm hover:text-white transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy"
              className="font-body text-sm hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/shipping"
              className="font-body text-sm hover:text-white transition-colors duration-200 hidden"
            >
              Shipping & Returns
            </Link>
          </div>

          {/* Social / Contact Column */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display uppercase tracking-widest text-xs text-stone-100/40 mb-2">
              Connect
            </h4>
            <a
              href="https://www.instagram.com/goacha_/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm hover:text-white transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href={`//devific.in/?ref=${window.location.hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body flex items-center text-sm hover:text-white transition-colors duration-200"
            >
              <Code2Icon className="h-4 mr-2" />
              Built by Devific
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

        {/* Bottom: Divider & Copyright */}
        <div className="w-full pt-8 border-t border-stone-100/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body text-xs tracking-wider opacity-60 text-center md:text-left uppercase">
            &copy; {new Date().getFullYear()} Goacha Kombucha. All rights
            reserved.
          </span>
          <span className="font-body text-xs tracking-wider opacity-60 text-center max-md:hidden uppercase">
            Brewed in Goa
          </span>
        </div>
      </div>
    </footer>
  );
}
