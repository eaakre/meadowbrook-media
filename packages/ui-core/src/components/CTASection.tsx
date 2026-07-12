import { LinkButton } from "./Button";
import { Container } from "./Container";
import { Section } from "./Section";

export interface CTASectionProps {
  heading: string;
  body?: string;
  cta: { label: string; href: string };
}

export function CTASection({ heading, body, cta }: CTASectionProps) {
  return (
    <Section tone="inverted">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {heading}
        </h2>
        {body ? <p className="max-w-xl text-background/70">{body}</p> : null}
        <LinkButton href={cta.href} variant="secondary">
          {cta.label}
        </LinkButton>
      </Container>
    </Section>
  );
}
