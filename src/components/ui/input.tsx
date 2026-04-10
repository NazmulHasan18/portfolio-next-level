import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-xl border border-[#DBE2EF] dark:border-[#374151] bg-white/60 dark:bg-[#121212]/60 px-4 py-2 text-sm font-body text-[#112D4E] dark:text-[#E5E7EB] placeholder:text-[#112D4E]/30 dark:placeholder:text-[#9CA3AF]/40 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F72AF]/40 dark:focus-visible:ring-[#3F8EFC]/40 focus-visible:border-[#3F72AF] dark:focus-visible:border-[#3F8EFC] disabled:cursor-not-allowed disabled:opacity-50 transition-all",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
