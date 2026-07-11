import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

const colsClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: keyof typeof colsClasses;
}

export function Grid({ cols = 3, className, children, ...rest }: GridProps) {
  return (
    <div
      className={cn("grid grid-cols-1 gap-8", colsClasses[cols], className)}
      {...rest}
    >
      {children}
    </div>
  );
}
