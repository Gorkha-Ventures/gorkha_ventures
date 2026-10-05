import React from 'react';

const STEPS_DATA = [
  {
    step: 'STEP 01',
    time: '15 MINS',
    header: 'Written Application',
    text: 'Submit your pitch deck, live demo URL, and core traction metrics (MRR, user retention, unit economics).'
  },
  {
    step: 'STEP 02',
    time: '45 MINS',
    header: 'Operator Sparring Call',
    text: 'Deep dive session with GV partners to dissect your business model, engineering moat, and scaling friction.'
  },
  {
    step: 'STEP 03',
    time: '3-4 DAYS',
    header: 'Diligence & Reference',
    text: 'We verify customer references, check product architecture, and validate unit economics.'
  },
  {
    step: 'STEP 04',
    time: 'DAY 07',
    header: 'Cohort Offer Decision',
    text: 'Firm decision issued within 7 days. Admitted teams immediately begin onboarding with their assigned operator mentors.',
    highlight: true
  }
];

export default function SelectionProcess() {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-head">
          <div className="section-title-wrap">
            <span className="mono-eyebrow">04 / SELECTION / 7-DAY TURNAROUND</span>
            <h2 className="section-heading">How We Select (~5% Acceptance)</h2>
          </div>
          <p className="section-description">
            Low friction to apply. High bar to get in. We give founders an answer within 7 calendar days.
          </p>
        </div>

        <div className="timeline-row">
          {STEPS_DATA.map((step) => (
            <div
              key={step.step}
              className={`timeline-card ${step.highlight ? 'highlight-timeline' : ''}`}
            >
              <div className="step-counter mono-label">{step.step}</div>
              <div className={`step-time mono-label ${step.highlight ? 'accent-rust' : ''}`}>
                {step.time}
              </div>
              <h3 className="step-header">{step.header}</h3>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
