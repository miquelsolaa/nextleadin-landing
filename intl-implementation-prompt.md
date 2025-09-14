# Next.js Internationalization Implementation Prompt

You are an expert in Next.js and internationalization. I need you to implement a robust i18n system using next-intl for a Next.js 15 project with App Router. The project should support Spanish (es - default), English (en), and Catalan (ca).

## Requirements

### 1. Core Setup
- Use **next-intl v3.26.5** or latest compatible version
- Support 3 locales: Spanish (es - default), English (en), Catalan (ca)
- Implement with Next.js 15 App Router
- Use TypeScript with strict typing

### 2. File Structure
Create this exact structure:
```
├── i18n/
│   ├── routing.ts          # Routing configuration
│   └── request.ts          # Request configuration
├── messages/
│   ├── es.json            # Spanish translations (default)
│   ├── en.json            # English translations
│   └── ca.json            # Catalan translations
├── next-intl.config.ts    # Main next-intl config
├── middleware.ts          # Middleware for routing
└── app/[locale]/          # Localized pages structure
```

### 3. Configuration Files

#### `i18n/routing.ts`
```typescript
import {createLocalizedPathnamesNavigation, Pathnames} from 'next-intl/navigation'

export const locales = ['es', 'en', 'ca'] as const
export type AppLocale = typeof locales[number]

export const defaultLocale: AppLocale = 'es'
export const localePrefix = 'as-needed' as const

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/blog': '/blog',
  '/contact': '/contact',
  '/pricing': '/pricing',
  '/faq': '/faq'
}

export const routing = {
  locales,
  defaultLocale,
  localePrefix,
  pathnames,
} as const

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation(routing)
```

#### `i18n/request.ts`
```typescript
import {notFound} from 'next/navigation'
import {defaultLocale, locales, type AppLocale} from './routing'

function isSupportedLocale(locale: string | undefined | null): locale is AppLocale {
  return !!locale && (locales as readonly string[]).includes(locale)
}

const getRequestConfig = async ({requestLocale}: {requestLocale?: string}) => {
  const resolvedLocale: AppLocale = isSupportedLocale(requestLocale) ? (requestLocale as AppLocale) : defaultLocale

  try {
    const messages = (await import(`../messages/${resolvedLocale}.json`)).default
    return {locale: resolvedLocale, messages}
  } catch (error) {
    // Robust fallback to Spanish
    const fallbackLocale: AppLocale = 'es'
    const messages = (await import(`../messages/${fallbackLocale}.json`)).default
    return {locale: fallbackLocale, messages}
  }
}

export default getRequestConfig
```

#### `next-intl.config.ts`
```typescript
const locales = ['es', 'en', 'ca'] as const
const defaultLocale = 'es' as const

export default async function getRequestConfig({locale}: {locale?: string}) {
  const isSupported = typeof locale === 'string' && locales.includes(locale as any)
  const resolved = isSupported ? (locale as typeof locales[number]) : defaultLocale
  try {
    const messages = (await import(`./messages/${resolved}.json`)).default
    return {locale: resolved, messages}
  } catch {
    const fallback = 'es'
    const messages = (await import(`./messages/${fallback}.json`)).default
    return {locale: fallback, messages}
  }
}
```

#### `middleware.ts`
```typescript
import createMiddleware from 'next-intl/middleware'
import {routing} from './i18n/routing'

const middleware = createMiddleware(routing)

export default function(request: any) {
  return middleware(request)
}

export const config = {
  matcher: [
    '/',
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}
```

#### `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./i18n/request.ts')

const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  // ... other config
}

module.exports = withNextIntl(nextConfig)
```

### 4. Translation Files Structure

Create comprehensive translation files with this structure:

#### `messages/es.json` (Default)
```json
{
  "common": {
    "brand": "YourBrand",
    "cta": {
      "getStarted": "Empieza ahora",
      "talkToSales": "Habla con ventas",
      "login": "Iniciar sesión"
    }
  },
  "nav": {
    "home": "Inicio",
    "features": "Funcionalidades",
    "blog": "Blog",
    "pricing": "Precios",
    "contact": "Contacto",
    "faq": "Preguntas frecuentes"
  },
  "home": {
    "hero": {
      "title": "Título principal",
      "subtitle": "Subtítulo descriptivo"
    },
    "features": {
      "title": "Características",
      "description": "Descripción de características"
    }
  },
  "pages": {
    "contact": {
      "title": "Contacto",
      "labels": {
        "name": "Nombre completo",
        "email": "Correo electrónico",
        "message": "Mensaje"
      },
      "errors": {
        "name": "El nombre es obligatorio",
        "email": "Introduce un correo válido"
      }
    }
  },
  "metadata": {
    "title": "Tu Marca — Descripción",
    "description": "Descripción SEO",
    "keywords": "palabras,clave,seo"
  }
}
```

### 5. Layout Implementation

#### `app/[locale]/layout.tsx`
```typescript
import type {Metadata} from 'next'
import {NextIntlClientProvider} from 'next-intl'
import {notFound} from 'next/navigation'
import {locales, type AppLocale} from '@/i18n/routing'
import SetHtmlLang from '@/components/SetHtmlLang'

