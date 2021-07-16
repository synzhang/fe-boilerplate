import { FC } from 'react'
import Provider from '../contexts'

interface Props {
}

const App: FC<Props> = () => {
  return (
    <Provider>
      <div>Hello world!</div>
    </Provider>
  )
}

export default App
