import logger from '@/utils/logger'
import { State, Action } from './index'

export const initialState = {}

export const reducer = (state: State, action: Action): State => {
  const { type, payload } = action

  switch (type) {
  default:
    logger.warn('未匹配到 action')
    return state
  }
}
