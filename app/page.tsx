import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Partners from '@/components/Partners'
import ServiceCards from '@/components/ServiceCards'
import BackedBySection from '@/components/BackedBySection'
import DifferentiatorSection from '@/components/DifferentiatorSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import SelectionProcess from '@/components/SelectionProcess'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import OurNetwork from '@/components/OurNetwork'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Partners />
      <ServiceCards />
      <OurNetwork />
      <BackedBySection />
      <DifferentiatorSection />
      <TestimonialsSection />
      <SelectionProcess />
      <FinalCTA />
      <Footer />
    </>
  )
}
