# Meadowbrook Media — Freelance Monorepo

Private monorepo for freelance client work. One shared component library, one starter template, and every client project living side by side so a bug fix in shared code updates everyone at once.

```
meadowbrook-media/
├── packages/
│   └── ui-core/            shared React/TS components (@meadowbrook/ui-core)
├── templates/
│   └── starter-template/   Next.js + TS + Tailwind + Sanity starter — copy this per client
└── clients/
    └── <client-name>/      one folder per active client project
```

Stack: Next.js (App Router), React, TypeScript, Tailwind, Sanity (embedded studio).

## Getting started

```
npm install
```

## Creating a new client project

```
npm run new-client -- <client-name>
```

This copies `templates/starter-template` into `clients/<client-name>` and renames its package. Then:

```
cd clients/<client-name>
cp .env.local.example .env.local   # add Sanity project id/dataset
cd ../..
npm install
npm run dev --workspace=<client-name>
```

## Fixing a bug in shared components

Edit files under `packages/ui-core/src`. Every client workspace picks up the change immediately in dev (no publish step, no version bump) because they all resolve `@meadowbrook/ui-core` to this local folder.

## Ejecting a client to their own repo

See [templates/starter-template/README.md](templates/starter-template/README.md#ejecting-this-client-to-its-own-repo). Short version: copy their `clients/<name>` folder out, publish or vendor `ui-core`, swap the dependency version, and `git init` fresh.

## Notes

- `clients/*` folders are tracked normally in this repo (not git-ignored). If a client needs full isolation instead, eject them (see above) rather than adding them here.
- Keep `packages/ui-core` framework-agnostic where possible so it isn't accidentally coupled to one client's needs.
