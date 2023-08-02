import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { labelVariants } from "@/components/label"
import { clx } from "@/utils/clx"

const buttonVariants = cva(
  "disabled:bg-ui-bg-disabled disabled:border-ui-border-base disabled:text-ui-fg-disabled relative inline-flex w-fit items-center overflow-hidden rounded-lg border outline-none transition-all after:absolute after:inset-0 after:content-[''] disabled:!shadow-none",
  {
    variants: {
      variant: {
        primary:
          "shadow-buttons-primary text-ui-fg-on-inverted border-ui-border-loud bg-ui-button-inverted after:button-inverted-gradient hover:bg-ui-button-inverted-hover hover:after:button-inverted-hover-gradient active:bg-ui-button-inverted-pressed active:after:button-inverted-pressed-gradient focus:shadow-buttons-primary-focus",
        secondary:
          "shadow-buttons-secondary text-ui-fg-base border-ui-border-loud-muted bg-ui-button-neutral after:button-neutral-gradient hover:bg-ui-button-neutral-hover hover:after:button-neutral-hover-gradient active:bg-ui-button-neutral-pressed active:after:button-neutral-pressed-gradient focus:shadow-buttons-secondary-focus bg-clip-padding",
        transparent:
          "text-ui-fg-base border-ui-border-loud-transparent bg-ui-button-transparent hover:bg-ui-button-transparent-hover hover:border-ui-border-loud-muted active:bg-ui-button-transparent-pressed active:border-ui-border-base focus:shadow-borders-focus focus:bg-ui-bg-base focus:border-ui-border-base",
        danger:
          "shadow-buttons-danger text-ui-fg-on-inverted border-ui-border-danger bg-ui-button-danger after:button-danger-gradient hover:bg-ui-button-danger-hover hover:after:button-danger-hover-gradient active:bg-ui-button-danger-pressed active:after:button-danger-pressed-gradient focus:shadow-buttons-danger-focus",
      },
      size: {
        sm: clx(
          "gap-x-0.5 px-[7px] py-[1px]",
          labelVariants({ size: "xsmall", weight: "plus" })
        ),
        md: clx(
          "gap-x-1.5 px-[11px] py-[5px]",
          labelVariants({ size: "small", weight: "plus" })
        ),
        lg: clx(
          "gap-x-2 px-[15px] py-[9px]",
          labelVariants({ size: "base", weight: "plus" })
        ),
        xl: clx(
          "gap-x-2 px-[19px] py-[13px]",
          labelVariants({
            size: "large",
            weight: "plus",
          })
        ),
      },
      format: {
        default: "",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      format: "default",
    },
    compoundVariants: [
      {
        size: "sm",
        format: "icon",
        className: "px-px py-px",
      },
      {
        size: "md",
        format: "icon",
        className: "px-[5px] py-[5px]",
      },
      {
        size: "lg",
        format: "icon",
        className: "px-[9px] py-[9px]",
      },
      {
        size: "xl",
        format: "icon",
        className: "px-[13px] py-[13px]",
      },
    ],
  }
)

interface ButtonProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { size, variant, format, className, asChild = false, children, ...props },
    ref
  ) => {
    const Component = asChild ? Slot : "button"

    return (
      <Component
        ref={ref}
        {...props}
        className={clx(buttonVariants({ variant, size, format }), className)}
      >
        {children}
        {"test"}
      </Component>
    )
  }
)
Button.displayName = "Button"

export { Button }
