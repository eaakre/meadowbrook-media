import {
  Card,
  CTASection,
  FAQAccordion,
  Grid,
  Hero,
  LogoCloud,
  RichText,
  Section,
  SanityImage,
  Testimonials,
} from "@meadowbrook/ui-core";

import { urlFor } from "@/sanity/imageUrl";
import type { PageModule } from "@/sanity/types";

export function PageBuilder({ modules }: { modules?: PageModule[] }) {
  if (!modules?.length) return null;

  return (
    <>
      {modules.map((module) => (
        <PageModuleRenderer key={module._key} module={module} />
      ))}
    </>
  );
}

function PageModuleRenderer({ module }: { module: PageModule }) {
  switch (module._type) {
    case "heroModule":
      return (
        <Hero
          eyebrow={module.eyebrow}
          heading={module.heading}
          body={module.body}
          primaryCta={module.primaryCta}
          secondaryCta={module.secondaryCta}
          media={
            module.image ? (
              <SanityImage
                src={urlFor(module.image).width(1200).height(900).url()}
                alt={module.heading}
              />
            ) : undefined
          }
        />
      );

    case "ctaModule":
      return <CTASection heading={module.heading} body={module.body} cta={module.cta} />;

    case "faqModule":
      return (
        <Section>
          <FAQAccordion heading={module.heading} items={module.items} />
        </Section>
      );

    case "testimonialsModule":
      return (
        <Section tone="muted">
          <Testimonials
            heading={module.heading}
            items={module.items.map((item) => ({
              quote: item.quote,
              name: item.name,
              role: item.role,
              avatarUrl: item.avatar
                ? urlFor(item.avatar).width(80).height(80).url()
                : undefined,
            }))}
          />
        </Section>
      );

    case "logoCloudModule":
      return (
        <Section tone="muted">
          <LogoCloud
            heading={module.heading}
            logos={module.logos.map((logo) => ({
              name: logo.name,
              href: logo.href,
              imageUrl: urlFor(logo.image).width(240).height(80).url(),
            }))}
          />
        </Section>
      );

    case "cardGridModule":
      return (
        <Section>
          {module.heading ? (
            <h2 className="mx-auto max-w-6xl px-4 text-center text-3xl font-semibold tracking-tight sm:px-6 lg:px-8">
              {module.heading}
            </h2>
          ) : null}
          <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
            <Grid cols={module.cards.length >= 3 ? 3 : 2}>
              {module.cards.map((card) => (
                <Card
                  key={card.title}
                  title={card.title}
                  body={card.body}
                  href={card.href}
                  media={
                    card.image ? (
                      <SanityImage
                        src={urlFor(card.image).width(600).height(400).url()}
                        alt={card.title}
                      />
                    ) : undefined
                  }
                />
              ))}
            </Grid>
          </div>
        </Section>
      );

    case "richTextModule":
      return (
        <Section>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <RichText value={module.body} />
          </div>
        </Section>
      );

    default:
      return null;
  }
}
