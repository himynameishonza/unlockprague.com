import Link from 'next/link'
import clsx from 'clsx'
import { ReactNode } from 'react'

export function Button({
  href,
  className,
  children,
}: {
  href?: string
  className?: string
  children: ReactNode
}) {
  className = clsx(
    'inline-flex justify-center rounded bg-rose-500 p-4 text-base text-white font-semibold hover:bg-rose-600 transition-all',
    className
  )

  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <button className={className}>{children}</button>
  )
}
