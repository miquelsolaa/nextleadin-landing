"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

type Locale = "es" | "ca" | "en";
const validLocales: Locale[] = ["es", "ca", "en"];

function detectLocaleFromPath(): Locale {
  if (typeof window === "undefined") return "es";
  
  const segments = window.location.pathname.split("/").filter(Boolean);
  
  for (const segment of segments) {
    if (validLocales.includes(segment as Locale)) {
      return segment as Locale;
    }
  }
  
  return "es";
}

const translations = {
  es: {
    title: "Parece que te has perdido",
    description: "La página que buscas no existe o ha sido movida.",
    goHome: "Volver al inicio",
    suggestions: "O quizás te interese:",
    links: [
      { name: "Ver funcionalidades", path: "/#funcionalitats" },
      { name: "Comparador", path: "/compare" },
      { name: "Precios", path: "/pricing" },
      { name: "Blog", path: "/blog" },
      { name: "Contacto", path: "/contact" },
    ],
  },
  ca: {
    title: "Sembla que t'has perdut",
    description: "La pàgina que busques no existeix o ha estat moguda.",
    goHome: "Tornar a l'inici",
    suggestions: "O potser t'interessa:",
    links: [
      { name: "Veure funcionalitats", path: "/#funcionalitats" },
      { name: "Comparador", path: "/compare" },
      { name: "Preus", path: "/pricing" },
      { name: "Blog", path: "/blog" },
      { name: "Contacte", path: "/contact" },
    ],
  },
  en: {
    title: "Looks like you're lost",
    description: "The page you're looking for doesn't exist or has been moved.",
    goHome: "Go back home",
    suggestions: "Or maybe you're interested in:",
    links: [
      { name: "See features", path: "/#funcionalitats" },
      { name: "Comparisons", path: "/compare" },
      { name: "Pricing", path: "/pricing" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ],
  },
};

function buildUrl(locale: Locale, path: string): string {
  if (locale === "es") {
    return path;
  }
  return `/${locale}${path}`;
}

export default function NotFoundContent() {
  const intlLocale = useLocale();
  const [locale, setLocale] = useState<Locale>(() => {
    if (validLocales.includes(intlLocale as Locale)) {
      return intlLocale as Locale;
    }
    return "es";
  });

  useEffect(() => {
    const detectedLocale = detectLocaleFromPath();
    if (detectedLocale !== locale) {
      setLocale(detectedLocale);
    }
  }, [locale]);

  const t = translations[locale];

  return (
    <section className="bg-white flex-1 flex items-center justify-center px-4 py-16">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full sm:w-10/12 md:w-8/12 text-center">
            <div className="relative h-[250px] sm:h-[350px] md:h-[400px] flex items-start justify-center">
              <Image
                src="/images/not-found/not-found.gif"
                alt="404 animation"
                fill
                className="object-contain"
              />
              <h1 className="absolute top-6 sm:top-8 text-center text-gray-900 text-6xl sm:text-7xl md:text-8xl font-bold z-10">
                404
              </h1>
            </div>

            <div className="mt-[-50px] relative z-20">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                {t.title}
              </h2>
              <p className="mb-6 sm:mb-8 text-gray-600 text-lg">
                {t.description}
              </p>

              <Link
                href={buildUrl(locale, "/")}
                className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                {t.goHome}
              </Link>

              {/* Suggested links */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-gray-500 mb-4">{t.suggestions}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {t.links.map((link) => (
                    <Link
                      key={link.path}
                      href={buildUrl(locale, link.path)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
