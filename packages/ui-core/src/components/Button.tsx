import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-neutral-900 text-white hover:bg-neutral-700",
  secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
  ghost: "bg-transparent text-neutral-900 hover:bg-neutral-100",
};

export const buttonBaseClasses =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(buttonBaseClasses, buttonVariantClasses[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function LinkButton({
  variant = "primary",
  className,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <a
      className={cn(buttonBaseClasses, buttonVariantClasses[variant], className)}
      {...rest}
    >
      {children}
    </a>
  );
}
