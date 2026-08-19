import React from 'react';
import { APPLICATION_URL } from '@/data/operators';

export default function Hero() {
  return (
    <section id="thesis" className="section hero-section">
      <div className="container">
        <div className="hero-header">
          <div className="eyebrow-pill">
            <span className="mono-eyebrow">ACCELERATOR / INDIA / 6-MONTH COHORT</span>
          </div>

          <h1 className="hero-title">
            An operator-led accelerator for founders building in India.
          </h1>

          <p className="hero-lead">
            Six months of high-touch, weekly execution with operators who lead companies with ₹1,000Cr+ in combined revenue. We do not run batches of hundreds. We back two to three high-conviction companies per cycle.
          </p>

          <div className="hero-cta-group">
            <a
              href={APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg mono-btn"
            >
              Apply for Incubation ↗
            </a>
            <a href="#council" className="btn btn-secondary btn-lg mono-btn">
              Meet the Operators ↓
            </a>
          </div>
        </div>

        {/* KEY METRICS BANNER */}
        <div className="metrics-strip">
          <div className="metric-cell">
            <span className="metric-value">₹1,000Cr+</span>
            <span className="metric-label mono-label">Combined Operator Revenue</span>
            <span className="metric-desc">Operated and scaled by our council mentors</span>
          </div>
          <div className="metric-cell">
            <span className="metric-value accent-rust">~5%</span>
            <span className="metric-label mono-label">Cohort Admission Rate</span>
            <span className="metric-desc">Extreme selectivity for direct partner time</span>
          </div>
          <div className="metric-cell">
            <span className="metric-value">02</span>
            <span className="metric-label mono-label">Active Portfolio Bets</span>
            <span className="metric-desc">OneLeap · FlexiFunnels</span>
          </div>
          <div className="metric-cell">
            <span className="metric-value">6M</span>
            <span className="metric-label mono-label">Sprint Mentorship Term</span>
            <span className="metric-desc">GTM, Operations, Tech &amp; Fundraising</span>
          </div>
        </div>
      </div>
    </section>
  );
}
