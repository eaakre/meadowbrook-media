"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => Promise<void> | void;
  submitLabel?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({ onSubmit, submitLabel = "Send message" }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values: ContactFormValues = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setStatus("submitting");
    try {
      await onSubmit(values);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className="text-neutral-700">Thanks — we&rsquo;ll be in touch soon.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input name="name" type="text" placeholder="Name" required />
      <Input name="email" type="email" placeholder="Email" required />
      <Textarea name="message" placeholder="Message" required />
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : submitLabel}
      </Button>
      {status === "error" ? (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      ) : null}
    </form>
  );
}
