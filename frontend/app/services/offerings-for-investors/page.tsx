import type { Metadata } from 'next'
import InvestorOfferingLanding from '@/components/InvestorOfferingLanding'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gorkha Ventures - Program for Investors',
  description:
    'Execution-ready early-stage deal flow, operator-level diligence intelligence, and post-investment support.',
}

export default function ProgramForInvestorsPage() {
  return (
    <>
      <Header />
      <InvestorOfferingLanding />
      <Footer />
    </>
  )
}
