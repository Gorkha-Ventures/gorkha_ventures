'use client'

import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: 'Gorkha Ventures has been instrumental in preparing FlexiFunnels for our fundraise. Their focus on investment readiness helped us sharpen our narrative, strengthen our financial clarity, and structure our data room with confidence. Beyond strategy, GV has guided us through every stage of the fundraising process — from positioning and investor conversations to navigating diligence. Their operator-led approach brought structure, discipline, and clarity when it mattered most.',
    name: 'Saurabh Bhatnagar',
    role: 'Founder & CEO',
    company: 'FlexiFunnels'
  },
  {
    quote: 'Gorkha Ventures has played a meaningful role in Ascendra\'s growth journey. They helped us sharpen our positioning and build a distinct niche in the wealth management space. Their strategic clarity and operator mindset pushed us to think sharper, move faster, and build with long term conviction. GV has been a trusted partner as we continue to scale and strengthen our brand in a competitive market.',
    name: 'Gaurav Agarwal',
    role: 'Founder and CEO',
    company: 'Ascendra Advisor'
  },
  {
    quote: 'Gorkha Ventures has partnered with OneLeap from inception to launch and beyond. They helped us move from idea to execution by shaping our strategy, operating model, and early scaling decisions. \nWhat stood out was their hands-on involvement and operator mindset — not just advice, but real support where it mattered. Even post-launch, GV continues to be a trusted partner as we scale our operations and make critical growth decisions.',
    name: 'Shubham Pandey',
    role: 'Founder & CEO',
    company: 'OneLeap',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  // Create infinite loop by duplicating testimonials
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]
  const startIndex = testimonials.length // Start from the middle copy

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Initialize at the middle copy for seamless looping
    setCurrentIndex(startIndex)
  }, [startIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentIndex])

  const handleNext = () => {
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const handleTransitionEnd = () => {
    setIsTransitioning(false)
    // Reset to middle copy when reaching the end
    if (currentIndex >= startIndex + testimonials.length) {
      setCurrentIndex(startIndex)
    }
    // Reset to middle copy when reaching the start
    if (currentIndex < startIndex) {
      setCurrentIndex(startIndex + testimonials.length - 1)
    }
  }

  const goToSlide = (index: number) => {
    setIsTransitioning(true)
    setCurrentIndex(startIndex + index)
  }

  const getTransformValue = () => {
    if (typeof window === 'undefined') {
      // Server-side rendering fallback
      return `translateX(calc(-${currentIndex * 512}px + 50% - 496px))`
    }
    
    if (isMobile) {
      // Mobile: each card is (100% - 80px) + 20px gap
      const cardWidth = window.innerWidth - 80
      const gap = 20
      return `translateX(calc(-${currentIndex * (cardWidth + gap)}px + 50% - ${cardWidth / 2}px))`
    }
    // Desktop: Fixed card width (480px on large, 400px on tablet) + 32px gap
    const cardWidth = window.innerWidth >= 1024 ? 480 : 400
    const gap = 32
    return `translateX(calc(-${currentIndex * (cardWidth + gap)}px + 50% - ${cardWidth}px - ${gap / 2}px))`
  }

  const getActiveDot = () => {
    return (currentIndex - startIndex + testimonials.length) % testimonials.length
  }

  const isCardActive = (index: number) => {
    // Mark center 2 cards as active on desktop, center 1 on mobile
    if (isMobile) {
      return index === currentIndex
    }
    return index === currentIndex || index === currentIndex + 1
  }

  return (
    <section className="testimonials-section">
      <div className="container" style={{ padding: 0 }}>
        <h2 className="testimonials-title" style={{ padding: '0 24px' }}>
          Trusted by founders building the next generation of companies
        </h2>
        <div className="testimonials-carousel">
          <div className="testimonials-carousel-wrapper">
            <div 
              className="testimonials-track" 
              style={{ 
                transform: getTransformValue(),
                transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <article 
                  key={index} 
                  className={`testimonial-card ${isCardActive(index) ? 'active' : ''}`}
                >
                  <blockquote className="testimonial-quote">
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <footer className="testimonial-footer">
                    <div className="testimonial-avatar">
                      {testimonial.company.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="testimonial-credit">
                      <p className="testimonial-name">{testimonial.name}</p>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`testimonial-dot ${getActiveDot() === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
