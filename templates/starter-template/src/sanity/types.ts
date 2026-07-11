import type { ImageHotspot, ImageCrop } from "sanity";

export interface SanityImageValue {
  [key: string]: unknown;
  asset: { _ref: string; _type: "reference" };
  hotspot?: ImageHotspot;
  crop?: ImageCrop;
}

export interface LinkValue {
  label: string;
  href: string;
}

export interface HeroModule {
  _type: "heroModule";
  _key: string;
  eyebrow?: string;
  heading: string;
  body?: string;
  image?: SanityImageValue;
  primaryCta?: LinkValue;
  secondaryCta?: LinkValue;
}

export interface CtaModule {
  _type: "ctaModule";
  _key: string;
  heading: string;
  body?: string;
  cta: LinkValue;
}

export interface FaqModule {
  _type: "faqModule";
  _key: string;
  heading?: string;
  items: { question: string; answer: string }[];
}

export interface TestimonialsModule {
  _type: "testimonialsModule";
  _key: string;
  heading?: string;
  items: { quote: string; name: string; role?: string; avatar?: SanityImageValue }[];
}

export interface LogoCloudModule {
  _type: "logoCloudModule";
  _key: string;
  heading?: string;
  logos: { name: string; image: SanityImageValue; href?: string }[];
}

export interface CardGridModule {
  _type: "cardGridModule";
  _key: string;
  heading?: string;
  cards: { title: string; body?: string; image?: SanityImageValue; href?: string }[];
}

export interface RichTextModule {
  _type: "richTextModule";
  _key: string;
  body: unknown;
}

export type PageModule =
  | HeroModule
  | CtaModule
  | FaqModule
  | TestimonialsModule
  | LogoCloudModule
  | CardGridModule
  | RichTextModule;

export interface SeoData {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImageValue;
  noIndex?: boolean;
}

export interface PageData {
  title: string;
  slug: { current: string };
  seo?: SeoData;
  pageBuilder?: PageModule[];
}
