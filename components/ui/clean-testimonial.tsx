"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useLocale } from "next-intl"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface TestimonialData {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

const testimonialsData: Record<string, TestimonialData[]> = {
  ca: [
    {
      quote: "De 0 a 47 reunions en 3 mesos contactant òptiques. NextLeadIn ens ha permès escalar la prospecció sense ampliar l'equip.",
      author: "Agustí Navarro",
      role: "CTO",
      company: "CLManager",
      avatar: "/images/testimonials/ramon.webp"
    },
    {
      quote: "De 4 reunions/mes a 11. La taxa de contacte ha passat del 6% al 18% gràcies al context IA. ROI del primer mes: 12x.",
      author: "Marta Rovira",
      role: "Head of Sales",
      company: "Agència Marketing",
      avatar: "/images/testimonials/marta.webp"
    },
    {
      quote: "8 hores menys a la setmana buscant leads. Ara el meu equip dedica aquest temps a trucar. 3 deals tancats el primer mes.",
      author: "Jordi Pons",
      role: "Business Development",
      company: "SaaS B2B",
      avatar: "/images/testimonials/jordi.webp"
    },
    {
      quote: "Abans feia 50 trucades per aconseguir 2 reunions. Ara amb 30 trucades en tinc 5. El context IA marca la diferència.",
      author: "Núria Serra",
      role: "Account Executive",
      company: "Consultoria",
      avatar: "/images/testimonials/nuria.webp"
    },
    {
      quote: "Implementació en 2 dies. El pipeline ha crescut un 180% en 3 mesos. Cost per lead: 0,08€ vs 3€ que pagàvem abans.",
      author: "Pol Garcia",
      role: "Revenue Operations",
      company: "Tech",
      avatar: "/images/testimonials/pol.webp"
    }
  ],
  es: [
    {
      quote: "De 0 a 47 reuniones en 3 meses contactando ópticas. NextLeadIn nos ha permitido escalar la prospección sin ampliar el equipo.",
      author: "Agustí Navarro",
      role: "CTO",
      company: "CLManager",
      avatar: "/images/testimonials/ramon.webp"
    },
    {
      quote: "De 4 reuniones/mes a 11. La tasa de contacto ha pasado del 6% al 18% gracias al contexto IA. ROI del primer mes: 12x.",
      author: "Marta Rovira",
      role: "Head of Sales",
      company: "Agencia Marketing",
      avatar: "/images/testimonials/marta.webp"
    },
    {
      quote: "8 horas menos a la semana buscando leads. Ahora mi equipo dedica ese tiempo a llamar. 3 deals cerrados el primer mes.",
      author: "Jordi Pons",
      role: "Business Development",
      company: "SaaS B2B",
      avatar: "/images/testimonials/jordi.webp"
    },
    {
      quote: "Antes hacía 50 llamadas para conseguir 2 reuniones. Ahora con 30 llamadas consigo 5. El contexto IA marca la diferencia.",
      author: "Núria Serra",
      role: "Account Executive",
      company: "Consultoría",
      avatar: "/images/testimonials/nuria.webp"
    },
    {
      quote: "Implementación en 2 días. El pipeline ha crecido un 180% en 3 meses. Coste por lead: 0,08€ vs 3€ que pagábamos antes.",
      author: "Pol Garcia",
      role: "Revenue Operations",
      company: "Tech",
      avatar: "/images/testimonials/pol.webp"
    }
  ],
  en: [
    {
      quote: "From 0 to 47 meetings in 3 months contacting optical stores. NextLeadIn allowed us to scale prospecting without growing the team.",
      author: "Agustí Navarro",
      role: "CTO",
      company: "CLManager",
      avatar: "/images/testimonials/ramon.webp"
    },
    {
      quote: "From 4 meetings/month to 11. Contact rate went from 6% to 18% thanks to AI context. First month ROI: 12x.",
      author: "Marta Rovira",
      role: "Head of Sales",
      company: "Marketing Agency",
      avatar: "/images/testimonials/marta.webp"
    },
    {
      quote: "8 fewer hours per week searching for leads. Now my team spends that time calling. 3 deals closed in the first month.",
      author: "Jordi Pons",
      role: "Business Development",
      company: "B2B SaaS",
      avatar: "/images/testimonials/jordi.webp"
    },
    {
      quote: "I used to make 50 calls to get 2 meetings. Now with 30 calls I get 5. AI context makes all the difference.",
      author: "Núria Serra",
      role: "Account Executive",
      company: "Consulting",
      avatar: "/images/testimonials/nuria.webp"
    },
    {
      quote: "Implementation in 2 days. Pipeline grew 180% in 3 months. Cost per lead: €0.08 vs €3 we were paying before.",
      author: "Pol Garcia",
      role: "Revenue Operations",
      company: "Tech",
      avatar: "/images/testimonials/pol.webp"
    }
  ]
}

