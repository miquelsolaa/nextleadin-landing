'use client'

import Image from 'next/image'
import { testimonialsByLocale } from '@/lib/testimonials-data'

type CaseStudiesGridProps = {
  locale: 'es' | 'ca' | 'en'
}

export const CaseStudiesGrid = ({ locale }: CaseStudiesGridProps) => {
  const items = testimonialsByLocale[locale] ?? testimonialsByLocale.es

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 list-none p-0 m-0">
      {items.map((t) => (
        <li
          key={`${t.author}-${t.company}`}
          className="flex flex-col h-full bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-primary-200 transition-colors"
        >
          <blockquote className="flex-1 mb-6">
            <p className="text-gray-700 leading-relaxed line-clamp-4">&ldquo;{t.quote}&rdquo;</p>
          </blockquote>
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
            <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden ring-2 ring-primary-100">
              <Image src={t.avatar} alt={t.author} width={56} height={56} sizes="56px" className="object-cover w-full h-full" />
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-gray-900 truncate">{t.author}</p>
              <p className="text-sm text-gray-500 truncate">
                {t.role} · {t.company}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
