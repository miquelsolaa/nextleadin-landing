"use client"
import {useEffect, useRef, useState, useTransition} from 'react'
import {locales, defaultLocale as routingDefault, type AppLocale, usePathname, useRouter, Link} from '@/i18n/routing'
import {useLocale} from 'next-intl'
import {ChevronDown} from 'lucide-react'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const currentLocale = useLocale() as AppLocale
  const [isPending, startTransition] = useTransition()
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const order: readonly AppLocale[] = ['es', 'en', 'ca']
  const nextOf = (l: AppLocale): AppLocale => order[(order.indexOf(l) + 1) % order.length]

  const buildTarget = (next: AppLocale, path: string) => {
    // Normalitza eliminant el primer segment si és un locale
    const clean = path.split('#')[0].split('?')[0]
    const segments = clean.split('/').filter(Boolean)
    const supported = (locales as readonly string[])
    const first = segments[0]
    const rest = supported.includes(first) ? segments.slice(1) : segments
    let basePath = '/' + rest.join('/')
    if (basePath === '/') basePath = '/'
    const defaultLocale = routingDefault as string
    let target = next === (defaultLocale as AppLocale)
      ? basePath
      : `/${next}${basePath === '/' ? '' : basePath}`
    if (!target.startsWith('/')) target = `/${target}`
    return target
  }

  function onChange(next: AppLocale) {
    console.log('[LanguageSwitcher] onChange clicked', {
      currentLocale,
      next,
      pathname
    })
    if (next === currentLocale) {
      setOpen(false)
      return
    }
    startTransition(() => {
      const target = buildTarget(next, pathname)
      console.log('[LanguageSwitcher] navigating', { target })
      try {
        document.cookie = `NEXT_LOCALE=${next}; Path=/; Max-Age=31536000; SameSite=Lax`
      } catch {}
      router.replace(target)
      router.refresh()
    })
    setOpen(false)
  }

  // Tanca en clicar fora o amb ESC
  useEffect(() => {
    console.log('[LanguageSwitcher] mounted', { pathname, currentLocale })
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKey)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const labelFor = (l: AppLocale) => l.toUpperCase()

  return (
    <div className="relative" ref={containerRef}>
      <div className="inline-flex items-stretch border border-gray-300 rounded-md bg-white overflow-hidden">
        {/* Botó ràpid: canvia directe a l'idioma següent */}
        <button
          type="button"
          title="Canvia ràpid d'idioma"
          className="px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => {
            const n = nextOf(currentLocale)
            console.log('[LanguageSwitcher] quick-switch', {
              from: currentLocale,
              to: n,
              pathname
            })
            onChange(n)
          }}
          disabled={isPending}
        >
          <span className="font-medium">{labelFor(currentLocale)}</span>
        </button>
        {/* Botó per obrir el desplegable */}
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          className="px-2 border-l border-gray-300 text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => setOpen((v) => !v)}
          disabled={isPending}
          aria-label={open ? 'Tanca selector d\'idioma' : 'Obre selector d\'idioma'}
        >
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div
        className={`absolute right-0 mt-2 w-36 bg-white shadow-lg border border-gray-200 rounded-md overflow-hidden transition transform origin-top-right ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
        role="listbox"
        aria-label="Language selector"
      >
        {(locales as readonly AppLocale[]).map((l) => {
          const isActive = l === currentLocale
          const target = buildTarget(l, pathname)
          return (
            <a
              key={l}
              role="option"
              aria-selected={isActive}
              href={target}
              className={`block px-3 py-2 text-sm ${isActive ? 'bg-green-50 text-green-700' : 'text-gray-800 hover:bg-gray-50'}`}
              onClick={(e) => {
                e.preventDefault()
                console.log('[LanguageSwitcher] dropdown navigate', {
                  from: currentLocale,
                  to: l,
                  pathname,
                  target,
                })
                try {
                  document.cookie = `NEXT_LOCALE=${l}; Path=/; Max-Age=31536000; SameSite=Lax`
                } catch {}
                setOpen(false)
                startTransition(() => {
                  // Força navegació absoluta per evitar resolució relativa (/en/ca)
                  window.location.assign(target)
                })
              }}
            >
              {labelFor(l)}
            </a>
          )
        })}
      </div>
    </div>
  )
}


