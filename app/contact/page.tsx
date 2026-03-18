import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Gorkha Ventures',
  description: 'Get in touch with Gorkha Ventures. We help serious founders turn ideas into scalable businesses.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <div className="container">
          <div className="contact-grid">
            <section className="contact-intro">
              <div className="contact-intro-card">
                <p className="contact-label">GET IN TOUCH</p>
                <h1 className="contact-heading">Let&apos;s build something together</h1>
                <p className="contact-description">
                  Choose the form that fits you best - Founder, MSME, Investor, or Talent - and we&apos;ll get back to you quickly.
                </p>

                <div className="contact-highlights">
                  <span className="contact-highlight-pill">Founder-first support</span>
                  <span className="contact-highlight-pill">Operator-led guidance</span>
                  <span className="contact-highlight-pill">Fast response</span>
                </div>

                <div className="contact-info">
                  <div className="contact-info-item">
                    <span className="contact-info-label">Email</span>
                    <a href="mailto:hello@gorkhaventures.com" className="contact-info-value">saurabh@gorkhaventures.com</a>
                  </div>
                  <div className="contact-info-item">
                    <span className="contact-info-label">Phone</span>
                    <a href="tel:+911234567890" className="contact-info-value">+91 782 000 1282</a>
                  </div>
                  <div className="contact-info-item">
                    <span className="contact-info-label">Location</span>
                    <span className="contact-info-value">India</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact-form" className="contact-form-wrapper">
              <div className="contact-form-header">
                <p className="contact-form-label">START HERE</p>
                <h2 className="contact-form-heading">Tell us who you are</h2>
              </div>
              <ContactForm />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
