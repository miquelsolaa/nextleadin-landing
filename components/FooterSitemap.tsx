import { Link } from '@/i18n/routing'
import { getAllIndustries } from '@/lib/industries'
import { getAllLocations } from '@/lib/locations'
import { getAllSolutions } from '@/lib/solutions'
import type { AppLocale } from '@/i18n/routing'

const RESOURCE_ITEMS: Record<AppLocale, Array<{ slug: string; label: string }>> = {
  es: [
    { slug: 'roi-calculator', label: 'Calculadora ROI' },
    { slug: 'cold-calling-scripts', label: 'Scripts de trucades en fred' },
    { slug: 'local-prospecting-guide', label: 'Guia de prospecció local' },
  ],
  en: [
    { slug: 'roi-calculator', label: 'ROI Calculator' },
    { slug: 'cold-calling-scripts', label: 'Cold Calling Scripts' },
    { slug: 'local-prospecting-guide', label: 'Local Prospecting Guide' },
  ],
  ca: [
    { slug: 'roi-calculator', label: 'Calculadora ROI' },
    { slug: 'cold-calling-scripts', label: 'Scripts de trucades en fred' },
    { slug: 'local-prospecting-guide', label: 'Guia de prospecció local' },
  ],
}

const SECTION_LABELS: Record<AppLocale, { industries: string; locations: string; solutions: string; resources: string }> = {
  es: { industries: 'Sectores', locations: 'Ubicaciones', solutions: 'Soluciones', resources: 'Recursos' },
  en: { industries: 'Industries', locations: 'Locations', solutions: 'Solutions', resources: 'Resources' },
  ca: { industries: 'Sectors', locations: 'Ubicacions', solutions: 'Solucions', resources: 'Recursos' },
}

const SITEMAP_ARIA_LABEL: Record<AppLocale, string> = {
  es: 'Mapa del sitio',
  en: 'Site map',
  ca: 'Mapa del lloc',
}

type FooterSitemapProps = {
  locale: AppLocale
}

export default function FooterSitemap({ locale }: FooterSitemapProps) {
  const industries = getAllIndustries(locale)
  const locations = getAllLocations(locale)
  const solutions = getAllSolutions(locale)
  const resources = RESOURCE_ITEMS[locale]
  const labels = SECTION_LABELS[locale]

  return (
    <nav
      className="border-t border-gray-700 py-6"
      aria-label={SITEMAP_ARIA_LABEL[locale]}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_2fr_1fr] gap-6">
        {/* Industries - 4 columns compact */}
        <div>
          <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
            {labels.industries}
          </h3>
          <ul role="list" className="columns-4 gap-x-4 space-y-1 text-xs">
            <li>
              <Link
                href="/industries"
                locale={locale}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {labels.industries}
              </Link>
            </li>
            {industries.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/industries/${item.slug}`}
                  locale={locale}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations - 2 columns compact */}
        <div>
          <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
            {labels.locations}
          </h3>
          <ul role="list" className="columns-2 gap-x-4 space-y-1 text-xs">
            <li>
              <Link
                href="/locations"
                locale={locale}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {labels.locations}
              </Link>
            </li>
            {locations.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/locations/${item.slug}`}
                  locale={locale}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.cityName || item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions + Resources */}
        <div>
          <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
            {labels.solutions}
          </h3>
          <ul role="list" className="space-y-1 text-xs">
            <li>
              <Link
                href="/solutions"
                locale={locale}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {labels.solutions}
              </Link>
            </li>
            {solutions.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/solutions/${item.slug}`}
                  locale={locale}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 mt-6">
            {labels.resources}
          </h3>
          <ul role="list" className="space-y-1 text-xs">
            <li>
              <Link
                href="/resources"
                locale={locale}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {labels.resources}
              </Link>
            </li>
            {resources.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/resources/${item.slug}`}
                  locale={locale}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
