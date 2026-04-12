import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-body text-[0.6875rem] font-light tracking-[0.18em] uppercase transition-all duration-250 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-none",
  {
    variants: {
      variant: {
        default: "bg-transparent text-stone-50 border border-stone-50/20 hover:bg-stone-50/10 hover:border-stone-50/40",
        solid:   "bg-stone-50 text-stone-950 border border-stone-50 hover:bg-stone-50/88",
        ghost:   "bg-transparent text-stone-50 hover:bg-stone-50/8 border-none",
        link:    "text-stone-50 underline-offset-4 hover:underline border-none p-0 h-auto",
      },
      size: {
        default: "h-10 px-7 py-2.5",
        sm:      "h-8 px-5 text-[0.625rem]",
        lg:      "h-12 px-10",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
