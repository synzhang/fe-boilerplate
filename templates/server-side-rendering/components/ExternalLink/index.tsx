import { FC, ReactNode } from 'react';

interface Props {
  href: string
  children: ReactNode
}

const ExternalLink: FC<Props> = props => {
  const { url, children, ...rest } = props

  return (
    <a
      href={url}
      target='_blank'
      {...rest}
      rel='noopener noreferrer'
    >
      {children}
    </a>
  )
}

export default ExternalLink;
