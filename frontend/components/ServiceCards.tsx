'use client'

import Link from 'next/link'

const services = [
  {
    title: 'MSME Offerings',
    subtitle: 'Pre-seed incubation | Seed funding | Mentorship',
    description: 'We help micro, small and medium enterprises grow from first customer to Series A with hands-on support, capital, and operator-led guidance.',
    color: '#73d8e0',
    icon: '🏢'
  },
  {
    title: 'Offerings for Investors',
    subtitle: 'Deal flow | Portfolio support | Co-investment',
    description: 'Access curated early-stage opportunities, portfolio company support, and co-investment options alongside Gorkha Ventures.',
    color: '#1a1a1a',
    icon: '📈'
  },
  {
    title: 'Offerings for Job Seekers',
    subtitle: 'Portfolio careers | Startup roles',
    description: 'Join fast-growing portfolio companies and startups we back. Find roles that match your skills and ambition in our network.',
    color: '#4a4a4a',
    icon: '💼'
  }
]

export default function ServiceCards() {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-wrapper">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ 
                top: `${80 + index * 20}px`,
                zIndex: index + 1,
              }}
            >
              <div className="service-card-inner">
                <div className="service-card-grid">
                  {/* Content */}
                  <div className="service-card-content">
                    <div className="service-card-header">
                      <h2 className="service-card-title">
                        {service.title}
                      </h2>
                      <p className="service-card-subtitle" style={{ color: service.color }}>
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="service-card-description">
                      {service.description}
                    </p>

                    <Link 
                      href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="service-card-link"
                    >
                      <span>Learn more</span>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}