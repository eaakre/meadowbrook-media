# Client Starter Template

Next.js 14 (App Router) + TypeScript + Tailwind + Sanity (embedded studio at `/studio`), wired to the shared `@meadowbrook/ui-core` component library.

Don't run this template in place — it's meant to be copied into `clients/<name>` for each new project (see the root README). Editing it directly changes what every future client starts from.

## Spinning up a new client

From the monorepo root:

```
npm run new-client -- acme-co
cd clients/acme-co
cp .env.local.example .env.local   # fill in Sanity project id/dataset
cd ../..
npm install
npm run dev --workspace=acme-co
```

## Sanity

- Studio lives at `/studio` (embedded, no separate deploy needed).
- Schema types are in `src/sanity/schemaTypes/`.
- Client/query helpers are in `src/sanity/client.ts`.

### Pages & sections

Content is modeled as `page` documents (`title`, `slug`, `seo` with OG image, and a `pageBuilder` array). Each `pageBuilder` entry is a typed module — `heroModule`, `ctaModule`, `faqModule`, `testimonialsModule`, `logoCloudModule`, `cardGridModule`, `richTextModule` (see `src/sanity/schemaTypes/modules/`).

`src/components/PageBuilder.tsx` maps each module to its `ui-core` component (`Hero`, `CTASection`, `FAQAccordion`, etc.), resolving images via `urlFor()` along the way. The homepage renders the `page` with slug `index`; every other page is served from `(site)/[slug]`.

To add a new section type: add a module schema, register it in `page.ts`'s module list and `schemaTypes/index.ts`, add a case to `PageBuilder.tsx`, and (if the UI doesn't exist yet) a component in `packages/ui-core`.

## Theming

`ui-core` components never hardcode colors or radius — they use semantic Tailwind classes (`bg-primary`, `text-muted-foreground`, `border-border`, `rounded-md`, etc.) that resolve to CSS variables defined in this client's own `src/app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 96%;
  --secondary-foreground: 0 0% 9%;
  --muted: 0 0% 98%;
  --muted-foreground: 0 0% 45%;
  --border: 0 0% 90%;
  --destructive: 0 84% 60%;
  --radius: 0.375rem;
}
```

Values are HSL channels without the `hsl()` wrapper, so Tailwind can apply opacity modifiers (`bg-primary/90`). To restyle a client:

- **Colors**: change the HSL values above. `--primary`/`--primary-foreground` drive `Button`, `Navbar`'s CTA, and anything using the primary variant. `Section tone="inverted"` (used by `CTASection`) swaps `--foreground`/`--background`, so it adapts automatically.
- **Radius**: change `--radius`; `tailwind.config.ts` derives `rounded-sm`/`md`/`lg` from it, so every card, button, and input updates together.
- **Fonts**: not yet tokenized — swap the font in `layout.tsx` via `next/font` and update `tailwind.config.ts`'s `fontFamily`.

None of this requires touching `packages/ui-core` — a client's whole look lives in that one `:root` block.

## Ejecting this client to its own repo

1. Copy `clients/<name>` out to a new folder.
2. Publish `@meadowbrook/ui-core` (e.g. to GitHub Packages) if the client still needs it, or vendor the components directly into the new repo.
3. Update the dependency version in `package.json` from `"*"` to the published version.
4. `git init` and push to the client's own repo.
