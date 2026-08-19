import React from 'react';
import { APPLICATION_URL } from '@/data/operators';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Brand Lockup with Centered Master Mark */}
        <a href="#" className="brand-lockup" aria-label="Gorkha Ventures">
          <svg className="brand-mark" viewBox="226 245 572 532" width="30" height="28" aria-hidden="true">
            <path
              d="M 716 295 L 325 295 A 50 50 0 0 0 275 345 L 275 675 A 50 50 0 0 0 325 725 L 512 562 L 798 726"
              fill="none"
              stroke="#1B3FCC"
              strokeWidth="98"
              strokeLinecap="butt"
              strokeLinejoin="round"
            />
          </svg>
          <span className="brand-name">Gorkha Ventures</span>
        </a>

        {/* Header Action Button (Resources removed) */}
        <div className="header-actions">
          <a
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mono-btn"
          >
            Apply for Incubation ↗
          </a>
        </div>
      </div>
    </header>
  );
}
