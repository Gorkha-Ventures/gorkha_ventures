import React from 'react';

export default function HeroScorecardPreview() {
  const previewScores = [
    { name: 'Founder (30%)', score: 4, width: '80%' },
    { name: 'Problem and customer (20%)', score: 3, width: '60%' },
    { name: 'Evidence of traction (20%)', score: 3, width: '60%' },
    { name: 'Business model (15%)', score: 2, width: '40%' },
    { name: 'Fit with Gorkha Ventures (15%)', score: 4, width: '80%' }
  ];

  return (
    <div className="hero-preview-card" aria-hidden="true">
      <div className="hero-preview-head">
        <span className="mono-label hero-preview-tag">SCORECARD INSTRUMENT</span>
        <span className="mono-label hero-preview-score">WEIGHTED: 3.30</span>
      </div>

      <div className="hero-preview-bars">
        {previewScores.map((bar) => (
          <div key={bar.name} className="hero-preview-bar-row">
            <div className="hero-preview-label-line">
              <span className="hero-preview-item-name">{bar.name}</span>
              <span className="mono-val hero-preview-item-val">{bar.score} / 5</span>
            </div>
            <div className="hero-preview-track">
              <div className="hero-preview-fill" style={{ width: bar.width }} />
            </div>
          </div>
        ))}
      </div>

      <div className="hero-preview-foot">
        <p className="hero-preview-foot-text">
          <strong className="note-key">Outcome:</strong> Scored on 5 areas with a 3-line written note.
        </p>
      </div>
    </div>
  );
}
