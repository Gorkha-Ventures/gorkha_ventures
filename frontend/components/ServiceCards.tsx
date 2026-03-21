'use client'

import Link from 'next/link'
import GrowthAnimation from './GrowthAnimation'

type Service = {
  title: string
  subtitle: string
  description: string
  color: string
  icon: string
  href: string
  layout?: 'founders'
}

const services: Service[] = [
  {
    title: 'Program for Founders',
    subtitle: 'Validation | Product strategy | GTM support',
    description: 'We partner with founders from idea to scale by helping validate business models, sharpen product strategy, and build repeatable go-to-market engines.',
    color: '#73d8e0',
    icon: '🚀',
    layout: 'founders',
    href: '/services/offerings-for-founders',
  },
  
  {
    title: 'Offerings For MSME',
    subtitle: 'Cash Flow Rescue  | Founder Freedom  | Revenue Engine ',
    description: 'We help micro, small and medium enterprises grow from first customer to Series A with hands-on support, capital, and operator-led guidance.',
    color: '#73d8e0',
    icon: '🏢',
    href: '/services/msme-offerings',
  },
  {
    title: 'Program for Investors',
    subtitle: 'Deal flow | Portfolio support | Co-investment',
    description: 'Access curated early-stage opportunities, portfolio company support, and co-investment options alongside Gorkha Ventures.',
    color: '#1a1a1a',
    icon: '📈',
    href: '/services/offerings-for-investors',
  },
  {
    title: 'Program for Job Seekers',
    subtitle: 'Portfolio careers | Startup roles',
    description: 'Join fast-growing portfolio companies and startups we back. Find roles that match your skills and ambition in our network.',
    color: '#4a4a4a',
    icon: '💼',
    href: '/services/offerings-for-job-seekers',
  }
 
  
  
]

export default function ServiceCards() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-wrapper">
          {services.map((service, index) => {
            const isFoundersLayout = service.layout === 'founders'

            return (
            <div
              key={index}
              className="service-card"
              style={{ 
                top: `${80 + index * 20}px`,
                zIndex: index + 1,
              }}
            >
              <div className="service-card-inner">
                {isFoundersLayout ? (
                  <div className="service-card-grid service-card-grid-founders">
                    <div className="service-card-founders-top">
                      <div className="service-card-header">
                        <h2 className="service-card-title">{service.title}</h2>
                        <p className="service-card-subtitle">
                          {service.subtitle}
                        </p>
                      </div>

                      <div className="service-card-content service-card-founders-content">
                        <p className="service-card-description">{service.description}</p>

                        <Link
                          href={service.href}
                          className="service-card-link service-card-link-button"
                        >
                          <span>Get started</span>
                          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9C2.33333 7.66667 5 5 5 5L1 1" stroke="currentColor"/>
                          </svg>
                        </Link>
                      </div>
                    </div>

                    <div className="service-card-visual service-card-founders-visual">
                      <GrowthAnimation />
                    </div>
                  </div>
                ) : (
                  <div className="service-card-grid">
                    {/* Content */}
                    <div className="service-card-content">
                      <div className="service-card-header">
                        <h2 className="service-card-title">
                          {service.title}
                        </h2>
                        <p className="service-card-subtitle">
                          {service.subtitle}
                        </p>
                      </div>

                      <p className="service-card-description">
                        {service.description}
                      </p>

                      <Link
                        href={service.href}
                        className="service-card-link service-card-link-button"
                      >
                        <span>Get started</span>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 9C2.33333 7.66667 5 5 5 5L1 1" stroke="currentColor"/>
                        </svg>
                      </Link>
                    </div>

                    {/* Visual */}
                    <div className="service-card-visual">
                      <div className="service-card-icon">{service.icon}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}