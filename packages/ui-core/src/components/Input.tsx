import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none",
        className
      )}
      {...rest}
    />
  )
);
Input.displayName = "Input";
