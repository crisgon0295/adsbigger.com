import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="adsBigger — Instalamos empleados de IA"
      width={200}
      height={42}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[12.5rem] w-full h-[42px]', className)}
      src="/brand/logo-horizontal-white.svg"
    />
  )
}
