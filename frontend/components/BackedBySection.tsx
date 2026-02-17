import Link from 'next/link'

export default function BackedBySection() {
  const problems = [
    'Founders chase speed without structure.',
    'MSMEs operate below their true potential.',
    'Capital moves without deep filtering.',
    'Talent grows without direction.'
  ]

  const techIcons = [
    { name: 'Analytics', emoji: '📊' },
    { name: 'Growth', emoji: '📈' },
    { name: 'Network', emoji: '🌐' },
    { name: 'Funding', emoji: '💰' },
    { name: 'Strategy', emoji: '🎯' },
    { name: 'Scale', emoji: '🚀' },
    { name: 'Team', emoji: '👥' },
    { name: 'Tech', emoji: '⚙️' },
  ]

  return (
    <section className="backed-by-section">
      <div className="container backed-by-container">
        {/* Floating icons - positioned around the content */}
        <div className="backed-by-icons">
          {techIcons.map((icon, index) => (
            <div
              key={index}
              className="floating-icon"
              style={{
                '--float-delay': `${index * 0.4}s`,
                '--float-duration': `${4 + (index % 3)}s`,
              } as React.CSSProperties}
              data-position={index}
            >
              <span className="floating-icon-emoji">{icon.emoji}</span>
            </div>
          ))}
        </div>

        {/* Centered content */}
        <div className="backed-by-content">
          <h2 className="backed-by-title">
            Ideas are everywhere.
          </h2>
          <p className="backed-by-lead">
            What&apos;s rare is the discipline to carry them through uncertainty, trade-offs, capital constraints, and invisible progress.
          </p>
          <ul className="backed-by-problems">
            {problems.map((item, index) => (
              <li key={index}><span className="problem-flag">🚩</span> {item}</li>
            ))}
          </ul>
          {/* <p className="backed-by-statement">
            This is not a funding problem. It is an execution problem.
          </p>
          <p className="backed-by-mission">
            Gorkha Ventures exists to bring structure where ambition is high but direction is fragmented.
          </p> */}
          <Link href="/contact" className="backed-by-cta">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
