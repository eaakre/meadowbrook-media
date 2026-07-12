import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

export type SectionTone = "default" | "muted" | "inverted";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
}

const toneClasses: Record<SectionTone, string> = {
  default: "bg-background text-foreground",
  muted: "bg-muted text-foreground",
  inverted: "bg-foreground text-background",
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
