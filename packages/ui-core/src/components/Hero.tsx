import type { ReactNode } from "react";
import { LinkButton } from "./Button";
import { Container } from "./Container";
import { cn } from "../lib/cn";

export interface HeroLink {
  label: string;
  href: string;
}

export interface HeroProps {
  eyebrow?: string;
  heading: string;
  body?: string;
  primaryCta?: HeroLink;
  secondaryCta?: HeroLink;
  media?: ReactNode;
  className?: string;
}

export function Hero({
  eyebrow,
  heading,
  body,
  primaryCta,
  secondaryCta,
  media,
  className,
}: HeroProps) {
  return (
    <Container
      className={cn(
        "grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2",
        className
      )}
    >
      <div>
        {eyebrow ? (
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {heading}
        </h1>
        {body ? <p className="mt-4 text-lg text-muted-foreground">{body}</p> : null}
        {primaryCta || secondaryCta ? (
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryCta ? (
              <LinkButton href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </LinkButton>
            ) : null}
            {secondaryCta ? (
              <LinkButton href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </LinkButton>
            ) : null}
          </div>
        ) : null}
      </div>
      {media ? <div>{media}</div> : null}
    </Container>
  );
}
