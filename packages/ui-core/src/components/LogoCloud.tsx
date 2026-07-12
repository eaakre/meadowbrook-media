import { Container } from "./Container";
import { SanityImage } from "./SanityImage";

export interface Logo {
  name: string;
  imageUrl: string;
  href?: string;
}

export interface LogoCloudProps {
  heading?: string;
  logos: Logo[];
}

export function LogoCloud({ heading, logos }: LogoCloudProps) {
  return (
    <Container>
      {heading ? (
        <p className="text-center text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {heading}
        </p>
      ) : null}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 grayscale">
        {logos.map((logo) => {
          const image = (
            <SanityImage
              src={logo.imageUrl}
              alt={logo.name}
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          );
          return logo.href ? (
            <a key={logo.name} href={logo.href}>
              {image}
            </a>
          ) : (
            <span key={logo.name}>{image}</span>
          );
        })}
      </div>
    </Container>
  );
}
