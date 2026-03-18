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

  const iconPositions = [
    { x: '8%', y: '6%', xMobile: '2%', yMobile: '6%' },
    { x: '86%', y: '8%', xMobile: '76%', yMobile: '5%' },
    { x: '2%', y: '38%', xMobile: '-4%', yMobile: '30%' },
    { x: '23%', y: '47%', xMobile: '14%', yMobile: '40%' },
    { x: '74%', y: '44%', xMobile: '74%', yMobile: '39%' },
    { x: '93%', y: '47%', xMobile: '90%', yMobile: '44%' },
    { x: '10%', y: '86%', xMobile: '4%', yMobile: '82%' },
    { x: '64%', y: '88%', xMobile: '64%', yMobile: '84%' },
  ] as const

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
                '--icon-x': iconPositions[index].x,
                '--icon-y': iconPositions[index].y,
                '--icon-x-mobile': iconPositions[index].xMobile,
                '--icon-y-mobile': iconPositions[index].yMobile,
              } as React.CSSProperties}
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
