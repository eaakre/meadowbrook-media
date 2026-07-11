import { Container } from "./Container";
import { Grid } from "./Grid";
import { SanityImage } from "./SanityImage";

export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  avatarUrl?: string;
}

export interface TestimonialsProps {
  heading?: string;
  items: Testimonial[];
}

export function Testimonials({ heading, items }: TestimonialsProps) {
  return (
    <Container>
      {heading ? (
        <h2 className="text-center text-3xl font-semibold tracking-tight">
          {heading}
        </h2>
      ) : null}
      <Grid cols={items.length >= 3 ? 3 : 2} className="mt-10">
        {items.map((item) => (
          <figure
            key={item.name}
            className="rounded-lg border border-neutral-200 p-6"
          >
            <blockquote className="text-neutral-700">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              {item.avatarUrl ? (
                <SanityImage
                  src={item.avatarUrl}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : null}
              <div>
                <div className="text-sm font-medium">{item.name}</div>
                {item.role ? (
                  <div className="text-sm text-neutral-500">{item.role}</div>
                ) : null}
              </div>
            </figcaption>
          </figure>
        ))}
      </Grid>
    </Container>
  );
}
