'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navPrograms = [
  {
    title: 'For founders',
    subtitle: 'Validation | Product strategy | GTM support',
    href: '/services/offerings-for-founders',
    iconVariant: 'founders',
  },
  {
    title: 'For MSME',
    subtitle: 'Pre-seed incubation | Seed funding | Mentorship',
    href: '/services/msme-offerings',
    iconVariant: 'analytics',
  },
  {
    title: 'For investors',
    subtitle: 'Deal flow | Portfolio support | Co-investment',
    href: '/services/offerings-for-investors',
    iconVariant: 'growth',
  },
  {
    title: 'For job seekers',
    subtitle: 'Portfolio careers | Startup roles',
    href: '/services/offerings-for-job-seekers',
    iconVariant: 'talent',
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false)

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
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button
                type="button"
                className="nav-link nav-dropdown-trigger"
                aria-expanded={programsOpen}
                aria-haspopup="true"
              >
                Program
                <svg className="nav-dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`nav-dropdown-menu ${programsOpen ? 'is-open' : ''}`} role="menu">
                {navPrograms.map((program) => (
                  <Link
                    key={program.href}
                    href={program.href}
                    className="nav-dropdown-item"
                    role="menuitem"
                    onClick={() => setProgramsOpen(false)}
                  >
                    <span className={`nav-dropdown-item-icon nav-dropdown-item-icon-${program.iconVariant}`} aria-hidden>
                      <span className="nav-dropdown-item-icon-mark" />
                    </span>
                    <span className="nav-dropdown-item-content">
                      <span className="nav-dropdown-item-title">{program.title}</span>
                      <span className="nav-dropdown-item-subtitle">{program.subtitle}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/resources" className="nav-link nav-resource-button">
              Resources
            </Link>
          </div>
        </nav>
        <div className="nav-actions">
          <Link href="/contact" className="nav-cta">Apply</Link>
        </div>

        {/* Mobile: logo + hamburger (menu contains Program dropdown + Resources) */}
        <button
          type="button"
          className={`nav-mobile-toggle ${mobileOpen ? 'is-open' : ''}`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((v) => !v)
            if (mobileOpen) setMobileProgramsOpen(false)
          }}
        >
          <span className="nav-mobile-toggle-lines" aria-hidden />
        </button>
      </div>

      <div
        className={`nav-mobile-sheet ${mobileOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-label="Mobile menu"
        aria-modal="true"
        onClick={() => setMobileOpen(false)}
      >
        <div className="nav-mobile-panel" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className="nav-mobile-item nav-mobile-item-trigger"
            aria-expanded={mobileProgramsOpen}
            onClick={() => setMobileProgramsOpen((v) => !v)}
          >
            <span>Program</span>
            <span className={`nav-mobile-chevron ${mobileProgramsOpen ? 'is-open' : ''}`} aria-hidden>
              ▾
            </span>
          </button>

          <div className={`nav-mobile-submenu ${mobileProgramsOpen ? 'is-open' : ''}`}>
            {navPrograms.map((program) => (
              <Link
                key={program.href}
                href={program.href}
                className="nav-mobile-subitem"
                onClick={() => {
                  setMobileOpen(false)
                  setMobileProgramsOpen(false)
                }}
              >
                <span className="nav-mobile-subitem-title">{program.title}</span>
                <span className="nav-mobile-subitem-subtitle">{program.subtitle}</span>
              </Link>
            ))}
          </div>

          <Link
            href="/resources"
            className="nav-mobile-item"
            onClick={() => {
              setMobileOpen(false)
              setMobileProgramsOpen(false)
            }}
          >
            Resources
          </Link>
        </div>
      </div>
    </header>
  )
}
