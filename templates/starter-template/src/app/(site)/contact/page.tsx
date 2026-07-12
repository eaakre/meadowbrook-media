import { Container, Section } from "@meadowbrook/ui-core";
import type { Metadata } from "next";

import { ContactFormWithApi } from "@/components/ContactFormWithApi";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Section>
      <Container className="max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight">Get in touch</h1>
        <p className="mt-2 text-neutral-600">
          Fill out the form and we&rsquo;ll get back to you soon.
        </p>
        <div className="mt-8">
          <ContactFormWithApi />
        </div>
      </Container>
    </Section>
  );
}
