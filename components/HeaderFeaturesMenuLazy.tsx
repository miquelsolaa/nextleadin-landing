'use client'

import { Users, Phone, Mail, BarChart3 } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

type FeatureIconKey = 'leadManagement' | 'coldCalling' | 'emailSequences' | 'pipelineAnalytics'

type FeatureLink = {
  title: string
  href: string
  description: string
  iconKey: FeatureIconKey
}

const iconByKey: Record<FeatureIconKey, React.ReactNode> = {
  leadManagement: <Users className="h-5 w-5" aria-hidden="true" />,
  coldCalling: <Phone className="h-5 w-5" aria-hidden="true" />,
  emailSequences: <Mail className="h-5 w-5" aria-hidden="true" />,
  pipelineAnalytics: <BarChart3 className="h-5 w-5" aria-hidden="true" />,
}

export default function HeaderFeaturesMenuLazy({
  label,
  items,
}: {
  label: string
  items: FeatureLink[]
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-700 hover:text-primary-500 text-sm font-medium">
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {items.map((feature) => (
                <li key={feature.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={feature.href}
                      className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100'
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-primary-500">{iconByKey[feature.iconKey]}</span>
                        <span className="text-sm font-medium leading-none text-gray-900">
                          {feature.title}
                        </span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-gray-500 mt-1">
                        {feature.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

