import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScorecardCalculator from '@/components/ScorecardCalculator';
import HeroScorecardPreview from '@/components/HeroScorecardPreview';

export const metadata: Metadata = {
  title: 'Pitch Evaluation | Gorkha Ventures',
  description:
    'Send your deck and numbers. An operator scores your business on five weighted areas and tells you in writing what would change the answer.',
  alternates: {
    canonical: 'https://www.gorkhaventures.com/evaluate'
  },
  openGraph: {
    title: 'Pitch Evaluation | Gorkha Ventures',
    description:
      'Send your deck and numbers. An operator scores your business on five weighted areas and tells you in writing what would change the answer.',
    url: 'https://www.gorkhaventures.com/evaluate',
    siteName: 'Gorkha Ventures',
    images: [
      {
        url: '/assets/og-evaluate.png',
        width: 1200,
        height: 630,
        alt: 'Pitch Evaluation | Gorkha Ventures'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@gorkhaventures',
    creator: '@gorkhaventures',
    title: 'Pitch Evaluation | Gorkha Ventures',
    description:
      'Send your deck and numbers. An operator scores your business on five weighted areas and tells you in writing what would change the answer.',
    images: ['/assets/og-evaluate.png']
  }
};

// <!-- Saurabh to confirm all TBD values before launch -->
const GV_CONFIG = {
  evalFormUrl: "https://forms.gle/s58NgaAfYwL4z46aA", // Updated evaluation form link
  evalPriceLabel: "TBD",       // e.g. "Free, 8 slots a month" or "₹2,500"; fallback text: "Pricing announced soon"
  sprintPriceLabel: "TBD",     // fallback: "Shared after your evaluation"
  acceleratorTerms: "TBD",     // what Gorkha Ventures asks in return; fallback: "Shared with selected founders"
  turnaroundDays: 7,           // days from submission to written note
  acceleratorThreshold: 3.8,   // weighted score considered for the accelerator
  companiesPerCycle: "2 to 3"
};

// Resolve config values with fallbacks
const resolvedConfig = {
  evalFormUrl: GV_CONFIG.evalFormUrl === "TBD" ? "https://forms.gle/s58NgaAfYwL4z46aA" : GV_CONFIG.evalFormUrl,
  evalPriceLabel: GV_CONFIG.evalPriceLabel === "TBD" ? "Pricing announced soon" : GV_CONFIG.evalPriceLabel,
  sprintPriceLabel: GV_CONFIG.sprintPriceLabel === "TBD" ? "Shared after your evaluation" : GV_CONFIG.sprintPriceLabel,
  acceleratorTerms: GV_CONFIG.acceleratorTerms === "TBD" ? "Shared with selected founders" : GV_CONFIG.acceleratorTerms,
  turnaroundDays: GV_CONFIG.turnaroundDays,
  acceleratorThreshold: GV_CONFIG.acceleratorThreshold,
  companiesPerCycle: GV_CONFIG.companiesPerCycle
};

// Council Groups mapped by problem (each mentor appears exactly once)
const COUNCIL_GROUPS = [
  {
    groupTitle: "Selling, growth and revenue",
    mentors: [
      { name: "Saurabh Bhatnagar", role: "Co-Founder", company: "FlexiFunnels", image: "/assets/mentors/saurabh-bhatnagar.jpg" },
      { name: "Jyoti Malhotra", role: "Co-Founder", company: "SoJo Marketing", image: "/assets/mentors/jyoti-malhotra.jpg" },
      { name: "Abhineet Kumar", role: "Co-Founder", company: "Rockethealth", image: "/assets/mentors/abhineet-kumar.jpg" }
    ]
  },
  {
    groupTitle: "Brand and design",
    mentors: [
      { name: "Divya Tak", role: "Founder", company: "Joyus Studio", image: "/assets/mentors/divya-tak.jpg" }
    ]
  },
  {
    groupTitle: "Operations and scale",
    mentors: [
      { name: "Saurabh Saxena", role: "Managing Partner", company: "Gorkha Ventures", image: "/assets/mentors/saurabh-saxena.jpg" },
      { name: "Dhrupad Shrivastava", role: "Founder", company: "Dumpum", image: "/assets/mentors/dhrupad-shrivastava.jpg" },
      { name: "Preeti Kumbhaj", role: "Chief of Staff", company: "OneLeap", image: "/assets/mentors/preeti-kumbhaj.jpg" }
    ]
  },
  {
    groupTitle: "Capital and investor readiness",
    mentors: [
      { name: "Bhavik Rasyara", role: "Managing Partner", company: "Pravah Capital", image: "/assets/mentors/bhavik-rasyara.jpg" },
      { name: "Bindu Reddy", role: "Investor", company: "Dexter Capital", image: "/assets/mentors/bindu-reddy.jpg" },
      { name: "Gaurav Agrawal", role: "Founder and CEO", company: "Ascendra Advisors", image: "/assets/mentors/gaurav-agrawal.jpg" }
    ]
  },
  {
    groupTitle: "Product, technology and AI",
    mentors: [
      { name: "Abhimanyu Saxena", role: "Co-Founder", company: "Scaler", image: "/assets/mentors/abhimanyu-saxena.jpg" },
      { name: "Mudit Goel", role: "Head of AI Product", company: "CommerceIQ", image: "/assets/mentors/mudit-goel.jpg" },
      { name: "Parminder Singh", role: "Founder", company: "Redscope.AI", image: "/assets/mentors/parminder-singh.jpg" },
      { name: "Shubham Pandey", role: "Founder", company: "OneLeap", image: "/assets/mentors/shubham-pandey.jpg" },
      { name: "Apurv Singh Baghel", role: "Group Manager", company: "NEC Corp", image: "/assets/mentors/apurv-singh.jpg" },
      { name: "Vibhu Rishi", role: "Senior Product Manager", company: "McAfee", image: "/assets/mentors/vibhu-rishi.jpg" }
    ]
  },
  {
    groupTitle: "Leadership and strategy",
    mentors: [
      { name: "Dr. Srishty P. Gajbhiye", role: "Chief Emotional Architect", company: "Jaagr Mind", image: "/assets/mentors/dr-srishty.jpg" },
      { name: "Dr. Rajneesh Negi", role: "Founder and Director", company: "PMT India / Ganga Net", image: "/assets/mentors/rajneesh-negi.jpg" }
    ]
  }
];

export default function EvaluatePage() {
  return (
    <>
      {/* 6.1 Header */}
      <Header isEvaluatePage={true} evalFormUrl={resolvedConfig.evalFormUrl} />

      <main className="evaluate-page-root">
        {/* 6.2 Hero (bone ground) */}
        <section className="section eval-hero-section">
          <div className="container">
            <div className="eval-hero-grid">
              <div className="eval-hero-content">
                <div className="eyebrow-pill">
                  <span className="mono-eyebrow">PITCH EVALUATION / FOR FOUNDERS BUILDING IN INDIA</span>
                </div>

                <h1 className="eval-hero-title">
                  Find out what an investor will say before you meet one.
                </h1>

                {/* Rust rule directly under headline, about 64px wide */}
                <div className="eval-hero-rust-rule" aria-hidden="true" />

                <p className="eval-hero-subline">
                  Send your deck and your numbers. An operator scores your business on the five areas we use to pick our own portfolio, then tells you in writing what would change the answer.
                </p>

                <div className="eval-hero-cta-group">
                  <a
                    href={resolvedConfig.evalFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg mono-btn"
                  >
                    Get your pitch evaluated ↗
                  </a>
                  <a href="#scorecard" className="btn btn-secondary btn-lg mono-btn">
                    See how we score
                  </a>
                </div>
              </div>

              {/* Compact preview card on desktop */}
              <div className="eval-hero-preview-col">
                <HeroScorecardPreview />
              </div>
            </div>

            {/* Fact strip (mono, carbon panel, four columns, 2x2 on mobile) */}
            <div className="eval-fact-strip">
              <div className="eval-fact-cell">
                <span className="eval-fact-num">5</span>
                <span className="eval-fact-label mono-label">SCORED AREAS</span>
              </div>
              <div className="eval-fact-cell">
                <span className="eval-fact-num">45 MIN</span>
                <span className="eval-fact-label mono-label">SPARRING CALL</span>
              </div>
              <div className="eval-fact-cell">
                <span className="eval-fact-num">3</span>
                <span className="eval-fact-label mono-label">WRITTEN LINES</span>
              </div>
              <div className="eval-fact-cell">
                <span className="eval-fact-num">{resolvedConfig.turnaroundDays} DAYS</span>
                <span className="eval-fact-label mono-label">TO YOUR ANSWER</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6.3 Who this is for (bone ground) */}
        <section id="who-this-is-for" className="section eval-fit-section">
          <div className="container">
            <div className="section-head-simple">
              <h2 className="eval-section-heading">
                Built for founders who have customers but not yet a story investors believe.
              </h2>
            </div>

            <div className="eval-two-col-grid">
              <div className="eval-fit-card fit-positive">
                <h3 className="eval-fit-title">This fits if you:</h3>
                <ul className="eval-check-list">
                  <li>Sell a product today, whether a consumer brand, a D2C label, an MSME or an early tech startup</li>
                  <li>Have early revenue or users, even if small</li>
                  <li>Want someone to find the weak spot before an investor does</li>
                </ul>
              </div>

              <div className="eval-fit-card fit-negative">
                <h3 className="eval-fit-title">This is not for you if you:</h3>
                <ul className="eval-cross-list">
                  <li>Have an idea but no product</li>
                  <li>Want capital only, not feedback</li>
                  <li>Need someone to sell for you</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6.4 How the evaluation works (bone ground, numbered sequence) */}
        <section id="how-it-works" className="section eval-steps-section">
          <div className="container">
            <div className="section-head-simple">
              <span className="mono-eyebrow">HOW IT WORKS</span>
              <h2 className="eval-section-heading">How the evaluation works</h2>
            </div>

            <div className="eval-steps-grid">
              <div className="eval-step-card">
                <div className="eval-step-top mono-label">01 / 15 MIN</div>
                <p className="eval-step-text">
                  You send your deck and numbers. Revenue, customers, pricing, and what you have already tried.
                </p>
              </div>

              <div className="eval-step-card">
                <div className="eval-step-top mono-label">02 / 2 TO 3 DAYS</div>
                <p className="eval-step-text">
                  An operator scores your business on five weighted areas. Every number you share is tagged verified or claimed.
                </p>
              </div>

              <div className="eval-step-card">
                <div className="eval-step-top mono-label">03 / 45 MIN</div>
                <p className="eval-step-text">
                  A sparring call with that operator. You hear the reasoning, and you push back.
                </p>
              </div>

              <div className="eval-step-card">
                <div className="eval-step-top mono-label">04 / DAY {resolvedConfig.turnaroundDays}</div>
                <p className="eval-step-text">
                  Your written note, in three lines: what was strong, what held it back, what would change the answer.
                </p>
              </div>
            </div>

            <p className="eval-steps-grit-note">
              We score evidence, not polish. A beautiful deck with no numbers scores lower than a plain one with real customers.
            </p>
          </div>
        </section>

        {/* 6.5 The scorecard (cobalt ground, the bold section) */}
        <section id="scorecard" className="section eval-scorecard-section">
          <div className="container">
            <div className="eval-scorecard-head">
              <h2 className="eval-scorecard-heading">
                The same five areas we use to pick our portfolio.
              </h2>
              <p className="eval-scorecard-subline">
                No hidden criteria. This is the scorecard.
              </p>
            </div>

            <div className="eval-scorecard-grid">
              {/* Left Column: Weights Table */}
              <div className="eval-table-container">
                <table className="eval-weights-table">
                  <thead>
                    <tr>
                      <th scope="col">Area</th>
                      <th scope="col">Weight</th>
                      <th scope="col">What a 5 looks like</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="weight-name">Founder</td>
                      <td className="weight-num mono-val">30%</td>
                      <td className="weight-desc">Deep knowledge of the problem, visible speed, takes hard feedback well</td>
                    </tr>
                    <tr>
                      <td className="weight-name">Problem and customer</td>
                      <td className="weight-num mono-val">20%</td>
                      <td className="weight-desc">A specific buyer who pays something today and has a reason to switch</td>
                    </tr>
                    <tr>
                      <td className="weight-name">Evidence of traction</td>
                      <td className="weight-num mono-val">20%</td>
                      <td className="weight-desc">Verified revenue or usage, growing month on month</td>
                    </tr>
                    <tr>
                      <td className="weight-name">Business model</td>
                      <td className="weight-num mono-val">15%</td>
                      <td className="weight-desc">Clear pricing and a grip on unit economics</td>
                    </tr>
                    <tr>
                      <td className="weight-name">Fit with Gorkha Ventures</td>
                      <td className="weight-num mono-val">15%</td>
                      <td className="weight-desc">Your biggest constraint sits where our operators are strongest</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Right Column: Sample Scorecard (Bone card on Cobalt ground) */}
              <div className="eval-interactive-scorecard-col">
                <ScorecardCalculator threshold={resolvedConfig.acceleratorThreshold} />
              </div>
            </div>

            <div className="eval-scorecard-bottom-line">
              <p className="eval-threshold-text">
                Weighted scores of {resolvedConfig.acceleratorThreshold} and above are considered for the accelerator.
              </p>
            </div>
          </div>
        </section>

        {/* 6.6 The ladder (bone ground, three-step sequence) */}
        <section id="ladder" className="section eval-ladder-section">
          <div className="container">
            <div className="section-head-simple">
              <span className="mono-eyebrow">THE THREE STEPS</span>
              <h2 className="eval-section-heading">
                Three steps. Only the first one is open to everyone.
              </h2>
            </div>

            <div className="eval-ladder-grid">
              {/* Step 01 */}
              <div className="eval-ladder-card">
                <div className="ladder-card-top">
                  <span className="ladder-step-tag mono-label">STEP 01</span>
                  <h3 className="ladder-card-title">Pitch Evaluation</h3>
                </div>
                <div className="ladder-card-body">
                  <p className="ladder-row"><strong className="ladder-key">For:</strong> any founder with a product.</p>
                  <p className="ladder-row"><strong className="ladder-key">You get:</strong> the scorecard, a 45-minute sparring call, and a three-line written note.</p>
                  <p className="ladder-row"><strong className="ladder-key">Price:</strong> {resolvedConfig.evalPriceLabel}</p>
                  <p className="ladder-row"><strong className="ladder-key">Investor introductions:</strong> none.</p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="eval-ladder-card">
                <div className="ladder-card-top">
                  <span className="ladder-step-tag mono-label">STEP 02</span>
                  <h3 className="ladder-card-title">Operator Sprint</h3>
                </div>
                <div className="ladder-card-body">
                  <p className="ladder-row"><strong className="ladder-key">For:</strong> founders whose evaluation shows one clear constraint worth fixing first.</p>
                  <p className="ladder-row"><strong className="ladder-key">You get:</strong> 6 to 8 weeks on that one constraint, one matched operator, and a weekly five-line check-in.</p>
                  <p className="ladder-row"><strong className="ladder-key">Price:</strong> {resolvedConfig.sprintPriceLabel}</p>
                  <p className="ladder-row"><strong className="ladder-key">Entry:</strong> by invitation after evaluation.</p>
                  <p className="ladder-row"><strong className="ladder-key">Investor introductions:</strong> none.</p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="eval-ladder-card">
                <div className="ladder-card-top">
                  <span className="ladder-step-tag mono-label">STEP 03</span>
                  <h3 className="ladder-card-title">The Accelerator</h3>
                </div>
                <div className="ladder-card-body">
                  <p className="ladder-row"><strong className="ladder-key">For:</strong> {resolvedConfig.companiesPerCycle} companies per cycle, selected from evaluations.</p>
                  <p className="ladder-row"><strong className="ladder-key">You get:</strong> weekly operator time on your biggest constraint, readiness work on your deck, metrics and data room, and introductions to investors in our network.</p>
                  <p className="ladder-row"><strong className="ladder-key">What we ask:</strong> {resolvedConfig.acceleratorTerms}</p>
                  <p className="ladder-row"><strong className="ladder-key">Entry:</strong> selection only. Not for sale.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6.7 The investor rule (carbon ground, full width) */}
        <section className="section eval-investor-rule-section">
          <div className="container">
            <div className="eval-investor-rule-box">
              <h2 className="eval-investor-heading">
                We don't sell access to investors. We get you ready for them.
              </h2>
              <p className="eval-investor-body">
                No fee buys an introduction. Our investor mentors take our calls because we only send them companies we would back ourselves. Introductions go to accelerator companies only, and every one is double opt-in: the investor agrees before we share your name.
              </p>
            </div>
          </div>
        </section>

        {/* 6.8 The council (bone ground, grouped by problem) */}
        <section id="council" className="section eval-council-section">
          <div className="container">
            <div className="section-head-simple">
              <span className="mono-eyebrow">THE OPERATOR COUNCIL</span>
              <h2 className="eval-section-heading">
                Matched on your problem, not on a famous name.
              </h2>
              <p className="eval-section-subline">
                Your evaluation names your biggest constraint. We match you with the operator who has solved it before.
              </p>
            </div>

            <div className="eval-council-groups-list">
              {COUNCIL_GROUPS.map((group) => (
                <div key={group.groupTitle} className="eval-council-group-block">
                  <h3 className="eval-group-title">{group.groupTitle}</h3>
                  <div className="eval-mentors-grid">
                    {group.mentors.map((mentor) => (
                      <div key={mentor.name} className="eval-mentor-tile">
                        <div className="eval-mentor-photo-wrap">
                          <Image
                            src={mentor.image}
                            alt={`${mentor.name}, ${mentor.role} at ${mentor.company}`}
                            width={52}
                            height={52}
                            className="eval-mentor-photo"
                            loading="lazy"
                          />
                        </div>
                        <div className="eval-mentor-info">
                          <h4 className="eval-mentor-name">{mentor.name}</h4>
                          <p className="eval-mentor-role">
                            {mentor.role}, <span className="eval-mentor-company">{mentor.company}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="eval-council-disclosure">
              Two of our council members lead companies in our first batch, OneLeap and FlexiFunnels. They are not involved in scoring companies that compete with their own.
            </p>
          </div>
        </section>

        {/* 6.9 Timeline (bone ground, mono sequence) */}
        <section className="section eval-timeline-section">
          <div className="container">
            <div className="section-head-simple">
              <span className="mono-eyebrow">TIMELINE</span>
              <h2 className="eval-section-heading">From submission to written note</h2>
            </div>

            <div className="eval-timeline-strip">
              <div className="eval-timeline-step">
                <span className="eval-timeline-day mono-val">DAY 0</span>
                <span className="eval-timeline-desc">Deck and numbers received</span>
              </div>
              <div className="eval-timeline-step">
                <span className="eval-timeline-day mono-val">DAY 1 TO 3</span>
                <span className="eval-timeline-desc">Operator scores your business</span>
              </div>
              <div className="eval-timeline-step">
                <span className="eval-timeline-day mono-val">DAY 4 TO 6</span>
                <span className="eval-timeline-desc">45-minute sparring call</span>
              </div>
              <div className="eval-timeline-step highlight-day">
                <span className="eval-timeline-day mono-val">DAY {resolvedConfig.turnaroundDays}</span>
                <span className="eval-timeline-desc">Written note in your inbox</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6.10 Questions (bone ground, native <details> elements, no numbers) */}
        <section className="section eval-faq-section">
          <div className="container">
            <div className="section-head-simple">
              <span className="mono-eyebrow">QUESTIONS</span>
              <h2 className="eval-section-heading">Frequently asked questions</h2>
            </div>

            <div className="eval-faq-list">
              <details className="eval-faq-item">
                <summary className="eval-faq-summary">Is my deck confidential?</summary>
                <div className="eval-faq-body">
                  <p>
                    Yes. Your deck and numbers are used only for your evaluation. Nothing about your company appears in any Gorkha Ventures content without your written consent.
                  </p>
                </div>
              </details>

              <details className="eval-faq-item">
                <summary className="eval-faq-summary">Does paying for an evaluation improve my score?</summary>
                <div className="eval-faq-body">
                  <p>
                    No. The fee covers operator time. The score comes from your evidence.
                  </p>
                </div>
              </details>

              <details className="eval-faq-item">
                <summary className="eval-faq-summary">What if my score is low?</summary>
                <div className="eval-faq-body">
                  <p>
                    You get the same three lines as everyone else, including what would change the answer. Many founders come back after fixing it, and you can reapply.
                  </p>
                </div>
              </details>

              <details className="eval-faq-item">
                <summary className="eval-faq-summary">Can a score get me investor introductions?</summary>
                <div className="eval-faq-body">
                  <p>
                    Only through the accelerator. A high score makes you eligible for selection. It does not buy an introduction.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* 6.11 Final call to action (cobalt band, centered) */}
        <section className="section eval-final-cta-section">
          <div className="container eval-final-cta-center">
            <h2 className="eval-final-cta-heading">
              Send your deck. Get the answer in writing.
            </h2>
            <div className="eval-final-cta-btn-wrap">
              <a
                href={resolvedConfig.evalFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-eval-bone mono-btn btn-xl"
              >
                Get your pitch evaluated ↗
              </a>
            </div>
            <p className="eval-final-cta-sub">
              Written note within {resolvedConfig.turnaroundDays} days.
            </p>
          </div>
        </section>
      </main>

      {/* 6.12 Footer */}
      <Footer />
    </>
  );
}
