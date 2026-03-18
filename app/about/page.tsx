import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us | Gorkha Ventures',
  description: 'We help serious founders turn ideas into scalable businesses. Operator-led, evidence-based support from first customer to Series A.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="about-page">
        <div className="container">
          <section className="about-hero">
            <p className="about-label">ABOUT US</p>
            <h1 className="about-title">We help serious founders build what matters</h1>
            <p className="about-lead">
              Gorkha Ventures is an early-stage venture and incubation partner. We back founders with capital, hands-on mentorship, and the kind of operator experience that turns ideas into scalable businesses.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-section-title">Our approach</h2>
            <p className="about-section-text">
              We&apos;re operators who&apos;ve built and scaled companies. That means we focus on evidence over hype: clear metrics, execution sprints, and honest feedback. We work with a small number of teams so we can be genuinely hands-on—from pre-seed validation through seed funding and beyond.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-section-title">What we believe</h2>
            <ul className="about-values">
              <li>
                <strong>Operator-led.</strong> Our team has built companies; we advise from experience, not theory.
              </li>
              <li>
                <strong>Evidence-based.</strong> We use data and clear milestones to guide decisions and investments.
              </li>
              <li>
                <strong>Long-term partnership.</strong> We&apos;re in it for the journey, not just the cheque.
              </li>
              <li>
                <strong>Founder-first.</strong> We back people and ideas we believe in, with alignment and transparency.
              </li>
            </ul>
          </section>

          <section className="about-cta">
            <p className="about-cta-text">Ready to build with us?</p>
            <div className="about-cta-buttons">
              <Link href="/contact" className="btn btn-primary">Get in touch</Link>
              <Link href="/#services" className="btn btn-secondary">Our services</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
