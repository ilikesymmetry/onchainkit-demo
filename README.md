# Onchainkit Demo

Sandbox environment to stage new releases of OnchainKit on different popular web frameworks.

We plan to test on 3 frameworks:

1. NextJS (app router)
2. NextJS (pages router)
3. Vite

**For now, only #1 is fully functional.**

## Getting Started

Navigate to NextJS (app router) demo app

```bash
cd packages/nextjs-app
```

Update location of your `"pnpm"."overrides"."@coinbase/onchainkit"` if necessary in `package.json`.
This works out of the box if you place the `onchainkit` repo right next to this one!

Intall dependencies (must use `pnpm` for local overrides)

```bash
pnpm install
```

Whenever you make a change to your local version of OnchainKit, first rebuild within that terminal tab.

```bash
yarn build
```

Then navigate back to your tab with `onchainkit-demo/packages/nextjs-app` and reload

```bash
pnpm run reload
```
