'use client'

import {
  Building2,
  CircleDollarSign,
  FolderOpen,
  Newspaper,
  Scale,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { Link } from '@/i18n/routing'
import type { AppLocale } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export type NavGridIconKey =
  | 'building'
  | 'folder'
  | 'scale'
  | 'pricing'
  | 'newspaper'
  | 'sparkles'

export type NavGridLink = {
  title: string
  description: string
  href: string
  iconKey: NavGridIconKey
}

const iconByKey: Record<NavGridIconKey, LucideIcon> = {
  building: Building2,
  folder: FolderOpen,
  scale: Scale,
  pricing: CircleDollarSign,
  newspaper: Newspaper,
  sparkles: Sparkles,
}

export default function HeaderNavGridMenuLazy({
  label,
  items,
  linkLocale,
  gridClassName,
}: {
  label: string
  items: NavGridLink[]
  linkLocale: AppLocale
  gridClassName?: string
}) {
  const cols = items.length >= 4 ? 'md:grid-cols-2' : 'md:grid-cols-1'

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-primary-500 text-sm font-medium">
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={cn(
                'grid w-[min(100vw-2rem,420px)] gap-3 p-4 md:w-[500px]',
                cols,
                gridClassName
              )}
            >
              {items.map((item) => {
                const Icon = iconByKey[item.iconKey]
                return (
                  <li key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        locale={linkLocale}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-primary-500 shrink-0">
                            <Icon className="h-5 w-5" aria-hidden />
                          </span>
                          <span className="text-sm font-medium leading-none text-gray-900">{item.title}</span>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-1">{item.description}</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                )
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
