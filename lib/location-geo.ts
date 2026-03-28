/**
 * Dades GEO per a les pàgines de ubicacions.
 * geoRegion: codi ISO 3166-2 (ex: ES-CT per Catalunya)
 * coordinates: lat/lng per schema.org GeoCoordinates
 */
export interface LocationGeoData {
  geoRegion: string
  coordinates: { lat: number; lng: number }
}

const locationGeoMap: Record<string, LocationGeoData> = {
  barcelona: { geoRegion: 'ES-CT', coordinates: { lat: 41.3851, lng: 2.1734 } },
  madrid: { geoRegion: 'ES-M', coordinates: { lat: 40.4168, lng: -3.7038 } },
  valencia: { geoRegion: 'ES-V', coordinates: { lat: 39.4699, lng: -0.3763 } },
  sevilla: { geoRegion: 'ES-AN', coordinates: { lat: 37.3891, lng: -5.9845 } },
  malaga: { geoRegion: 'ES-AN', coordinates: { lat: 36.7213, lng: -4.4214 } },
  granada: { geoRegion: 'ES-AN', coordinates: { lat: 37.1773, lng: -3.5986 } },
  palma: { geoRegion: 'ES-IB', coordinates: { lat: 39.5696, lng: 2.6502 } },
  bilbao: { geoRegion: 'ES-PV', coordinates: { lat: 43.263, lng: -2.935 } },
  alicante: { geoRegion: 'ES-V', coordinates: { lat: 38.3452, lng: -0.481 } },
  zaragoza: { geoRegion: 'ES-AR', coordinates: { lat: 41.6488, lng: -0.8891 } },
}

export function getLocationGeo(slug: string): LocationGeoData | null {
  const normalized = slug.toLowerCase().trim()
  return locationGeoMap[normalized] ?? null
}
