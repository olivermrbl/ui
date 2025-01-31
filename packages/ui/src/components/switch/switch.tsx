import * as Primitives from "@radix-ui/react-switch"
import { VariantProps, cva } from "class-variance-authority"
import * as React from "react"

import { clx } from "@/utils/clx"

const switchVariants = cva(
  "bg-ui-bg-toggle-off hover:bg-ui-bg-toggle-off-hover data-[state=unchecked]:hover:after:bg-toggle-off-hover-gradient before:shadow-details-switch-background focus:shadow-details-switch-background-focus data-[state=checked]:bg-ui-bg-interactive disabled:!bg-ui-bg-disabled group relative inline-flex items-center rounded-full outline-none transition-all before:absolute before:inset-0 before:rounded-full before:content-[''] after:absolute after:inset-0 after:rounded-full after:content-[''] disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        small: "h-[16px] w-[28px]",
        base: "h-[18px] w-[32px]",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
)

const thumbVariants = cva(
  "bg-ui-bg-base shadow-details-switch-thumb group-disabled:bg-ui-bg-disabled pointer-events-none z-10 h-[14px] w-[14px] rounded-full transition-all",
  {
    variants: {
      size: {
        small:
          "h-[12px] w-[12px] data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0.5",
        base: "h-[14px] w-[14px] data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5",
      },
    },
    defaultVariants: {
      size: "base",
    },
  }
)

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof Primitives.Root>,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof Primitives.Root>,
  SwitchProps
>(({ className, size = "base", ...props }, ref) => (
  <Primitives.Root
    className={clx(switchVariants({ size }), className)}
    {...props}
    ref={ref}
  >
    <Primitives.Thumb className={clx(thumbVariants({ size }))} />
  </Primitives.Root>
))
Switch.displayName = "Switch"

export { Switch }
