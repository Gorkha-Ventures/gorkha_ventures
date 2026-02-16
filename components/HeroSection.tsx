'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: 'Gorkha Ventures has partnered with OneLeap from inception to launch and beyond. They helped us move from idea to execution by shaping our strategy, operating model, and early scaling decisions. \nWhat stood out was their hands-on involvement and operator mindset — not just advice, but real support where it mattered. Even post-launch, GV continues to be a trusted partner as we scale our operations and make critical growth decisions.',
      author: 'Shubham Pandey',
      role: 'Founder & CEO',
      company: 'OneLeap',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <main className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-heading">
              We help serious founders turn ideas into{' '}
              <span className="highlight">scalable business</span> and raise
              capital when it really matters
            </h1>
            <p className="hero-description">
              From first customer to series A: Pre-seed incubation, Seed
              Funding, Mentorship
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Contact us</button>
              <button className="btn btn-secondary">About</button>
            </div>
          </div>
          <div className="hero-right">
            <div className="testimonial-container">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`testimonial-card ${
                    index === currentTestimonial ? 'active' : ''
                  }`}
                >
                  <div className="testimonial-quote">
                    <p className="testimonial-text">{testimonial.quote}</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-author-info">
                      <h4 className="testimonial-author-name">{testimonial.author}</h4>
                      <p className="testimonial-author-role">{testimonial.role}</p>
                    </div>
                    <span className="testimonial-company">{testimonial.company}</span>
                  </div>
                </div>
              ))}
              <div className="testimonial-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`testimonial-indicator ${
                      index === currentTestimonial ? 'active' : ''
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
