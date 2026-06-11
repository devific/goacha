import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 font-body text-[0.6875rem] font-light tracking-[0.18em] uppercase transition-all duration-250 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-none",
  {
    variants: {
      variant: {
        default: "",
        solid: "",
        ghost: "border-none",
        link: "underline-offset-4 hover:underline border-none p-0 h-auto",
      },
      size: {
        default: "h-10 px-7 py-2.5",
        sm: "h-8 px-5 text-[0.625rem]",
        lg: "h-12 px-10",
        icon: "h-10 w-10",
      },
      theme: {
        default: "",
        black: "",
        brand: "",
        green: "", // ← add
      },
    },

    compoundVariants: [
      // Default theme
      {
        variant: "default",
        theme: "default",
        class:
          "bg-transparent text-stone-50 border border-stone-50/20 hover:bg-stone-50/10 hover:border-stone-50/40",
      },
      {
        variant: "solid",
        theme: "default",
        class:
          "bg-stone-50 text-stone-950 border border-stone-50 hover:bg-stone-50/88",
      },
      {
        variant: "ghost",
        theme: "default",
        class: "bg-transparent text-stone-50 hover:bg-stone-50/8",
      },
      {
        variant: "link",
        theme: "default",
        class: "text-stone-50",
      },

      // Black theme
      {
        variant: "default",
        theme: "black",
        class:
          "text-black border-black/50 hover:bg-black/10 hover:border-black/70 border",
      },
      {
        variant: "solid",
        theme: "black",
        class: "bg-black text-white border-none hover:bg-black/90",
      },
      {
        variant: "ghost",
        theme: "black",
        class: "text-black hover:bg-black/10",
      },
      {
        variant: "link",
        theme: "black",
        class: "text-black",
      },

      // Brand theme
      {
        variant: "default",
        theme: "brand",
        class:
          "text-brand border-brand/50 hover:bg-brand/10 hover:border-brand/70 border",
      },
      {
        variant: "solid",
        theme: "brand",
        class: "bg-brand text-black border-none hover:bg-brand/90",
      },
      {
        variant: "ghost",
        theme: "brand",
        class: "text-brand hover:bg-brand/10",
      },
      {
        variant: "link",
        theme: "brand",
        class: "text-brand",
      },

      // Green theme (deep-forest)
      {
        variant: "default",
        theme: "green",
        class:
          "text-deep-forest border-deep-forest/50 hover:bg-deep-forest/10 hover:border-deep-forest/70 border",
      },
      {
        variant: "solid",
        theme: "green",
        class:
          "bg-deep-forest text-stone-50 border-none hover:bg-deep-forest/90",
      },
      {
        variant: "ghost",
        theme: "green",
        class: "text-deep-forest hover:bg-deep-forest/10",
      },
      {
        variant: "link",
        theme: "green",
        class: "text-deep-forest",
      },
    ],

    defaultVariants: {
      variant: "default",
      size: "default",
      theme: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<React.ElementRef<"button">, ButtonProps>(
  ({ className, variant, size, theme, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            theme,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