type Props = {
  children: React.ReactNode
  params: {locale: string}
}

function isValidLocale(locale: string): locale is AppLocale {
  return (locales as readonly string[]).includes(locale)
}

export function generateStaticParams() {
  return (locales as readonly string[]).map((l) => ({locale: l}))
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale: localeParam} = await params
  if (!isValidLocale(localeParam)) notFound()

  const messages = (await import(`@/messages/${localeParam}.json`)).default

  return (
    <NextIntlClientProvider messages={messages} locale={localeParam}>
      <SetHtmlLang locale={localeParam} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  )
}
```

### 6. Component Implementation

#### `components/SetHtmlLang.tsx`
```typescript
"use client"
import {useEffect} from 'react'

export default function SetHtmlLang({locale}: {locale: string}) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
    }
  }, [locale])
  return null
}
```

#### `components/LanguageSwitcher.tsx`
```typescript
"use client"
import {useEffect, useRef, useState, useTransition} from 'react'
import {locales, defaultLocale as routingDefault, type AppLocale, usePathname, useRouter} from '@/i18n/routing'
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
    if (next === currentLocale) {
      setOpen(false)
      return
    }
    startTransition(() => {
      const target = buildTarget(next, pathname)
      try {
        document.cookie = `NEXT_LOCALE=${next}; Path=/; Max-Age=31536000; SameSite=Lax`
      } catch {}
      router.replace(target)
      router.refresh()
    })
    setOpen(false)
  }

  // Close on outside click or ESC
  useEffect(() => {
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
        {/* Quick switch button */}
        <button
          type="button"
          title="Quick language switch"
          className="px-3 py-2 text-sm text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => onChange(nextOf(currentLocale))}
          disabled={isPending}
        >
          <span className="font-medium">{labelFor(currentLocale)}</span>
        </button>
        {/* Dropdown button */}
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          className="px-2 border-l border-gray-300 text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setOpen((v) => !v)}
          disabled={isPending}
        >
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div
        className={`absolute right-0 mt-2 w-36 bg-white shadow-lg border border-gray-200 rounded-md overflow-hidden transition transform origin-top-right ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
        role="listbox"
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
              className={`block px-3 py-2 text-sm ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-800 hover:bg-gray-50'}`}
              onClick={(e) => {
                e.preventDefault()
                try {
                  document.cookie = `NEXT_LOCALE=${l}; Path=/; Max-Age=31536000; SameSite=Lax`
                } catch {}
                setOpen(false)
                startTransition(() => {
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
```

### 7. Component Usage Patterns

#### **RECOMMENDED: Use `useTranslations` hook**
```typescript
import { useTranslations } from 'next-intl'

export default function MyComponent() {
  const t = useTranslations('home.hero')
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  )
}
```

#### **For navigation links, use the localized Link**
```typescript
import { Link } from '@/i18n/routing'

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}
```

### 8. Best Practices to Implement

1. **Consistent Translation Usage**: Always use `useTranslations` hook instead of inline translations
2. **Type Safety**: Create TypeScript types for translation keys
3. **Fallback Strategy**: Always provide fallbacks for missing translations
4. **SEO Optimization**: Implement localized metadata and structured data
5. **Performance**: Use dynamic imports for translation files
6. **Error Handling**: Implement robust error handling for missing locales

### 9. Package Dependencies

Add these to your `package.json`:
```json
{
  "dependencies": {
    "next-intl": "^3.26.5",
    "lucide-react": "^0.543.0"
  }
}
```

### 10. Implementation Steps

1. Install next-intl and dependencies
2. Create the file structure as specified
3. Implement configuration files
4. Create translation files with comprehensive content
5. Set up the layout with NextIntlClientProvider
6. Implement the LanguageSwitcher component
7. Create components using the recommended patterns
8. Test all locales and routing
9. Implement SEO optimizations
10. Add error handling and fallbacks

## Expected Outcome

After implementation, you should have:
- ✅ Full i18n support for Spanish (default), English, and Catalan
- ✅ Robust routing with locale detection
- ✅ Type-safe translation system
- ✅ SEO-optimized localized pages
- ✅ Intuitive language switcher
- ✅ Consistent translation patterns
- ✅ Error handling and fallbacks
- ✅ Performance optimizations

Please implement this system step by step, ensuring all components follow the recommended patterns and the translation system is fully functional across all three locales.
