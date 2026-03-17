import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist } from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

const runtimeCaching = [
  ...(Array.isArray(defaultCache) ? defaultCache : [defaultCache as any]),
  // Fonts (repeat visits): cache-first amb expiració moderada
  {
    matcher: ({ url, request }: { url: URL; request: Request }) => {
      return (
        request.destination === "font" ||
        url.origin === "https://fonts.gstatic.com" ||
        url.origin === "https://fonts.googleapis.com"
      );
    },
    handler: "CacheFirst",
    options: {
      cacheName: "fonts",
      expiration: {
        maxEntries: 30,
        maxAgeSeconds: 60 * 60 * 24 * 365, // 1 any
      },
      cacheableResponse: { statuses: [0, 200] },
    },
  },
  // Imatges (repeat visits): SWR per evitar bloquejar LCP, però reaprofitar cache
  {
    matcher: ({ request }: { request: Request }) => request.destination === "image",
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "images",
      expiration: {
        maxEntries: 160,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 dies
      },
      cacheableResponse: { statuses: [0, 200] },
    },
  },
];

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching,
  fallbacks: {
    entries: [
      {
        url: "/~offline",
        matcher({ request }) {
          return request.destination === "document";
        },
      },
    ],
  },
});

serwist.addEventListeners();
