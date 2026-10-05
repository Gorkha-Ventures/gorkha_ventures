'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ScoreItem {
  id: string;
  name: string;
  weight: number;
  weightLabel: string;
  defaultScore: number;
}

const SCORE_CRITERIA: ScoreItem[] = [
  { id: 'founder', name: 'Founder', weight: 0.30, weightLabel: '30%', defaultScore: 4 },
  { id: 'problem', name: 'Problem and customer', weight: 0.20, weightLabel: '20%', defaultScore: 3 },
  { id: 'traction', name: 'Evidence of traction', weight: 0.20, weightLabel: '20%', defaultScore: 3 },
  { id: 'model', name: 'Business model', weight: 0.15, weightLabel: '15%', defaultScore: 2 },
  { id: 'fit', name: 'Fit with Gorkha Ventures', weight: 0.15, weightLabel: '15%', defaultScore: 4 }
];

export default function ScorecardCalculator({ threshold = 3.8 }: { threshold?: number }) {
  const [scores, setScores] = useState<Record<string, number>>({
    founder: 4,
    problem: 3,
    traction: 3,
    model: 2,
    fit: 4
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const calculateWeightedScore = () => {
    const total = SCORE_CRITERIA.reduce((acc, item) => {
      const score = scores[item.id] ?? item.defaultScore;
      return acc + score * item.weight;
    }, 0);
    return total.toFixed(2);
  };

  const handleScoreChange = (id: string, value: number) => {
    setScores((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleReset = () => {
    setScores({
      founder: 4,
      problem: 3,
      traction: 3,
      model: 2,
      fit: 4
    });
  };

  const weightedScore = calculateWeightedScore();

  return (
    <div className="sample-scorecard-card" ref={cardRef}>
      <div className="scorecard-card-top">
        <span className="scorecard-rust-tag">Illustrative example</span>
        <h3 className="scorecard-card-title">Example: a skincare brand selling in Dehradun</h3>
      </div>

      <div className="scorecard-sliders-list">
        {SCORE_CRITERIA.map((item) => {
          const currentScore = scores[item.id] ?? item.defaultScore;
          const fillPercentage = (currentScore / 5) * 100;

          return (
            <div key={item.id} className="scorecard-slider-row">
              <div className="scorecard-slider-label-line">
                <label htmlFor={`slider-${item.id}`} className="scorecard-slider-label">
                  {item.name} <span className="scorecard-weight-sub">({item.weightLabel})</span>
                </label>
                <span className="scorecard-slider-val mono-val">{currentScore} / 5</span>
              </div>

              <div className="scorecard-slider-track-wrap">
                <div
                  className={`scorecard-slider-fill ${hasAnimated ? 'animated-fill' : ''}`}
                  style={{ width: `${fillPercentage}%` }}
                />
                <input
                  id={`slider-${item.id}`}
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={currentScore}
                  onChange={(e) => handleScoreChange(item.id, parseInt(e.target.value, 10))}
                  className="scorecard-range-input"
                  aria-label={`${item.name} score out of 5`}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="scorecard-summary-box">
        <div className="scorecard-score-banner">
          <span className="mono-label score-banner-label">Weighted Score</span>
          <span className="mono-score-val">{weightedScore}</span>
        </div>

        <div className="scorecard-note-box">
          <p className="scorecard-note-line">
            <strong className="note-key">Strong:</strong> Repeat buyers in two local stores, and the founder knows each one by name.
          </p>
          <p className="scorecard-note-line">
            <strong className="note-key">Held back:</strong> Pricing does not cover the cost of the second channel.
          </p>
          <p className="scorecard-note-line">
            <strong className="note-key">Would change the answer:</strong> Three months of contribution margin per unit, tracked and shown.
          </p>
        </div>

        <div className="scorecard-reset-wrap">
          <button
            type="button"
            onClick={handleReset}
            className="scorecard-reset-btn"
          >
            Reset example
          </button>
        </div>
      </div>
    </div>
  );
}
