import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-content">
          <h2 className="final-cta-heading">
            If you are building, growing, investing, or evolving — let's structure the journey.
          </h2>
          <Link href="/contact" className="final-cta-button">
            Work With Gorkha →
          </Link>
        </div>
      </div>
    </section>
  )
}
