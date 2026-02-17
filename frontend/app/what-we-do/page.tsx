import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'What We Do | Gorkha Ventures',
  description: 'Operator-led, evidence-based support. We\'re operators who\'ve built companies—hands-on execution, Indian playbook, long-term partnership.',
}

const differentiators = [
  {
    icon: '👥',
    iconBg: 'rgba(115, 216, 224, 0.2)',
    title: 'Operator-Led',
    titleEmoji: '👥',
    description: 'Our mentors: CEOs, CTOs, domain experts with deep operational experience. They\'ve raised funding, hired teams, and navigated the challenges you\'ll face.',
  },
  {
    icon: '📋',
    iconBg: 'rgba(115, 216, 224, 0.15)',
    title: 'Evidence-Based',
    titleEmoji: '🔍',
    description: 'We verify everything: customer calls, dashboards, unit economics, execution. No pitch theater—only proven traction and clear metrics.',
  },
  {
    icon: '🌍',
    iconBg: 'rgba(255, 255, 255, 0.06)',
    title: 'Tier-2 Advantage',
    titleEmoji: '🏔️',
    description: 'Regional focus = competitive advantage: lower CAC, better economics, underestimated markets, and an authentic story for investors.',
  },
  {
    icon: '📖',
    iconBg: 'rgba(115, 216, 224, 0.2)',
    title: 'Indian Playbook',
    titleEmoji: '🇮🇳',
    description: 'We teach what works in India: capital-efficient growth, enterprise sales cycles, hiring in tier-2, and regulatory navigation.',
  },
  {
    icon: '⚙️',
    iconBg: 'rgba(115, 216, 224, 0.15)',
    title: 'Hands-On Execution',
    titleEmoji: '🔧',
    description: 'We don\'t just advise—we implement with you. Customer calls, pitch rewrites, hiring support, and weekly tactical sessions.',
  },
  {
    icon: '❤️',
    iconBg: 'rgba(255, 255, 255, 0.06)',
    title: 'Long-Term Partnership',
    titleEmoji: '🤝',
    description: 'We support you from pre-seed through Series A and beyond. We\'re not optimizing for Demo Day—we\'re optimizing for sustainable success.',
  },
]

export default function WhatWeDoPage() {
  return (
    <>
      <Header />
      <main className="what-we-do-page">
        <div className="container">
          <section className="what-we-do-hero">
            <p className="what-we-do-label">WHAT WE DO</p>
            <h1 className="what-we-do-title">
              We&apos;re operators who&apos;ve built companies
            </h1>
            <p className="what-we-do-lead">
              Not consultants from the sidelines—we work alongside you with evidence-based advice, hands-on execution, and a long-term view.
            </p>
          </section>

          <div className="what-we-do-grid">
            {differentiators.map((item, index) => (
              <div key={index} className="differentiator-card">
                <div
                  className="differentiator-icon"
                  style={{ backgroundColor: item.iconBg }}
                >
                  <span>{item.icon}</span>
                </div>
                <h3 className="differentiator-card-title">
                  {item.title} {item.titleEmoji}
                </h3>
                <p className="differentiator-card-description">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <section className="what-we-do-cta">
            <p className="what-we-do-cta-text">Want to see how we work?</p>
            <div className="what-we-do-cta-buttons">
              <Link href="/process" className="btn btn-primary">Our process</Link>
              <Link href="/contact" className="btn btn-secondary">Get in touch</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
