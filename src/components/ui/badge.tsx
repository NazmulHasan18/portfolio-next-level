import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-semibold font-body transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#3F72AF] dark:bg-[#3F8EFC] text-white shadow hover:bg-[#2C5A91] dark:hover:bg-[#2D7AE4]",
        secondary:
          "border-transparent bg-[#DBE2EF] dark:bg-[#1F2937] text-[#112D4E] dark:text-[#E5E7EB] hover:bg-[#DBE2EF]/80 dark:hover:bg-[#374151]",
        destructive:
          "border-transparent bg-red-500 text-white shadow hover:bg-red-600",
        outline:
          "border-[#DBE2EF] dark:border-[#374151] text-[#112D4E] dark:text-[#E5E7EB]",
        primary:
          "border-transparent bg-[#3F72AF]/10 dark:bg-[#3F8EFC]/10 text-[#3F72AF] dark:text-[#3F8EFC]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
