'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navServices = [
  { title: 'MSME Offerings', href: '/services/msme-offerings' },
  { title: 'Offerings for Investors', href: '/services/offerings-for-investors' },
  { title: 'Offerings for Job Seekers', href: '/services/offerings-for-job-seekers' },
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
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/what-we-do" className="nav-link">What we do</Link>
            <Link href="/process" className="nav-link">Process</Link>
          </div>
          <div className="nav-actions">
            <span className="nav-lang">IN</span>
            <Link href="/contact" className="nav-cta">Contact us</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
