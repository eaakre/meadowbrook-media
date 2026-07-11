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

## Ejecting this client to its own repo

1. Copy `clients/<name>` out to a new folder.
2. Publish `@meadowbrook/ui-core` (e.g. to GitHub Packages) if the client still needs it, or vendor the components directly into the new repo.
3. Update the dependency version in `package.json` from `"*"` to the published version.
4. `git init` and push to the client's own repo.
