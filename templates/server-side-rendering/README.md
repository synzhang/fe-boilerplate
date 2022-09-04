# Web Server Side Rendering App Boilerplate

## Overview

### Features

1. Server Side Rendering
2. SEO Friendly
3. Responsive
4. TypeScript
5. I18n
6. Error tracking
7. Performance Monitoring


## Getting Started

### Init

```
npx create-next-app@latest --typescript
```

### Dependencies

#### Base

```
npm install --save-exact react-query next-auth @sentry/nextjs @sentry/tracing
npm install --save-exact --save-dev cross-env lint-staged prettier
```

#### Polyfill

https://polyfill.io/v3/

#### I18n

```
npm install --save-exact react-intl
npm install --save-exact --save-dev @formatjs/cli @formatjs/intl-datetimeformat @formatjs/intl-numberformat babel-plugin-formatjs
```

#### Dev Dependencies

```
npm install --save-exact --save-dev standard-version
```

#### Security

```
npm install --save-exact --save-dev eslint-plugin-security
```


## Configuration

### [Sentry](https://docs.sentry.io/platforms/javascript/guides/nextjs/)

Run the following command from the root level of your project:

```
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

https://docs.sentry.io/platforms/javascript/sourcemaps/uploading/

## Structure

```
app
├── assets            // static files such as images, fonts, etc
├── components        // shared components used across the entire application
├── constants         // shared constants
├── contexts          // shared react contexts
├── docs              // documentation
├── hooks             // shared hooks used across the entire application
├── locale            // locale files
├── layouts           // shared layout components
│   ├── base          // the most basic layout, use in everywhere
│   ├── basic         // the most used layout, use in most pages
│   └── blank         // the blank layout, use in somewhere that don't need components in basic
├── lib               // re-exporting different libraries pre-configured for the application
│   └── sentry        // sentry integration
├── mock              // API mock
├── pagePartials      // page sub-components
├── pages             // pages
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

## Components And Styling

## Forms

- [Formik](https://github.com/formium/formik)
- [Yup](https://github.com/jquense/yup)

## API Layer

## State Management

- Initial State
- Global State

### [Recoil](https://github.com/facebookexperimental/Recoil)

Recoil is an experimental state management library for React apps. It provides several capabilities that are difficult to achieve with React alone, while being compatible with the newest features of React.

### [Zustand](https://github.com/pmndrs/zustand)

Bear necessities for state management in React.

## Authentication & Authorization

## Coding Style

- [ESLint](https://github.com/eslint/eslint): Find and fix problems in your JavaScript code.
- [Stylelint](https://github.com/stylelint/stylelint): A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
- [Prettier](https://github.com/prettier/prettier): Prettier is an opinionated code formatter.

Tools:

- [Husky](https://github.com/typicode/husky): Git hooks made easy 🐶 woof!
- [lint-staged](https://github.com/okonet/lint-staged): Run linters on git staged files.

## Design System

## API Mock Server

## Testing

## Error Handling

### Sentry

## Security

- [DOMPurify](https://github.com/cure53/DOMPurify)

## Performance

### Sentry

## Instrumentation

1. Measurement and tracking are key for a stable system
2. Monitoring
3. Error logging (for tracing)
4. Debugging
5. Logs/Track all events happened in the application
6. Implement Analytics (GA)
7. Sentry (to capture errors)
8. Newrelic (to detect failures)

## SEO

1. Crawling
2. Use of Heading tags
3. Semantic tags
4. Site Ranking
5. Sitemap
6. Meta Keywords
7. Organic approach vs Inorganic approach
8. Use of alt tags
9. 301 Redirects (bad for SEO)
10. Robots.txt
11. Open graph protocol for social graph

## Accessibility

1. Alt attributes
2. Aria-labels
3. Multi-device support, slow network speed
4. Color contrast, semantics tags

## Progressive Web App

## Debugger

https://github.com/ericclemmons/click-to-component
https://github.com/shuding/tilg

## Versioning of artifacts

1. Artifacts tracking (ex: Confluence)
2. Rollback & backup mechanisms

## Checklist

[The Front-End Checklist](https://frontendchecklist.io/)
