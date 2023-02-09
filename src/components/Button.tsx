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
    'inline-flex justify-center rounded bg-[#85EBD9] p-4 text-base font-semibold text-black hover:bg-cyan-700 hover:text-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 active:text-white/70 transition-all',
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
