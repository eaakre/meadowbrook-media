"use client";

import { useState, type ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "../lib/cn";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  logo: ReactNode;
  links: NavLink[];
  cta?: NavLink;
}

export function Navbar({ logo, links, cta }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200">
      <Container className="flex items-center justify-between py-4">
        <a href="/" className="font-semibold">
          {logo}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              {link.label}
            </a>
          ))}
          {cta ? (
            <a
              href={cta.href}
              className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700"
            >
              {cta.label}
            </a>
          ) : null}
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-6 bg-neutral-900" />
          <span className="mt-1.5 block h-0.5 w-6 bg-neutral-900" />
          <span className="mt-1.5 block h-0.5 w-6 bg-neutral-900" />
        </button>
      </Container>

      <div
        className={cn(
          "border-t border-neutral-200 md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <Container className="flex flex-col gap-4 py-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium">
              {link.label}
            </a>
          ))}
          {cta ? (
            <a href={cta.href} className="text-sm font-medium">
              {cta.label}
            </a>
          ) : null}
        </Container>
      </div>
    </header>
  );
}
