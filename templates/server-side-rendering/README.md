# Web Server Side Rendering App Boilerplate

## Overview

### Features

1. SEO Friendly
2. Responsive
3. Type Safe
4. International
5. Error tracking
6. Performance Monitoring

## Getting Started

### Initialize

```shell
pnpm create next-app
```

### Common Dependencies

- [normalize.css](https://github.com/necolas/normalize.css): A modern alternative to CSS resets.
- [TanStack Query](https://github.com/tanstack/query): Powerful asynchronous state management, server-state utilities and data fetching for the web. TS/JS, React Query, Solid Query, Svelte Query and Vue Query.
- [Sentry](https://github.com/getsentry/sentry-javascript): Code breaks, fix it faster.
- [cross-env](https://github.com/kentcdodds/cross-env): Cross platform setting of environment scripts.
- [lint-staged](https://github.com/lint-staged/lint-staged): Run linters on git staged files.
- [Standard Version](https://github.com/conventional-changelog/standard-version): Automate versioning and CHANGELOG generation, with semver.org and conventionalcommits.org.

```shell
pnpm add --save-exact normalize.css react-query @sentry/nextjs @sentry/tracing
pnpm add --save-exact --save-dev cross-env lint-staged prettier
```

### Typography

- [heti](https://github.com/sivan/heti): A typography style enhancement designed specifically for presenting Chinese content.

### UI Components

- [shadcn/ui](https://github.com/shadcn-ui/ui): Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.

```shell
# https://ui.shadcn.com/docs/installation/next

pnpm create next-app@latest my-app --typescript --tailwind --eslint
pnpm dlx shadcn-ui@latest init
```

#### Icon

- [Tabler Icons](https://github.com/tabler/tabler-icons): A set of over 4900 free MIT-licensed high-quality SVG icons for you to use in your web projects.

#### Virtual List

- [React Virtualized](https://github.com/bvaughn/react-virtualized): React components for efficiently rendering large lists and tabular data.

#### Uploader

- [Uppy](https://github.com/transloadit/uppy): The next open source file uploader for web browsers.

#### Drag & Drop

- [Sortable](https://github.com/SortableJS/Sortable): Reorderable drag-and-drop lists for modern browsers and touch devices.

#### Editor

- [Lexical](https://github.com/facebook/lexical): An extensible text editor framework that provides excellent reliability, accessibility and performance.

### Data Visualization

- [d3](https://github.com/d3/d3): Bring data to life with SVG, Canvas and HTML.
- [recharts](https://github.com/recharts/recharts): Redefined chart library built with React and D3.

### HTTP Client

- [axios](https://github.com/axios/axios): Promise based HTTP client for the browser and node.js.

### State Management

#### Logical State

- [Zustand](https://github.com/pmndrs/zustand): Bear necessities for state management in React.
- [Jotai](https://github.com/pmndrs/jotai): Primitive and flexible state management for React.
- [Recoil](https://github.com/facebookexperimental/Recoil): An experimental state management library for React apps. It provides several capabilities that are difficult to achieve with React alone, while being compatible with the newest features of React.

#### Server State

- [TanStack Query](https://github.com/tanstack/query): Powerful asynchronous state management, server-state utilities and data fetching for the web. TS/JS, React Query, Solid Query, Svelte Query and Vue Query.
- [SWR](https://github.com/vercel/swr): React Hooks for Data Fetching.

#### Form State

- [React Hook Form](https://github.com/react-hook-form/react-hook-form): React Hooks for form state management and validation (Web + React Native).
- [Formik](https://github.com/formium/formik): Build forms in React, without the tears.

#### Navigation State

- [React Router](https://github.com/remix-run/react-router): Declarative routing for React.

#### Browser State

- LocalStorage/SessionStorage
- Cookie
- IndexedDB

### Animation

- [Auto Animate](https://github.com/formkit/auto-animate): A zero-config, drop-in animation utility that adds smooth transitions to your web app. You can use it with React, Vue, or any other JavaScript application.

### I18n

- [FormatJS](https://formatjs.io/): Internationalize your web apps on the client & server.

```shell
pnpm add --save-exact react-intl
pnpm add --save-exact --save-dev @formatjs/cli @formatjs/intl-datetimeformat @formatjs/intl-numberformat babel-plugin-formatjs
```

#### Datetime

- [Day.js](https://github.com/iamkun/dayjs/): The next open source file uploader for web browsers.

```shell
pnpm add --save-exact dayjs
```

### Authentication & Authorization

- [NextAuth](https://github.com/nextauthjs/next-auth/): Authentication for the Web.

### ORM

- [Prisma](https://github.com/prisma/prisma): Next-generation ORM for Node.js & TypeScript | PostgreSQL, MySQL, MariaDB, SQL Server, SQLite, MongoDB and CockroachDB.

### Utils

- [clsx](https://github.com/lukeed/clsx): A tiny (239B) utility for constructing `className` strings conditionally.
- [Zod](https://github.com/colinhacks/zod): TypeScript-first schema validation with static type inference.
- [lazysizes](https://github.com/aFarkas/lazysizes): High performance and SEO friendly lazy loader for images (responsive and normal), iframes and more, that detects any visibility changes triggered through user interaction, CSS or JavaScript without configuration.
- [blurhash](https://github.com/woltapp/blurhash): A very compact representation of a placeholder for an image.
- [Immer](https://github.com/immerjs/immer): Create the next immutable state by mutating the current one.

### Polyfill

- [Polyfill.io](https://polyfill.io): Upgrade the web. Automatically.

### SEO

- [Next SEO](https://github.com/garmeeh/next-seo): Next SEO is a plug in that makes managing your SEO easier in Next.js projects.

### Security

- [DOMPurify](https://github.com/cure53/DOMPurify): A DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.
- [eslint-plugin-security](https://github.com/eslint-community/eslint-plugin-security): ESLint rules for Node Security.

```shell
pnpm add --save-exact --save-dev eslint-plugin-security
```

### Performance

- [web-vitals](https://github.com/GoogleChrome/web-vitals): Essential metrics for a healthy site.

### Progressive Web App

- [Workbox](https://github.com/GoogleChrome/workbox): JavaScript libraries for Progressive Web Apps.

### Accessibility

1. Alt attributes
2. Aria-labels
3. Multi-device support, slow network speed
4. Color contrast, semantics tags

- [ally.js](https://github.com/medialize/ally.js): JavaScript library to help modern web applications with accessibility concerns.

### Documentation

- [Docusaurus](https://github.com/facebook/docusaurus): Easy to maintain open source documentation websites.

### Developer Experience

#### Error Handling

- [Sentry](https://github.com/getsentry/sentry-javascript): Code breaks, fix it faster.

#### Coding Style

- [ESLint](https://github.com/eslint/eslint): Find and fix problems in your JavaScript code.
- [Stylelint](https://github.com/stylelint/stylelint): A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
- [Prettier](https://github.com/prettier/prettier): Prettier is an opinionated code formatter.

#### Debugger

- [click-to-component](https://github.com/ericclemmons/click-to-component): Option+Click React components in your browser to instantly open the source in VS Code.
- [tilg](https://github.com/shuding/tilg): A magical React Hook that helps you debug components.

#### API Mock Server

- [json-server](https://github.com/typicode/json-server): Get a full fake REST API with zero coding in less than 30 seconds (seriously).

#### Testing

- [Jest](https://github.com/jestjs/jest): Delightful JavaScript Testing.

#### End to End

- [Playwright](https://github.com/microsoft/playwright): Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.

#### Utils

- [react-testing-library](https://github.com/testing-library/react-testing-library): Simple and complete React DOM testing utilities that encourage good testing practices.
- [react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library): Simple and complete React hooks testing utilities that encourage good testing practices.

#### Tools

- [Husky](https://github.com/typicode/husky): Git hooks made easy 🐶 woof!
- [lint-staged](https://github.com/okonet/lint-staged): Run linters on git staged files.

#### Versioning of artifacts

1. Artifacts tracking
2. Rollback & backup mechanisms

## Structure

```
app
├── assets            // static files such as images, fonts, etc
├── components        // shared components used across the entire application
├── constants         // shared constants
├── contexts          // shared react contexts
├── docs              // documentation
├── hooks             // shared hooks used across the entire application
├── helpers           // shared helpers used across the entire application
├── locale            // locale files
├── layouts           // shared layout components
│   ├── base          // the most basic layout, use in everywhere
│   ├── basic         // the most used layout, use in most pages
│   └── blank         // the blank layout, use in somewhere that don't need components in basic
├── lib               // re-exporting different libraries pre-configured for the application
│   └── sentry        // sentry integration
├── mock              // API mock
├── public            // public files
├── services          // application services
│   ├── api           // api requests
│   ├── auth          // authentication
│   └── i18n          // internationalization
├── styles            // global stylesheets
│   ├── abstracts     // SASS variables, mixins, functions, etc
│   ├── components    // styles for components
│   ├── normalize.css // css reset
│   └── global.scss   // global styles
├── test              // test utilities and mock server
├── types             // base typescripts types used across the application
│   ├── business      // business types
│   └── global.d.ts   // global types
├── utils             // shared utility functions
├── tsconfig.json     // TypeScript configs
└── .env              // environment variables
```

## Configuration

### [Sentry](https://docs.sentry.io/platforms/javascript/guides/nextjs/)

Run the following command from the root level of your project:

```shell
npx @sentry/wizard -i nextjs
```

To capture Next.js API Route errors and monitor server performance, you need to wrap your handlers with a Sentry function:

```ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { withSentry } from '@sentry/nextjs'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
}

export default withSentry(handler)
```

#### Source Map

- [Uploading Source Maps](https://docs.sentry.io/platforms/javascript/sourcemaps/uploading/)


## Checklist

- [The Front-End Checklist](https://frontendchecklist.io/): The Front-End Checklist Application is perfect for modern websites and meticulous developers!
- [Design System Checklist](https://www.designsystemchecklist.com/): An open-source checklist to help you plan, build and grow your design system.
- [Checklist Design](https://www.checklist.design/): A collection of the best design practices.
