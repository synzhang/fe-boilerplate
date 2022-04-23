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
├── hooks             // shared hooks used across the entire application
├── lang              // locale files
├── layouts           // shared layout components
│   ├── base          // the most basic layout, use in everywhere
│   ├── basic         // the most used layout, use in most pages
│   └── blank         // the blank layout, use in somewhere that don't need components in basic
├── lib               // re-exporting different libraries pre-configured for the application
├── pagePartials      // page sub-components
├── pages             // pages
├── public            // public files
├── services          // application services
│   ├── api           // api requests
│   ├── auth          // authentication
│   ├── i18n          // internationalization
│   └── sentry        // sentry integration
├── styles            // global stylesheets
│   ├── abstracts     // SASS variables, mixins, functions, etc
│   ├── components    // styles for components
│   ├── normalize.css // css reset
│   └── global.scss   // global styles
├── test              // test utilities and mock server
├── types             // base typescripts types used across the application
│   ├── business      // business types
│   └── global.d.ts   // global types
└── utils             // shared utility functions
```

## Components And Styling
## Forms

- [Formik](https://github.com/formium/formik)
- [Yup](https://github.com/jquense/yup)

## API Layer
## State Management
## Auth
## API Mock Server
## Testing
## Error Handling

### Sentry

## Security

- [DOMPurify](https://github.com/cure53/DOMPurify)

## Performance

### Sentry
