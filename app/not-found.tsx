import { NextIntlClientProvider } from "next-intl";
import { headers } from "next/headers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFoundContent from "@/components/NotFoundContent";

type Locale = "es" | "ca" | "en";
const validLocales: Locale[] = ["es", "ca", "en"];

async function getMessages(locale: Locale) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch {
    return (await import(`@/messages/es.json`)).default;
  }
}

function detectLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  
  for (const segment of segments) {
    if (validLocales.includes(segment as Locale)) {
      return segment as Locale;
    }
  }
  
  return "es";
}

function detectLocaleFromAcceptLanguage(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return "es";
  
  const languages = acceptLanguage.split(",").map(lang => lang.split(";")[0].trim().split("-")[0]);
  
  for (const lang of languages) {
    if (validLocales.includes(lang as Locale)) {
      return lang as Locale;
    }
  }
  
  return "es";
}

export default async function NotFound() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || headersList.get("x-invoke-path") || "";
  const acceptLanguage = headersList.get("accept-language");
  
  let locale = detectLocaleFromPath(pathname);
  
  if (locale === "es" && !pathname.includes("/es")) {
    locale = detectLocaleFromAcceptLanguage(acceptLanguage);
  }
  
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <div className="min-h-screen flex flex-col bg-white">
        <Header locale={locale} />
        <main className="flex-1 flex items-center justify-center">
          <NotFoundContent />
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