function usePreloadImages(images: string[]) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [images])
}

function SplitText({ text }: { text: string }) {
  const words = text.split(" ")

  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.4,
            delay: i * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function CleanTestimonial() {
  const locale = useLocale() as 'es' | 'ca' | 'en'
  const testimonials = testimonialsData[locale] || testimonialsData.es
  
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  usePreloadImages(testimonials.map((t) => t.avatar))

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(handleNext, 6000)
    return () => clearInterval(interval)
  }, [autoPlay, handleNext])

  const currentTestimonial = testimonials[activeIndex]

  return (
    <div
      className="relative w-full max-w-2xl mx-auto py-12 md:py-16 px-6 md:px-8"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Floating index indicator */}
      <motion.div
        className="absolute top-4 right-4 md:top-8 md:right-8 flex items-baseline gap-1 font-mono text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          className="text-2xl font-light text-gray-900"
          key={activeIndex}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </motion.span>
        <span className="text-gray-400">/</span>
        <span className="text-gray-400">{String(testimonials.length).padStart(2, "0")}</span>
      </motion.div>

      {/* Stacked avatar previews */}
      <motion.div
        className="absolute top-4 left-4 md:top-8 md:left-8 flex -space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.6 }}
      >
        {testimonials.map((t, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white overflow-hidden transition-all duration-300 focus:outline-none ${
              i === activeIndex 
                ? "ring-2 ring-primary-500 ring-offset-2 ring-offset-white z-10" 
                : "grayscale opacity-60 hover:opacity-100 hover:grayscale-0"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image 
              src={t.avatar} 
              alt={t.author} 
              width={32} 
              height={32} 
              sizes="32px"
              className="w-full h-full object-cover" 
            />
          </motion.button>
        ))}
      </motion.div>

      {/* Main content */}
      <div className="relative pt-16 md:pt-12">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed tracking-tight text-gray-800"
          >
            <span className="text-primary-500 text-3xl leading-none">&ldquo;</span>
            <SplitText text={currentTestimonial.quote} />
            <span className="text-primary-500 text-3xl leading-none">&rdquo;</span>
          </motion.blockquote>
        </AnimatePresence>

        {/* Author section */}
        <motion.div className="mt-10 md:mt-12 relative" layout>
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="relative w-14 h-14 md:w-16 md:h-16">
              <motion.div
                className="absolute -inset-1 rounded-full border border-primary-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.avatar}
                  className="absolute inset-0 rounded-full overflow-hidden"
                  animate={{
                    opacity: i === activeIndex ? 1 : 0,
                    zIndex: i === activeIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    width={64}
                    height={64}
                    sizes="64px"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
                  />
                </motion.div>
              ))}
            </div>

            {/* Author info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="relative pl-4 border-l-2 border-primary-500"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="block text-base md:text-lg font-semibold text-gray-900 tracking-wide">
                  {currentTestimonial.author}
                </span>
                <span className="block text-sm text-gray-500 mt-0.5">
                  {currentTestimonial.role} · {currentTestimonial.company}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Navigation & Progress */}
        <div className="mt-10 md:mt-12 flex items-center justify-between gap-4">
          {/* Navigation buttons */}
          <div className="flex gap-2">
            <motion.button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Progress bar */}
          <div className="flex-1 h-0.5 bg-gray-200 rounded-full relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-primary-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
