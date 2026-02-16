import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column footer-brand">
            <div className="footer-logo">
              <Image
                src="/logo_white.svg"
                alt="Gorkha Ventures"
                width={240}
                height={40}
              />
            </div>
            <p className="footer-tagline">
              Helping serious founders build scalable businesses from first customer to Series A.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M18.5 0h-17C0.675 0 0 0.675 0 1.5v17C0 19.325 0.675 20 1.5 20h17c0.825 0 1.5-0.675 1.5-1.5v-17C20 0.675 19.325 0 18.5 0zM6 17H3V8h3V17zM4.5 6.5C3.675 6.5 3 5.825 3 5s0.675-1.5 1.5-1.5S6 4.175 6 5 5.325 6.5 4.5 6.5zM17 17h-3v-4.5c0-1.125-0.375-1.875-1.313-1.875-0.713 0-1.137 0.488-1.325 0.95-0.063 0.175-0.088 0.413-0.088 0.65V17h-3s0.038-7.5 0-8.25h3v1.175C11.838 9.4 12.65 8.5 14.125 8.5c1.563 0 2.875 1.025 2.875 3.225V17z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1.802c2.67 0 2.987.01 4.041.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.053.048-1.37.058-4.04.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.226 2.242.06 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.166 3.632 2.181 5.65 5.817 5.817C6.944 19.988 7.284 20 10 20s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.773 2.247 17.757.228 14.123.06 13.057.01 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><Link href="/services/pre-seed">Pre-seed Incubation</Link></li>
              <li><Link href="/services/seed-funding">Seed Funding</Link></li>
              <li><Link href="/services/mentorship">Mentorship</Link></li>
              <li><Link href="/services/growth">Growth Strategy</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/apply">Apply Now</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li><Link href="/contact">Contact us</Link></li>
              <li><a href="mailto:hello@gorkhaventures.com">hello@gorkhaventures.com</a></li>
              <li><a href="tel:+911234567890">+91 123 456 7890</a></li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Gorkha Ventures. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <span className="footer-separator">•</span>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
