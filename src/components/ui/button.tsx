import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-display tracking-widest uppercase",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary-dark",
        destructive: "bg-red-500 text-white hover:bg-red-500/90",
        outline:
          "border border-white/20 bg-transparent text-white hover:bg-white/5",
        secondary: "bg-white/10 text-white hover:bg-white/20",
        ghost: "hover:bg-white/5 text-white",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-8 py-4",
        sm: "px-4 py-2 text-xs",
        lg: "px-12 py-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  withArrow?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      withArrow = false,
      href,
      children,
      ...props
    },
    ref,
  ) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }), "group")}
          {...(props as Omit<
            React.ComponentPropsWithoutRef<typeof Link>,
            "href"
          >)}
        >
          {children}
          {withArrow && (
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          )}
        </Link>
      );
    }

    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          withArrow && "group",
        )}
        ref={ref}
        {...props}
      >
        {children}
        {withArrow && (
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
