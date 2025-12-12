import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] hover:shadow-[0_4px_20px_hsl(var(--primary)/0.3)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-[1.02]",
        outline: "border border-border bg-transparent hover:bg-muted hover:text-foreground hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-[1.02]",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        azure: "bg-[hsl(218,88%,30%)] text-[hsl(210,40%,98%)] hover:opacity-90 hover:scale-[1.03] hover:-translate-y-0.5 shadow-[0_4px_20px_hsl(218,88%,30%,0.3)] hover:shadow-[0_8px_30px_hsl(218,88%,30%,0.4)]",
        aqua: "bg-[hsl(186,100%,42%)] text-[hsl(222,47%,6%)] hover:opacity-90 hover:scale-[1.03] hover:-translate-y-0.5 shadow-[0_4px_20px_hsl(186,100%,42%,0.3)] hover:shadow-[0_8px_30px_hsl(186,100%,42%,0.4)]",
        orange: "bg-accent text-accent-foreground hover:opacity-90 hover:scale-[1.03] hover:-translate-y-0.5 shadow-[0_4px_20px_hsl(28,100%,50%,0.3)] hover:shadow-[0_8px_30px_hsl(28,100%,50%,0.4)]",
        gradient: "bg-gradient-to-r from-[hsl(218,88%,30%)] to-[hsl(186,100%,42%)] text-[hsl(210,40%,98%)] hover:opacity-90 hover:scale-[1.03] hover:-translate-y-0.5 shadow-[0_4px_20px_hsl(218,88%,30%,0.3)] hover:shadow-[0_8px_30px_hsl(218,88%,30%,0.4)]",
        hero: "bg-accent text-accent-foreground font-bold hover:scale-[1.05] hover:-translate-y-1 shadow-[0_4px_30px_hsl(28,100%,50%,0.4)] hover:shadow-[0_10px_50px_hsl(28,100%,50%,0.6)]",
        "ghost-light": "text-foreground/80 hover:text-foreground hover:bg-foreground/5",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
