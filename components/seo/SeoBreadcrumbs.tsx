import { Link } from '@/i18n/routing'
import { Fragment, type ReactNode } from 'react'

export type SeoCrumb = { label: string; href?: string }

const SeoBreadcrumbs = ({
  items,
  variant = 'default'
}: {
  items: SeoCrumb[]
  variant?: 'default' | 'onDark'
}): ReactNode => {
  const linkClass =
    variant === 'onDark'
      ? 'text-white/80 transition-colors hover:text-white'
      : 'transition-colors hover:text-primary-600'
  const currentClass =
    variant === 'onDark' ? 'font-medium text-white' : 'font-medium text-gray-900'
  const sepClass = variant === 'onDark' ? 'text-white/50' : 'text-gray-400'
  const navClass =
    variant === 'onDark'
      ? 'mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm'
      : 'mb-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500'

  return (
    <nav aria-label="Breadcrumb" className={navClass}>
      {items.map((item, index) => (
        <Fragment key={`${item.label}-${index}`}>
          {index > 0 && (
            <span className={`select-none ${sepClass}`} aria-hidden>
              /
            </span>
          )}
          {item.href != null ? (
            <Link href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ) : (
            <span className={currentClass}>{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  )
}

export default SeoBreadcrumbs
