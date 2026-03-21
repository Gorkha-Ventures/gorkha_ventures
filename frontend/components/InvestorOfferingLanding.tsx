'use client'

import { useEffect, useState } from 'react'
import ContactForm from './ContactForm'
import styles from './InvestorOfferingLanding.module.css'

export default function InvestorOfferingLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.on)
            io.unobserve(entry.target)
          }
        }),
      { threshold: 0.08 },
    )
    document.querySelectorAll(`.${styles.fade}`).forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!isModalOpen) return

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroShell}>
            <p className={styles.heroTag}>Investor Program</p>
            <h1 className={styles.heroHeading}>
              Where Discipline Meets <span className={styles.sky}>Capital.</span>
            </h1>
            <p className={styles.heroLead}>
              Access execution-ready founders with stronger structure, clearer diligence signal,
              and better post-investment operating support.
            </p>
            <div className={styles.heroCtaRow}>
              <button
                type="button"
                className={styles.heroCtaPrimary}
                onClick={() => setIsModalOpen(true)}
              >
                Request Investor Briefing -&gt;
              </button>
            </div>
            <div className={styles.heroStats}>
              <div>
                <strong>~65%</strong>
                <small>failures are execution failures</small>
              </div>
              <div>
                <strong>3-5x</strong>
                <small>better capital efficiency with structure first</small>
              </div>
              <div>
                <strong>1 in 10</strong>
                <small>founders meet institutional-grade rigor</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.deep} ${styles.fade} ${styles.investorProblemSection}`}>
        <div className={styles.wrap}>
          <p className={styles.problemEyebrow}>The Investor Problem</p>
          <h2 className={styles.problemHeading}>The Market Is Noisy. Most Deals Aren&apos;t Ready.</h2>
          <p className={styles.problemIntro}>
            Early-stage investing is structurally inefficient. The pipeline is high-volume and
            low-quality. Execution risk is invisible until after capital is deployed. And
            post-investment support is thin.
          </p>
          <div className={styles.investorProblemsGrid}>
            <article className={styles.investorProblemCard}>
              <div className={styles.problemIcon}>△</div>
              <h3 className={styles.problemCardTitle}>Deal flow is mostly noise</h3>
              <p className={styles.problemCardBody}>
                The average venture investor reviews hundreds of decks annually to close 2-4 deals.
                Most inbound deals lack basic structural rigor.
              </p>
              <p className={styles.problemCardStat}>Signal-to-noise ratio in early-stage deal flow: ~1-3%</p>
            </article>
            <article className={styles.investorProblemCard}>
              <div className={styles.problemIcon}>◔</div>
              <h3 className={styles.problemCardTitle}>Execution risk is invisible at entry</h3>
              <p className={styles.problemCardBody}>
                A compelling narrative and a capable founder are not the same thing. Operational
                risk surfaces after deployment when correction is expensive.
              </p>
              <p className={styles.problemCardStat}>65% of failures trace to execution failure</p>
            </article>
            <article className={styles.investorProblemCard}>
              <div className={styles.problemIcon}>□</div>
              <h3 className={styles.problemCardTitle}>Capital efficiency breaks early</h3>
              <p className={styles.problemCardBody}>
                Without structural foundations, startups deploy capital reactively and burn runway
                before repeatable growth systems are in place.
              </p>
              <p className={styles.problemCardStat}>Premature scaling drives 74% of inefficiency</p>
            </article>
            <article className={styles.investorProblemCard}>
              <div className={styles.problemIcon}>⌂</div>
              <h3 className={styles.problemCardTitle}>Post-investment support is thin</h3>
              <p className={styles.problemCardBody}>
                Most investors lack operational bandwidth after the check clears. Portfolio
                companies needing the most support are often left alone.
              </p>
              <p className={styles.problemCardStat}>Founders rank operational support as unmet need #1</p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.fade} ${styles.thesisSection}`}>
        <div className={styles.wrap}>
          <p className={styles.problemEyebrow}>The Gorkha Thesis</p>
          <h2 className={styles.problemHeading}>We Solve These Problems Before You Write A Check.</h2>
          <div className={styles.thesisGrid}>
            <div className={styles.thesisCopy}>
              <p>
                Most of the risk in early-stage investing is front-loaded. The first 12-18 months
                of a startup&apos;s life determine whether it will be worth investing in and most
                investors never see this phase.
              </p>
              <p>
                Gorkha is embedded in that phase. We work alongside founders from the earliest
                decisions: validating the market hypothesis, sharpening the ICP, structuring
                execution systems, and building the discipline to hold the company together under
                pressure.
              </p>
              <p>
                By the time a Gorkha portfolio company is investor-ready, the expensive work is
                already done. You get the version that has survived first contact with reality and
                built structure from it.
              </p>
              <blockquote className={styles.thesisPull}>
                Capital deployed into structured companies is capital deployed well.
              </blockquote>
            </div>

            <div className={styles.thesisTimeline}>
              <article className={styles.thesisItem}>
                <p className={styles.thesisStage}>Stage 01 - Foundation</p>
                <h3 className={styles.thesisTitle}>Clarity Before Momentum</h3>
                <p className={styles.thesisBody}>
                  Market validation, ICP precision, business model fundamentals, and founder
                  alignment. The company knows what it&apos;s building and why it should win.
                </p>
                <span className={styles.thesisBadge}>Gorkha Embedded</span>
              </article>

              <article className={styles.thesisItem}>
                <p className={styles.thesisStage}>Stage 02 - Structured Execution</p>
                <h3 className={styles.thesisTitle}>Discipline Before Scale</h3>
                <p className={styles.thesisBody}>
                  GTM structure, hiring logic, weekly execution rhythm, metrics clarity. Execution
                  becomes intentional and repeatable.
                </p>
                <span className={styles.thesisBadge}>Gorkha Embedded</span>
              </article>

              <article className={styles.thesisItem}>
                <p className={styles.thesisStage}>Stage 03 - Fundraise Readiness</p>
                <h3 className={styles.thesisTitle}>Capital Follows Clarity</h3>
                <p className={styles.thesisBody}>
                  Narrative, investor materials, mock pitches, warm introductions. Companies are
                  raised to investors, not shopped.
                </p>
                <span className={`${styles.thesisBadge} ${styles.thesisBadgeStrong}`}>Investor Entry Point</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.deep} ${styles.fade} ${styles.pillarsSection}`}>
        <div className={styles.wrap}>
          <p className={styles.problemEyebrow}>What the Investor Program Includes</p>
          <h2 className={styles.problemHeading}>Three Things You Can&apos;t Get From A Deck.</h2>
          <p className={styles.problemIntro}>
            Our value to investors is not a curated list of startups. It&apos;s a fundamentally
            different kind of access to companies that have already been tested, structured, and
            shaped by operators who&apos;ve done it before.
          </p>

          <div className={styles.pillarsGrid}>
            <article className={styles.pillarCard}>
              <span className={styles.pillarNum}>01</span>
              <div className={styles.problemIcon}>⌂</div>
              <h3 className={styles.problemCardTitle}>Pre-Vetted, Execution-Ready Deal Flow</h3>
              <p className={styles.problemCardBody}>
                Every company in the Gorkha portfolio has passed a rigorous selection and
                foundation-building process. You access a pipeline already structurally prepared.
              </p>
              <p className={styles.problemCardStat}>Selective intake -&gt; higher signal per deal</p>
            </article>

            <article className={styles.pillarCard}>
              <span className={styles.pillarNum}>02</span>
              <div className={styles.problemIcon}>◔</div>
              <h3 className={styles.problemCardTitle}>Operator-Level Diligence Intelligence</h3>
              <p className={styles.problemCardBody}>
                We are embedded in portfolio companies and provide operational context beyond decks:
                decision patterns, execution gaps, and milestone discipline.
              </p>
              <p className={styles.problemCardStat}>
                Reduced information asymmetry -&gt; faster, sharper diligence
              </p>
            </article>

            <article className={styles.pillarCard}>
              <span className={styles.pillarNum}>03</span>
              <div className={styles.problemIcon}>↗</div>
              <h3 className={styles.problemCardTitle}>Built-In Post-Investment Execution Infrastructure</h3>
              <p className={styles.problemCardBody}>
                Gorkha stays embedded after capital is deployed. Execution systems continue to
                compound so portfolio companies hit milestones with greater consistency.
              </p>
              <p className={styles.problemCardStat}>
                Continued execution support -&gt; better milestone achievement
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.fade} ${styles.profileSection}`}>
        <div className={styles.wrap}>
          <p className={styles.problemEyebrow}>What You&apos;re Investing In</p>
          <h2 className={styles.problemHeading}>A Gorkha Company At Investor-Ready Stage.</h2>
          <p className={styles.problemIntro}>
            When a Gorkha portfolio company reaches fundraise readiness, it has already navigated
            the decisions that break most early-stage companies. Here is what that looks like in
            practice.
          </p>

          <div className={styles.profileGrid}>
            <article className={styles.profileCell}>
              <p className={styles.profileTag}>Market Position</p>
              <h3 className={styles.profileTitle}>Validated, Not Assumed</h3>
              <ul className={styles.profileList}>
                <li>Problem-market fit confirmed through structured validation</li>
                <li>ICP is specific, documented, and defensible</li>
                <li>Competitive positioning is clear and stress-tested</li>
                <li>Unit economics are understood, even if early</li>
              </ul>
            </article>

            <article className={styles.profileCell}>
              <p className={styles.profileTag}>Operational Structure</p>
              <h3 className={styles.profileTitle}>Built, Not Improvised</h3>
              <ul className={styles.profileList}>
                <li>GTM motion is defined and in early execution</li>
                <li>Hiring decisions are disciplined and intentional</li>
                <li>Weekly execution rhythm is in place</li>
                <li>Key metrics are tracked and understood</li>
              </ul>
            </article>

            <article className={styles.profileCell}>
              <p className={styles.profileTag}>Fundraise Readiness</p>
              <h3 className={styles.profileTitle}>Prepared, Not Reactive</h3>
              <ul className={styles.profileList}>
                <li>Narrative is sharp, operator-tested, and consistent</li>
                <li>Investor materials are structured and diligence-ready</li>
                <li>Capital ask is grounded in milestone logic</li>
                <li>Use of funds maps directly to execution milestones</li>
              </ul>
            </article>

            <article className={styles.profileCell}>
              <p className={styles.profileTag}>Founder Quality</p>
              <h3 className={styles.profileTitle}>Tested, Not Theoretical</h3>
              <ul className={styles.profileList}>
                <li>Has navigated real early-stage decisions under pressure</li>
                <li>Open to challenge structurally, not just rhetorically</li>
                <li>Disciplined in execution, not just vision</li>
                <li>Aligned on long-term value creation, not short-term optics</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.deep} ${styles.fade} ${styles.compareSection}`}>
        <div className={styles.wrap}>
          <p className={styles.problemEyebrow}>How We Compare</p>
          <h2 className={styles.problemHeading}>Gorkha vs. Conventional Early-Stage Access.</h2>

          <div className={styles.compareWrap}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th>What Investors Need</th>
                  <th>Typical Accelerator</th>
                  <th>Direct Sourcing</th>
                  <th>Angel Networks</th>
                  <th className={styles.compareHighlightHead}>Gorkha Ventures</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.compareRowLabel}>Structured deal flow</td>
                  <td>Partial - volume driven</td>
                  <td>Low - unfiltered</td>
                  <td>Partial - relationship-dependent</td>
                  <td className={styles.compareHighlight}>High - operator-filtered</td>
                </tr>
                <tr>
                  <td className={styles.compareRowLabel}>Execution risk visibility</td>
                  <td>Low - short program window</td>
                  <td>Low - diligence only</td>
                  <td>Low - network signal only</td>
                  <td className={styles.compareHighlight}>High - 6-18 months embedded</td>
                </tr>
                <tr>
                  <td className={styles.compareRowLabel}>Operational diligence intel</td>
                  <td>Not available</td>
                  <td>Not available</td>
                  <td>Not available</td>
                  <td className={styles.compareHighlight}>Full operator-level insight</td>
                </tr>
                <tr>
                  <td className={styles.compareRowLabel}>Post-investment support</td>
                  <td>Ends with program</td>
                  <td>None typically</td>
                  <td>None typically</td>
                  <td className={styles.compareHighlight}>Continues post-investment</td>
                </tr>
                <tr>
                  <td className={styles.compareRowLabel}>Capital efficiency signal</td>
                  <td>Partial</td>
                  <td>Unknown</td>
                  <td>Varies</td>
                  <td className={styles.compareHighlight}>Structure precedes capital</td>
                </tr>
                <tr>
                  <td className={styles.compareRowLabel}>Selectivity</td>
                  <td>Moderate - cohort model</td>
                  <td>None - open market</td>
                  <td>Low to moderate</td>
                  <td className={styles.compareHighlight}>High - limited partnerships</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.deep} ${styles.fade} ${styles.journeySection}`}>
        <div className={styles.wrap}>
          <p className={styles.problemEyebrow}>Investor Journey</p>
          <h2 className={styles.problemHeading}>How We Work With Investors.</h2>
          <div className={styles.journeyGrid}>
            <article className={styles.journeyCard}>
              <p className={styles.journeyStep}>Step 01</p>
              <h3 className={styles.journeyTitle}>Connect</h3>
              <p className={styles.journeyBody}>
                We begin with a conversation about your thesis, stage focus, and what you&apos;re
                looking for. Fit matters on both sides.
              </p>
            </article>
            <article className={styles.journeyCard}>
              <p className={styles.journeyStep}>Step 02</p>
              <h3 className={styles.journeyTitle}>Access Pipeline</h3>
              <p className={styles.journeyBody}>
                Investors aligned with our model get structured access to Gorkha portfolio
                companies at fundraise-readiness stage, with full operator context provided.
              </p>
            </article>
            <article className={styles.journeyCard}>
              <p className={styles.journeyStep}>Step 03</p>
              <h3 className={styles.journeyTitle}>Diligence With Context</h3>
              <p className={styles.journeyBody}>
                We support diligence with operational intelligence. You know what the company
                looked like at day one and what it built to get here.
              </p>
            </article>
            <article className={styles.journeyCard}>
              <p className={styles.journeyStep}>Step 04</p>
              <h3 className={styles.journeyTitle}>Invest & Stay Connected</h3>
              <p className={styles.journeyBody}>
                Post-investment, Gorkha remains operationally embedded. You have a partner inside
                the portfolio, not just a board seat.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.deep} ${styles.fade} ${styles.engageSection}`}>
        <div className={styles.wrap}>
          <div className={styles.engageGrid}>
            <div>
              <p className={styles.problemEyebrow}>Engagement Options</p>
              <h2 className={styles.problemHeading}>Flexible Access. Aligned Incentives.</h2>
              <p className={styles.problemIntro}>
                We work with investors across engagement types - from deal-by-deal access to
                ongoing pipeline relationships. Every structure is built around mutual conviction,
                not transactional deal flow. We don&apos;t send volume. We send signal.
              </p>
              <button
                type="button"
                className={styles.engageButton}
                onClick={() => setIsModalOpen(true)}
              >
                Connect With Us -&gt;
              </button>
            </div>

            <div className={styles.engageTypes}>
              <article className={styles.engageType}>
                <p className={styles.engageTypeLabel}>Deal-by-Deal Access</p>
                <h3 className={styles.engageTypeTitle}>Curated Introductions</h3>
                <p className={styles.engageTypeBody}>
                  Access specific Gorkha portfolio companies at fundraise-readiness. No commitment
                  required beyond the deal.
                </p>
              </article>
              <article className={styles.engageType}>
                <p className={styles.engageTypeLabel}>Ongoing Investor Relationship</p>
                <h3 className={styles.engageTypeTitle}>Pipeline Partner</h3>
                <p className={styles.engageTypeBody}>
                  First-look access to the full Gorkha pipeline. Ongoing diligence support and
                  portfolio intelligence.
                </p>
              </article>
              <article className={styles.engageType}>
                <p className={styles.engageTypeLabel}>Strategic Alignment</p>
                <h3 className={styles.engageTypeTitle}>Investment Partner</h3>
                <p className={styles.engageTypeBody}>
                  Deep collaboration on thesis alignment, co-investment rights, and joint portfolio
                  value creation.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.deep} ${styles.center}`}>
        <div className={styles.wrap}>
          <div className={styles.finalGlow} />
          <div className={styles.finalCtaInner}>
            <p className={styles.finalEyebrow}>Ready to connect</p>
            <h2 className={styles.finalHeading}>
              Capital is common.
              <br />
              Structured companies <span>are not.</span>
            </h2>
            <p className={styles.finalSub}>
              If you&apos;re looking for early-stage deal flow with genuine execution signal -
              let&apos;s talk about what the investor program includes for you.
            </p>
            <div className={styles.finalButtons}>
              <button
                type="button"
                className={styles.finalPrimary}
                onClick={() => setIsModalOpen(true)}
              >
                Request Investor Briefing -&gt;
              </button>
              <a href="/services/offerings-for-founders" className={styles.finalSecondary}>
                View Founder Program
              </a>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="services-form-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="investor-apply-modal-title"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="services-form-modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="services-form-modal-close"
              aria-label="Close form"
              onClick={() => setIsModalOpen(false)}
            >
              x
            </button>
            <div className="services-form-modal-header">
              <p className="services-form-modal-label">INVESTOR BRIEFING</p>
              <h3 id="investor-apply-modal-title" className="services-form-modal-title">
                Request Investor Briefing
              </h3>
            </div>
            <ContactForm initialFormType="investor" hideSelector onBack={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}
