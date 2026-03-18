'use client'

import { useEffect, useState } from 'react'
import ContactForm, { type FormType } from './ContactForm'
import GrowthAnimation from './GrowthAnimation'

type Service = {
  title: string
  subtitle: string
  description: string
  color: string
  icon: string
  formType: FormType
  layout?: 'founders'
}

const services: Service[] = [
  {
    title: 'Offerings For Founders',
    subtitle: 'Validation | Product strategy | GTM support',
    description: 'We partner with founders from idea to scale by helping validate business models, sharpen product strategy, and build repeatable go-to-market engines.',
    color: '#73d8e0',
    icon: '🚀',
    layout: 'founders',
    formType: 'founder',
  },
  
  {
    title: 'Offerings For MSME',
    subtitle: 'Pre-seed incubation | Seed funding | Mentorship',
    description: 'We help micro, small and medium enterprises grow from first customer to Series A with hands-on support, capital, and operator-led guidance.',
    color: '#73d8e0',
    icon: '🏢',
    formType: 'msme',
  },
  {
    title: 'Offerings For Investors',
    subtitle: 'Deal flow | Portfolio support | Co-investment',
    description: 'Access curated early-stage opportunities, portfolio company support, and co-investment options alongside Gorkha Ventures.',
    color: '#1a1a1a',
    icon: '📈',
    formType: 'investor',
  },
  {
    title: 'Offerings for Job Seekers',
    subtitle: 'Portfolio careers | Startup roles',
    description: 'Join fast-growing portfolio companies and startups we back. Find roles that match your skills and ambition in our network.',
    color: '#4a4a4a',
    icon: '💼',
    formType: 'talent',
  }
 
  
  
]

export default function ServiceCards() {
  const [selectedForm, setSelectedForm] = useState<FormType | ''>('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openFormModal(formType: FormType) {
    setSelectedForm(formType)
    setIsModalOpen(true)
  }

  function closeFormModal() {
    setIsModalOpen(false)
  }

  useEffect(() => {
    if (!isModalOpen) return

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = overflow
    }
  }, [isModalOpen])

  useEffect(() => {
    if (!isModalOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeFormModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

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
                        <p className="service-card-subtitle" style={{ color: service.color }}>
                          {service.subtitle}
                        </p>
                      </div>

                      <div className="service-card-content service-card-founders-content">
                        <p className="service-card-description">{service.description}</p>

                        <button
                          type="button"
                          className="service-card-link service-card-link-button"
                          onClick={() => openFormModal(service.formType)}
                        >
                          <span>Get started</span>
                          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9C2.33333 7.66667 5 5 5 5L1 1" stroke="currentColor"/>
                          </svg>
                        </button>
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
                        <p className="service-card-subtitle" style={{ color: service.color }}>
                          {service.subtitle}
                        </p>
                      </div>

                      <p className="service-card-description">
                        {service.description}
                      </p>

                      <button
                        type="button"
                        className="service-card-link service-card-link-button"
                        onClick={() => openFormModal(service.formType)}
                      >
                        <span>Get started</span>
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 9C2.33333 7.66667 5 5 5 5L1 1" stroke="currentColor"/>
                        </svg>
                      </button>
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

        {isModalOpen && selectedForm && (
          <div
            className="services-form-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="services-form-modal-title"
            onClick={closeFormModal}
          >
            <div className="services-form-modal-content" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className="services-form-modal-close"
                aria-label="Close form"
                onClick={closeFormModal}
              >
                x
              </button>
              <div className="services-form-modal-header">
                <p className="services-form-modal-label">GET STARTED</p>
                <h3 id="services-form-modal-title" className="services-form-modal-title">
                  Share your details
                </h3>
              </div>
              <ContactForm initialFormType={selectedForm} onBack={closeFormModal} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}