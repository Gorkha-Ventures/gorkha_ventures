import React from 'react';
import { APPLICATION_URL } from '@/data/operators';

interface HeaderProps {
  isEvaluatePage?: boolean;
  evalFormUrl?: string;
}

export default function Header({ isEvaluatePage = false, evalFormUrl }: HeaderProps) {
  const primaryCtaUrl = isEvaluatePage
    ? (evalFormUrl || 'https://forms.gle/s58NgaAfYwL4z46aA')
    : APPLICATION_URL;

  const primaryCtaText = isEvaluatePage
    ? 'Get your pitch evaluated ↗'
    : 'Apply for Incubation ↗';

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Brand Lockup with Centered Master Mark */}
        <a href="/" className="brand-lockup" aria-label="Gorkha Ventures">
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

        {/* Header Navigation and Actions */}
        <div className="header-actions">
          {isEvaluatePage ? (
            <nav className="evaluate-nav" aria-label="Page navigation">
              <a href="#how-it-works" className="header-nav-link">How it works</a>
              <a href="#scorecard" className="header-nav-link">The scorecard</a>
              <a href="#ladder" className="header-nav-link">The ladder</a>
              <a href="#council" className="header-nav-link">The council</a>
            </nav>
          ) : (
            <a href="/evaluate" className="btn btn-secondary mono-btn">Pitch Evaluation</a>
          )}
          <a
            href={primaryCtaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mono-btn"
          >
            {primaryCtaText}
          </a>
        </div>
      </div>
    </header>
  );
}
