import type { ReactNode } from "react";
import { buttonBaseClasses, LinkButton } from "./Button";
import { Container } from "./Container";
import { cn } from "../lib/cn";

export type HeroLayout = "fullBleed" | "split" | "centered";

export interface HeroLink {
  label: string;
  href: string;
}

export interface HeroProps {
  layout?: HeroLayout;
  eyebrow?: string;
  heading: string;
  body?: string;
  primaryCta?: HeroLink;
  secondaryCta?: HeroLink;
  media?: ReactNode;
  className?: string;
}

function Eyebrow({ inverted, children }: { inverted?: boolean; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-1 text-xs font-medium",
        inverted ? "bg-background/10 text-background" : "bg-primary/10 text-primary"
      )}
    >
      {children}
    </span>
  );
}

export function Hero({
  layout = "fullBleed",
  eyebrow,
  heading,
  body,
  primaryCta,
  secondaryCta,
  media,
  className,
}: HeroProps) {
  if (layout === "centered") {
    return (
      <Container className={cn("py-16 text-center sm:py-24", className)}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {heading}
        </h1>
        {body ? (
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">{body}</p>
        ) : null}
        {primaryCta || secondaryCta ? (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
      </Container>
    );
  }

  if (layout === "split") {
    return (
      <Container
        className={cn(
          "grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2",
          className
        )}
      >
        <div>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
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

  // fullBleed
  return (
    <section className={cn("relative overflow-hidden bg-foreground py-24 sm:py-32", className)}>
      {media ? (
        <>
          <div className="absolute inset-0">{media}</div>
          <div className="absolute inset-0 bg-black/50" />
        </>
      ) : null}
      <Container className="relative z-10">
        {eyebrow ? <Eyebrow inverted>{eyebrow}</Eyebrow> : null}
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-background sm:text-5xl">
          {heading}
        </h1>
        {body ? (
          <p className="mt-4 max-w-xl text-lg text-background/80">{body}</p>
        ) : null}
        {primaryCta || secondaryCta ? (
          <div className="mt-8 flex flex-wrap gap-4">
            {primaryCta ? (
              <LinkButton href={primaryCta.href} variant="secondary">
                {primaryCta.label}
              </LinkButton>
            ) : null}
            {secondaryCta ? (
              <a
                href={secondaryCta.href}
                className={cn(
                  buttonBaseClasses,
                  "border border-background/40 text-background hover:bg-background/10"
                )}
              >
                {secondaryCta.label}
              </a>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
