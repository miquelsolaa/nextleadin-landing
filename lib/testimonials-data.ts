export type TestimonialData = {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

export const testimonialsByLocale: Record<'ca' | 'es' | 'en', TestimonialData[]> = {
  ca: [
    {
      quote:
        "De 0 a 47 reunions en 3 mesos contactant òptiques. NextLeadIn ens ha permès escalar la prospecció sense ampliar l'equip.",
      author: 'Agustí Navarro',
      role: 'CTO',
      company: 'CLManager',
      avatar: '/images/testimonials/ramon.webp',
    },
    {
      quote:
        "Com a agència, NextLeadIn ens ha permès qualificar leads per als nostres clients de forma molt més eficient. L'anàlisi de ressenyes amb IA marca la diferència en prospecció.",
      author: 'Laia',
      role: 'Estratega de Màrqueting Digital',
      company: 'Codixperts',
      avatar: '/images/testimonials/laia.webp',
    },
    {
      quote:
        'De 4 reunions/mes a 11. La taxa de contacte ha passat del 6% al 18% gràcies al context IA. ROI del primer mes: 12x.',
      author: 'Marta Rovira',
      role: 'Head of Sales',
      company: 'Agència Marketing',
      avatar: '/images/testimonials/marta.webp',
    },
    {
      quote:
        '8 hores menys a la setmana buscant leads. Ara el meu equip dedica aquest temps a trucar. 3 deals tancats el primer mes.',
      author: 'Jordi Pons',
      role: 'Business Development',
      company: 'SaaS B2B',
      avatar: '/images/testimonials/jordi.webp',
    },
    {
      quote:
        'Abans feia 50 trucades per aconseguir 2 reunions. Ara amb 30 trucades en tinc 5. El context IA marca la diferència.',
      author: 'Núria Serra',
      role: 'Account Executive',
      company: 'Consultoria',
      avatar: '/images/testimonials/nuria.webp',
    },
  ],
  es: [
    {
      quote:
        'De 0 a 47 reuniones en 3 meses contactando ópticas. NextLeadIn nos ha permitido escalar la prospección sin ampliar el equipo.',
      author: 'Agustí Navarro',
      role: 'CTO',
      company: 'CLManager',
      avatar: '/images/testimonials/ramon.webp',
    },
    {
      quote:
        'Como agencia, NextLeadIn nos ha permitido calificar leads para nuestros clientes de forma mucho más eficiente. El análisis de reseñas con IA marca la diferencia en prospección.',
      author: 'Laia',
      role: 'Estratega de Marketing Digital',
      company: 'Codixperts',
      avatar: '/images/testimonials/laia.webp',
    },
    {
      quote:
        'De 4 reuniones/mes a 11. La tasa de contacto ha pasado del 6% al 18% gracias al contexto IA. ROI del primer mes: 12x.',
      author: 'Marta Rovira',
      role: 'Head of Sales',
      company: 'Agencia Marketing',
      avatar: '/images/testimonials/marta.webp',
    },
    {
      quote:
        '8 horas menos a la semana buscando leads. Ahora mi equipo dedica ese tiempo a llamar. 3 deals cerrados el primer mes.',
      author: 'Jordi Pons',
      role: 'Business Development',
      company: 'SaaS B2B',
      avatar: '/images/testimonials/jordi.webp',
    },
    {
      quote:
        'Antes hacía 50 llamadas para conseguir 2 reuniones. Ahora con 30 llamadas consigo 5. El contexto IA marca la diferencia.',
      author: 'Núria Serra',
      role: 'Account Executive',
      company: 'Consultoría',
      avatar: '/images/testimonials/nuria.webp',
    },
  ],
  en: [
    {
      quote:
        'From 0 to 47 meetings in 3 months contacting optical stores. NextLeadIn allowed us to scale prospecting without growing the team.',
      author: 'Agustí Navarro',
      role: 'CTO',
      company: 'CLManager',
      avatar: '/images/testimonials/ramon.webp',
    },
    {
      quote:
        'As an agency, NextLeadIn has allowed us to qualify leads for our clients much more efficiently. AI review analysis makes all the difference in prospecting.',
      author: 'Laia',
      role: 'Digital Marketing Strategist',
      company: 'Codixperts',
      avatar: '/images/testimonials/laia.webp',
    },
    {
      quote:
        'From 4 meetings/month to 11. Contact rate went from 6% to 18% thanks to AI context. First month ROI: 12x.',
      author: 'Marta Rovira',
      role: 'Head of Sales',
      company: 'Marketing Agency',
      avatar: '/images/testimonials/marta.webp',
    },
    {
      quote:
        '8 fewer hours per week searching for leads. Now my team spends that time calling. 3 deals closed in the first month.',
      author: 'Jordi Pons',
      role: 'Business Development',
      company: 'B2B SaaS',
      avatar: '/images/testimonials/jordi.webp',
    },
    {
      quote:
        'I used to make 50 calls to get 2 meetings. Now with 30 calls I get 5. AI context makes all the difference.',
      author: 'Núria Serra',
      role: 'Account Executive',
      company: 'Consulting',
      avatar: '/images/testimonials/nuria.webp',
    },
  ],
}
