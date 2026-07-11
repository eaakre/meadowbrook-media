import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...rest }, ref) => (
    <select
      ref={ref}
      className={cn(
        "w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none",
        className
      )}
      {...rest}
    >
      {children}
    </select>
  )
);
Select.displayName = "Select";
