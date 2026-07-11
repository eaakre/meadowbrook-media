import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type SectionTone = "default" | "muted" | "inverted";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
}

const toneClasses: Record<SectionTone, string> = {
  default: "bg-white text-neutral-900",
  muted: "bg-neutral-50 text-neutral-900",
  inverted: "bg-neutral-900 text-white",
};

export function Section({
  tone = "default",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn("py-16 sm:py-24", toneClasses[tone], className)}
      {...rest}
    >
      {children}
    </section>
  );
}
