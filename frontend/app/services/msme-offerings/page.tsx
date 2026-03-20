import type { Metadata } from 'next'
import MsmeOfferingLanding from '@/components/MsmeOfferingLanding'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gorkha Ventures - MSME Offerings',
  description:
    'Building Resilient Businesses. Cash flow, systems, and growth support for Uttarakhand MSMEs.',
}

export default function MsmeOfferingsPage() {
  return (
    <>
      <Header />
      <MsmeOfferingLanding />
      <Footer />
    </>
  )
}
