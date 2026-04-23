import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { X, MessageCircle, ArrowRight } from "lucide-react";
import type { Flavor } from "@/lib/flavorsData";
import { getWhatsAppUrl, IMAGEKIT_BASE_URL } from "@/lib/constants";

type Props = {
  flavor: Flavor;
  open: boolean;
  onClose: () => void;
};

export default function FlavorSheet({ flavor, open, onClose }: Props) {
  return (
    <Sheet open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <SheetContent className="fixed inset-y-0 right-0 h-full w-full sm:w-[480px] border-l border-stone-100/8 bg-stone-950 p-0 shadow-xl z-50 flex flex-col">
        <SheetTitle className="sr-only">{flavor.name} Details</SheetTitle>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-stone-100/60 hover:text-stone-100 transition-colors bg-transparent border-none cursor-pointer"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        <div className="flex-1 overflow-y-auto">
          {/* TOP SECTION */}
          <div className="pt-16 px-8 pb-6 border-b border-stone-100/8">
            <h2 className="font-display text-[2.5rem] text-stone-100 leading-none mb-2">
              {flavor.name}
            </h2>
            <span className="font-body font-extralight text-[0.6875rem] tracking-[0.2em] uppercase text-stone-100/55">
              {flavor.subtitle}
            </span>
          </div>

          {/* BODY SECTION */}
          <div className="p-8">
            {/* About */}
            <div className="mb-7">
              <h3 className="font-body font-extralight text-[0.5rem] tracking-[0.28em] uppercase text-stone-100/80 mb-3">
                About this flavour
              </h3>
              <p className="font-body font-light text-[0.9375rem] leading-[1.85] text-stone-100/65">
                {flavor.description}
              </p>
            </div>

            <div className="w-full h-[1px] bg-stone-100/8 my-7" />

            {/* Ingredients */}
            <div className="mb-7">
              <h3 className="font-body font-extralight text-[0.5rem] tracking-[0.28em] uppercase text-stone-100/80 mb-3">
                Ingredients
              </h3>
              <div className="flex flex-col gap-1">
                {flavor.ingredients.split(",").map((ing, i) => (
                  <div
                    key={i}
                    className="font-body font-light text-[0.875rem] text-stone-100/55 leading-[2.0]"
                  >
                    {ing.trim()}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-[1px] bg-stone-100/8 my-7" />

            {/* Nutritional Info */}
            <div className="mb-7">
              <h3 className="font-body font-extralight text-[0.5rem] tracking-[0.28em] uppercase text-stone-100/80 mb-3">
                Nutritional Info
              </h3>
              <div className="flex flex-col">
                <div className="flex justify-between items-center py-2.5 border-b border-stone-100/6">
                  <span className="font-body font-light text-[0.8125rem] text-stone-100/40">
                    Serving Size
                  </span>
                  <span className="font-body font-normal text-[0.8125rem] text-stone-100/75">
                    {flavor.nutritional.servingSize}
                  </span>
                </div>
                <div className="py-2.5 border-b border-stone-100/6">
                  <span className="font-body font-light text-[0.8125rem] text-stone-100/40 block mb-2">
                    Per 100ml
                  </span>
                  {Object.entries(flavor.nutritional.per100ml).map(
                    ([key, value]) => {
                      const formattedKey = key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase());
                      return (
                        <div
                          key={key}
                          className="flex justify-between items-center py-1"
                        >
                          <span className="font-body font-light text-[0.8125rem] text-stone-100/40">
                            {formattedKey}
                          </span>
                          <span className="font-body font-normal text-[0.8125rem] text-stone-100/75">
                            {value}
                          </span>
                        </div>
                      );
                    },
                  )}
                </div>
                <div className="py-2.5">
                  <span className="font-body font-light text-[0.65rem] text-stone-100/40 ">
                    {flavor.nutritional.disclaimer}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-stone-100/8 my-7" />

            {/* Product Details */}
            <div className="mb-7">
              <h3 className="font-body font-extralight text-[0.5rem] tracking-[0.28em] uppercase text-stone-100/80 mb-3">
                Product Details
              </h3>
              <div className="flex flex-col gap-2">
                {flavor.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-2.5 mb-2">
                    <ArrowRight
                      size={12}
                      className="mt-1 shrink-0"
                      style={{ color: flavor.accentColor }}
                    />
                    <span className="font-body font-light text-[0.8125rem] text-stone-100/55 leading-[1.7]">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-6 px-8 border-t border-stone-100/8 bg-stone-100 flex flex-col items-center gap-5">
          <img
            src={`${IMAGEKIT_BASE_URL}/logo-black.png`}
            alt="Goacha Logo"
            className="h-5 object-contain opacity-80"
          />
          <a
            href={getWhatsAppUrl(
              `Hi, I'd like to order the ${flavor.name} kombucha.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-goacha w-full justify-center border-stone-950 text-stone-950 hover:bg-stone-950/5"
          >
            <MessageCircle size={13} strokeWidth={1.5} className="mr-2" />
            Order on WhatsApp
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
