export function getSeoSecondaryCtaHref(
  localePrefix: string,
  secondaryLabel?: string | null,
  secondaryHref?: string | null
): string {
  if (/demo/i.test(secondaryLabel ?? '')) {
    return `${localePrefix || '/'}?openVideo=1`
  }
  if (secondaryHref) {
    const path = secondaryHref.startsWith('/') ? secondaryHref : `/${secondaryHref}`
    return `${localePrefix}${path}`
  }
  return `${localePrefix}/contact`
}
