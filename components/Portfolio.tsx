import React from 'react';
import { PORTFOLIO_COMPANIES } from '@/data/operators';

export default function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <div className="section-head">
          <div className="section-title-wrap">
            <span className="mono-eyebrow">02 / PORTFOLIO / BATCH 01</span>
            <h2 className="section-heading">Active Portfolio Startups</h2>
          </div>
          <p className="section-description">
            We back early-stage founders building durable distribution engines and scalable product architecture.
          </p>
        </div>

        <div className="portfolio-showcase-two">
          {PORTFOLIO_COMPANIES.map((company) => (
            <article key={company.id} className="portfolio-card featured-portfolio-card">
              <div className="portfolio-card-head">
                <div className="company-brand">
                  <span className="company-logo-text">{company.name}</span>
                  <span className="sector-tag mono-label">{company.sectorTag}</span>
                </div>
                <span className="status-tag mono-label">{company.statusTag}</span>
              </div>

              <div className="portfolio-card-body">
                <h3 className="company-thesis">{company.thesis}</h3>
                <p className="company-detail">{company.detail}</p>

                <div className="founder-quote-box">
                  <p className="quote-text">&ldquo;{company.quote}&rdquo;</p>
                  <span className="quote-author mono-label">— {company.quoteAuthor}</span>
                </div>
              </div>

              <div className="portfolio-card-foot">
                <div className="foot-metric">
                  <span className="mono-label meta-key">FOCUS AREA:</span>
                  <span className="mono-label meta-val">{company.focusArea}</span>
                </div>
                <div className="foot-metric">
                  <span className="mono-label meta-key">OPERATOR CADENCE:</span>
                  <span className="mono-label meta-val">{company.cadence}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
