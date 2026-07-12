import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import { cn } from "../lib/cn";

const defaultComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="mt-8 text-3xl font-semibold tracking-tight first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 text-2xl font-semibold tracking-tight first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 text-xl font-semibold tracking-tight first:mt-0">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-4 leading-relaxed first:mt-0">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-4 border-l-2 border-border pl-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-1 pl-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-4 list-decimal space-y-1 pl-5">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="underline underline-offset-2 hover:no-underline"
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
};

export interface RichTextProps {
  value: unknown;
  className?: string;
  components?: PortableTextComponents;
}

export function RichText({ value, className, components }: RichTextProps) {
  if (!value) return null;

  return (
    <div className={cn(className)}>
      <PortableText
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        value={value as any}
        components={components ?? defaultComponents}
      />
    </div>
  );
}
