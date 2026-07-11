import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

const gapClasses = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-8",
} as const;

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: keyof typeof gapClasses;
}

export function Stack({ gap = "md", className, children, ...rest }: StackProps) {
  return (
    <div className={cn("flex flex-col", gapClasses[gap], className)} {...rest}>
      {children}
    </div>
  );
}
