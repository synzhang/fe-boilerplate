import { FC, ReactNode, memo, useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import { Tooltip } from 'antd'
import { TooltipProps } from 'antd/lib/tooltip'

interface PropsInterface {
  text: string
  className?: string
  lineClamp?: 1 | 2 | 3 | 4
  placeholder?: ReactNode
  tooltipProps?: Omit<TooltipProps, 'title'>
}

const LongText: FC<PropsInterface> = memo(props => {
  const {
    text,
    className,
    lineClamp,
    placeholder = '-',
    tooltipProps = {},
  } = props
  const [isOverflown, setIsOverflown] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current!

    setIsOverflown(element.scrollHeight > element.clientHeight)
  }, [text])

  return (
    <Tooltip
      {...tooltipProps}
      title={isOverflown ? text : undefined}
    >
      <div
        ref={ref}
        className={classNames({
          [`line-clamp-${lineClamp}`]: typeof lineClamp === 'number',
          [`${className}`]: className,
        })}
      >
        {text || placeholder}
      </div>
    </Tooltip>
  )
})

export default LongText
