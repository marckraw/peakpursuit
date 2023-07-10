<p align="center">
    <img src="apps/web/public/assets/logo-1.png" width="200px" />
</p>

# Previous project

Some more data and start of development could be find here: https://github.com/marckraw/travel-journal/tree/master

This is the old repo of the project named travel-jouranl.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Stack

- `Next.js 13+` - Server Components and all the other goodies
- `Next.js API Routes` - for the backend
- `PostgreSQL` - for the database
- `TypeORM` or `DrizzleORM` - for the ORM
- `Neon` - for the hosting of database - https://console.neon.tech/app/projects/green-art-930575/
- `Vercel` - for the hosting of frontend - https://vercel.com/marckraw/peakpursuit/
- `Vercel` - for the hosting of backend - https://vercel.com/marckraw/peakpursuit/

### Build

To build all apps and packages, run the following command:

```
cd peakpursuit
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
cd peakpursuit
yarn dev
```
