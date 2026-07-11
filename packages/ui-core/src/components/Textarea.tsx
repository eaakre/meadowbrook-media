import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...rest }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none",
        className
      )}
      rows={5}
      {...rest}
    />
  )
);
Textarea.displayName = "Textarea";
