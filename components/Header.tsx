'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navServices = [
  {
    title: 'Offerings for Founders',
    subtitle: 'Validation | Product strategy | GTM support',
    href: '/services/offerings-for-founders',
    iconVariant: 'founders',
  },
  {
    title: 'Offerings For MSME',
    subtitle: 'Cash Flow Rescue | Founder Freedom | Revenue Engine',
    href: '/services/msme-offerings',
    iconVariant: 'analytics',
  },
  {
    title: 'Offerings for Investors',
    subtitle: 'Deal flow | Portfolio support | Co-investment',
    href: '/services/offerings-for-investors',
    iconVariant: 'growth',
  },
  {
    title: 'Offerings for Job Seekers',
    subtitle: 'Portfolio careers | Startup roles',
    href: '/services/offerings-for-job-seekers',
    iconVariant: 'talent',
  },
  
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="Gorkha Ventures Home">
          <Image
            src="/logo_white.svg"
            alt="Gorkha Ventures"
            width={140}
            height={36}
            className="logo-image"
          />
        </Link>
        <nav className="nav">
          <div className="nav-links">
            <div
              className="nav-dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="nav-link nav-dropdown-trigger"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg className="nav-dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`nav-dropdown-menu ${servicesOpen ? 'is-open' : ''}`} role="menu">
                {navServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="nav-dropdown-item"
                    role="menuitem"
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className={`nav-dropdown-item-icon nav-dropdown-item-icon-${service.iconVariant}`} aria-hidden>
                      <span className="nav-dropdown-item-icon-mark" />
                    </span>
                    <span className="nav-dropdown-item-content">
                      <span className="nav-dropdown-item-title">{service.title}</span>
                      <span className="nav-dropdown-item-subtitle">{service.subtitle}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <a
              href="https://news.gorkhaventures.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link nav-resource-button"
            >
              Resources
            </a>
          </div>
        </nav>
        <div className="nav-actions">
          <Link href="/contact" className="nav-cta">Apply</Link>
        </div>
      </div>
    </header>
  )
}
