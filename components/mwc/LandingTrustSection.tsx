'use client'

import Image from 'next/image'
import { useLocale } from 'next-intl'
import { motion } from 'framer-motion'

const trustLine: Record<'es' | 'ca' | 'en', string> = {
  en: 'Trusted by B2B teams across Europe',
  ca: 'Confiat per equips B2B a tota Europa',
  es: 'Con la confianza de equipos B2B en Europa',
}

const clients = [
  { id: 'summaCommerce', logo: '/images/testimonials/sumacommerce.png', name: 'SummaCommerce' },
  { id: 'clManager', logo: '/images/testimonials/clmanager.png', name: 'CLManager' },
]

export default function LandingTrustSection() {
  const locale = (useLocale() as 'es' | 'ca' | 'en') ?? 'en'
  const t = trustLine[locale]

  return (
    <section className="py-14 md:py-18 bg-slate-50/80 border-y border-slate-200/60">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-10 font-body"
        >
          {t}
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-14 md:gap-20">
          {clients.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={48}
                sizes="120px"
                className="h-10 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
