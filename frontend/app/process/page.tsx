import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Process | Gorkha Ventures',
  description: 'Rigorous but fair. Our selection process: application, intro call, execution sprint, due diligence, and decision. 3-5% acceptance rate.',
}

const steps = [
  {
    number: 1,
    title: 'Simple Application',
    duration: '(15 min)',
    description: 'Basic info, quick questions. Low friction to apply, high bar to get in.',
  },
  {
    number: 2,
    title: 'Intro Call',
    duration: '(30-60 min)',
    description: 'Deep conversation about traction, challenges, goals. We verify claims, you assess fit.',
  },
  {
    number: 3,
    title: 'Execution Sprint',
    duration: '(48-72 hours)',
    description: 'Behavioral task: Talk to 5 customers OR ship feature OR show metric growth. Proves you can hustle.',
  },
  {
    number: 4,
    title: 'Due Diligence',
    duration: '(1-2 weeks)',
    description: 'Reference checks, customer calls, financial verification. We verify everything we can.',
  },
  {
    number: 5,
    title: 'Decision',
    duration: '(Within 3 weeks)',
    description: 'Accept (with offer) OR Reject (with detailed feedback + reapply criteria) OR Waitlist (until milestones hit).',
  },
]

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main className="process-page">
        <div className="container">
          <section className="process-hero">
            <p className="process-label">OUR PROCESS</p>
            <h1 className="process-title">Rigorous but fair</h1>
            <p className="process-lead">
              We invest in execution, not just ideas. Our selection process is designed to be transparent and respectful of your time—with a 3–5% acceptance rate and detailed feedback either way.
            </p>
          </section>

          <div className="process-content">
            <div className="selection-process-header">
              <p className="selection-process-label">SELECTION STEPS</p>
              <h2 className="selection-process-title">
                From application to decision
              </h2>
              <p className="selection-process-acceptance">Typical timeline: 3–4 weeks</p>
            </div>

            <div className="selection-process-timeline">
              {steps.map((step, index) => (
                <div key={index} className="timeline-step">
                  <div className="timeline-step-number">
                    <span>{step.number}</span>
                  </div>
                  <div className="timeline-step-content">
                    <h3 className="timeline-step-title">
                      {step.title}{' '}
                      <span className="timeline-step-duration">{step.duration}</span>
                    </h3>
                    <p className="timeline-step-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="selection-process-footer">
              We give detailed feedback even if we reject—we&apos;re building long-term relationships. If you&apos;re waitlisted, we&apos;ll tell you what milestones would change the outcome.
            </p>
          </div>

          <section className="process-cta">
            <p className="process-cta-text">Ready to apply?</p>
            <div className="process-cta-buttons">
              <Link href="/contact" className="btn btn-primary">Get in touch</Link>
              <Link href="/#process" className="btn btn-secondary">See on homepage</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
