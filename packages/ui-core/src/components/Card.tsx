import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface CardProps {
  title: string;
  body?: string;
  media?: ReactNode;
  href?: string;
  className?: string;
}

export function Card({ title, body, media, href, className }: CardProps) {
  const content = (
    <div
      className={cn(
        "flex h-full flex-col rounded-lg border border-border p-6",
        href && "transition-colors hover:border-primary/50",
        className
      )}
    >
      {media ? <div className="mb-4">{media}</div> : null}
      <h3 className="text-lg font-semibold">{title}</h3>
      {body ? <p className="mt-2 text-sm text-muted-foreground">{body}</p> : null}
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block h-full">
        {content}
      </a>
    );
  }

  return content;
}
