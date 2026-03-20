import type { Metadata } from 'next'
import FounderOfferingLanding from '@/components/FounderOfferingLanding'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gorkha Ventures - Build Beyond Ideas',
  description:
    'Operator-led execution for founders: clarity, disciplined execution, and fundraise readiness.',
}

export default function OfferingsForFoundersPage() {
  return (
    <>
      <Header />
      <FounderOfferingLanding />
      <Footer />
    </>
  )
}
