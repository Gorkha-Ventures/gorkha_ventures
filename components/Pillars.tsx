import React from 'react';

const PILLARS_DATA = [
  {
    badge: '01 / PILLAR',
    name: 'Go-To-Market & Revenue',
    summary: 'Building repeatable pipeline velocity and shortening sales conversion cycles.',
    points: [
      'Ideal Customer Profile (ICP) validation & qualification',
      'Outbound and inbound sales funnel mechanics',
      'Pricing strategy, ACV expansion, and contract packaging',
      'Direct intro to pilot enterprise buyers in our network'
    ]
  },
  {
    badge: '02 / PILLAR',
    name: 'Operations & Unit Economics',
    summary: 'Instituting operating discipline and sound financial fundamentals early.',
    points: [
      'Contribution margin analysis and CAC:LTV optimization',
      'Cash runway forecasting and burn rate management',
      'Hiring frameworks, compensation, and leadership design',
      'Operational KPIs and automated reporting dashboards'
    ]
  },
  {
    badge: '03 / PILLAR',
    name: 'Technology & AI Architecture',
    summary: 'Building durable engineering foundations that scale without technical debt.',
    points: [
      'AI workflow integration and product intelligence',
      'Scalable cloud infrastructure & database architecture',
      'Security, compliance, and SOC-2 data readiness',
      'Engineering cadence, code review, and sprint velocity'
    ]
  },
  {
    badge: '04 / PILLAR',
    name: 'Fundraising & Diligence',
    summary: 'Positioning your narrative to attract high-conviction institutional capital.',
    points: [
      'Institutional data room structuring and financial model',
      'Traction narrative, market sizing, and defensibility pitch',
      'Warm introductions to active seed and Series A funds',
      'Term sheet negotiation and cap table governance'
    ]
  }
];

export default function Pillars() {
  return (
    <section id="pillars" className="section pillars-section">
      <div className="container">
        <div className="section-head">
          <div className="section-title-wrap">
            <span className="mono-eyebrow">03 / CURRICULUM / 6 MONTHS</span>
            <h2 className="section-heading">Four Pillars of Startup Execution</h2>
          </div>
          <p className="section-description">
            We spend six months sharpening the core operating machinery of your company through weekly tactical sprints.
          </p>
        </div>

        <div className="pillars-expanded-grid">
          {PILLARS_DATA.map((pillar) => (
            <div key={pillar.badge} className="pillar-block">
              <div className="pillar-top">
                <span className="pillar-badge mono-label">{pillar.badge}</span>
                <h3 className="pillar-name">{pillar.name}</h3>
              </div>
              <p className="pillar-summary">{pillar.summary}</p>
              <ul className="pillar-list">
                {pillar.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
