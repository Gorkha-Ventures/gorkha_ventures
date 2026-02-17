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
            <div className="contact-intro">
              <p className="contact-label">GET IN TOUCH</p>
              <h1 className="contact-heading">Let&apos;s build something together</h1>
              <p className="contact-description">
                Whether you&apos;re a founder with an early-stage idea or looking for pre-seed and seed support, we&apos;d love to hear from you.
              </p>
              <div className="contact-info">
                <div className="contact-info-item">
                  <span className="contact-info-label">Email</span>
                  <a href="mailto:hello@gorkhaventures.com" className="contact-info-value">hello@gorkhaventures.com</a>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-label">Phone</span>
                  <a href="tel:+911234567890" className="contact-info-value">+91 123 456 7890</a>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-label">Location</span>
                  <span className="contact-info-value">India</span>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
