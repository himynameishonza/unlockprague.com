import clsx from 'clsx'
import { ReactNode } from 'react'

export function Container({
  className,
  children,
  ...props
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  )
}
