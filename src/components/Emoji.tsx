import type { ReactNode } from 'react'

interface Props {
  className?: string
  children?: ReactNode
}

export const Emoji = ({ className, children }: Props) => {
  return <span className={className}>{children}</span>
}
