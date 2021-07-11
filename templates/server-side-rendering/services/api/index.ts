import {
  HTTP_STATUS_CODE,
} from 'constants/httpStatuses'

const localStorageKey = '_token_'

export interface RequestConfig {
  headers?: any
  body?: any
  timeout?: number
  beforeSend?(config: any): any
}

export interface RequestResult {
  success: boolean // if request is success
  data?: any // response data
  errorCode?: string // code for errorType
  errorMessage?: string // message display to user
  showType?: SHOW_TYPE // error display type： 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page
  traceId?: string // Convenient for back-end Troubleshooting: unique request ID
  host?: string // Convenient for backend Troubleshooting: host of current access server
}

const enum SHOW_TYPE {
  SILENT = 0,
  WARN,
  ERROR,
  NOTIFICATION,
  PAGE
}

export default function request(
  endpoint: string,
  initConfig: RequestConfig = {} as RequestConfig
): Promise<RequestResult | undefined> {
  const { body, timeout, beforeSend, ...customConfig } = initConfig
  const token = window.localStorage.getItem(localStorageKey)
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }
  let abortController
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  if (timeout) {
    abortController = new AbortController()

    setTimeout(() => {
      abortController.abort()
    }, timeout)
  }
  const config = {
    method: body ? 'POST' : 'GET',
    signal: abortController.signal,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }
  if (body) {
    config.body = JSON.stringify(body)
  }

  if (beforeSend) beforeSend.call(window, config)

  return window
    .fetch(`${process.env.API_URL}/${endpoint}`, config)
    .then(() => console.log('Put interceptors here'))
    .then(async response => {
      if (response.status === HTTP_STATUS_CODE.UNAUTHORIZED) {
        logout()
        window.location.assign(window.location.href)
        return
      }
      if (response.ok) {
        const data = await response.json()

        return {
          success: true,
          data,
        }
      } else {
        const errorMessage = await response.text()

        return Promise.reject({
          success: false,
          errorCode: response.status,
          errorMessage,
          showType: SHOW_TYPE.ERROR,
        })
      }
    })
}

function logout() {
  window.localStorage.removeItem(localStorageKey)
}
