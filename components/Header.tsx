'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

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
            <Link href="#services" className="nav-link">Services</Link>
            <Link href="#differentiators" className="nav-link">What we do</Link>
            <Link href="#process" className="nav-link">Process</Link>
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
