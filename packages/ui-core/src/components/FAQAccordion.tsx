"use client";

import { useState } from "react";
import { Container } from "./Container";
import { cn } from "../lib/cn";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  heading?: string;
  items: FAQItem[];
}

export function FAQAccordion({ heading, items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Container className="max-w-3xl">
      {heading ? (
        <h2 className="text-center text-3xl font-semibold tracking-tight">
          {heading}
        </h2>
      ) : null}
      <div className="mt-8 divide-y divide-border border-y border-border">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between py-4 text-left text-base font-medium"
              >
                {item.question}
                <span
                  className={cn(
                    "ml-4 shrink-0 transition-transform",
                    isOpen && "rotate-45"
                  )}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {isOpen ? (
                <p className="pb-4 text-muted-foreground">{item.answer}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </Container>
  );
}
