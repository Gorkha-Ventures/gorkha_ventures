import React from 'react';
import { APPLICATION_URL } from '@/data/operators';

export default function ApplicationCta() {
  return (
    <section id="apply" className="section apply-section">
      <div className="container">
        <div className="apply-box">
          <div className="apply-header">
            <span className="mono-eyebrow">APPLICATIONS OPEN / BATCH 01</span>
            <h2 className="apply-title">Ready to build with operators?</h2>
            <p className="apply-desc">
              We evaluate applications on a rolling weekly basis. If you have an active product, early customer traction, and high execution speed, complete the official application form below.
            </p>
          </div>

          <div className="apply-action-center">
            <a
              href={APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-xl mono-btn"
            >
              Apply for Incubation ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
