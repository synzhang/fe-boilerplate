import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Provider from '@/contexts'

interface Props {
}

const queryClient = new QueryClient()

const App: FC<Props> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <div>Hello world!</div>
      </Provider>
    </QueryClientProvider>
  )
}

export default App
