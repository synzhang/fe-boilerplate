import * as Sentry from '@sentry/nextjs'

export const captureException = ({
  level = Sentry?.Severity?.Error,
  url,
  method,
  requestHeaders,
  requestBody,
  status,
  responseHeaders,
  responseBody,
  message,
  apiBusinessExceptionCode,
}: {
  level?: Sentry.Severity
  url: string
  method: string
  requestHeaders: any
  requestBody: any
  status: number | string
  responseHeaders: any
  responseBody?: any
  message: string
  apiBusinessExceptionCode?: number | string
}) => {
  Sentry?.withScope((scope) => {
    const additional = {
      tags: {
        api_business_exception: typeof apiBusinessExceptionCode !== 'undefined',
        api_business_exception_code: apiBusinessExceptionCode,
      },
    }
    scope.setExtra('request_url', url)
    scope.setExtra('request_method', method)
    scope.setExtra('request_header', requestHeaders)
    scope.setExtra('request_body', requestBody)
    scope.setExtra('response_status_code', status)
    scope.setExtra('response_header', responseHeaders)
    scope.setExtra('response_body', responseBody)
    scope.setLevel(level)
    Sentry.captureException(message, additional)
  })
}
