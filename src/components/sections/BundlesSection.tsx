import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, IMAGEKIT_BASE_URL } from "@/lib/constants";

const bundles = [
  {
    name: "Starter Pack",
    description: "All 3 flavours - perfect to try",
    image: `${IMAGEKIT_BASE_URL}/starter-pack.png?tr=w-600,h-600,fo-auto,q-80`,
  },
  {
    name: "Weekly Pack",
    description: "6 bottles - your everyday refresh",
    image: `${IMAGEKIT_BASE_URL}/weekly-pack.png?tr=w-600,h-600,fo-auto,q-80`,
  },
  {
    name: "Party Pack",
    description: "12 bottles - made for sharing",
    image: `${IMAGEKIT_BASE_URL}/party-pack.png?tr=w-600,h-600,fo-auto,q-80`,
  },
];

export default function BundlesSection() {
  return (
    <div
      className="relative w-full h-full bg-stone-950 flex flex-col items-center justify-center overflow-hidden mobile-section px-6"
      data-index={5}
    >
      <div className="max-w-6xl w-full flex flex-col items-center">
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-[30px] h-[1px] bg-stone-100/30" />
          <span className="font-body text-xs tracking-[0.28em] uppercase text-stone-100/70">
            Bundles
          </span>
          <div className="w-[30px] h-[1px] bg-stone-100/30" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {bundles.map((bundle, i) => (
            <motion.div
              key={bundle.name}
              className="flex flex-col items-center text-center bg-stone-900/40 border border-stone-100/10 p-8 rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
            >
              <div className="w-full aspect-square mb-6 bg-stone-900/50 rounded-sm overflow-hidden relative">
                <img
                  src={bundle.image}
                  alt={bundle.name}
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback for placeholder
                    (e.target as HTMLImageElement).src =
                      `https://picsum.photos/seed/${bundle.name.replace(" ", "")}/600/600?blur=2`;
                  }}
                />
              </div>
              <h3 className="font-display italic font-light text-2xl text-stone-100 mb-2">
                {bundle.name}
              </h3>
              <p className="font-body font-light text-sm text-stone-100/60 mb-6 flex-1">
                {bundle.description}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-goacha w-full justify-center text-xs py-3"
              >
                <MessageCircle size={14} strokeWidth={1.5} className="mr-2" />
                Order on WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
