import { FC, ReactNode } from 'react'
import './index.less'

interface PropsInterface {
  maxHeight: number
  children: ReactNode
}

const ScrollBox: FC<PropsInterface> = props => {
  const { maxHeight, children } = props

  return (
    <div
      className='scroll-box'
      style={{ maxHeight }}
    >
      <div className='scroll-box-indicator-up' />
      {children}
      <div className='scroll-box-indicator-down' />
    </div>
  )
}

export default ScrollBox

