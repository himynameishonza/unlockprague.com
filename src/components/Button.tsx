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
    'inline-flex justify-center rounded-sm bg-[#85EBD9] p-4 text-base font-semibold text-black hover:bg-cyan-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70',
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
