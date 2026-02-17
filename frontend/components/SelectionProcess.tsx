export default function SelectionProcess() {
  const steps = [
    {
      number: 1,
      title: 'Simple Application',
      duration: '(15 min)',
      description: 'Basic info, quick questions. Low friction to apply, high bar to get in.'
    },
    {
      number: 2,
      title: 'Intro Call',
      duration: '(30-60 min)',
      description: 'Deep conversation about traction, challenges, goals. We verify claims, you assess fit.'
    },
    {
      number: 3,
      title: 'Execution Sprint',
      duration: '(48-72 hours)',
      description: 'Behavioral task: Talk to 5 customers OR ship feature OR show metric growth. Proves you can hustle.'
    },
    {
      number: 4,
      title: 'Due Diligence',
      duration: '(1-2 weeks)',
      description: 'Reference checks, customer calls, financial verification. We verify everything we can.'
    },
    {
      number: 5,
      title: 'Decision',
      duration: '(Within 3 weeks)',
      description: 'Accept (with offer) OR Reject (with detailed feedback + reapply criteria) OR Waitlist (until milestones hit).'
    }
  ]

  return (
    <section className="selection-process-section">
      <div className="container">
        <div className="selection-process-header">
          <p className="selection-process-label">OUR SELECTION PROCESS</p>
          <h2 className="selection-process-title">
            Rigorous but fair. We invest in execution, not just ideas.
          </h2>
          <p className="selection-process-acceptance">3-5% acceptance rate</p>
        </div>

        <div className="selection-process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="timeline-step">
              <div className="timeline-step-number">
                <span>{step.number}</span>
              </div>
              <div className="timeline-step-content">
                <h3 className="timeline-step-title">
                  {step.title} <span className="timeline-step-duration">{step.duration}</span>
                </h3>
                <p className="timeline-step-description">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="selection-process-footer">
          Expected timeline: 3-4 weeks from application to decision. We give detailed feedback even if we reject—we're building long-term relationships.
        </p>
      </div>
    </section>
  )
}
