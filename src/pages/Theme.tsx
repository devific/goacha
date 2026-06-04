import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemePage() {
  const variants = ["default", "solid", "ghost", "link"] as const;
  const sizes = ["default", "sm", "icon", "lg"] as const;
  const themes = ["default", "black", "brand"] as const;

  const buttonConfigs = themes.flatMap((theme) =>
    variants.flatMap((variant) =>
      sizes.map((size) => ({
        theme,
        variant,
        size,
      })),
    ),
  );

  return (
    <div className="min-h-screen bg-gray-500 p-6">
      <h1 className="mb-6 text-2xl font-bold text-white">
        Button Variations ({buttonConfigs.length})
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {buttonConfigs.map(({ theme, variant, size }) => (
          <div
            key={`${theme}-${variant}-${size}`}
            className="flex flex-col gap-3 rounded-lg border border-white/10 bg-black/10 p-4"
          >
            <div className="text-sm text-white">
              <div>
                <strong>Theme:</strong> {theme}
              </div>
              <div>
                <strong>Variant:</strong> {variant}
              </div>
              <div>
                <strong>Size:</strong> {size}
              </div>
            </div>

            <Button theme={theme} variant={variant} size={size}>
              {size === "icon" ? <Code2 /> : `${theme} / ${variant} / ${size}`}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
