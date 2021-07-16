import {
  createContext,
  useContext,
  useReducer,
  FC,
  Dispatch,
} from 'react'
import { reducer, initialState } from './slice'

export interface State {

}

export interface Action {
  type: string
  payload?: any
}

interface ProviderProps {
  children: any
}

const GlobalStateContext = createContext<State>()
const DispatchContext = createContext<Dispatch<Action>>()

const Provider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalStateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </GlobalStateContext.Provider>

  )
}

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext)

  if (typeof context === 'undefined') {
    throw new Error('use 必须在 Provider 中使用')
  }

  return context
}

export const useDispatch = () => {
  const context = useContext(DispatchContext)

  if (typeof context === 'undefined') {
    throw new Error('useDispatch 必须在 Provider 中使用')
  }

  return context
}

export default Provider
