"use client";

import { ContactForm, type ContactFormValues } from "@meadowbrook/ui-core";

export function ContactFormWithApi() {
  async function handleSubmit(values: ContactFormValues) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      throw new Error("Failed to submit contact form");
    }
  }

  return <ContactForm onSubmit={handleSubmit} />;
}
