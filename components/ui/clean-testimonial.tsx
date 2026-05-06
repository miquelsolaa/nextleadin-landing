"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useLocale } from "next-intl"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { testimonialsByLocale } from "@/lib/testimonials-data"

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
  const testimonials = testimonialsByLocale[locale] ?? testimonialsByLocale.es
  
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
