'use client'

import { useEffect, useRef, useState } from 'react'

export default function VideoCard() {
  const videoSectionRef = useRef<HTMLElement>(null)
  const [transform, setTransform] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!videoSectionRef.current) return

      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const heroHeight = windowHeight
      
      // Start moving video up when scrolling past hero section
      // The video should move up to cover the hero section
      if (scrollY > heroHeight * 0.3) {
        const progress = Math.min((scrollY - heroHeight * 0.3) / (heroHeight * 0.7), 1)
        // Move video up to cover hero (negative translateY)
        const translateY = -progress * (heroHeight * 0.6)
        setTransform(translateY)
      } else {
        setTransform(0)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={videoSectionRef} className="video-section">
      <div className="container">
        <div 
          className="video-card"
          style={{ transform: `translateY(${transform}px)` }}
        >
          <video
            className="video-player"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://cdn.prod.website-files.com/635931b47ccace7620762f33/6359a3fff1df58d0e3633832_Home Video-transcode.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
