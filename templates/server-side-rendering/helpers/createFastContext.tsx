import {
  ReactNode,
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  useCallback,
} from 'react'

type Action = {
  type: string
  payload: any
}
type SetterValue<Store> = Partial<Store> | Action

export default function createFastContext<Store> (
  initialState: Store,
  reducer?: (state: Store, action: Action) => Store
) {
  const useStoreData = (): {
    get: () => Store
    set: (value: SetterValue<Store>) => void
    subscribe: (callback: () => void) => () => void
  } => {
    const store = useRef(initialState)

    const get = useCallback(() => store.current, [])

    const subscribers = useRef(new Set<() => void>())

    const set = useCallback((value: SetterValue<Store>) => {
      if (!reducer) {
        store.current = { ...store.current, ...(value as Partial<Store>) }
      } else {
        store.current = reducer({ ...store.current }, value as Action)
      }
      subscribers.current.forEach(callback => callback())
    }, [])

    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback)
      return () => subscribers.current.delete(callback)
    }, [])

    return {
      get,
      set,
      subscribe,
    }
  }

  type UseStoreDataReturnType = ReturnType<typeof useStoreData>

  const StoreContext = createContext<UseStoreDataReturnType | null>(null)

  const Provider = ({ children }: { children: ReactNode }) => (
    <StoreContext.Provider value={useStoreData()}>
      {children}
    </StoreContext.Provider>
  )

  function useStore<SelectorOutput> (
    selector: (state: Store) => SelectorOutput | Store = state => ({ ...state })
  ): [SelectorOutput | Store, (value: SetterValue<Store>) => void] {
    const store = useContext(StoreContext)
    if (!store) {
      throw new Error('Store not found')
    }

    const [state, setState] = useState(selector(store.get()))

    useEffect(() => (
      store.subscribe(() => setState(selector(store.get())))
    /* eslint-disable react-hooks/exhaustive-deps */
    ), [])
    /* eslint-enable react-hooks/exhaustive-deps */

    return [state, store.set]
  }

  return {
    Provider,
    useStore,
  }
}
