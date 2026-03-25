'use client'

import Image from 'next/image'
import { useEffect, useLayoutEffect, useMemo, useState } from 'react'

export type PartnerLogo = {
  name: string
  logo: string
  slug: string
}

const AUTO_SLIDE_MS = 2800
const SLIDE_DURATION_MS = 520

// Keep consistent visual separation between all logos.
// Some marks are optically wider; slightly larger gaps prevents “tight” pairs.
const LAYOUT_WIDE = { logosPerView: 4, slotWidth: 250, slotGap: 48 } as const
const LAYOUT_NARROW = { logosPerView: 3, slotWidth: 130, slotGap: 24 } as const

export default function PartnersCarousel({ partners }: { partners: PartnerLogo[] }) {
  const [startIndex, setStartIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isNarrow, setIsNarrow] = useState(false)

  useLayoutEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const apply = () => setIsNarrow(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const { logosPerView: LOGOS_PER_VIEW, slotWidth: SLOT_WIDTH, slotGap: SLOT_GAP } =
    isNarrow ? LAYOUT_NARROW : LAYOUT_WIDE

  const canSlide = partners.length > LOGOS_PER_VIEW

  useEffect(() => {
    if (!canSlide || isAnimating) return

    const timer = window.setTimeout(() => {
      setIsAnimating(true)
    }, AUTO_SLIDE_MS)

    return () => window.clearTimeout(timer)
  }, [canSlide, isAnimating])

  useEffect(() => {
    if (!isAnimating) return

    const timer = window.setTimeout(() => {
      setStartIndex((current) => (current + 1) % partners.length)
      setIsAnimating(false)
    }, SLIDE_DURATION_MS)

    return () => window.clearTimeout(timer)
  }, [isAnimating, partners.length])

  const visiblePartners = useMemo(() => {
    if (partners.length === 0) return []

    const windowSlots = Array.from({ length: LOGOS_PER_VIEW }, (_, offset) => {
      return partners[(startIndex + offset) % partners.length]
    })

    if (!isAnimating || !canSlide) {
      return windowSlots
    }

    const nextIncoming = partners[(startIndex + LOGOS_PER_VIEW) % partners.length]
    return [...windowSlots, nextIncoming]
  }, [partners, startIndex, isAnimating, canSlide, LOGOS_PER_VIEW])

  const stepPx = SLOT_WIDTH + SLOT_GAP
  const viewportWidth = LOGOS_PER_VIEW * SLOT_WIDTH + (LOGOS_PER_VIEW - 1) * SLOT_GAP

  if (partners.length === 0) return null

  return (
    <div
      className="partners-carousel-viewport"
      data-carousel-compact={isNarrow ? 'true' : undefined}
      style={{
        width: `${viewportWidth}px`,
        maxWidth: '100%',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: `${SLOT_GAP}px`,
          alignItems: 'center',
          transform: canSlide && isAnimating ? `translateX(-${stepPx}px)` : 'translateX(0)',
          transition: isAnimating
            ? `transform ${SLIDE_DURATION_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1)`
            : 'none',
        }}
      >
        {visiblePartners.map((partner, index) => (
          <div
            key={`${partner.slug}-${startIndex}-${index}`}
            style={{
              flexShrink: 0,
              width: `${SLOT_WIDTH}px`,
            }}
            className={`partner-logo partner-logo-${partner.slug}`}
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={240}
              height={120}
              className="partner-logo-image"
              sizes={`${SLOT_WIDTH}px`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
