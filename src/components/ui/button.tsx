import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-body",
  {
    variants: {
      variant: {
        default:
          "bg-[#3F72AF] text-white shadow hover:bg-[#2C5A91] dark:bg-[#3F8EFC] dark:hover:bg-[#2D7AE4] shadow-[#3F72AF]/20 dark:shadow-[#3F8EFC]/15",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600",
        outline:
          "border-2 border-[#DBE2EF] dark:border-[#374151] bg-transparent text-[#112D4E] dark:text-[#E5E7EB] hover:border-[#3F72AF] dark:hover:border-[#3F8EFC] hover:text-[#3F72AF] dark:hover:text-[#3F8EFC]",
        secondary:
          "bg-[#DBE2EF] dark:bg-[#1F2937] text-[#112D4E] dark:text-[#E5E7EB] hover:bg-[#3F72AF]/10 dark:hover:bg-[#3F8EFC]/10",
        ghost:
          "hover:bg-[#DBE2EF]/60 dark:hover:bg-[#1F2937] text-[#112D4E] dark:text-[#E5E7EB]",
        link:
          "text-[#3F72AF] dark:text-[#3F8EFC] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-2xl px-8 text-base",
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
