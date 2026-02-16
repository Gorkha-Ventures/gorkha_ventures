import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
              <form className="contact-form" action="#" method="post">
                <div className="form-row">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input id="name" name="name" type="text" className="form-input" placeholder="Your name" required />
                </div>
                <div className="form-row">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input id="email" name="email" type="email" className="form-input" placeholder="you@company.com" required />
                </div>
                <div className="form-row">
                  <label htmlFor="company" className="form-label">Company (optional)</label>
                  <input id="company" name="company" type="text" className="form-input" placeholder="Company name" />
                </div>
                <div className="form-row">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" className="form-input form-textarea" placeholder="Tell us about your idea or how we can help..." rows={5} required />
                </div>
                <button type="submit" className="contact-submit">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
