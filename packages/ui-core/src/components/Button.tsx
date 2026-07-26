import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "../lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "bg-transparent text-foreground hover:bg-muted",
};

export const buttonBaseClasses =
  "inline-flex items-center justify-center px-4 py-4 font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";

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
      className={cn(
        buttonBaseClasses,
        buttonVariantClasses[variant],
        className,
      )}
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
      className={cn(
        buttonBaseClasses,
        buttonVariantClasses[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
