import React from 'react';
import Image from 'next/image';
import { OPERATOR_COUNCIL } from '@/data/operators';
import { Operator } from '@/types/operator';

function OperatorCard({ operator }: { operator: Operator }) {
  return (
    <article className="operator-marquee-card">
      <div className="avatar-wrap">
        {operator.image ? (
          <Image
            src={operator.image}
            alt={operator.name}
            width={48}
            height={48}
            className="operator-avatar-img"
          />
        ) : (
          <div className={`operator-avatar ${operator.isUnicorn ? 'unicorn-avatar' : ''}`}>
            {operator.initials}
          </div>
        )}
      </div>
      <div className="operator-details">
        <h3 className="operator-name">{operator.name}</h3>
        <p className="operator-title">
          {operator.role}, <span className="operator-company">{operator.company}</span>
        </p>
        <span className="operator-tag mono-label">{operator.domain}</span>
      </div>
    </article>
  );
}

export default function OperatorCouncil() {
  const half = Math.ceil(OPERATOR_COUNCIL.length / 2);
  const set1 = OPERATOR_COUNCIL.slice(0, half);
  const set2 = OPERATOR_COUNCIL.slice(half);

  // Repeat 4x for continuous seamless loop across ultra-wide monitors
  const repeated1 = [...set1, ...set1, ...set1, ...set1];
  const repeated2 = [...set2, ...set2, ...set2, ...set2];

  return (
    <section id="council" className="section council-section">
      <div className="container">
        <div className="section-head">
          <div className="section-title-wrap">
            <span className="mono-eyebrow">01 / OPERATOR COUNCIL / INDUSTRY LEADERS</span>
            <h2 className="section-heading">Our mentors operate companies with ₹1,000Cr+ in combined revenue.</h2>
          </div>
          <p className="section-description">
            You spar directly with founders of unicorns, Tier-1 investors, and product chiefs who have solved the exact scaling, hiring, and unit-economics challenges ahead of you.
          </p>
        </div>
      </div>

      {/* INFINITE HORIZONTAL CONTINUOUS SCROLLING TRACKS */}
      <div className="marquee-wrapper">
        {/* Track 1: Scrolling Left */}
        <div className="marquee-track" id="marqueeTrack1">
          {repeated1.map((op, idx) => (
            <OperatorCard key={`track1-${op.name}-${idx}`} operator={op} />
          ))}
        </div>

        {/* Track 2: Scrolling Right */}
        <div className="marquee-track marquee-track-reverse" id="marqueeTrack2">
          {repeated2.map((op, idx) => (
            <OperatorCard key={`track2-${op.name}-${idx}`} operator={op} />
          ))}
        </div>
      </div>
    </section>
  );
}
