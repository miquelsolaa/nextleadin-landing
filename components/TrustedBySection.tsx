'use client'

import Image from 'next/image'
import { useRef, useEffect, useState, useCallback } from 'react'
import styles from './TrustedBySection.module.css'

const TrustedBySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragStartX, setDragStartX] = useState(0)
  const [velocity, setVelocity] = useState(0)
  const [lastX, setLastX] = useState(0)
  const [lastTime, setLastTime] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const [hoveredLogoIndex, setHoveredLogoIndex] = useState<number | null>(null)
  
  const partnerLogos = [
    {
      src: "https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/logo-1-black.svg",
      alt: "Partner logo",
      width: 98,
      height: 40,
      title: "Logo #1"
    },
    {
      src: "https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/logo-2-black.svg",
      alt: "Partner logo",
      width: 108,
      height: 21,
      title: "Logo #2"
    },
    {
      src: "https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/logo-3-black.svg",
      alt: "Partner logo",
      width: 110,
      height: 37,
      title: "Logo #3"
    },
    {
      src: "https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/logo-4-black.svg",
      alt: "Partner logo",
      width: 123,
      height: 39,
      title: "Logo #4"
    },
    {
      src: "https://sierra.keydesign.xyz/crm/wp-content/uploads/sites/13/2023/09/logo-5-black.svg",
      alt: "Partner logo",
      width: 121,
      height: 26,
      title: "Logo #5"
    }
  ]

  // Auto-scroll effect (desactivat - només moviment manual)
  // useEffect(() => {
  //   if (isDragging) return
    
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex: number) => (prevIndex + 1) % partnerLogos.length)
  //   }, 3000)

  //   return () => clearInterval(interval)
  // }, [partnerLogos.length, isDragging])

  // Smooth animation with inertia
  const animateToIndex = useCallback((targetIndex: number, duration: number = 500) => {
    const startIndex = currentIndex
    const startTime = performance.now()
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentIndex = startIndex + (targetIndex - startIndex) * easeOut
      
      setCurrentIndex(currentIndex)
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }
    
    animationRef.current = requestAnimationFrame(animate)
  }, [currentIndex])

  // Mouse events for drag and drop
  const handleMouseDown = (e: React.MouseEvent, logoIndex: number) => {
    setIsDragging(true)
    setStartX(e.pageX)
    setDragStartX(currentIndex)
    setLastX(e.pageX)
    setLastTime(performance.now())
    setVelocity(0)
    e.preventDefault() // Prevent page scroll
    e.stopPropagation() // Stop event bubbling
    return false // Prevent default behavior
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    
    e.preventDefault() // Prevent page scroll while dragging
    e.stopPropagation() // Stop event bubbling
    
    const currentTime = performance.now()
    const deltaX = e.pageX - startX
    const slideWidth = 187 // 172px width + 15px margin
    
    // Calculate velocity for momentum
    if (currentTime - lastTime > 0) {
      const newVelocity = (e.pageX - lastX) / (currentTime - lastTime)
      setVelocity(newVelocity)
    }
    
    setLastX(e.pageX)
    setLastTime(currentTime)
    
    // Smooth drag with resistance - allow unlimited movement to the right
    const resistance = 0.8
    const newIndex = dragStartX - (deltaX * resistance / slideWidth)
    
    // Allow unlimited movement to the right, only limit left movement
    const clampedIndex = Math.max(0, newIndex)
    setCurrentIndex(clampedIndex)
    
    return false // Prevent default behavior
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault() // Prevent page scroll
      e.stopPropagation() // Stop event bubbling
    }
    
    setIsDragging(false)
    
    // Don't snap back - let logos stay exactly where they are
    // The logos will stay at the current position without forcing them back
    
    // Optional: Apply minimal momentum if velocity is very high
    if (Math.abs(velocity) > 2.0) {
      const slideWidth = 187
      const momentumDistance = velocity * 50 // Reduced sensitivity
      const targetIndex = currentIndex - (momentumDistance / slideWidth)
      
      // Only apply momentum if it's a significant movement
      if (Math.abs(targetIndex - currentIndex) > 0.5) {
        const finalIndex = Math.max(0, targetIndex)
        animateToIndex(Math.round(finalIndex), 400)
      }
    }
    
    return false // Prevent default behavior
  }

  const handleMouseEnter = (logoIndex: number) => {
    setHoveredLogoIndex(logoIndex)
  }

  const handleMouseLeave = (e: React.MouseEvent) => {
    setHoveredLogoIndex(null)
    if (isDragging) {
      e.preventDefault() // Prevent page scroll
      e.stopPropagation() // Stop event bubbling
      handleMouseUp(e)
    }
  }

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX)
    setDragStartX(currentIndex)
    setLastX(e.touches[0].pageX)
    setLastTime(performance.now())
    setVelocity(0)
    e.preventDefault() // Prevent page scroll
    e.stopPropagation() // Stop event bubbling
    return false // Prevent default behavior
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    
    e.preventDefault() // Prevent page scroll while dragging
    e.stopPropagation() // Stop event bubbling
    
    const currentTime = performance.now()
    const deltaX = e.touches[0].pageX - startX
    const slideWidth = 187
    
    // Calculate velocity for momentum
    if (currentTime - lastTime > 0) {
      const newVelocity = (e.touches[0].pageX - lastX) / (currentTime - lastTime)
      setVelocity(newVelocity)
    }
    
    setLastX(e.touches[0].pageX)
    setLastTime(currentTime)
    
    // Smooth drag with resistance - allow unlimited movement to the right
    const resistance = 0.8
    const newIndex = dragStartX - (deltaX * resistance / slideWidth)
    
    // Allow unlimited movement to the right, only limit left movement
    const clampedIndex = Math.max(0, newIndex)
    setCurrentIndex(clampedIndex)
    
    return false // Prevent default behavior
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isDragging) {
      e.preventDefault() // Prevent page scroll
      e.stopPropagation() // Stop event bubbling
      
      // Don't snap back - let logos stay exactly where they are
      setIsDragging(false)
      
      // Optional: Apply minimal momentum if velocity is very high
      if (Math.abs(velocity) > 2.0) {
        const slideWidth = 187
        const momentumDistance = velocity * 50 // Reduced sensitivity
        const targetIndex = currentIndex - (momentumDistance / slideWidth)
        
        // Only apply momentum if it's a significant movement
        if (Math.abs(targetIndex - currentIndex) > 0.5) {
          const finalIndex = Math.max(0, targetIndex)
          animateToIndex(Math.round(finalIndex), 400)
        }
      }
    }
    
    return false // Prevent default behavior
  }

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Calculate transform for infinite scrolling
  const slideWidth = 187 // 172px width + 15px margin
  
  // Create a much longer array of logos for infinite scrolling
  const infiniteLogos = []
  for (let i = 0; i < 20; i++) {
    infiniteLogos.push(...partnerLogos)
  }
  
  // Allow unlimited movement to the right
  const translateX = -currentIndex * slideWidth

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text a l'esquerra */}
          <div className="lg:w-auto">
            <p className="text-gray-600 font-medium text-lg">Confien en nosaltres equips comercials d'alt rendiment:</p>
          </div>
          
          {/* Carrusel a la dreta */}
          <div className={`${styles['elementskit-clients-slider']} flex-1 lg:max-w-4xl`}>
            <div 
              ref={sliderRef}
              className={`${styles['ekit-main-swiper']} ${isDragging ? 'cursor-grabbing dragging' : 'cursor-grab'}`}
              onMouseDown={(e) => handleMouseDown(e, Math.floor(e.currentTarget.scrollLeft / 187))}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onDragStart={(e) => e.preventDefault()} // Prevent drag and drop
              onDrop={(e) => e.preventDefault()} // Prevent drop
              onDragOver={(e) => e.preventDefault()} // Prevent drag over
              style={{ userSelect: 'none' }}
            >
              <div 
                className={styles['swiper-wrapper']}
                style={{
                  transform: `translate3d(${translateX}px, 0px, 0px)`,
                  transitionDuration: isDragging ? '0ms' : '300ms',
                  transitionProperty: 'transform',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                {infiniteLogos.map((logo, index) => (
                  <div 
                    key={index} 
                    className={styles['elementskit-client-slider-item']}
                    style={{ width: '172px', marginRight: '15px' }}
                    role="group"
                    aria-label={`${index + 1} / ${infiniteLogos.length}`}
                    data-swiper-slide-index={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className={styles['swiper-slide-inner']}>
                      <div className={`${styles['single-client']} ${styles['image-switcher']}`} title={logo.title}>
                        <a href="#">
                          <span className={styles['content-image']}>
                            <Image
                              src={logo.src}
                              alt={logo.alt}
                              width={logo.width}
                              height={logo.height}
                              className={`transition-all duration-300 ${
                                (isDragging && hoveredLogoIndex === index)
                                  ? 'filter-none opacity-100'
                                  : 'filter grayscale opacity-60'
                              }`}
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBySection
