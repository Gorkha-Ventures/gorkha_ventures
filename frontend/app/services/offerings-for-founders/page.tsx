import type { Metadata } from 'next'
import FounderOfferingLanding from '@/components/FounderOfferingLanding'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gorkha Ventures - Program for Founders',
  description:
    'Operator-led execution for founders: clarity, disciplined execution, and fundraise readiness.',
}

export default function ProgramForFoundersPage() {
  return (
    <>
      <Header />
      <FounderOfferingLanding />
      <Footer />
    </>
  )
}
