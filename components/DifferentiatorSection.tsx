export default function DifferentiatorSection() {
  const differentiators = [
    {
      icon: '👥',
      iconBg: '#E8E5FF',
      title: 'Operator-Led',
      titleEmoji: '👥',
      description: 'Our mentors: CEOs, CTOs, domain experts with ₹100Cr+ revenue experience. They\'ve raised funding, hired teams, navigated every challenge you\'ll face.'
    },
    {
      icon: '📋',
      iconBg: '#D4F5F5',
      title: 'Evidence-Based',
      titleEmoji: '🔍',
      description: 'We verify everything: customer calls, dashboards, unit economics, GitHub commits. No pitch theater—only proven execution.'
    },
    {
      icon: '🌍',
      iconBg: '#E8E8E8',
      title: 'Tier-2 Advantage',
      titleEmoji: '🏔️',
      description: 'Regional focus = competitive advantage: lower CAC, better economics, underestimated markets, authentic story.'
    },
    {
      icon: '📖',
      iconBg: '#E8E5FF',
      title: 'Indian Playbook',
      titleEmoji: '🇮🇳',
      description: 'We teach what works in India: capital-efficient growth, enterprise sales cycles, hiring in tier-2, regulatory navigation.'
    },
    {
      icon: '⚙️',
      iconBg: '#D4F5F5',
      title: 'Hands-On Execution',
      titleEmoji: '🔧',
      description: 'We don\'t just advise—we implement WITH you. Customer calls, pitch rewrites, hiring interviews, weekly tactical sessions.'
    },
    {
      icon: '❤️',
      iconBg: '#E8E8E8',
      title: 'Long-Term Partnership',
      titleEmoji: '🤝',
      description: 'We support you from Seed → Series A → Series B. Not optimizing for Demo Day, optimizing for sustainable success.'
    }
  ]

  return (
    <section className="differentiator-section">
      <div className="container">
        <div className="differentiator-header">
          <p className="differentiator-label">WHAT MAKES US DIFFERENT</p>
          <h2 className="differentiator-title">
            We're operators who've built companies, not consultants who advise from the sidelines
          </h2>
        </div>

        <div className="differentiator-grid">
          {differentiators.map((item, index) => (
            <div key={index} className="differentiator-card">
              <div className="differentiator-icon" style={{ backgroundColor: item.iconBg }}>
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
      </div>
    </section>
  )
}
