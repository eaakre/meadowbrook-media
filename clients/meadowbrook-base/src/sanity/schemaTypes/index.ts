import type { SchemaTypeDefinition } from "sanity";

import { link } from "./objects/link";
import { seo } from "./objects/seo";

import { page } from "./documents/page";
import { post } from "./post";

import { cardGridModule } from "./modules/cardGridModule";
import { ctaModule } from "./modules/ctaModule";
import { faqModule } from "./modules/faqModule";
import { heroModule } from "./modules/heroModule";
import { logoCloudModule } from "./modules/logoCloudModule";
import { richTextModule } from "./modules/richTextModule";
import { testimonialsModule } from "./modules/testimonialsModule";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    page,
    post,

    // reusable objects
    seo,
    link,

    // page builder modules
    heroModule,
    ctaModule,
    faqModule,
    testimonialsModule,
    logoCloudModule,
    cardGridModule,
    richTextModule,
  ],
};
