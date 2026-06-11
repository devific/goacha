import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { X, MessageCircle, ArrowRight } from "lucide-react";
import type { Flavor } from "@/lib/flavorsData";
import { getWhatsAppUrl, IMAGEKIT_BASE_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";

type Props = {
  flavor: Flavor;
  open: boolean;
  onClose: () => void;
};

export default function FlavorSheet({ flavor, open, onClose }: Props) {
  return (
    <Sheet open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <SheetContent className="fixed inset-y-0 right-0 z-50 flex h-full w-full flex-col border-l border-stone-800 bg-stone-950 p-0 shadow-xl sm:w-[480px]">
        <SheetTitle className="sr-only">{flavor.name} Details</SheetTitle>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 rounded-full p-2 text-stone-400 transition hover:bg-stone-900 hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="flex-1 overflow-y-auto">
          {/* HERO */}
          <header className="border-b border-stone-800 px-8 pb-8 pt-16">
            <span className="mb-3 block text-xs uppercase tracking-widest text-stone-500">
              {flavor.subtitle}
            </span>

            <h2 className="mb-3 font-display text-4xl font-black leading-tight text-white">
              {flavor.name}
            </h2>

            <p className="max-w-md text-base leading-7 text-stone-300">
              {flavor.tagline}
            </p>
          </header>

          <div className="space-y-10 px-8 py-8">
            {/* About */}
            <section>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-stone-400">
                About this flavour
              </h3>

              <p className="text-sm leading-7 text-stone-200">
                {flavor.description}
              </p>
            </section>

            {/* Ingredients */}
            <section className="border-t border-stone-800 pt-8">
              <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-stone-400">
                Ingredients
              </h3>

              <p className="text-sm leading-6 text-stone-200">
                {flavor.ingredients}
              </p>
            </section>

            {/* Nutrition */}
            <section className="border-t border-stone-800 pt-8">
              <h3 className="mb-5 text-xs font-medium uppercase tracking-wider text-stone-400">
                Nutrition
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between border-b border-stone-800 pb-3">
                  <span className="text-sm text-stone-400">Serving Size</span>

                  <span className="text-sm font-medium text-white">
                    {flavor.nutritional.servingSize}
                  </span>
                </div>

                <div>
                  <div className="mb-3 text-sm font-medium text-stone-300">
                    Per 100ml
                  </div>

                  <div className="space-y-3">
                    {Object.entries(flavor.nutritional.per100ml).map(
                      ([key, value]) => {
                        const formattedKey = key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase());

                        return (
                          <div key={key} className="flex justify-between">
                            <span className="text-sm text-stone-400">
                              {formattedKey}
                            </span>

                            <span className="text-sm font-medium text-white">
                              {value}
                            </span>
                          </div>
                        );
                      },
                    )}
                  </div>
                </div>

                <p className="text-xs leading-5 text-stone-500">
                  {flavor.nutritional.disclaimer}
                </p>
              </div>
            </section>

            {/* Product Details */}
            <section className="border-t border-stone-800 pt-8">
              <h3 className="mb-5 text-xs font-medium uppercase tracking-wider text-stone-400">
                Product Details
              </h3>

              <div className="space-y-4">
                {flavor.details.map((detail, i) => (
                  <div key={i} className="flex gap-3">
                    <ArrowRight
                      size={14}
                      className="mt-1 shrink-0"
                      style={{
                        color: flavor.accentColor,
                      }}
                    />

                    <span className="text-sm leading-7 text-stone-200">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-stone-200 bg-stone-100 px-8 py-6">
          <div className="mb-5 flex justify-center">
            <img
              src={`${IMAGEKIT_BASE_URL}/logo-black.png`}
              alt="Goacha Logo"
              className="h-5 object-contain"
            />
          </div>

          <Button asChild className="w-full" theme="green" variant="solid">
            <a
              href={getWhatsAppUrl(
                `Hi, I'd like to order the ${flavor.name} kombucha.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={14} className="mr-2" />
              Order on WhatsApp
            </a>
          </Button>
        </footer>
      </SheetContent>
    </Sheet>
  );
}
