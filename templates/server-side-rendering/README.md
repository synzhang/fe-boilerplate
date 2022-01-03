# Web Server Side Rendering App Boilerplate

## Overview

### Features

1. Server Side Rendering
2. TypeScript
3. I18n
4. Error tracking
5. Performance Monitoring


## Getting Started

### Init

```
npx create-next-app --typescript
```

### Dependencies

#### Base

```
npm install --save-exact react-query next-auth @sentry/nextjs @sentry/tracing
npm install --save-exact --save-dev cross-env lint-staged prettier
```

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

## Structure
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
